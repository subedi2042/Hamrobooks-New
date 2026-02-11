"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CheckoutSteps from "@/components/CheckoutSteps";
import { motion } from "framer-motion";

export default function PaymentPage() {
    const router = useRouter();
    const { paymentInfo, setPaymentInfo, totalPrice, clearCart } = useCart();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we'd process payment here
        router.push("/checkout/success");
    };

    const finalPrice = totalPrice * 1.08;

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col items-center">
            <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-primary/10 rounded-xl transition-colors flex items-center gap-2 group"
                    >
                        <span className="material-icons text-primary text-xl group-hover:-translate-x-1 transition-transform">arrow_back_ios_new</span>
                        <span className="text-sm font-bold text-slate-600 hidden md:block">Back to Shipping</span>
                    </button>
                    <h1 className="text-lg md:text-xl font-black text-[#1a1a5a] tracking-tight text-slate-800">Secure Payment</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="w-full max-w-7xl flex-1 px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-12">
                    <CheckoutSteps currentStep={2} />
                </div>

                <div className="lg:col-span-7 space-y-8 pb-32">
                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-6 md:p-10">
                        <h2 className="text-xl md:text-2xl font-black text-[#1a1a5a] mb-6 tracking-tighter">Choose how you'd like to pay</h2>

                        <div className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Express Checkout</h2>

                            {/* Payment Method Options (Simplified for demo) */}
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white">
                                    <div className="flex items-center gap-3">
                                        <span className="material-icons text-slate-400">payments</span>
                                        <span className="font-bold text-slate-700">Apple Pay</span>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
                                </button>

                                <div className="space-y-4">
                                    <div className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5">
                                        <div className="flex items-center gap-3 text-primary">
                                            <span className="material-icons">credit_card</span>
                                            <span className="font-bold">Credit or Debit Card</span>
                                        </div>
                                        <span className="material-icons text-primary">radio_button_checked</span>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-200"
                                    >
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                                                Cardholder Name
                                            </label>
                                            <input
                                                required
                                                name="cardHolder"
                                                value={paymentInfo.cardHolder}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm text-slate-900 placeholder-slate-400 outline-none"
                                                placeholder="e.g. Biraj Mahato"
                                                type="text"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                                                Card Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    required
                                                    name="cardNumber"
                                                    value={paymentInfo.cardNumber}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm pr-12 text-slate-900 placeholder-slate-400 outline-none"
                                                    placeholder="xxxx xxxx xxxx xxxx"
                                                    type="text"
                                                />
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 items-center opacity-50">
                                                    <span className="material-icons text-slate-400 text-lg">credit_card</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                                                    Expiry Date
                                                </label>
                                                <input
                                                    required
                                                    name="expiryDate"
                                                    value={paymentInfo.expiryDate}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm text-center text-slate-900 outline-none"
                                                    placeholder="MM/YY"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
                                                    CVV
                                                </label>
                                                <input
                                                    required
                                                    name="cvv"
                                                    value={paymentInfo.cvv}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm text-center text-slate-900 outline-none"
                                                    placeholder="***"
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col items-center gap-4 py-8 border-t border-slate-50">
                            <div className="flex items-center gap-8 text-slate-300">
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-xl text-green-500">verified_user</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest">256-bit SSL</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-icons text-xl text-blue-500">shield</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest">PCI Level 1</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                                Your payment details are encrypted and never stored on our servers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Summary for Desktop */}
                <aside className="hidden lg:block lg:col-span-5 relative">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                            <h3 className="text-xl font-black text-[#1a1a5a] mb-6 tracking-tight">Payment Summary</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-primary font-bold italic">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Taxes (8%)</span>
                                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                                    <span className="text-lg font-black text-[#1a1a5a]">Amount Due</span>
                                    <span className="text-3xl font-black text-primary tracking-tighter">${finalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                className="w-full bg-primary hover:bg-[#e68a00] text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                            >
                                <span className="uppercase tracking-widest text-sm">Confirm Purchase</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">lock</span>
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">We Accept</p>
                            <div className="flex justify-center gap-4 opacity-40">
                                <span className="material-icons">credit_card</span>
                                <span className="material-icons">account_balance_wallet</span>
                                <span className="material-icons">payments</span>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="lg:hidden fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-md border-t border-slate-100 z-10 flex justify-center">
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full max-w-md bg-primary hover:bg-[#e68a00] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/30 transition-all active:scale-[0.98]"
                    >
                        <span className="uppercase tracking-widest text-sm">Place Order • ${finalPrice.toFixed(2)}</span>
                        <span className="material-icons">lock</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
