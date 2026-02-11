"use client";

/**
 * BannerContext: Manages hero banners using Cloud Firestore for real-time updates.
 */
import React, { createContext, useContext, useState, useEffect } from "react";
import {
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    QuerySnapshot,
    DocumentData
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface HeroBanner {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    image: string;
    buttonText: string;
    link: string;
    status: "Active" | "Inactive";
}

interface BannerContextType {
    banners: HeroBanner[];
    addBanner: (banner: Omit<HeroBanner, "id">) => Promise<void>;
    updateBanner: (id: string, updates: Partial<HeroBanner>) => Promise<void>;
    deleteBanner: (id: string) => Promise<void>;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: React.ReactNode }) {
    const [banners, setBanners] = useState<HeroBanner[]>([]);

    useEffect(() => {
        // Listen to Firestore changes in real-time
        const q = query(collection(db, "banners"));
        const unsubscribe = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
            const data = snapshot.docs.map((d: any) => ({
                id: d.id,
                ...d.data()
            })) as HeroBanner[];
            setBanners(data);
        });

        return () => unsubscribe();
    }, []);

    const addBanner = async (banner: Omit<HeroBanner, "id">) => {
        try {
            await addDoc(collection(db, "banners"), banner);
        } catch (error) {
            console.error("Error adding banner: ", error);
        }
    };

    const updateBanner = async (id: string, updates: Partial<HeroBanner>) => {
        try {
            const bannerRef = doc(db, "banners", id);
            await updateDoc(bannerRef, updates);
        } catch (error) {
            console.error("Error updating banner: ", error);
        }
    };

    const deleteBanner = async (id: string) => {
        try {
            await deleteDoc(doc(db, "banners", id));
        } catch (error) {
            console.error("Error deleting banner: ", error);
        }
    };

    return (
        <BannerContext.Provider value={{ banners, addBanner, updateBanner, deleteBanner }}>
            {children}
        </BannerContext.Provider>
    );
}

export function useBanners() {
    const context = useContext(BannerContext);
    if (!context) throw new Error("useBanners must be used within a BannerProvider");
    return context;
}
