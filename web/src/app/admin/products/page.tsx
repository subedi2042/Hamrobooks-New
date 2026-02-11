"use client";

import React, { useState } from "react";
import { books, Book } from "@/data/books";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InventoryPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isImporting, setIsImporting] = useState(false);

    const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsImporting(true);
        // Simulate parsing and importing
        setTimeout(() => {
            alert("CSV Detected: Successfully imported 125 new titles into the inventory!");
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
                            {filteredBooks.map((book) => (
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
                                        {/* Mock stock data */}
                                        <span className={Math.random() > 0.8 ? "text-orange-600 font-bold" : ""}>
                                            {Math.floor(Math.random() * 50) + 1} units
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 text-slate-900 text-base">
                                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
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
                        Showing {filteredBooks.length} of {books.length} Products
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
