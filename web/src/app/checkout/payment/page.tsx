"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { usePromos } from "@/context/PromoContext";
import { useAuth } from "@/context/AuthContext";
import CheckoutSteps from "@/components/CheckoutSteps";
import { motion } from "framer-motion";
import { collection, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PaymentPage() {
    const router = useRouter();
    const { cart, paymentInfo, setPaymentInfo, totalPrice, clearCart, shippingInfo, appliedDiscount, setAppliedDiscount } = useCart();
    const { promoCodes } = usePromos();
    const { user } = useAuth();

    const [promoInput, setPromoInput] = useState("");
    const [promoError, setPromoError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleApplyPromo = () => {
        setPromoError("");
        const promo = promoCodes.find(p => p.code === promoInput.toUpperCase());

        if (!promo) {
            setPromoError("Invalid discount code.");
            return;
        }

        if (promo.status === "Expired") {
            setPromoError("This code has expired.");
            return;
        }

        // Check scheduling
        const now = new Date();
        if (promo.startDate && new Date(promo.startDate) > now) {
            setPromoError("This promotion has not started yet.");
            return;
        }
        if (promo.endDate && new Date(promo.endDate) < now) {
            setPromoError("This promotion has ended.");
            return;
        }

        // Calculate discount
        let discountAmount = 0;
        if (promo.discount.includes("%")) {
            const percentage = parseFloat(promo.discount.replace("%", ""));
            discountAmount = (totalPrice * percentage) / 100;
        } else {
            discountAmount = parseFloat(promo.discount.replace("$", ""));
        }

        setAppliedDiscount({ code: promo.code, amount: discountAmount });
        setPromoInput("");
    };

    const handlePlaceOrder = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();

        setIsSubmitting(true);

        // Simulate a small delay for premium feel
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Generate a mock order ID
        const mockOrderId = `HB-${Math.floor(100000 + Math.random() * 900000)}`;

        // Clear state and proceed
        setAppliedDiscount(null);
        router.push(`/checkout/success?orderId=${mockOrderId}`);
        setIsSubmitting(false);
    };

    const taxAmount = totalPrice * 0.08;
    const discountAmount = appliedDiscount?.amount || 0;
    const finalPrice = totalPrice + taxAmount - discountAmount;

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col items-center">
            <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="p-2 hover:bg-primary/10 rounded-xl transition-colors flex items-center gap-2 group"
                    >
                        <span className="material-icons text-primary text-xl group-hover:-translate-x-1 transition-transform">arrow_back_ios_new</span>
                        <span className="text-sm font-bold text-slate-600 hidden md:block">Back to Shipping</span>
                    </button>
                    <h1 className="text-lg md:text-xl font-black text-[#1a1a5a] tracking-tight">Secure Payment</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="w-full max-w-7xl flex-1 px-4 md:px-8 mt-8">
                <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-12">
                        <CheckoutSteps currentStep={2} />
                    </div>

                    <div className="lg:col-span-7 space-y-8 pb-32">
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-6 md:p-10">
                            <h2 className="text-xl md:text-2xl font-black text-[#1a1a5a] mb-6 tracking-tighter">Choose how you'd like to pay</h2>

                            <div className="space-y-6">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Express Checkout</h2>

                                <div className="space-y-4">
                                    <button type="button" className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white opacity-50 cursor-not-allowed">
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
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Cardholder Name</label>
                                                <input required name="cardHolder" value={paymentInfo.cardHolder} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm font-medium" placeholder="Full Name on Card" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Card Number</label>
                                                <input required name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm font-medium" placeholder="0000 0000 0000 0000" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <input required name="expiryDate" value={paymentInfo.expiryDate} onChange={handleChange} className="bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm font-medium text-center" placeholder="MM / YY" />
                                                <input required name="cvv" type="password" value={paymentInfo.cvv} onChange={handleChange} className="bg-white border border-slate-200 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary text-sm font-medium text-center" placeholder="CVV" />
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
                            </div>
                        </div>
                    </div>

                    <aside className="hidden lg:block lg:col-span-5 relative">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                                <h3 className="text-xl font-black text-[#1a1a5a] mb-6 tracking-tight">Payment Summary</h3>

                                {/* Discount Code Input */}
                                <div className="mb-6 space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Discount Code</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={promoInput}
                                            onChange={(e) => setPromoInput(e.target.value)}
                                            placeholder="Enter code"
                                            className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-wider outline-none focus:border-primary"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleApplyPromo}
                                            className="bg-[#1a1a5a] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {promoError && <p className="text-[10px] font-bold text-red-500 ml-1">{promoError}</p>}
                                    {appliedDiscount && (
                                        <div className="flex items-center justify-between bg-green-50 p-3 rounded-xl border border-green-100">
                                            <div className="flex items-center gap-2">
                                                <span className="material-icons text-green-600 text-sm">sell</span>
                                                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{appliedDiscount.code} applied</span>
                                            </div>
                                            <button type="button" onClick={() => setAppliedDiscount(null)} className="material-icons text-green-400 text-sm hover:text-green-600">close</button>
                                        </div>
                                    )}
                                </div>

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
                                        <span>${taxAmount.toFixed(2)}</span>
                                    </div>
                                    {appliedDiscount && (
                                        <div className="flex justify-between text-green-600 font-bold">
                                            <span>Discount ({appliedDiscount.code})</span>
                                            <span>-${appliedDiscount.amount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                                        <span className="text-lg font-black text-[#1a1a5a]">Amount Due</span>
                                        <span className="text-3xl font-black text-primary tracking-tighter">${finalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-[#e68a00] text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 group"
                                >
                                    <span className="uppercase tracking-widest text-sm">{isSubmitting ? "Processing..." : "Confirm Purchase"}</span>
                                    <span className="material-icons group-hover:translate-x-1 transition-transform">lock</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-6 bg-white/95 backdrop-blur-md border-t border-slate-100 z-10 flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full max-w-md bg-primary hover:bg-[#e68a00] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/30 transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                            <span className="uppercase tracking-widest text-sm">{isSubmitting ? "Processing..." : `Place Order • $${finalPrice.toFixed(2)}`}</span>
                            <span className="material-icons">lock</span>
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
