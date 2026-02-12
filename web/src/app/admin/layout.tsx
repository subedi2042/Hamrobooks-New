"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const { isAdminAuthenticated, logout, adminUser } = useAuth();

    // Protection logic
    useEffect(() => {
        if (!isAdminAuthenticated && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [isAdminAuthenticated, pathname, router]);

    // Don't show layout on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    if (!isAdminAuthenticated) {
        return null; // Or a loading spinner
    }

    const navItems = [
        { name: "Dashboard", href: "/admin", icon: "dashboard" },
        { name: "Inventory", href: "/admin/products", icon: "inventory_2" },
        { name: "Orders", href: "/admin/orders", icon: "shopping_cart" },
        { name: "Reviews Hub", href: "/admin/reviews", icon: "rate_review" },
        { name: "Promotions", href: "/admin/promotions", icon: "campaign" },
        { name: "Customers", href: "/admin/customers", icon: "people" },
        { name: "Notifications", href: "/admin/notifications", icon: "notifications_active" },
        { name: "Settings", href: "/admin/settings", icon: "settings" },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1a1a5a] text-white hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-8 pb-4">
                    <Link href="/" className="flex items-center gap-3 group">
                        <img
                            src="/images/Hamrobooks-logo.png"
                            alt="HamroBooks"
                            className="h-10 w-auto object-contain"
                        />
                        <div>
                            <span className="text-xl font-black tracking-tighter leading-none block">
                                Hamro<span className="text-primary">Admin</span>
                            </span>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                                Bookstore Control
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Profile Section */}
                <div className="px-6 py-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-white shadow-lg">
                            {adminUser?.name[0]}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-black truncate">{adminUser?.name}</p>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-[#6c6c9a]">Online Now</span>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <span className="material-icons text-xl">{item.icon}</span>
                                <span className="text-sm font-bold">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-white/5">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white transition-colors group"
                    >
                        <span className="material-icons text-xl group-hover:text-red-400">logout</span>
                        <span className="text-sm font-bold">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="md:hidden flex items-center gap-2">
                            <img
                                src="/images/Hamrobooks-logo.png"
                                alt="HamroBooks"
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <h1 className="text-lg font-bold text-slate-800">
                            {navItems.find((n) => n.href === pathname)?.name || "Admin"}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/notifications" className="p-2 text-slate-400 hover:text-slate-600 relative active:scale-95 transition-all">
                            <span className="material-icons">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
                        </Link>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-black text-slate-900 leading-none">{adminUser?.name}</p>
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Super Admin</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center font-black text-primary text-xs">
                                {adminUser?.name[0]}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
