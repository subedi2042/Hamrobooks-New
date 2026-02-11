"use client";

import React, { useState, useMemo } from "react";
import BottomNav from "@/components/BottomNav";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function DiscoverPage() {
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const genres = ["All", "Classics", "Fiction", "Poetry", "History", "Children"];

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesSearch =
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesGenre =
                selectedGenre === "All" || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });
    }, [searchQuery, selectedGenre]);

    return (
        <div className="bg-white min-h-screen pb-32">
            <Header onSearch={setSearchQuery} />

            <div className="sticky top-[168px] md:top-[120px] z-30 bg-white/95 backdrop-blur-sm pt-4 pb-2 border-b border-slate-50 shadow-sm">
                <div className="flex items-center gap-2 overflow-x-auto px-4 hide-scrollbar">
                    <button className="flex items-center gap-1 px-4 py-2.5 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 whitespace-nowrap">
                        <span className="material-icons text-sm">tune</span>
                        Filters
                    </button>
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => setSelectedGenre(genre)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedGenre === genre
                                ? "bg-slate-900 text-white"
                                : "bg-slate-50 text-slate-500 border border-slate-100"
                                }`}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
                <div className="px-4 mt-4 pb-2 flex justify-between items-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">
                        {filteredBooks.length} Books available in USA
                    </p>
                    <h1 className="text-xs font-black text-slate-900 uppercase tracking-widest">Discover Collection</h1>
                </div>
            </div>

            <main className="px-4 py-6">
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div className="py-24 text-center">
                        <span className="material-icons text-slate-200 text-6xl mb-4">auto_stories</span>
                        <p className="text-slate-400 font-bold">No books found in this category.</p>
                    </div>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
