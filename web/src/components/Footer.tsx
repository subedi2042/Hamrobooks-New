"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a5a] text-white pt-20 pb-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter">
                                Hamro<span className="text-primary">Books</span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                                Authentic Nepali Literature
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">
                            Bringing the heart of Nepal to the USA. We curate, stock, and ship the finest Nepali books directly from our US-based warehouse.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-icons text-lg">{social === 'twitter' ? 'X' : social}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Shop & Explore</h4>
                        <ul className="space-y-4">
                            {['Best Sellers', 'New Arrivals', 'Coming Soon', 'Genres', 'Gift Cards'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Customer Care</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Shipping Policy', 'Returns & Refunds', 'Contact Us', 'Help Center'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Stay Connected</h4>
                        <p className="text-sm text-slate-400 font-medium mb-6">Join our newsletter for updates on new stock and exclusive promotions.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-primary transition-colors"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        © 2024 HamroBooks. All rights reserved. Shipped with ❤️ from USA.
                    </p>
                    <div className="flex gap-8">
                        {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                            <span key={method} className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{method}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
