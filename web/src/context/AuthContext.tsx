"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    onAuthStateChanged,
    User,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface AdminUser {
    name: string;
    id: string;
    avatar?: string;
}

interface CustomerUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

interface AuthContextType {
    // Admin Auth
    isAdminAuthenticated: boolean;
    adminUser: AdminUser | null;
    loginAdmin: (name: string, password: string) => boolean;
    logoutAdmin: () => void;

    // Customer Auth
    user: User | null;
    customerData: any | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    // Admin state
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

    // Customer state
    const [user, setUser] = useState<User | null>(null);
    const [customerData, setCustomerData] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    // Combined effects for mount
    useEffect(() => {
        // 1. Check Admin Auth (Local Storage)
        const authStatus = localStorage.getItem("hamrobooks-admin-auth");
        const savedUser = localStorage.getItem("hamrobooks-admin-user");
        if (authStatus === "true" && savedUser) {
            setIsAdminAuthenticated(true);
            setAdminUser(JSON.parse(savedUser));
        }

        // 2. Check Customer Auth (Firebase)
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                // Fetch additional user data from Firestore if needed
                const docRef = doc(db, "users", firebaseUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCustomerData(docSnap.data());
                } else {
                    // Create user profile if it doesn't exist
                    const newUserData = {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName || "Anonymous User",
                        createdAt: new Date().toISOString(),
                        role: "customer"
                    };
                    await setDoc(docRef, newUserData);
                    setCustomerData(newUserData);
                }
            } else {
                setCustomerData(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginAdmin = (name: string, password: string) => {
        const admins = [
            { name: "Dipendra Subedi", password: "Admin123", id: "admin-1" },
            { name: "Sanjay Guragain", password: "Admin456", id: "admin-2" }
        ];

        const admin = admins.find(a => a.name.toLowerCase() === name.toLowerCase() && a.password === password);

        if (admin) {
            const userData = { name: admin.name, id: admin.id };
            setIsAdminAuthenticated(true);
            setAdminUser(userData);
            localStorage.setItem("hamrobooks-admin-auth", "true");
            localStorage.setItem("hamrobooks-admin-user", JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logoutAdmin = () => {
        setIsAdminAuthenticated(false);
        setAdminUser(null);
        localStorage.removeItem("hamrobooks-admin-auth");
        localStorage.removeItem("hamrobooks-admin-user");
        router.push("/admin/login");
    };

    const logout = async () => {
        await signOut(auth);
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{
            isAdminAuthenticated,
            adminUser,
            loginAdmin,
            logoutAdmin,
            user,
            customerData,
            loading,
            logout
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
