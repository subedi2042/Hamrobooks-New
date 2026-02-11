"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        <header className="p-4 border-b flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0">
                            <div className="flex items-center gap-3">
                                <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full">
                                    <span className="material-icons">arrow_back_ios_new</span>
                                </button>
                                <h2 className="text-xl font-bold">Shopping Cart</h2>
                            </div>
                            {cart.length > 0 && (
                                <button
                                    onClick={clearCart}
                                    className="text-sm font-semibold text-primary hover:text-orange-600"
                                >
                                    Clear All
                                </button>
                            )}
                        </header>

                        <main className="flex-1 overflow-y-auto p-4 space-y-4">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center">
                                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                                        <span className="material-icons text-slate-400 text-5xl">auto_stories</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2 text-slate-900">Your cart is empty</h2>
                                    <p className="text-slate-500 max-w-[240px] mb-8 text-sm">
                                        It looks like you haven't added any books to your cart yet.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="py-4 border-b border-slate-100 flex gap-4">
                                        <div className="w-20 h-28 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                                            <img
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                src={item.image}
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="font-bold text-base leading-tight text-slate-900">
                                                        {item.title}
                                                    </h3>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-slate-400 hover:text-red-500"
                                                    >
                                                        <span className="material-icons text-sm">delete_outline</span>
                                                    </button>
                                                </div>
                                                <p className="text-xs text-slate-500">{item.author}</p>
                                                <p className="text-slate-900 font-bold mt-1">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center bg-slate-50 rounded-lg p-0.5 border border-slate-200">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-200"
                                                    >
                                                        <span className="material-icons text-sm">remove</span>
                                                    </button>
                                                    <span className="w-7 text-center font-bold text-slate-900 text-sm">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-md bg-primary text-white shadow-sm"
                                                    >
                                                        <span className="material-icons text-sm">add</span>
                                                    </button>
                                                </div>
                                                <p className="text-[10px] font-medium text-green-600">In Stock</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {cart.length > 0 && (
                                <section className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                                    <div className="flex items-center gap-2 mb-2 p-2 bg-green-50 text-green-700 rounded-lg border border-green-100">
                                        <span className="material-icons text-sm">local_shipping</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Free Shipping Throughout USA</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 text-sm">
                                        <span>Subtotal</span>
                                        <span className="text-slate-900 font-medium">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 text-sm">
                                        <span>Estimated Tax</span>
                                        <span className="text-slate-900 font-medium">
                                            ${(totalPrice * 0.08).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="h-px bg-slate-200 my-2"></div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-lg font-bold text-slate-900">Total</span>
                                        <span className="text-2xl font-black text-slate-900">
                                            ${(totalPrice * 1.08).toFixed(2)}
                                        </span>
                                    </div>
                                </section>
                            )}
                        </main>

                        {cart.length > 0 && (
                            <footer className="p-4 border-t border-slate-100 bg-white">
                                <Link
                                    href="/checkout/shipping"
                                    onClick={onClose}
                                    className="w-full bg-primary hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                                >
                                    <span>Checkout</span>
                                    <span className="material-icons">arrow_forward</span>
                                </Link>
                            </footer>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
