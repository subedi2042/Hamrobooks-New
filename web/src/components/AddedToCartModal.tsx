"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AddedToCartModalProps {
    isOpen: boolean;
    onClose: () => void;
    bookTitle: string;
}

export default function AddedToCartModal({ isOpen, onClose, bookTitle }: AddedToCartModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isOpen) {
                // Dimiss on any key as requested by the user
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-sm bg-white rounded-3xl p-8 shadow-2xl text-center overflow-hidden"
                    >
                        {/* Success Icon Animation */}
                        <div className="mb-6 relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
                                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto"
                            >
                                <span className="material-icons text-green-500 text-4xl font-bold">check_circle</span>
                            </motion.div>

                            {/* Particle effects if you want to go premium */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-green-500/10 rounded-full scale-150 blur-xl -z-10"
                            />
                        </div>

                        <h3 className="text-xl font-black text-slate-900 mb-2">Awesome choice!</h3>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            <span className="font-bold text-slate-700 italic">"{bookTitle}"</span> has been successfully added to your cart. 📚
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-4 rounded-2xl shadow-xl shadow-slate-900/10 transition-all active:scale-95 text-sm tracking-widest uppercase"
                        >
                            OK (Got it!)
                        </button>

                        <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
                            Press any key to close
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
