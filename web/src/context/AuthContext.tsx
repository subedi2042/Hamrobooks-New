"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AdminUser {
    name: string;
    id: string;
    avatar?: string;
}

interface AuthContextType {
    isAdminAuthenticated: boolean;
    adminUser: AdminUser | null;
    login: (name: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
    const router = useRouter();

    // Check if user was previously authenticated on mount
    useEffect(() => {
        const authStatus = localStorage.getItem("hamrobooks-admin-auth");
        const savedUser = localStorage.getItem("hamrobooks-admin-user");
        if (authStatus === "true" && savedUser) {
            setIsAdminAuthenticated(true);
            setAdminUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (name: string, password: string) => {
        const admins = [
            { name: "Dipendra Subedi", password: "Admin123", id: "admin-1" },
            { name: "Sanjay Guragain", password: "Admin456", id: "admin-2" }
        ];

        const user = admins.find(a => a.name.toLowerCase() === name.toLowerCase() && a.password === password);

        if (user) {
            const userData = { name: user.name, id: user.id };
            setIsAdminAuthenticated(true);
            setAdminUser(userData);
            localStorage.setItem("hamrobooks-admin-auth", "true");
            localStorage.setItem("hamrobooks-admin-user", JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdminAuthenticated(false);
        setAdminUser(null);
        localStorage.removeItem("hamrobooks-admin-auth");
        localStorage.removeItem("hamrobooks-admin-user");
        router.push("/admin/login");
    };

    return (
        <AuthContext.Provider value={{ isAdminAuthenticated, adminUser, login, logout }}>
            {children}
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
