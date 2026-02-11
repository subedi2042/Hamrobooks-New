"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminOrdersPage() {
    const [statusFilter, setStatusFilter] = useState("All");
    const [orders, setOrders] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    useEffect(() => {
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const ordersData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setOrders(ordersData);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleStatusUpdate = async (orderId: string, newStatus: string) => {
        try {
            const orderRef = doc(db, "orders", orderId);
            await updateDoc(orderRef, { status: newStatus });
            setSelectedOrder(null);
        } catch (error) {
            alert("Failed to update status.");
        }
    };

    const exportToCSV = () => {
        const headers = ["Order ID", "Customer", "Email", "Date", "Total", "Status", "Shipping Method"];
        const rows = orders.map(o => [
            o.orderNumber,
            o.customerName,
            o.customerEmail,
            new Date(o.createdAt).toLocaleDateString(),
            o.total.toFixed(2),
            o.status,
            o.paymentMethod
        ]);

        const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `orders_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const filteredOrders = statusFilter === "All"
        ? orders
        : orders.filter(o => o.status === statusFilter);

    const statuses = ["All", "Processing", "Shipped", "Delivered", "Cancelled"];

    if (isLoading) return (
        <div className="py-24 text-center">
            <div className="w-12 h-12 border-4 border-[#1a1a5a] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Loading Orders...</p>
        </div>
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Orders</h2>
                    <p className="text-slate-500 font-medium tracking-tight">Track and fulfill customer orders nationwide.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={exportToCSV}
                        className="bg-white border border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-2xl shadow-sm transition-all flex items-center gap-2 hover:bg-slate-50 active:scale-95"
                    >
                        <span className="material-icons text-lg">download</span>
                        <span className="text-xs uppercase tracking-widest">Export CSV</span>
                    </button>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {statuses.map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === status
                            ? "bg-[#1a1a5a] text-white shadow-xl shadow-[#1a1a5a]/20"
                            : "bg-white text-slate-500 border border-slate-100 hover:border-slate-300"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Order Ref</th>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</th>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-5">
                                        <p className="text-xs font-black text-[#1a1a5a] uppercase">{order.orderNumber || order.id.slice(0, 8)}</p>
                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{order.items?.length || 0} items</p>
                                    </td>
                                    <td className="px-6 py-5">
                                        <p className="text-xs font-bold text-slate-900">{order.customerName}</p>
                                        <p className="text-[10px] text-slate-500 font-medium">{order.customerEmail}</p>
                                    </td>
                                    <td className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-5 text-sm font-black text-slate-900">${order.total.toFixed(2)}</td>
                                    <td className="px-6 py-5">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${order.status === "Processing" ? "bg-orange-100 text-orange-600" :
                                                order.status === "Shipped" ? "bg-blue-100 text-blue-600" :
                                                    order.status === "Delivered" ? "bg-green-100 text-green-600" :
                                                        "bg-red-100 text-red-500"
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button
                                            onClick={() => setSelectedOrder(order)}
                                            className="bg-slate-50 hover:bg-primary hover:text-white transition-all text-[#1a1a5a] font-black px-4 py-2 rounded-xl text-[9px] uppercase tracking-widest"
                                        >
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

            {/* Manage Order Modal */}
            <AnimatePresence>
                {selectedOrder && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-black text-[#1a1a5a] mb-2">Order {selectedOrder.orderNumber}</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Manage Status & Details</p>

                            <div className="space-y-6">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Shipping Information</h4>
                                    <p className="font-bold text-slate-800">{selectedOrder.customerName}</p>
                                    <p className="text-sm text-slate-600">{selectedOrder.shippingAddress.address}</p>
                                    <p className="text-sm text-slate-600">{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zipCode}</p>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Update Status</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {statuses.filter(s => s !== "All").map(status => (
                                            <button
                                                key={status}
                                                onClick={() => handleStatusUpdate(selectedOrder.id, status)}
                                                className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${selectedOrder.status === status
                                                        ? "bg-[#1a1a5a] text-white border-transparent"
                                                        : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
                                                    }`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="mt-8 w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                Close Management
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
