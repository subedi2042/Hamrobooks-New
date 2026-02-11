"use client";

import React, { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { user } = useAuth();

    // Redirect if already logged in
    React.useEffect(() => {
        if (user) {
            router.push("/account");
        }
    }, [user, router]);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name });

            // Initial Firestore user document is handled by AuthProvider's onAuthStateChanged
            // but we can also set it explicitly if we want to add the name immediately
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                displayName: name,
                createdAt: new Date().toISOString(),
                role: "customer"
            });

            router.push("/account");
        } catch (err: any) {
            setError(err.message || "Failed to create account. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = async () => {
        setIsLoading(true);
        setError("");
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            router.push("/account");
        } catch (err: any) {
            setError(err.message || "Failed to sign up with Google.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-bg-light flex items-center justify-center p-6 sm:p-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
                <div className="p-10">
                    <div className="text-center mb-10">
                        <Link href="/">
                            <img
                                src="/images/Hamrobooks-logo.png"
                                alt="HamroBooks"
                                className="h-12 mx-auto mb-4"
                            />
                        </Link>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Create Account</h1>
                        <p className="text-slate-500 font-medium text-sm mt-2">Join our community of literature lovers.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700"
                                placeholder="Biraj Mahato"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-bold text-slate-700"
                                placeholder="At least 6 characters"
                                minLength={6}
                            />
                        </div>

                        {error && (
                            <p className="text-xs font-bold text-red-500 ml-1 flex items-center gap-1">
                                <span className="material-icons text-xs">error</span> {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#1a1a5a] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#1a1a5a]/20 hover:bg-[#2a2a7a] transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Creating Account..." : "Register Now"}
                        </button>
                    </form>

                    <div className="mt-8 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                            <span className="bg-white px-4 text-slate-300">Or sign up with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleGoogleRegister}
                        disabled={isLoading}
                        className="w-full mt-6 bg-white border-2 border-slate-100 text-slate-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all active:scale-[0.98] text-sm"
                    >
                        <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                        Sign up with Google
                    </button>

                    <div className="mt-10 flex flex-col items-center gap-4">
                        <p className="text-center text-sm font-medium text-slate-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#1a1a5a] font-bold hover:underline">
                                Log in here
                            </Link>
                        </p>
                        <div className="w-10 h-0.5 bg-slate-50 rounded-full" />
                        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-[#1a1a5a] transition-colors text-xs font-black uppercase tracking-widest group">
                            <span>Continue as Guest</span>
                            <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
