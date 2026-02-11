"use client";

import React, { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AccountPage() {
    const { user, customerData, logout, loading } = useAuth();
    const router = useRouter();
    const [orders, setOrders] = useState<any[]>([]);
    const [showOrders, setShowOrders] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (user) {
            const q = query(
                collection(db, "orders"),
                where("customerId", "==", user.uid),
                orderBy("createdAt", "desc")
            );
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const ordersData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrders(ordersData);
            });
            return () => unsubscribe();
        }
    }, [user]);

    if (loading || !user) return (
        <div className="min-h-screen flex items-center justify-center bg-bg-light">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    const menuGroups = [
        {
            title: "Activity",
            items: [
                { label: "My Orders", icon: "shopping_bag", color: "text-primary", action: () => setShowOrders(true), badge: orders.length > 0 ? orders.length : undefined },
                { label: "My Reviews", icon: "rate_review", color: "text-blue-500" },
                { label: "Reading History", icon: "history", color: "text-green-500" },
            ],
        },
        {
            title: "Account Settings",
            items: [
                { label: "Personal Info", icon: "person", color: "text-slate-600" },
                { label: "Address Book", icon: "location_on", color: "text-red-500" },
                { label: "Payment Methods", icon: "payments", color: "text-orange-500" },
            ],
        },
        {
            title: "Support",
            items: [
                { label: "Help & Support", icon: "help_center", color: "text-purple-500" },
                { label: "Notification Settings", icon: "notifications", color: "text-yellow-500" },
            ],
        },
    ];

    return (
        <div className="bg-bg-light min-h-screen flex flex-col items-center pb-32">
            <header className="w-full max-w-md px-6 py-6 flex items-center justify-between bg-white border-b border-slate-50 sticky top-0 z-20">
                <h1 className="text-3xl font-black tracking-tight text-slate-900">Profile</h1>
                <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <span className="material-icons text-primary">settings</span>
                </button>
            </header>

            <main className="w-full max-w-md flex-1 px-4">
                {/* Profile Hero Section */}
                <section className="flex flex-col items-center py-10 px-6 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative mb-6"
                    >
                        <div className="w-28 h-28 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100 shadow-xl ring-8 ring-white">
                            <img
                                alt="Profile"
                                className="w-full h-full object-cover"
                                src={user.photoURL || `https://ui-avatars.com/api/?name=${customerData?.displayName || user.email}&background=1a1a5a&color=fff&size=128`}
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-2 border-2 border-white shadow-lg">
                            <span className="material-icons text-[14px]">camera_alt</span>
                        </div>
                    </motion.div>
                    <h2 className="text-2xl font-black text-slate-900">{customerData?.displayName || "Reader"}</h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">{user.email}</p>
                    <div className="mt-4 flex gap-2">
                        <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/20">
                            Member since 2026
                        </span>
                    </div>
                </section>

                {/* Menu Groups */}
                <div className="space-y-8 px-2">
                    {menuGroups.map((group) => (
                        <div key={group.title} className="space-y-3">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">
                                {group.title}
                            </h3>
                            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
                                {group.items.map((item, idx) => (
                                    <React.Fragment key={item.label}>
                                        <button
                                            onClick={item.action}
                                            className="w-full flex items-center px-5 py-5 hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mr-4 group-active:scale-90 transition-transform ${item.color}`}>
                                                <span className="material-icons text-[24px]">{item.icon}</span>
                                            </div>
                                            <span className="flex-1 text-left font-black text-slate-700 text-sm">
                                                {item.label}
                                            </span>
                                            {item.badge && (
                                                <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full mr-2">
                                                    {item.badge}
                                                </span>
                                            )}
                                            <span className="material-icons text-slate-300 font-bold">chevron_right</span>
                                        </button>
                                        {idx < group.items.length - 1 && (
                                            <div className="mx-5 h-px bg-slate-50"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Logout Button */}
                    <button
                        onClick={() => logout()}
                        className="w-full mt-6 flex items-center justify-center px-4 py-5 bg-red-50/50 rounded-[2rem] border border-red-50 active:bg-red-50 transition-colors group"
                    >
                        <span className="material-icons text-red-500 mr-2 group-hover:rotate-12 transition-transform">logout</span>
                        <span className="font-black text-xs uppercase tracking-widest text-red-500">Sign Out</span>
                    </button>
                </div>
            </main>

            {/* Orders Overlay */}
            <AnimatePresence>
                {showOrders && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex flex-col"
                    >
                        <div className="flex-1 overflow-y-auto pb-32">
                            <div className="w-full max-w-2xl mx-auto px-4 py-8">
                                <div className="flex items-center justify-between mb-8">
                                    <button
                                        onClick={() => setShowOrders(false)}
                                        className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                                    >
                                        <span className="material-icons">close</span>
                                    </button>
                                    <h2 className="text-2xl font-black text-white tracking-tight">Order History</h2>
                                    <div className="w-10"></div>
                                </div>

                                {orders.length === 0 ? (
                                    <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl">
                                        <span className="material-icons text-6xl text-slate-100 mb-4 font-black">shopping_bag</span>
                                        <h3 className="text-xl font-black text-slate-900">No orders yet</h3>
                                        <p className="text-slate-500 font-medium text-sm mt-2">Your bookstore journey begins after your first purchase.</p>
                                        <button
                                            onClick={() => router.push('/')}
                                            className="mt-6 bg-primary text-white font-black px-6 py-3 rounded-xl uppercase tracking-widest text-xs"
                                        >
                                            Start Browsing
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {orders.map((order) => (
                                            <motion.div
                                                key={order.id}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="bg-white rounded-[2rem] p-6 shadow-xl overflow-hidden"
                                            >
                                                <div className="flex justify-between items-start mb-4 pb-4 border-b border-slate-50">
                                                    <div>
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Number</p>
                                                        <p className="text-sm font-black text-primary uppercase">{order.orderNumber}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${order.status === 'Processing' ? 'bg-orange-100 text-orange-600' :
                                                                order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                        <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">
                                                            {new Date(order.createdAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    {order.items.map((item: any, i: number) => (
                                                        <div key={i} className="flex gap-4 items-center">
                                                            <img src={item.image} className="w-12 h-16 object-cover rounded-lg shadow-sm" alt={item.title} />
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-xs font-black text-slate-800 truncate">{item.title}</p>
                                                                <p className="text-[10px] text-slate-400 font-bold uppercase">Qty: {item.quantity}</p>
                                                            </div>
                                                            <p className="text-xs font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                                    <div className="flex items-center gap-2 text-slate-400">
                                                        <span className="material-icons text-sm">local_shipping</span>
                                                        <span className="text-[10px] font-black uppercase tracking-widest">USPS Tracked</span>
                                                    </div>
                                                    <p className="text-lg font-black text-[#1a1a5a]">Total: ${order.total.toFixed(2)}</p>
                                                </div>

                                                <div className="mt-4">
                                                    <button className="w-full bg-slate-50 text-slate-600 font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-slate-100 transition-colors">
                                                        Track Package
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BottomNav />
        </div>
    );
}
