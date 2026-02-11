"use client";

import React from "react";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";

export default function AccountPage() {
    const menuGroups = [
        {
            title: "Activity",
            items: [
                { label: "My Orders", icon: "shopping_bag", color: "text-primary" },
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
            {/* iOS Top Nav */}
            <div className="w-full h-11 flex items-center justify-between px-6 bg-white sticky top-0 z-50">
                <span className="text-xs font-bold text-slate-800">9:41</span>
                <div className="flex gap-1.5 items-center">
                    <span className="material-icons text-[14px]">signal_cellular_alt</span>
                    <span className="material-icons text-[14px]">wifi</span>
                    <span className="material-icons text-[14px]">battery_full</span>
                </div>
            </div>

            <header className="w-full max-w-md px-6 py-4 flex items-center justify-between bg-white sticky top-11 z-20">
                <h1 className="text-3xl font-black tracking-tight text-slate-900">Profile</h1>
                <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <span className="material-icons text-primary">edit</span>
                </button>
            </header>

            <main className="w-full max-w-md flex-1 px-4">
                {/* Profile Hero Section */}
                <section className="flex flex-col items-center py-8 px-6 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative mb-4"
                    >
                        <div className="w-28 h-28 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100 shadow-xl">
                            <img
                                alt="Profile"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEkyjvRlGuxK8iZyQ_2-U_Q-Vm74kivz4h-b82r4n0Ogb5x7V5iFyaka1e2v0YBw9SeZNo81CSlFRwuaXgQRVE17EbH_4HL9r4bL2aCiYe2qSIe74vqv6Li6l3cPgSxeN75bFQrP3UoPNO2lXMsa8aLSDnPrdewwmIJ1DkpFY39gz6DOmsGzCWHFTe5hPy51OZDScdQzybfvtWiOP4dL86cayvGjSbQFXjjVTALnurZ5CSBoMtmvWxHQaQJx7bjzldMD-WPv2u4E"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-2 border-2 border-white shadow-lg">
                            <span className="material-icons text-[14px]">camera_alt</span>
                        </div>
                    </motion.div>
                    <h2 className="text-xl font-bold text-slate-900">Sandeep Sharma</h2>
                    <p className="text-slate-500 font-medium text-sm">sandeep.sharma@thuprai.com</p>
                    <div className="mt-4">
                        <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/20">
                            Premium Member
                        </span>
                    </div>
                </section>

                {/* Menu Groups */}
                <div className="space-y-6 px-2">
                    {menuGroups.map((group) => (
                        <div key={group.title} className="space-y-2">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">
                                {group.title}
                            </h3>
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                                {group.items.map((item, idx) => (
                                    <React.Fragment key={item.label}>
                                        <button className="w-full flex items-center px-4 py-4 hover:bg-slate-50 transition-colors group">
                                            <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mr-4 group-active:scale-95 transition-transform ${item.color}`}>
                                                <span className="material-icons text-[22px]">{item.icon}</span>
                                            </div>
                                            <span className="flex-1 text-left font-bold text-slate-700 text-sm">
                                                {item.label}
                                            </span>
                                            <span className="material-icons text-slate-300 font-bold">chevron_right</span>
                                        </button>
                                        {idx < group.items.length - 1 && (
                                            <div className="mx-4 h-px bg-slate-50"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Logout Button */}
                    <button className="w-full mt-4 flex items-center justify-center px-4 py-4 bg-white/50 rounded-2xl border border-red-100 active:bg-red-50 transition-colors group">
                        <span className="material-icons text-red-500 mr-2 group-hover:rotate-12 transition-transform">logout</span>
                        <span className="font-bold text-red-500">Log Out</span>
                    </button>

                    <footer className="text-center py-8">
                        <p className="text-slate-300 text-[10px] font-bold tracking-widest uppercase">
                            HamroBooks • Authentic Literature (USA)
                        </p>
                    </footer>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
