"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OrderSuccessPage() {
    const router = useRouter();
    const { cart, totalPrice, clearCart, shippingInfo } = useCart();

    // Clone current state for display before we clear it
    const [orderItems] = React.useState([...cart]);
    const [orderTotal] = React.useState(totalPrice * 1.08);
    const [orderAddress] = React.useState(shippingInfo);

    useEffect(() => {
        // Clear cart when landing on success page
        if (cart.length > 0) {
            clearCart();
        }
    }, []);

    const orderNumber = `TH-${Math.floor(Math.random() * 9000000 + 1000000)}`;

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col items-center pb-24">
            <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 mb-8">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                    <span className="text-2xl font-black text-[#1a1a5a]">
                        Hamro<span className="text-primary">Books</span>
                    </span>
                </div>
            </header>

            <main className="w-full max-w-5xl px-4 md:px-8">
                {/* Success Header */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                        className="w-24 h-24 bg-green-500 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-green-200"
                    >
                        <span className="material-icons text-white text-5xl">check</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-[#1a1a5a] mb-4 tracking-tighter"
                    >
                        Order Confirmed!
                    </motion.h1>
                    <p className="text-slate-500 text-lg font-medium max-w-md">
                        Your authentic Nepali literature is on its way. We've sent a confirmation email to your inbox.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Order Info & Items */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Order ID Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 flex flex-wrap gap-8 justify-between items-center"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-primary/10 rounded-2xl">
                                    <span className="material-icons text-primary">receipt_long</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Confirmation No.</p>
                                    <p className="text-2xl font-black text-[#1a1a5a] tracking-tight">{orderNumber}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-green-50 rounded-2xl">
                                    <span className="material-icons text-green-600">event_available</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Est. Delivery</p>
                                    <p className="text-lg font-black text-slate-700 tracking-tight">Feb 15 - Feb 18</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Items Summary */}
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8">
                            <h2 className="text-lg font-black text-[#1a1a5a] mb-8 flex items-center gap-3">
                                <span className="material-icons text-slate-400">shopping_bag</span>
                                Your Package ({orderItems.length} {orderItems.length === 1 ? 'item' : 'items'})
                            </h2>
                            <div className="divide-y divide-slate-50">
                                {orderItems.map((item) => (
                                    <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex gap-6">
                                        <div className="w-20 h-28 flex-shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                                            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-black text-[#1a1a5a] leading-tight">{item.title}</h3>
                                                <span className="font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                            <p className="text-sm text-slate-400 font-bold italic mb-3">{item.author}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Address & Actions */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Shipping To */}
                        <div className="bg-[#1a1a5a] text-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Shipping Destination</h3>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-white/10 rounded-xl">
                                    <span className="material-icons text-white">location_on</span>
                                </div>
                                <div className="text-sm font-medium leading-relaxed opacity-90">
                                    <p className="font-black text-lg mb-1">{orderAddress.fullName || "Reader"}</p>
                                    <p>{orderAddress.address}</p>
                                    <p>{orderAddress.city}, {orderAddress.state} {orderAddress.zipCode}</p>
                                    <p>{orderAddress.country === "Canada" ? "Canada" : "United States"}</p>
                                </div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase">Service</span>
                                <span className="text-xs font-bold">Priority Plus</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 space-y-4">
                            <button className="w-full bg-primary hover:bg-[#e68a00] text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                                <span className="uppercase tracking-widest text-sm">Track Package</span>
                                <span className="material-icons">local_shipping</span>
                            </button>
                            <Link
                                href="/"
                                className="w-full border-2 border-slate-100 hover:border-primary hover:text-primary text-slate-500 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 group"
                            >
                                <span className="uppercase tracking-widest text-sm">Continue Shopping</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Support Card */}
                        <div className="text-center p-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                Questions about your order? Our support team is here for you 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
