"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Send, CheckCircle, BookOpen, Globe, Award, Mail, User, Book } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function WriterApplyPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        publishedBooks: "",
        genre: "Fiction",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, "writer_applications"), {
                ...formData,
                status: "pending",
                createdAt: Timestamp.now(),
            });
            setShowSuccess(true);
            setFormData({ name: "", email: "", publishedBooks: "", genre: "Fiction", message: "" });
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("Submission failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] selection:bg-primary/30 pb-24">
            <Header onSearch={() => { }} />

            <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Context & Inspiration */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                                For Authors
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-[#1a1a5a] mt-6 mb-8 leading-[0.9] tracking-tighter">
                                Let's bring your <br />
                                <span className="text-primary italic">Story to the World</span>
                            </h1>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                Join the premier platform for Nepali literature in the USA. We handle the complexity of distribution so you can focus on your craft.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Globe className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#1a1a5a] mb-1">USA-wide Reach</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed font-bold uppercase tracking-wider">All 50 States Distribution</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                                    <Award className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#1a1a5a] mb-1">Author Support</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed font-bold uppercase tracking-wider">Marketing & Logistics Help</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Application Form */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            {!showSuccess ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
                                >
                                    <h2 className="text-2xl font-black text-[#1a1a5a] mb-8">Writer Application</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="Devi Prasad"
                                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="devi@example.com"
                                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">Book Title(s)</label>
                                                <div className="relative">
                                                    <Book className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.publishedBooks}
                                                        onChange={(e) => setFormData({ ...formData, publishedBooks: e.target.value })}
                                                        placeholder="Muna Madan, etc."
                                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">Primary Genre</label>
                                                <select
                                                    value={formData.genre}
                                                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                                                    title="Select your primary genre"
                                                    aria-label="Primary Genre"
                                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none"
                                                >
                                                    <option>Fiction</option>
                                                    <option>Non-Fiction</option>
                                                    <option>Poetry</option>
                                                    <option>Philosophy</option>
                                                    <option>Travelogue</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">Brief Proposal / Message</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about yourself and your work..."
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-4 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            className="w-full bg-primary hover:bg-[#e68a00] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 transition-all active:scale-95 disabled:opacity-50 group"
                                        >
                                            {isSubmitting ? "Processing..." : (
                                                <>
                                                    Submit Application
                                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 text-center flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 bg-green-500 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-green-100">
                                        <CheckCircle className="text-white" size={48} />
                                    </div>
                                    <h2 className="text-3xl font-black text-[#1a1a5a] mb-4 tracking-tighter">Application Received</h2>
                                    <p className="text-slate-500 font-medium mb-12 max-w-sm">
                                        Thank you for reaching out! Our editorial team will review your work and get back to you within 3-5 business days.
                                    </p>
                                    <button
                                        onClick={() => setShowSuccess(false)}
                                        className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary pb-1 hover:border-[#1a1a5a] hover:text-[#1a1a5a] transition-all"
                                    >
                                        Go Back
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
