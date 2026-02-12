"use client";

import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminNotificationsPage() {
    const [notifications, setNotifications] = useState<any[]>([]);
    const [abandonedCarts, setAbandonedCarts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'notifications' | 'carts'>('notifications');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Listen to notifications
        const qNotif = query(collection(db, "admin_notifications"), orderBy("timestamp", "desc"));
        const unsubNotif = onSnapshot(qNotif, (snapshot) => {
            setNotifications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setIsLoading(false);
        });

        // Listen to abandoned carts
        const qCarts = query(collection(db, "abandoned_carts"), orderBy("lastUpdated", "desc"));
        const unsubCarts = onSnapshot(qCarts, (snapshot) => {
            setAbandonedCarts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => {
            unsubNotif();
            unsubCarts();
        };
    }, []);

    const markAsRead = async (id: string) => {
        await updateDoc(doc(db, "admin_notifications", id), { status: 'read' });
    };

    const deleteNotification = async (id: string) => {
        await deleteDoc(doc(db, "admin_notifications", id));
    };

    return (
        <div className="space-y-8 pb-32">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-[#1a1a5a] tracking-tight text-slate-900">Notifications & Recovery</h2>
                    <p className="text-slate-500 font-medium">Monitor abandoned carts and checkout issues in real-time.</p>
                </div>

                <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm self-start">
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'notifications' ? 'bg-[#1a1a5a] text-white' : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        Issues ({notifications.filter(n => n.status === 'unread').length})
                    </button>
                    <button
                        onClick={() => setActiveTab('carts')}
                        className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'carts' ? 'bg-[#1a1a5a] text-white' : 'text-slate-400 hover:text-slate-600'
                            }`}
                    >
                        Abandoned Carts ({abandonedCarts.length})
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                {activeTab === 'notifications' ? (
                    <div className="divide-y divide-slate-50">
                        {notifications.length > 0 ? (
                            <AnimatePresence>
                                {notifications.map((notif) => (
                                    <motion.div
                                        key={notif.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`p-6 flex items-start gap-4 transition-colors ${notif.status === 'unread' ? 'bg-blue-50/30' : ''}`}
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${notif.type === 'CHECKOUT_FAILURE' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                                            }`}>
                                            <span className="material-icons">{notif.type === 'CHECKOUT_FAILURE' ? 'error' : 'shopping_cart_checkout'}</span>
                                        </div>

                                        <div className="flex-grow space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-black text-[#1a1a5a] uppercase tracking-wider text-xs">
                                                    {notif.type === 'CHECKOUT_FAILURE' ? 'Checkout Error' : 'Abandoned Cart'}
                                                </h4>
                                                <span className="text-[10px] text-slate-400 font-bold">
                                                    {notif.timestamp?.toDate().toLocaleString() || 'Just now'}
                                                </span>
                                            </div>
                                            <p className="text-sm font-bold text-slate-700">{notif.message}</p>

                                            {notif.data && (
                                                <div className="bg-slate-50 rounded-xl p-4 text-[11px] font-mono text-slate-500 overflow-x-auto border border-slate-100">
                                                    <pre>{JSON.stringify(notif.data, null, 2)}</pre>
                                                </div>
                                            )}

                                            <div className="flex gap-3 pt-2">
                                                {notif.status === 'unread' && (
                                                    <button
                                                        onClick={() => markAsRead(notif.id)}
                                                        className="text-[9px] font-black uppercase tracking-widest text-[#1a1a5a] hover:underline"
                                                    >
                                                        Mark as Read
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteNotification(notif.id)}
                                                    className="text-[9px] font-black uppercase tracking-widest text-red-400 hover:text-red-500"
                                                >
                                                    Dismiss
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        ) : (
                            <div className="p-20 text-center text-slate-400 font-black uppercase tracking-widest text-xs">
                                <span className="material-icons text-5xl mb-4 block opacity-20">notifications_none</span>
                                No recent notifications
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="divide-y divide-slate-50">
                        {abandonedCarts.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100 font-black text-[10px] uppercase tracking-widest text-slate-400">
                                        <tr>
                                            <th className="px-6 py-4">Session ID</th>
                                            <th className="px-6 py-4">Items</th>
                                            <th className="px-6 py-4">Total Value</th>
                                            <th className="px-6 py-4">Last Activity</th>
                                            <th className="px-6 py-4 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-900 font-slate-900">
                                        {abandonedCarts.map((cart) => (
                                            <tr key={cart.id} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-6 py-4 font-mono text-[10px] text-slate-500">{cart.id}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col gap-1">
                                                        {cart.cart.map((item: any) => (
                                                            <span key={item.id} className="text-xs font-bold text-slate-700">
                                                                {item.qty}x {item.title}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-black text-[#1a1a5a]">${cart.totalPrice?.toFixed(2)}</td>
                                                <td className="px-6 py-4 text-xs font-medium text-slate-500">
                                                    {cart.lastUpdated?.toDate().toLocaleString() || 'Just now'}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <span className="px-2.5 py-1 bg-amber-50 text-amber-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                                        Pending
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-20 text-center text-slate-400 font-black uppercase tracking-widest text-xs">
                                <span className="material-icons text-5xl mb-4 block opacity-20">shopping_cart</span>
                                No active carts found
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons">info</span>
                </div>
                <div>
                    <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-1">Email Delivery Setup Required</h4>
                    <p className="text-sm text-slate-500 font-medium">To receive THESE events in your email, you must set up a Firebase Cloud Function or a Next.js API route with a service like SendGrid or Resend. This dashboard currently provides real-time monitoring of all issues.</p>
                </div>
            </div>
        </div>
    );
}
