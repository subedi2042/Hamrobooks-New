"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WishlistPage() {
    const { addToCart } = useCart();
    const { wishlist, removeFromWishlist } = useWishlist();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="bg-bg-light min-h-screen flex flex-col">
            <Header onSearch={setSearchQuery} />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                            <span className="material-icons text-sm">favorite</span>
                            Personal Collection
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-[#1a1a5a] tracking-tight">My Wishlist</h1>
                        <p className="text-slate-500 font-medium max-w-lg">
                            Your curated selection of Nepali literature. Save books you love and revisit them anytime.
                        </p>
                    </div>
                </div>

                {wishlist.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                        <AnimatePresence>
                            {wishlist.map((book) => (
                                <motion.div
                                    key={book.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="relative"
                                >
                                    <BookCard book={book} />
                                    {/* Additional overlay for wishlist page specifically if needed, 
                                        but BookCard already has a remove favorite icon handle now.
                                        Actually, let's add a "Move to Cart" bigger button below the card on this page only?
                                        Card already has "QUICK ADD" on hover.
                                     */}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 md:py-32 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm px-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                            <span className="material-icons text-slate-200 text-5xl md:text-7xl">favorite_border</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#1a1a5a] mb-4">Your wishlist is empty</h2>
                        <p className="text-slate-500 font-medium text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                            Seems like you haven't saved any books yet. Explore our collection of authentic Nepali literature!
                        </p>
                        <Link
                            href="/"
                            className="bg-primary hover:bg-orange-600 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase tracking-widest text-sm active:scale-95"
                        >
                            <span className="material-icons">explore</span>
                            Start Exploring
                        </Link>
                    </div>
                )}

                {/* Recommendations Section - Always visible to keep page lively */}
                <section className="mt-20 md:mt-32">
                    <div className="flex items-center justify-between mb-8">
                        <div className="space-y-1">
                            <h3 className="text-xl md:text-2xl font-black text-[#1a1a5a]">Recommended for You</h3>
                            <p className="text-sm text-slate-400 font-medium">Based on popular choices from our community</p>
                        </div>
                        <Link href="/discover" className="text-primary text-xs font-black uppercase tracking-widest hover:underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {books.slice(3, 7).map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />

            {/* Mobile Bottom Nav */}
            <div className="md:hidden">
                <BottomNav />
            </div>
        </div>
    );
}
