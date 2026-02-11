"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AdminOrdersPage() {
    const [statusFilter, setStatusFilter] = useState("All");

    const orders = [
        { id: "#HB-9231", customer: "Biraj Mahato", email: "biraj@example.com", items: 3, total: 64.97, date: "Feb 10, 2026", status: "Processing", method: "USPS Priority" },
        { id: "#HB-9230", customer: "Sita Sharma", email: "sita.s@nepal.org", items: 1, total: 18.99, date: "Feb 10, 2026", status: "Shipped", method: "UPS Ground" },
        { id: "#HB-9229", customer: "Rahul Pal", email: "rahul.pal@gmail.com", items: 2, total: 42.50, date: "Feb 09, 2026", status: "Delivered", method: "FedEx" },
        { id: "#HB-9228", customer: "Anjali K.", email: "anjali.k@hotmail.com", items: 5, total: 112.00, date: "Feb 08, 2026", status: "Cancelled", method: "USPS" },
        { id: "#HB-9227", customer: "Deepak R.", email: "deepak.admin@tech.com", items: 1, total: 24.50, date: "Feb 08, 2026", status: "Shipped", method: "UPS Ground" },
    ];

    const filteredOrders = statusFilter === "All"
        ? orders
        : orders.filter(o => o.status === statusFilter);

    const statuses = ["All", "Processing", "Shipped", "Delivered", "Cancelled"];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Orders</h2>
                    <p className="text-slate-500 font-medium">Track and fulfill customer orders nationwide.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-xl shadow-sm transition-all flex items-center gap-2 hover:bg-slate-50">
                        <span className="material-icons">download</span>
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {statuses.map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${statusFilter === status
                                ? "bg-[#1a1a5a] text-white shadow-lg"
                                : "bg-white text-slate-500 border border-slate-100 hover:border-slate-300"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Order</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Shipping</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Total</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-black text-[#1a1a5a]">{order.id}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{order.items} items</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-slate-900">{order.customer}</p>
                                        <p className="text-[10px] text-slate-500 font-medium">{order.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="material-icons text-slate-300 text-sm">local_shipping</span>
                                            <span className="text-sm font-medium text-slate-600">{order.method}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-slate-900">${order.total.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === "Processing" ? "bg-orange-100 text-orange-600" :
                                                order.status === "Shipped" ? "bg-blue-100 text-blue-600" :
                                                    order.status === "Delivered" ? "bg-green-100 text-green-600" :
                                                        "bg-slate-100 text-slate-500"
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-primary hover:text-orange-700 font-black text-xs uppercase tracking-widest">
                                            Manage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredOrders.length === 0 && (
                    <div className="py-24 text-center">
                        <span className="material-icons text-6xl text-slate-200 mb-4">shopping_cart_off</span>
                        <p className="text-slate-400 font-bold">No {statusFilter.toLowerCase()} orders found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
