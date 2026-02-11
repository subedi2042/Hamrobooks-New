"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
    const stats = [
        { label: "Total Revenue", value: "$12,450.50", icon: "payments", color: "bg-blue-50 text-blue-600" },
        { label: "Active Orders", value: "24", icon: "shopping_bag", color: "bg-orange-50 text-orange-600" },
        { label: "Total Products", value: "142", icon: "menu_book", color: "bg-purple-50 text-purple-600" },
        { label: "Customers", value: "892", icon: "people", color: "bg-green-50 text-green-600" },
    ];

    const recentOrders = [
        { id: "#HB-9231", customer: "Biraj Mahato", items: 3, total: "$64.97", date: "2 mins ago", status: "Processing" },
        { id: "#HB-9230", customer: "Sita Sharma", items: 1, total: "$18.99", date: "15 mins ago", status: "Shipped" },
        { id: "#HB-9229", customer: "Rahul Pal", items: 2, total: "$42.50", date: "1 hour ago", status: "Delivered" },
        { id: "#HB-9228", customer: "Anjali K.", items: 5, total: "$112.00", date: "3 hours ago", status: "Cancelled" },
    ];

    return (
        <div className="space-y-8">
            {/* Greeting */}
            <div>
                <h2 className="text-3xl font-black text-slate-900">Welcome Back, Admin</h2>
                <p className="text-slate-500 font-medium">Here's what's happening with HamroBooks today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                    >
                        <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                            <span className="material-icons">{stat.icon}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            {/* Content Multi-Column */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-black text-lg">Recent Orders</h3>
                        <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto text-slate-900">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-100">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Order ID</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Items</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Total</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-bold">{order.id}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{order.customer}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{order.items}</td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-900">{order.total}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === "Processing" ? "bg-orange-100 text-orange-600" :
                                                    order.status === "Shipped" ? "bg-blue-100 text-blue-600" :
                                                        order.status === "Delivered" ? "bg-green-100 text-green-600" :
                                                            "bg-slate-100 text-slate-500"
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions / Activity */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-black text-lg mb-4 text-slate-900">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 hover:text-primary transition-all group">
                                <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">add_box</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Add Book</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 hover:text-primary transition-all group">
                                <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">campaign</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">New Promo</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 hover:text-primary transition-all group">
                                <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">summarize</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Report</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 hover:text-primary transition-all group">
                                <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">support_agent</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Support</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a5a] text-white p-6 rounded-2xl shadow-xl overflow-hidden relative">
                        <div className="relative z-10">
                            <h4 className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Stock Alert</h4>
                            <p className="font-bold text-sm mb-4">12 items are low on stock. Restock soon!</p>
                            <button className="bg-white text-[#1a1a5a] text-xs font-black py-2 px-4 rounded-lg uppercase tracking-widest">Check Inventory</button>
                        </div>
                        <span className="material-icons absolute bottom-[-10px] right-[-10px] text-white/5 text-8xl">warning</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
