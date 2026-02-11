"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CustomersPage() {
    const [activeTab, setActiveTab] = useState("All Customers");

    const customers = [
        { id: 1, name: "Biraj Mahato", location: "New York, NY", orders: 12, spent: "$452.20", firstJoin: "Jan 12, 2024", status: "VIP" },
        { id: 2, name: "Sita Sharma", location: "Dallas, TX", orders: 4, spent: "$89.50", firstJoin: "Feb 05, 2024", status: "Active" },
        { id: 3, name: "Rahul Pal", location: "Jersey City, NJ", orders: 1, spent: "$22.00", firstJoin: "Feb 10, 2024", status: "New" },
        { id: 4, name: "Anjali K.", location: "Toronto, ON", orders: 0, spent: "$0.00", firstJoin: "Feb 10, 2024", status: "Inactive" },
    ];

    const supportInquiries = [
        { id: "TK-1021", subject: "Shipping tracking number not working", customer: "Biraj Mahato", priority: "High", date: "2 hours ago" },
        { id: "TK-1020", subject: "Inquiry about upcoming B.P. Koirala series", customer: "Anonymous Reader", priority: "Medium", date: "Yesterday" },
    ];

    return (
        <div className="space-y-10">
            <div>
                <h2 className="text-3xl font-black text-slate-900 text-slate-900">Community & Support</h2>
                <p className="text-slate-500 font-medium text-slate-500">Manage your readers and handle customer support inquiries.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Customer List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white text-slate-900">
                            <h3 className="font-black text-lg">Readers Registry</h3>
                            <div className="relative">
                                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                                <input placeholder="Search readers..." className="bg-slate-50 border border-slate-100 rounded-xl py-2 pl-9 pr-4 text-xs font-bold text-slate-900" />
                            </div>
                        </div>
                        <div className="overflow-x-auto text-slate-900">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Activity</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Spent</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 bg-white text-slate-900">
                                    {customers.map((user) => (
                                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-primary border border-slate-200">
                                                        {user.name[0]}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-900">{user.name}</p>
                                                        <p className="text-[10px] text-slate-400 font-medium tracking-tight whitespace-nowrap">{user.location}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest ${user.status === "VIP" ? "bg-purple-100 text-purple-600" :
                                                        user.status === "New" ? "bg-blue-100 text-blue-600" :
                                                            "bg-slate-100 text-slate-500"
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-xs font-bold text-slate-700">{user.orders} Orders</p>
                                                <p className="text-[10px] text-slate-400 font-medium">Joined {user.firstJoin}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-black text-slate-900">{user.spent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Support Inquiries Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-black text-lg">Active Tickets</h3>
                            <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">2</span>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {supportInquiries.map((ticket) => (
                                <div key={ticket.id} className="p-6 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-black text-[#101010] bg-slate-100 px-2 py-0.5 rounded uppercase tracking-widest">{ticket.id}</span>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${ticket.priority === "High" ? "text-red-500" : "text-orange-500"
                                            }`}>{ticket.priority} Priority</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{ticket.subject}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase">{ticket.customer}</p>
                                        <p className="text-[10px] text-slate-400 font-medium italic">{ticket.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-100">
                            <button className="w-full bg-[#1a1a5a] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#2a2a7a] transition-all">
                                Open Support Suite
                            </button>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <span className="material-icons">mail</span>
                            <h4 className="font-black text-sm uppercase tracking-widest">Newsletter Status</h4>
                        </div>
                        <p className="text-xs text-slate-600 font-medium mb-4">You have <span className="font-black text-slate-900">2,142</span> subscribers waiting for your next book update!</p>
                        <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                            Compose Campaign <span className="material-icons text-sm">north_east</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
