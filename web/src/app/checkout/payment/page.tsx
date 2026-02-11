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
        <div className="bg-slate-50 min-h-screen flex items-center justify-center p-0 md:p-4">
            <div className="w-full max-w-[430px] min-h-screen bg-white relative flex flex-col shadow-2xl overflow-x-hidden">
                <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
                    <button
                        onClick={() => router.back()}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                        <span className="material-icons text-xl">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-lg font-bold tracking-tight text-slate-800">Payment Method</h1>
                    <div className="w-10"></div>
                </header>

                <CheckoutSteps currentStep={2} />

                <main className="flex-1 overflow-y-auto px-6 pb-40 mt-4">
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 mb-8">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
                                    <span className="material-icons text-sm">shopping_basket</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Order Total</p>
                                    <p className="text-lg font-bold text-slate-900">
                                        ${finalPrice.toFixed(2)} <span className="text-xs font-normal text-slate-500 ml-1">USD</span>
                                    </p>
                                </div>
                            </div>
                            <span className="material-icons text-slate-300">expand_more</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Select Method</h2>

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

                    <div className="mt-10 mb-6 flex flex-col items-center gap-4 py-8">
                        <div className="flex items-center gap-6 text-slate-300">
                            <div className="flex items-center gap-1">
                                <span className="material-icons text-base">verified_user</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest">Secure SSL</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="material-icons text-base">shield</span>
                                <span className="text-[9px] font-bold uppercase tracking-widest">PCI Compliant</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                            <span className="material-icons text-xs">lock</span>
                            Your transaction is 256-bit encrypted.
                        </p>
                    </div>
                </main>

                <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-10 z-10 flex justify-center">
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full max-w-md bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
                    >
                        <span>Place Order</span>
                        <span className="material-icons">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
