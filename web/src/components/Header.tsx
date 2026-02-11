"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

interface HeaderProps {
    onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
    const { totalItems } = useCart();
    const [logoError, setLogoError] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
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

                        {/* Search & Actions Row */}
                        <div className="flex-1 flex items-center gap-2 md:gap-6">
                            {/* Search */}
                            <div className="relative flex-1">
                                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base md:text-xl">
                                    search
                                </span>
                                <input
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 md:py-3 pl-9 md:pl-12 pr-3 text-xs md:text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary focus:outline-none placeholder:text-slate-400 transition-all shadow-inner"
                                    placeholder="Search Nepali books..."
                                    type="text"
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                            </div>

                            {/* Cart Button */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 md:p-3 rounded-xl bg-slate-50 text-slate-dark hover:bg-white hover:shadow-md transition-all active:scale-95 border border-slate-100 group"
                            >
                                <span className="material-icons text-xl md:text-2xl group-hover:text-primary transition-colors">shopping_bag</span>
                                {mounted && totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-primary text-white text-[9px] md:text-[11px] flex items-center justify-center font-black rounded-full ring-2 ring-white shadow-lg">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
