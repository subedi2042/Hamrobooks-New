"use client";

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

export interface BookCollection {
    id: string;
    name: string;
    description: string;
    bookIds: string[];
    lastUpdated: string;
}

export interface PromoCode {
    id: string;
    code: string;
    discount: string;
    usage: number;
    status: "Active" | "Expired";
    startDate?: string;
    endDate?: string;
}

interface PromoContextType {
    collections: BookCollection[];
    promoCodes: PromoCode[];
    updateCollection: (id: string, updates: Partial<BookCollection>) => Promise<void>;
    addPromoCode: (code: Omit<PromoCode, "id" | "usage">) => Promise<void>;
    updatePromoCode: (id: string, updates: Partial<PromoCode>) => Promise<void>;
    deletePromoCode: (id: string) => Promise<void>;
}

const PromoContext = createContext<PromoContextType | undefined>(undefined);

export function PromoProvider({ children }: { children: React.ReactNode }) {
    const [collections, setCollections] = useState<BookCollection[]>([]);
    const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);

    useEffect(() => {
        const qCollections = query(collection(db, "collections"));
        const unsubCollections = onSnapshot(qCollections, (snapshot: QuerySnapshot<DocumentData>) => {
            const data = snapshot.docs.map((d: any) => ({
                id: d.id,
                ...d.data()
            })) as BookCollection[];
            setCollections(data);
        });

        // Real-time synchronization for Promo Codes
        const qPromos = query(collection(db, "promos"));
        const unsubPromos = onSnapshot(qPromos, (snapshot: QuerySnapshot<DocumentData>) => {
            const data = snapshot.docs.map((d: any) => ({
                id: d.id,
                ...d.data()
            })) as PromoCode[];
            setPromoCodes(data);
        });

        return () => {
            unsubCollections();
            unsubPromos();
        };
    }, []);

    const updateCollection = async (id: string, updates: Partial<BookCollection>) => {
        try {
            const docRef = doc(db, "collections", id);
            await updateDoc(docRef, { ...updates, lastUpdated: new Date().toISOString() });
        } catch (error) {
            console.error("Error updating collection: ", error);
        }
    };

    const addPromoCode = async (code: Omit<PromoCode, "id" | "usage">) => {
        try {
            await addDoc(collection(db, "promos"), { ...code, usage: 0 });
        } catch (error) {
            console.error("Error adding promo code: ", error);
        }
    };

    const updatePromoCode = async (id: string, updates: Partial<PromoCode>) => {
        try {
            const docRef = doc(db, "promos", id);
            await updateDoc(docRef, updates);
        } catch (error) {
            console.error("Error updating promo code: ", error);
        }
    };

    const deletePromoCode = async (id: string) => {
        try {
            await deleteDoc(doc(db, "promos", id));
        } catch (error) {
            console.error("Error deleting promo code: ", error);
        }
    };

    return (
        <PromoContext.Provider value={{ collections, promoCodes, updateCollection, addPromoCode, updatePromoCode, deletePromoCode }}>
            {children}
        </PromoContext.Provider>
    );
}

export function usePromos() {
    const context = useContext(PromoContext);
    if (!context) throw new Error("usePromos must be used within a PromoProvider");
    return context;
}
