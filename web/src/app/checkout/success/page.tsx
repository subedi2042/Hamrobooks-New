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
        <div className="bg-slate-50 min-h-screen flex justify-center p-0 md:p-4">
            <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col relative overflow-x-hidden">
                <main className="flex-1 overflow-y-auto pb-32">
                    {/* Success Header */}
                    <div className="flex flex-col items-center pt-12 pb-10 px-6 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 200 }}
                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                        >
                            <span className="material-icons text-green-600 text-5xl">check_circle</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-slate-900 mb-2"
                        >
                            Thank you for your order!
                        </motion.h1>
                        <p className="text-slate-500 text-sm font-medium">
                            We've received your request and we're getting it ready for shipment.
                        </p>
                    </div>

                    {/* Order Basic Info Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mx-6 p-5 bg-primary/5 rounded-xl border border-primary/10 mb-8"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-primary">
                                    Order Number
                                </p>
                                <p className="text-lg font-bold text-slate-900">{orderNumber}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase tracking-widest font-bold text-primary">
                                    Est. Arrival
                                </p>
                                <p className="text-sm font-bold text-slate-900">3 - 5 business days</p>
                            </div>
                        </div>
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                            <span className="material-icons text-sm mr-1.5">local_shipping</span>
                            <span>Shipping via USPS Priority Mail (USA)</span>
                        </div>
                    </motion.div>

                    {/* Item Summary */}
                    <div className="px-6 mb-8">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex justify-between items-center">
                            <span>Order Summary</span>
                            <span className="text-xs font-normal lowercase">({orderItems.length} items)</span>
                        </h2>
                        <div className="space-y-4">
                            {orderItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-20 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                                        <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-sm font-bold leading-tight text-slate-900 mb-0.5">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium mb-1">{item.author}</p>
                                        <div className="flex justify-between items-center w-full">
                                            <span className="text-xs font-bold text-primary">Qty: {item.quantity}</span>
                                            <span className="text-sm font-bold text-slate-900 ml-4">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipping Information */}
                    <div className="px-6 mb-8">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                                Shipping Address
                            </h3>
                            <div className="flex items-start gap-3">
                                <span className="material-icons text-primary text-lg">location_on</span>
                                <div className="text-sm text-slate-900 font-medium leading-relaxed">
                                    <p className="font-bold">{orderAddress.fullName || "Valued Customer"}</p>
                                    <p>{orderAddress.address || "123 Library Lane"}</p>
                                    <p>
                                        {orderAddress.city || "Bookshelf City"}, {orderAddress.state || "NY"}{" "}
                                        {orderAddress.zipCode || "10001"}
                                    </p>
                                    <p>United States</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Calculation */}
                    <div className="px-6 space-y-2 mb-10">
                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>Subtotal</span>
                            <span>${(orderTotal / 1.08).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>Shipping (USA Flat Rate)</span>
                            <span className="text-green-600 font-bold">FREE</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-500 font-medium">
                            <span>Estimated Tax (8%)</span>
                            <span>${(orderTotal - orderTotal / 1.08).toFixed(2)}</span>
                        </div>
                        <div className="pt-2 border-t border-dashed border-slate-200 flex justify-between items-center">
                            <span className="font-bold text-lg text-slate-900">Total</span>
                            <span className="font-bold text-xl text-primary">${orderTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </main>

                {/* Fixed Footer Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-10">
                    <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mb-4">
                        Track My Order
                    </button>
                    <div className="text-center">
                        <Link href="/" className="text-sm font-bold text-primary hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
