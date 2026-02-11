"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Star, Send, User, MessageSquare, CheckCircle, Hash, AlertCircle } from "lucide-react";

const writers = [
    "L.P. Devkota",
    "Parijat",
    "B.P. Koirala",
    "Jhamak Ghimire",
    "Buddhisagar",
    "Amar Neupane",
    "Other"
];

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        userName: "",
        rating: 5,
        targetWriter: writers[0],
        comment: "",
    });

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const reviewsRef = collection(db, "reviews");
            const q = query(
                reviewsRef,
                where("status", "==", "approved"),
                orderBy("createdAt", "desc")
            );
            const querySnapshot = await getDocs(q);
            const fetchedReviews = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(fetchedReviews);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await addDoc(collection(db, "reviews"), {
                ...formData,
                status: "pending",
                createdAt: Timestamp.now(),
            });
            setShowSuccess(true);
            setFormData({ userName: "", rating: 5, targetWriter: writers[0], comment: "" });
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Failed to submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFCFB] selection:bg-primary/30 pb-24">
            <Header onSearch={() => { }} />

            <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                {/* Hero Header */}
                <section className="text-center mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-black text-[#1a1a5a] mb-6 tracking-tighter">
                            Reader <span className="text-primary italic">Voices</span>
                        </h1>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                            Share your reading experience and tag your favorite authors. Your reviews help build a stronger Nepali literary community in the USA.
                        </p>
                    </motion.div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Review Form */}
                    <aside className="md:col-span-1">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 sticky top-32">
                            <h3 className="font-black text-xl text-[#1a1a5a] mb-6 flex items-center gap-2">
                                <MessageSquare className="text-primary" size={20} />
                                Leave a Review
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 px-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.userName}
                                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                        placeholder="Arjun Dev"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                                    />
                                </div>

                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 px-1">Tag Favorite Writer</label>
                                    <select
                                        value={formData.targetWriter}
                                        onChange={(e) => setFormData({ ...formData, targetWriter: e.target.value })}
                                        title="Select a writer to tag"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none"
                                    >
                                        {writers.map(w => <option key={w} value={w}>{w}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 px-1">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <button
                                                key={star}
                                                type="button"
                                                title={`Rate ${star} stars`}
                                                onClick={() => setFormData({ ...formData, rating: star })}
                                                className="transition-transform active:scale-90"
                                            >
                                                <Star
                                                    size={24}
                                                    className={star <= formData.rating ? "fill-primary text-primary" : "text-slate-200"}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2 px-1">Your Story</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        placeholder="How has this book or website helped you?"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none placeholder:text-slate-300"
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-[#e68a00] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-primary/30 transition-all active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : (
                                        <>
                                            <Send size={14} />
                                            Submit for Review
                                        </>
                                    )}
                                </button>

                                <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-tighter">
                                    Note: All reviews are moderated before publishing.
                                </p>
                            </form>

                            <AnimatePresence>
                                {showSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-3"
                                    >
                                        <CheckCircle className="text-green-500" size={20} />
                                        <div className="text-[10px] font-bold text-green-700 leading-tight">
                                            Success! Your review has been submitted to our moderators.
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </aside>

                    {/* Reviews List */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="font-black text-2xl text-[#1a1a5a]">Latest Reviews</h2>
                            <div className="h-0.5 flex-1 bg-slate-100 mx-6 rounded-full" />
                        </div>

                        {loading ? (
                            <div className="py-20 flex flex-col items-center text-slate-300">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="mb-4"
                                >
                                    <Hash size={40} />
                                </motion.div>
                                <p className="font-bold uppercase tracking-widest text-xs">Loading Voices...</p>
                            </div>
                        ) : reviews.length === 0 ? (
                            <div className="bg-white p-12 rounded-[2.5rem] border border-dashed border-slate-200 text-center">
                                <AlertCircle className="text-slate-200 mx-auto mb-4" size={48} />
                                <h4 className="font-bold text-slate-400">Be the first to leave a review!</h4>
                            </div>
                        ) : (
                            reviews.map((review, idx) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white hover:border-primary/20 transition-all group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[#1a1a5a] text-lg leading-none">{review.userName}</h4>
                                                <div className="flex gap-1 mt-1">
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
                                        <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            Tagged: <span className="text-primary italic">{review.targetWriter}</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 font-medium leading-relaxed italic">
                                        "{review.comment}"
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
                                            {review.createdAt?.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <div className="flex items-center gap-1 text-primary">
                                            <CheckCircle size={12} className="fill-primary text-white" />
                                            <span className="text-[9px] font-black uppercase tracking-widest">Verified Reader</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
