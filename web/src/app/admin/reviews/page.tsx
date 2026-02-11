"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy } from "firebase/firestore";
import { Check, X, Star, User, MessageSquare, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminReviews() {
    const [pendingReviews, setPendingReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPending();
    }, []);

    const fetchPending = async () => {
        try {
            const q = query(
                collection(db, "reviews"),
                where("status", "==", "pending"),
                orderBy("createdAt", "desc")
            );
            const snapshot = await getDocs(q);
            setPendingReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
            console.error("Error fetching pending reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (id: string) => {
        try {
            await updateDoc(doc(db, "reviews", id), { status: "approved" });
            setPendingReviews(prev => prev.filter(r => r.id !== id));
        } catch (error) {
            alert("Error approving review");
        }
    };

    const handleReject = async (id: string) => {
        if (!confirm("Are you sure you want to delete this review?")) return;
        try {
            await deleteDoc(doc(db, "reviews", id));
            setPendingReviews(prev => prev.filter(r => r.id !== id));
        } catch (error) {
            alert("Error deleting review");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-[#1a1a5a] tracking-tighter">Content Moderation</h1>
                    <p className="text-slate-500 font-medium text-sm">Review and approve reader submissions</p>
                </div>
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-2xl flex items-center gap-2">
                    <ShieldAlert size={18} />
                    <span className="font-bold text-xs uppercase tracking-widest">{pendingReviews.length} Pending</span>
                </div>
            </header>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            ) : pendingReviews.length === 0 ? (
                <div className="bg-white p-20 rounded-[3rem] text-center border border-slate-100">
                    <Check size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-800">Inbox Zero!</h3>
                    <p className="text-slate-400">All submissions have been reviewed.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence>
                        {pendingReviews.map((review) => (
                            <motion.div
                                key={review.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[#1a1a5a]">{review.userName}</h4>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={12}
                                                            className={i < review.rating ? "fill-primary text-primary" : "text-slate-100"}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="bg-slate-50 px-3 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            Tag: {review.targetWriter}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 font-medium leading-relaxed italic mb-8">
                                        "{review.comment}"
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleApprove(review.id)}
                                        className="flex-1 bg-[#1a1a5a] hover:bg-[#2a2a7a] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95"
                                    >
                                        <Check size={14} /> Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(review.id)}
                                        title="Reject review"
                                        className="bg-red-50 hover:bg-red-100 text-red-500 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
