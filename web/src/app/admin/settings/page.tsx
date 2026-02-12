"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { seedDatabase } from "@/lib/seed";

export default function AdminSettingsPage() {
    const [isSeeding, setIsSeeding] = useState(false);
    const [seedStatus, setSeedStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [forceRefresh, setForceRefresh] = useState(false);

    const handleSeed = async () => {
        setIsSeeding(true);
        setSeedStatus("loading");
        try {
            await seedDatabase(forceRefresh);
            setSeedStatus("success");
            setTimeout(() => setSeedStatus("idle"), 3000);
        } catch (error) {
            console.error(error);
            setSeedStatus("error");
        } finally {
            setIsSeeding(false);
        }
    };

    return (
        <div className="space-y-10 pb-20">
            <div>
                <h2 className="text-3xl font-black text-slate-900">Store Settings</h2>
                <p className="text-slate-500 font-medium">Configure your store's public profile, policies, and systems.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-slate-900">
                {/* General Profile */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-50 pb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary">
                                <span className="material-icons">store_mall_directory</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-800">Store Profile</h3>
                                <p className="text-xs text-slate-500">How your store appears to customers.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label htmlFor="store-name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Store Name</label>
                                <input id="store-name" title="Store Name" aria-label="Store Name" value="HamroBooks New" readOnly className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-slate-900 font-bold outline-none" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="support-email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Support Email</label>
                                <input id="support-email" title="Support Email" aria-label="Support Email" value="namaste@hamrobooks.us" readOnly className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-slate-900 font-bold outline-none" />
                            </div>
                        </div>

                        <div className="space-y-1.5 pt-2">
                            <label htmlFor="store-about" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">About the Store</label>
                            <textarea
                                id="store-about"
                                title="About the Store"
                                aria-label="About the Store"
                                rows={4}
                                defaultValue="Curated Nepali literature stocked and shipped from the USA. Bringing our heritage closer to home."
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-slate-900 font-medium outline-none resize-none"
                            />
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-50 pb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary">
                                <span className="material-icons">local_shipping</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-800">Policies & Logic</h3>
                                <p className="text-xs text-slate-500">Shipping, returns, and automatic rules.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-slate-100 transition-all">
                                <div className="flex items-center gap-3">
                                    <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">description</span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Shipping Policy</p>
                                        <p className="text-[10px] text-slate-400 font-medium">Free US shipping rules, estimates, and zones.</p>
                                    </div>
                                </div>
                                <span className="material-icons text-slate-300">chevron_right</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-slate-100 transition-all">
                                <div className="flex items-center gap-3">
                                    <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">history</span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Returns & Refunds</p>
                                        <p className="text-[10px] text-slate-400 font-medium">Manage 30-day window and return portal link.</p>
                                    </div>
                                </div>
                                <span className="material-icons text-slate-300">chevron_right</span>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-slate-100 transition-all border-2 border-primary/20">
                                <div className="flex items-center gap-3">
                                    <span className="material-icons text-primary">qr_code_2</span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Zip Code API Integration</p>
                                        <p className="text-[10px] text-primary font-black uppercase tracking-wider">ACTIVE (Zippopotam.us)</p>
                                    </div>
                                </div>
                                <div className="w-10 h-6 bg-primary rounded-full relative">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* New Data Management Section */}
                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-50 pb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary">
                                <span className="material-icons">cloud_sync</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-800">Data Management</h3>
                                <p className="text-xs text-slate-500">Initialize and manage your cloud database.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-1">
                                <p className="text-sm font-black text-slate-900">Initialize Cloud Firestore</p>
                                <p className="text-[10px] text-slate-500 font-medium max-w-sm">
                                    Populate your cloud database with the default set of Hero Banners, Promo Codes, Featured Collections, and the latest Book Registry.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id="force-refresh"
                                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                                        checked={forceRefresh}
                                        onChange={(e) => setForceRefresh(e.target.checked)}
                                    />
                                    <label htmlFor="force-refresh" className="text-[10px] font-black text-slate-600 uppercase tracking-widest cursor-pointer">
                                        Force Clear Previous Data
                                    </label>
                                </div>
                            </div>
                            <button
                                onClick={handleSeed}
                                disabled={isSeeding}
                                className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-2 ${seedStatus === "success"
                                    ? "bg-green-500 text-white"
                                    : seedStatus === "error"
                                        ? "bg-red-500 text-white"
                                        : "bg-[#1a1a5a] text-white hover:bg-[#2a2a7a] active:scale-95 disabled:opacity-50"
                                    }`}
                            >
                                <span className="material-icons text-sm">
                                    {seedStatus === "loading" ? "sync" : seedStatus === "success" ? "check_circle" : (seedStatus === "error" ? "error" : "database")}
                                </span>
                                {seedStatus === "loading" ? "Seeding..." : seedStatus === "success" ? "Seeded!" : (seedStatus === "error" ? "Error" : "Sync Database")}
                            </button>
                        </div>

                    </section>
                </div>

                {/* Sidebar Systems */}
                <div className="space-y-8">
                    <div className="bg-[#1a1a5a] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Security</h3>
                            <div className="space-y-4">
                                <button className="w-full bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl flex items-center justify-between group">
                                    <span className="text-xs font-bold">2-Factor Auth</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-green-400">ON</span>
                                </button>
                                <button className="w-full bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl flex items-center justify-between group">
                                    <span className="text-xs font-bold">API Keys</span>
                                    <span className="material-icons text-sm">key</span>
                                </button>
                            </div>
                        </div>
                        <span className="material-icons absolute opacity-5 bottom-[-20px] left-[-20px] text-[150px]">verified_user</span>
                    </div>

                    <button className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.2em] text-xs">
                        Save All Changes
                    </button>

                    <div className="p-4 text-center">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Version 1.0.4-Stable</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
