"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    const items = [
        { label: "Home", icon: "home", href: "/" },
        { label: "Discover", icon: "explore", href: "/discover" },
        { label: "Reviews", icon: "rate_review", href: "/reviews" },
        { label: "Wishlist", icon: "favorite", href: "/wishlist" },
        { label: "Account", icon: "account_circle", href: "/account" },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl border-t border-slate-100 pb-8 pt-2 z-50 md:hidden">
            <div className="max-w-md mx-auto flex justify-around items-center">
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary" : "text-slate-400 hover:text-slate-600"
                                }`}
                        >
                            <span className="material-icons text-[26px]">{item.icon}</span>
                            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
