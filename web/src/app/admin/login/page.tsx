"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !password) {
            setError("Please enter both full name and password.");
            return;
        }
        const success = login(name, password);
        if (success) {
            router.push("/admin");
        } else {
            setError("Invalid administrator credentials. Access denied.");
        }
    };

    return (
        <div className="min-h-screen bg-[#1a1a5a] flex items-center justify-center p-6 selection:bg-primary/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />

                    <div className="relative z-10 space-y-8">
                        {/* Logo/Identity */}
                        <div className="flex flex-col items-center gap-2">
                            <img
                                src="/images/Hamrobooks-logo.png"
                                alt="HamroBooks"
                                className="h-16 w-auto object-contain"
                            />
                            <div className="text-center">
                                <h1 className="text-3xl font-black tracking-tighter text-[#1a1a5a]">
                                    Hamro<span className="text-primary">Admin</span>
                                </h1>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">
                                    Bookstore Control Portal
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-primary shadow-inner">
                                <span className="material-icons text-3xl">admin_panel_settings</span>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-black text-slate-900">Protected Access</h2>
                                <p className="text-xs text-slate-500 font-medium">Please enter your credentials to continue.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">person</span>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setError("");
                                            }}
                                            placeholder="e.g. Dipendra Subedi"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                                    <div className="relative">
                                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setError("");
                                            }}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[10px] font-bold text-red-500 ml-1 flex items-center gap-1"
                                >
                                    <span className="material-icons text-xs">error</span> {error}
                                </motion.p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-[#1a1a5a] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#1a1a5a]/20 hover:bg-[#2a2a7a] transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs"
                            >
                                Authenticate
                            </button>
                        </form>

                        <div className="pt-4 text-center border-t border-slate-50">
                            <button
                                onClick={() => router.push("/")}
                                className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.15em] flex items-center justify-center gap-2 mx-auto"
                            >
                                <span className="material-icons text-xs">arrow_back</span>
                                Return to Public Storefront
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-white/30 text-[9px] font-medium uppercase tracking-[0.3em] mt-8">
                    Authorized Personnel Only • IP Logged
                </p>
            </motion.div>
        </div>
    );
}
