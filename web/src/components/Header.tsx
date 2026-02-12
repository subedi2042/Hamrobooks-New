"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartDrawer from "./CartDrawer";

interface HeaderProps {
    onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
    const { totalItems } = useCart();
    const { wishlistCount } = useWishlist();
    const [logoError, setLogoError] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="h-8 w-full bg-[#1a1a5a] flex items-center justify-center px-4 sticky top-0 z-50">
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] text-white whitespace-nowrap">
                    FREE SHIPPING THROUGHOUT USA • EST. 2024
                </span>
            </div>
            <header className="sticky top-8 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
                    <div className="flex items-center justify-between gap-3 md:gap-8">
                        {/* Menu Toggle (Mobile) */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-[#1a1a5a] hover:bg-slate-50 rounded-xl transition-colors"
                        >
                            <span className="material-icons">menu</span>
                        </button>

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            {!logoError ? (
                                <img
                                    src="/images/Hamrobooks-logo.png"
                                    alt="HamroBooks Logo"
                                    className="h-10 md:h-14 w-auto object-contain transition-all hover:scale-105 cursor-pointer"
                                    onClick={() => window.location.href = '/'}
                                    onError={() => setLogoError(true)}
                                />
                            ) : (
                                <div
                                    className="flex flex-col cursor-pointer"
                                    onClick={() => window.location.href = '/'}
                                >
                                    <span className="text-xl md:text-2xl font-black tracking-tighter text-[#1a1a5a]">
                                        Hamro<span className="text-primary">Books</span>
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {[
                                { name: "Shop", href: "/" },
                                { name: "Discover", href: "/discover" },
                                { name: "Success Stories", href: "/authors-success" },
                                { name: "Reviews", href: "/reviews" }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1a1a5a] hover:text-primary transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Search & Actions Row */}
                        <div className="flex-1 flex items-center justify-end gap-2 md:gap-6 max-w-2xl">
                            {/* Search */}
                            <div className="relative flex-1 group">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base md:text-xl group-focus-within:text-primary transition-colors">
                                    search
                                </span>
                                <input
                                    className="w-full bg-slate-50 border border-slate-100 rounded-full py-2.5 md:py-3.5 pl-11 md:pl-14 pr-5 text-xs md:text-sm focus:ring-8 focus:ring-primary/5 focus:border-primary focus:bg-white focus:outline-none placeholder:text-slate-400 transition-all shadow-inner"
                                    placeholder="Search by book or author..."
                                    type="text"
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Account (Desktop) */}
                                <Link
                                    href="/account"
                                    className="hidden md:flex items-center justify-center p-3 rounded-full bg-slate-50 text-slate-dark hover:bg-white hover:shadow-md transition-all active:scale-95 border border-slate-100 group"
                                >
                                    <span className="material-icons text-xl md:text-2xl group-hover:text-primary transition-colors">person_outline</span>
                                </Link>

                                {/* Wishlist Button */}
                                <Link
                                    href="/wishlist"
                                    className="relative p-3 rounded-full bg-slate-50 text-slate-dark hover:bg-white hover:shadow-md transition-all active:scale-95 border border-slate-100 group"
                                >
                                    <span className="material-icons text-xl md:text-2xl group-hover:text-primary transition-colors">favorite_border</span>
                                    {mounted && wishlistCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[9px] flex items-center justify-center font-black rounded-full ring-2 ring-white shadow-lg animate-in zoom-in">
                                            {wishlistCount}
                                        </span>
                                    )}
                                </Link>

                                {/* Cart Button */}
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="relative p-3 rounded-full bg-slate-50 text-slate-dark hover:bg-white hover:shadow-md transition-all active:scale-95 border border-slate-100 group"
                                >
                                    <span className="material-icons text-xl md:text-2xl group-hover:text-primary transition-colors">shopping_bag</span>
                                    {mounted && totalItems > 0 && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-primary text-white text-[9px] md:text-[11px] flex items-center justify-center font-black rounded-full ring-2 ring-white shadow-lg animate-in zoom-in">
                                            {totalItems}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[101] shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <span className="text-2xl font-black text-[#1a1a5a]">
                                    Hamro<span className="text-primary">Books</span>
                                </span>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-50 rounded-full">
                                    <span className="material-icons">close</span>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {[
                                    { name: "Shop Home", href: "/", icon: "home" },
                                    { name: "Discover Books", href: "/discover", icon: "explore" },
                                    { name: "Success Stories", href: "/authors-success", icon: "auto_stories" },
                                    { name: "Reader Reviews", href: "/reviews", icon: "rate_review" },
                                    { name: "Your Wishlist", href: "/wishlist", icon: "favorite_border" },
                                    { name: "Your Account", href: "/account", icon: "person" }
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-4 text-lg font-black text-[#1a1a5a] hover:text-primary transition-colors py-2"
                                    >
                                        <span className="material-icons text-primary">{link.icon}</span>
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8 border-t border-slate-100">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Support & More</p>
                                <div className="space-y-4">
                                    <Link href="/help" className="block text-sm font-bold text-slate-600">Help Center</Link>
                                    <Link href="/shipping" className="block text-sm font-bold text-slate-600">Shipping Policy</Link>
                                    <Link href="/contact" className="block text-sm font-bold text-slate-600">Contact Us</Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
