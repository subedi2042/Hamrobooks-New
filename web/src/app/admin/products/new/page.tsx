"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function NewProductPage() {
    const router = useRouter();
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
        images: [] as string[]
    });

    const genres = ["Fiction", "Classics", "Poetry", "History", "Children", "Biography"];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddImage = () => {
        // Mocking an image upload by adding a placeholder
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
        if (formData.images.length === 0) {
            alert("Please add at least one book image.");
            return;
        }

        try {
            const productsRef = collection(db, "books");
            await addDoc(productsRef, {
                ...formData,
                price: parseFloat(formData.price),
                originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
                pages: parseInt(formData.pages) || null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });

            alert("Book successfully added to catalog!");
            router.push("/admin/products");
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Error saving book. Please try again.");
        }
    };

    return (
        <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <span className="material-icons">arrow_back</span>
                </button>
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Add New Book</h2>
                    <p className="text-slate-500 font-medium">Fill in the details below to add a new title to your inventory.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-slate-900">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Basic Information</h3>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Book Title (English)</label>
                                    <input
                                        required
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Muna Madan"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nepali Title (Original Keyboard)</label>
                                    <input
                                        name="nepaliTitle"
                                        value={formData.nepaliTitle}
                                        onChange={handleChange}
                                        placeholder="e.g. मुनामदन"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Author Name</label>
                                    <input
                                        required
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        placeholder="e.g. Laxmi Prasad Devkota"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 pt-4">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Synopsis / Description</label>
                                <textarea
                                    name="synopsis"
                                    value={formData.synopsis}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Enter a captivating description of the book..."
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                                />
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Specifications</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">ISBN</label>
                                    <input
                                        name="isbn"
                                        value={formData.isbn}
                                        onChange={handleChange}
                                        placeholder="978-..."
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Page Count</label>
                                    <input
                                        name="pages"
                                        type="number"
                                        value={formData.pages}
                                        onChange={handleChange}
                                        placeholder="240"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Organization</h3>

                            <div className="space-y-1.5">
                                <label htmlFor="genre-select" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Genre</label>
                                <select
                                    id="genre-select"
                                    name="genre"
                                    aria-label="Select Book Genre"
                                    title="Select Book Genre"
                                    value={formData.genre}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-slate-700"
                                >
                                    {genres.map(g => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Price (USD)</label>
                                    <input
                                        required
                                        name="price"
                                        type="number"
                                        step="0.01"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="18.99"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-primary"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Original Price (Mock line-through)</label>
                                    <input
                                        name="originalPrice"
                                        type="number"
                                        step="0.01"
                                        value={formData.originalPrice}
                                        onChange={handleChange}
                                        placeholder="24.00"
                                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-slate-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Book Images</h3>
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
                                        {index === 0 && (
                                            <div className="absolute bottom-0 inset-x-0 bg-primary/80 text-white text-[8px] font-black uppercase py-1 text-center">
                                                Main Cover
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddImage}
                                    className="aspect-[2/3] bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                                >
                                    <span className="material-icons text-4xl">add_photo_alternate</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Add Image</span>
                                </button>
                            </div>
                            <p className="text-[9px] text-slate-400 font-medium">You can upload up to 5 high-quality images. The first image will be used as the main cover.</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1a1a5a] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#1a1a5a]/20 hover:bg-[#2a2a7a] transition-all active:scale-[0.98] uppercase tracking-[0.2em] text-xs"
                        >
                            Publish Book
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
