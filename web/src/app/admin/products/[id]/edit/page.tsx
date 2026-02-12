"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { books } from "@/data/books";
import { doc, getDoc, updateDoc, getDocFromServer } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        nepaliTitle: "",
        author: "",
        genre: "Fiction",
        price: "",
        originalPrice: "",
        isbn: "",
        pages: "",
        language: "Nepali",
        format: "Paperback",
        synopsis: "",
        inventory: "",
        images: [] as string[]
    });

    const genres = ["Fiction", "Classics", "Poetry", "History", "Children", "Biography", "Stories", "Short Stories"];

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) return;
            setIsLoading(true);
            try {
                const docRef = doc(db, "books", id);
                let docSnap;

                try {
                    docSnap = await getDoc(docRef);
                } catch (err) {
                    console.warn("Retrying fetch from server...", err);
                    docSnap = await getDocFromServer(docRef);
                }

                if (docSnap && docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        title: data.title || "",
                        nepaliTitle: data.nepaliTitle || "",
                        author: data.author || "",
                        genre: data.genre || "Fiction",
                        price: data.price?.toString() || "",
                        originalPrice: data.originalPrice?.toString() || "",
                        isbn: data.isbn || "",
                        pages: data.pages?.toString() || "",
                        language: data.language || "Nepali",
                        format: data.format || "Paperback",
                        synopsis: data.synopsis || "",
                        inventory: data.inventory?.toString() || "0",
                        images: data.images || [data.image].filter(Boolean) || []
                    });
                } else {
                    // Fallback to static data if not in Firestore yet
                    const staticBook = books.find(b => b.id === id);
                    if (staticBook) {
                        setFormData({
                            title: staticBook.title,
                            nepaliTitle: staticBook.nepaliTitle || "",
                            author: staticBook.author,
                            genre: staticBook.genre || "Fiction",
                            price: staticBook.price.toString(),
                            originalPrice: staticBook.originalPrice?.toString() || "",
                            isbn: (staticBook as any).isbn || "",
                            pages: staticBook.pages?.toString() || "",
                            language: staticBook.language || "Nepali",
                            format: staticBook.format || "Paperback",
                            synopsis: staticBook.synopsis || "",
                            inventory: (staticBook as any).inventory?.toString() || "0",
                            images: staticBook.images || [staticBook.image].filter(Boolean) || []
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching book:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddImage = () => {
        const placeholderImages = [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
            "https://images.unsplash.com/photo-1543004218-ee1411bc0e53?q=80&w=800"
        ];
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        setFormData(prev => ({ ...prev, images: [...prev.images, randomImage] }));
    };

    const removeImage = (index: number) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const docRef = doc(db, "books", id);
            const cleanedSynopsis = stripHtml(formData.synopsis);
            await updateDoc(docRef, {
                ...formData,
                synopsis: cleanedSynopsis,
                price: parseFloat(formData.price),
                originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
                pages: parseInt(formData.pages) || null,
                inventory: parseInt(formData.inventory) || 0,
                updatedAt: new Date().toISOString()
            });
            alert("Book updated successfully!");
            router.push("/admin/products");
        } catch (error) {
            console.error("Error updating book:", error);
            alert("Error updating book. Make sure the book exists in Firestore.");
        }
    };

    const stripHtml = (html: string) => {
        if (!html) return "";
        return html.replace(/<[^>]*>?/gm, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .trim();
    };

    const handleCleanSynopsis = () => {
        setFormData(prev => ({ ...prev, synopsis: stripHtml(prev.synopsis) }));
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-20 space-y-4">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <p className="font-black text-slate-400 uppercase tracking-widest animate-pulse">Fetching book details...</p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl space-y-8 pb-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-2xl text-slate-400 hover:text-primary transition-all shadow-sm border border-slate-100"
                    >
                        <span className="material-icons">arrow_back</span>
                    </button>
                    <div>
                        <h2 className="text-4xl font-black text-[#1a1a5a] tracking-tight">Edit Book</h2>
                        <p className="text-slate-500 font-medium">Refining: <span className="text-primary font-bold">{formData.title}</span></p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => router.push("/admin/products")}
                        className="px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        form="edit-book-form"
                        type="submit"
                        className="px-8 py-3 bg-[#1a1a5a] text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:bg-[#2a2a7a] active:scale-95 transition-all"
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            <form id="edit-book-form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Basic Information
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="book-title" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title (English)</label>
                                    <input
                                        id="book-title"
                                        required
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Enter the English title"
                                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-bold text-slate-700"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="nepali-title" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nepali Title</label>
                                        <input
                                            id="nepali-title"
                                            name="nepaliTitle"
                                            value={formData.nepaliTitle}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-hindi font-medium text-slate-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="author-name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Author Name</label>
                                        <input
                                            id="author-name"
                                            required
                                            name="author"
                                            value={formData.author}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-bold text-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Synopsis Editor */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    Book Synopsis
                                </h3>
                                <button
                                    type="button"
                                    onClick={handleCleanSynopsis}
                                    className="text-[9px] font-black uppercase tracking-widest text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20 transition-all flex items-center gap-1"
                                >
                                    <span className="material-icons text-xs">auto_fix_high</span>
                                    Strip HTML
                                </button>
                            </div>

                            <textarea
                                id="book-synopsis"
                                name="synopsis"
                                value={formData.synopsis}
                                onChange={handleChange}
                                rows={10}
                                placeholder="Write the book description here..."
                                className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-medium text-slate-600 leading-relaxed resize-none"
                            />
                            <p className="text-[10px] text-slate-400 font-medium italic">HTML tags will be automatically removed when saving or using the 'Strip HTML' tool.</p>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-6">
                        {/* Specifications */}
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Specifications</h3>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="genre-select" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Genre</label>
                                    <select
                                        id="genre-select"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl px-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-black text-slate-700 appearance-none"
                                    >
                                        {genres.map(g => <option key={g} value={g}>{g}</option>)}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="book-price" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Price (USD)</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400">$</span>
                                        <input
                                            id="book-price"
                                            required
                                            name="price"
                                            type="number"
                                            step="0.01"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl pl-10 pr-5 py-4 focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all font-black text-primary text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="space-y-2">
                                        <label htmlFor="book-isbn" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ISBN</label>
                                        <input
                                            id="book-isbn"
                                            name="isbn"
                                            value={formData.isbn}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 outline-none text-xs font-bold"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="book-pages" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pages</label>
                                        <input
                                            id="book-pages"
                                            name="pages"
                                            type="number"
                                            value={formData.pages}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 outline-none text-xs font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <label htmlFor="book-inventory" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Stock Level (Inventory)</label>
                                    <input
                                        id="book-inventory"
                                        name="inventory"
                                        type="number"
                                        value={formData.inventory}
                                        onChange={handleChange}
                                        placeholder="Use -1 for Pre-Order"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 outline-none text-xs font-bold text-primary"
                                    />
                                    <p className="text-[9px] text-slate-400 italic">Use -1 to indicate an out-of-stock book available for Pre-Order.</p>
                                </div>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Media</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {formData.images.map((img, index) => (
                                    <div key={index} className="aspect-[2/3] bg-slate-50 rounded-2xl relative group overflow-hidden border border-slate-100">
                                        <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <span className="material-icons text-xs">close</span>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddImage}
                                    className="aspect-[2/3] bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                                >
                                    <span className="material-icons text-3xl">add_photo_alternate</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
