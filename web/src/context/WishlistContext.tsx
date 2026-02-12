"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Book } from "@/data/books";

interface WishlistContextType {
    wishlist: Book[];
    addToWishlist: (book: Book) => void;
    removeFromWishlist: (bookId: string) => void;
    isInWishlist: (bookId: string) => boolean;
    toggleWishlist: (book: Book) => void;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [wishlist, setWishlist] = useState<Book[]>([]);

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem("hamrobooks-wishlist");
        if (savedWishlist) {
            try {
                setWishlist(JSON.parse(savedWishlist));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
    }, []);

    // Save wishlist to localStorage on change
    useEffect(() => {
        localStorage.setItem("hamrobooks-wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (book: Book) => {
        setWishlist((prev) => {
            if (prev.find((item) => item.id === book.id)) return prev;
            return [...prev, book];
        });
    };

    const removeFromWishlist = (bookId: string) => {
        setWishlist((prev) => prev.filter((item) => item.id !== bookId));
    };

    const isInWishlist = (bookId: string) => {
        return wishlist.some((item) => item.id === bookId);
    };

    const toggleWishlist = (book: Book) => {
        if (isInWishlist(book.id)) {
            removeFromWishlist(book.id);
        } else {
            addToWishlist(book);
        }
    };

    const wishlistCount = wishlist.length;

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                toggleWishlist,
                wishlistCount,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}
