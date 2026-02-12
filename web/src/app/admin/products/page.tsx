"use client";

import React, { useState, useEffect } from "react";
import { books as staticBooks, Book } from "@/data/books";
import { motion } from "framer-motion";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function InventoryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isImporting, setIsImporting] = useState(false);
    const [books, setBooks] = useState<Book[]>(staticBooks);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Real-time listener for books collection
        const q = query(collection(db, "books"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const firestoreBooks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Book));

            if (firestoreBooks.length > 0) {
                setBooks(firestoreBooks);
            } else {
                setBooks(staticBooks);
            }
            setIsLoading(false);
        }, (error) => {
            console.error("Firestore error:", error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string, title: string) => {
        if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

        try {
            await deleteDoc(doc(db, "books", id));
            alert("Book deleted successfully!");
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Failed to delete book. It might not exist in the database.");
        }
    };

    const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);
        setTimeout(() => {
            alert("Bulk Import: Please use the Sync Database option in Settings to upload the new CSV data to Firestore.");
            setIsImporting(false);
        }, 2000);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Inventory</h2>
                    <p className="text-slate-500 font-medium">Manage your book catalog, pricing, and stock levels.</p>
                </div>
                <div className="flex gap-3">
                    <a
                        href="/inventory_template.csv"
                        download
                        className="bg-white border-2 border-slate-200 text-slate-400 font-black py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center hover:bg-slate-50 hover:text-slate-600"
                        title="Download CSV Template"
                    >
                        <span className="material-icons text-sm">download</span>
                    </a>
                    <label className="bg-white border-2 border-slate-200 text-slate-600 font-black py-3 px-6 rounded-xl shadow-sm transition-all flex items-center gap-2 w-fit cursor-pointer hover:bg-slate-50 uppercase tracking-widest text-[10px]">
                        <span className="material-icons text-sm">upload_file</span>
                        {isImporting ? "Processing..." : "Bulk Import (CSV)"}
                        <input
                            type="file"
                            accept=".csv"
                            className="hidden"
                            onChange={handleCSVUpload}
                            disabled={isImporting}
                        />
                    </label>
                    <Link
                        href="/admin/products/new"
                        className="bg-[#1a1a5a] text-white font-black py-3 px-6 rounded-xl shadow-lg shadow-[#1a1a5a]/20 transition-all flex items-center gap-2 w-fit uppercase tracking-widest text-[10px]"
                    >
                        <span className="material-icons text-sm">add</span>
                        Add New Book
                    </Link>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold flex items-center gap-2 hover:bg-slate-100">
                        <span className="material-icons text-lg">filter_list</span>
                        Genres
                    </button>
                    <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm font-bold flex items-center gap-2 hover:bg-slate-100">
                        <span className="material-icons text-lg">sort</span>
                        Sort
                    </button>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Product</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Author</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Genre</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Price</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Stock</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-20 text-center text-slate-400 font-black uppercase tracking-[0.2em] text-xs">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                            Synchronizing with Cloud...
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredBooks.map((book) => (
                                <tr key={book.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-14 bg-slate-100 rounded shadow-sm overflow-hidden flex-shrink-0">
                                                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{book.title}</p>
                                                <p className="text-[10px] text-slate-400 font-medium">ID: {book.id.toUpperCase()}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{book.author}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-widest">
                                            {book.genre}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900">${book.price.toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                        <span className={(!book.inventory || book.inventory <= 0) ? "text-orange-600 font-bold" : "text-slate-600"}>
                                            {book.inventory !== undefined ? `${book.inventory} units` : "0 units"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${(book.inventory && book.inventory > 0)
                                                ? "bg-green-50 text-green-600"
                                                : "bg-amber-50 text-amber-600"
                                            }`}>
                                            {(book.inventory && book.inventory > 0) ? "Active" : "Pre-Order"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 text-slate-900 text-base">
                                            <Link href={`/admin/products/${book.id}/edit`} className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-icons">edit</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(book.id, book.title)}
                                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                                title="Delete Book"
                                            >
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredBooks.length === 0 && (
                    <div className="py-20 text-center">
                        <span className="material-icons text-6xl text-slate-200 mb-4">search_off</span>
                        <p className="text-slate-500 font-medium">No products found matching your search.</p>
                    </div>
                )}

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        {isLoading ? "Fetching data..." : `Showing ${filteredBooks.length} of ${books.length} Products`}
                    </p>
                    <div className="flex gap-2">
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors" disabled>
                            <span className="material-icons">chevron_left</span>
                        </button>
                        <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                            <span className="material-icons">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
