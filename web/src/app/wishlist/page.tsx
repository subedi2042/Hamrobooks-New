"use client";

import React from "react";
import BottomNav from "@/components/BottomNav";
import { books } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WishlistPage() {
    const { addToCart } = useCart();

    // Using simplified logic: just show 3 books as "wishlisted" for demo
    const [wishlist, setWishlist] = React.useState(books.slice(0, 3));

    const removeFromWishlist = (id: string) => {
        setWishlist(wishlist.filter(b => b.id !== id));
    };

    return (
        <div className="bg-bg-light min-h-screen flex flex-col items-center pb-32">
            <header className="w-full max-w-md bg-white border-b border-slate-100 sticky top-0 z-40">
                <div className="px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="p-1 -ml-1">
                        <span className="material-icons text-primary text-2xl">chevron_left</span>
                    </Link>
                    <h1 className="text-lg font-black tracking-tight">My Wishlist</h1>
                    <button className="text-primary text-sm font-black uppercase tracking-widest">Edit</button>
                </div>
            </header>

            <main className="w-full max-w-md flex-1 px-4 py-6">
                {wishlist.length > 0 ? (
                    <div className="space-y-4">
                        <AnimatePresence>
                            {wishlist.map((book) => (
                                <motion.div
                                    key={book.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-slate-50 relative group"
                                >
                                    <div className="w-24 h-36 flex-shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                                        <img alt={book.title} className="w-full h-full object-cover" src={book.image} />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between py-1">
                                        <div className="relative">
                                            <button
                                                onClick={() => removeFromWishlist(book.id)}
                                                className="absolute -top-1 -right-1 p-2 text-slate-300 hover:text-red-500 transition-colors"
                                            >
                                                <span className="material-icons text-lg">delete_outline</span>
                                            </button>
                                            <h2 className="text-base font-bold leading-tight pr-8 text-slate-900 line-clamp-2">
                                                {book.title}
                                            </h2>
                                            <p className="text-xs text-slate-500 font-medium mt-1">{book.author}</p>
                                            <p className="text-primary font-black text-lg mt-2">${book.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            onClick={() => addToCart(book)}
                                            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                                        >
                                            <span className="material-icons text-sm">shopping_cart</span>
                                            Move to Cart
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center px-10 py-24 text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-primary text-5xl">favorite_border</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-slate-900">Your wishlist is empty</h2>
                        <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">
                            Start adding your favorite Nepali books to save them for later!
                        </p>
                        <Link
                            href="/"
                            className="w-full max-w-xs bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            Browse Books
                        </Link>
                    </div>
                )}

                {/* Recommendations */}
                <div className="mt-12 px-2">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="font-bold text-lg text-slate-900">Recommended for You</h3>
                        <Link href="/" className="text-primary text-xs font-black uppercase tracking-widest">View All</Link>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-6">
                        {books.slice(3, 8).map((book) => (
                            <div key={book.id} className="min-w-[130px] space-y-2">
                                <div className="h-44 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 relative group">
                                    <img alt={book.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" src={book.image} />
                                    <button
                                        onClick={() => addToCart(book)}
                                        className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm text-primary rounded-full shadow-lg flex items-center justify-center active:scale-90"
                                    >
                                        <span className="material-icons text-lg">add</span>
                                    </button>
                                </div>
                                <p className="text-[11px] font-bold text-slate-800 line-clamp-1">{book.title}</p>
                                <p className="text-xs text-primary font-black">${book.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
