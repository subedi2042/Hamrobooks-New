import { collection, addDoc, getDocs, deleteDoc, doc, writeBatch } from "firebase/firestore";
import { db } from "./firebase";
import { books as CSV_BOOKS } from "@/data/books";

function stripHtml(html: string) {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .trim();
}

const BANNERS = [
    {
        badge: "FREE SHIPPING THROUGHOUT USA",
        title: "Authentic Literature",
        subtitle: "Books in USA & Shipped from USA",
        description: "All books are stocked in the USA for fast delivery. Enjoy free shipping on all orders nationwide.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL39EycD7R3ERH8pvVB1kojXX42VS09SkEyzyedKOut4wJcPKYGk1M4DIZULLpMZuxYZ_nH_dgkkTHD0RoMkbZpk-YhP3pFLHErG-7I6wl4u2gUriW2tJCPe64KfT4ud5I1ge377cE7j-JG_PIh3NCKzd56e-ESNi2qE_uKq-zZQrSTCdsjpJ3Pb-MFKgITuB20tyIqDBML8lkkIvTjyLO4EmmPqX8CMqQ-N3ccst8PAY-VmbUdmXIDhYqWZZEXGjlffmfVzqFEXs",
        buttonText: "EXPLORE COLLECTION",
        link: "/collection/featured",
        status: "Active"
    }
];

const COLLECTIONS = [
    { name: "Featured Collection", description: "Main homepage picks", bookIds: ["1", "2", "3"], lastUpdated: new Date().toISOString() },
    { name: "Staff Picks", description: "Hand-picked by our editors", bookIds: ["4", "5"], lastUpdated: new Date().toISOString() },
    { name: "Bestsellers", description: "Top selling titles", bookIds: ["1", "4"], lastUpdated: new Date().toISOString() },
];

const PROMOS = [
    { code: "NAMASTE20", discount: "20%", usage: 142, status: "Active" },
    { code: "HAMROBOOKS10", discount: "10%", usage: 89, status: "Active" },
];

export async function clearCollection(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const batch = writeBatch(db);
    snapshot.docs.forEach((d) => {
        batch.delete(d.ref);
    });
    await batch.commit();
    console.log(`Cleared ${collectionName} collection`);
}

export async function seedDatabase(forceRefresh = false) {
    // Books
    const bookSnapshot = await getDocs(collection(db, "books"));
    if (bookSnapshot.empty || forceRefresh) {
        if (forceRefresh) await clearCollection("books");
        console.log(`Seeding ${CSV_BOOKS.length} books...`);
        // Batch upload books (max 500 per batch)
        let count = 0;
        let batch = writeBatch(db);

        for (const book of CSV_BOOKS) {
            const bookRef = doc(collection(db, "books"));
            batch.set(bookRef, {
                ...book,
                synopsis: stripHtml(book.synopsis || ""),
                createdAt: new Date().toISOString()
            });
            count++;

            if (count % 400 === 0) {
                await batch.commit();
                batch = writeBatch(db);
            }
        }
        await batch.commit();
        console.log("Books seeded!");
    }

    const bannerSnapshot = await getDocs(collection(db, "banners"));
    if (bannerSnapshot.empty || forceRefresh) {
        if (forceRefresh) await clearCollection("banners");
        for (const banner of BANNERS) {
            await addDoc(collection(db, "banners"), banner);
        }
        console.log("Banners seeded!");
    }

    const collectionSnapshot = await getDocs(collection(db, "collections"));
    if (collectionSnapshot.empty || forceRefresh) {
        if (forceRefresh) await clearCollection("collections");
        for (const col of COLLECTIONS) {
            await addDoc(collection(db, "collections"), col);
        }
        console.log("Collections seeded!");
    }

    const promoSnapshot = await getDocs(collection(db, "promos"));
    if (promoSnapshot.empty || forceRefresh) {
        if (forceRefresh) await clearCollection("promos");
        for (const promo of PROMOS) {
            await addDoc(collection(db, "promos"), promo);
        }
        console.log("Promos seeded!");
    }
}

