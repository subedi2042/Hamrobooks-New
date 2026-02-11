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
        <div className="bg-bg-light min-h-screen pb-32">
            <Header onSearch={setSearchQuery} />

            <main className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Hero Header for Discover */}
                <section className="py-8 md:py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-black text-[#1a1a5a] tracking-tighter">
                                Discover <span className="text-primary italic">Treasures</span>
                            </h1>
                            <p className="text-slate-400 text-sm md:text-lg font-bold uppercase tracking-widest">
                                EXPLORE {filteredBooks.length} NEPALI TITLES IN THE USA
                            </p>
                        </div>

                        {/* Search Status & Filter Btn (Desktop) */}
                        <div className="hidden md:flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-200">
                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{filteredBooks.length} Results</span>
                            </div>
                            <button className="flex items-center gap-3 px-6 py-3 bg-[#1a1a5a] text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-xl shadow-blue-900/10">
                                <span className="material-icons text-sm">tune</span>
                                Advanced Filters
                            </button>
                        </div>
                    </div>

                    {/* Genre Filter Bar - Horizontal Scroller for all screens but constrained on desktop */}
                    <div className="sticky top-[120px] md:top-[100px] z-30 bg-bg-light/80 backdrop-blur-xl py-6 -mx-4 px-4 overflow-hidden border-b border-slate-100/50">
                        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar md:flex-wrap md:justify-center">
                            {genres.map((genre) => (
                                <button
                                    key={genre}
                                    onClick={() => setSelectedGenre(genre)}
                                    className={`px-6 md:px-8 py-3.5 rounded-2xl text-[10px] md:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap active:scale-95 ${selectedGenre === genre
                                        ? "bg-[#1a1a5a] text-white shadow-2xl shadow-blue-900/20 scale-105"
                                        : "bg-white text-slate-500 border border-slate-100 hover:border-primary/30 hover:shadow-lg"
                                        }`}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Collection Grid */}
                <section className="pb-24">
                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-20">
                            {filteredBooks.map((book) => (
                                <motion.div
                                    key={book.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <BookCard book={book} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-32 text-center bg-white rounded-[3rem] border border-slate-100 shadow-sm mx-4">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-slate-300 text-4xl">auto_stories</span>
                            </div>
                            <h3 className="text-xl font-black text-[#1a1a5a] mb-2">No masterpieces found</h3>
                            <p className="text-slate-400 font-medium">Try adjusting your filters or search keywords.</p>
                            <button
                                onClick={() => { setSelectedGenre("All"); setSearchQuery(""); }}
                                className="mt-8 text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary pb-1"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </section>
            </main>

            <BottomNav />
        </div>
    );
}
