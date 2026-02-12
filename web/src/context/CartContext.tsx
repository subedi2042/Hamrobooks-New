"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Book } from "@/data/books";
import { db } from "@/lib/firebase";
import { doc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

interface CartItem extends Book {
    quantity: number;
}

interface ShippingInfo {
    fullName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface PaymentInfo {
    cardHolder: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (book: Book) => void;
    removeFromCart: (bookId: string) => void;
    updateQuantity: (bookId: string, delta: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    shippingInfo: ShippingInfo;
    setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfo>>;
    paymentInfo: PaymentInfo;
    setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
    appliedDiscount: { code: string; amount: number } | null;
    setAppliedDiscount: React.Dispatch<React.SetStateAction<{ code: string; amount: number } | null>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "USA",
    });
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });
    const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; amount: number } | null>(null);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("hamrobooks-cart");
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage on change and sync to Firestore for abandoned cart tracking
    useEffect(() => {
        localStorage.setItem("hamrobooks-cart", JSON.stringify(cart));

        const syncCartToFirestore = async () => {
            let sessionId = localStorage.getItem("hamrobooks-session-id");
            if (!sessionId) {
                sessionId = `sess_${Math.random().toString(36).substr(2, 9)}`;
                localStorage.setItem("hamrobooks-session-id", sessionId);
            }

            if (cart.length > 0) {
                try {
                    await setDoc(doc(db, "abandoned_carts", sessionId), {
                        cart: cart.map(item => ({ id: item.id, title: item.title, qty: item.quantity, price: item.price })),
                        lastUpdated: serverTimestamp(),
                        totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
                        status: 'active'
                    }, { merge: true });
                } catch (error) {
                    console.error("Failed to sync cart to Firestore:", error);
                }
            } else {
                // If cart is empty (e.g. after successful checkout), remove abandoned cart record
                try {
                    await deleteDoc(doc(db, "abandoned_carts", sessionId));
                } catch (error) {
                    console.error("Failed to delete abandoned cart record:", error);
                }
            }
        };

        const timeoutId = setTimeout(syncCartToFirestore, 2000); // Debounce sync
        return () => clearTimeout(timeoutId);
    }, [cart]);

    const addToCart = (book: Book) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === book.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (bookId: string) => {
        setCart((prev) => prev.filter((item) => item.id !== bookId));
    };

    const updateQuantity = (bookId: string, delta: number) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === bookId) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQty };
                }
                return item;
            })
        );
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                shippingInfo,
                setShippingInfo,
                paymentInfo,
                setPaymentInfo,
                appliedDiscount,
                setAppliedDiscount
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
