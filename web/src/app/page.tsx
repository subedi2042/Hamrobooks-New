"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useBanners } from "@/context/BannerContext";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All Genres");
    const { banners } = useBanners();

    const activeBanner = banners.find((b: any) => b.status === "Active") || banners[0];

    const genres = ["All Genres", "Classics", "Fiction", "Poetry", "History"];

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesSearch =
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesGenre =
                selectedGenre === "All Genres" || book.genre === selectedGenre;
            return matchesSearch && matchesGenre;
        });
    }, [searchQuery, selectedGenre]);

    const authors = [
        {
            name: "L.P. Devkota",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIZLzCfiQMWSsvu5_eFw2Dl0NqpvLVPgdOAsp6IK7DoQ94mdG2x7JwGHUn7rVdX9wxJL51pKNYRIhNe0NifCnl-V5yHIy1MNijrhY7W-eNv6MN2SGvTFhGYrcbYyOuYGkMh8Ajh3Jd896kcSZxHZEOHAPhYFwHrRG4SwQwVY_vQpM1I4a3MV4BjWyDp-yLUHjoyou9g7em69dkUHO6QKykKFp_8XTVgbC9KpZ9WURTUbV05pGThEJbVXf-OMrobV9Tq_zyXboyWPI",
            highlighted: true,
        },
        {
            name: "Parijat",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqx5r-2eyFKjhbamLcgxmZmNpZONIsJsGxHzJ0JsQDQgFGf3lAiDbk8TIM8D7VB17dfCiQHrhMMMwtDXGQofqr-5kyX7OMddKExm994_aABA_umz-6IwxAZkPT0DSxPig4s6madBw6jc7VaoEirgT4aHWInNd-T_bQnJ_4yaSp7IzkFM9WEqurA7oLiIY6pNq8ST8d63KjBwr8VULEQLw_qQnhEQFZxlVgZJ54p_Nf9H3uUEFy2niaYKL_lWNbezqZL8Kx-HqHDaE",
        },
        {
            name: "B.P. Koirala",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVGaT3qYx4E01N3T5MHy2OrieXpO9rOWT3wZWQGgb7h4tEoKBtyt76ICpe3TtcSURwRcYyRVyUUXQZuTGMsoZFOrbOOR0a9kp1mdMXzyzdR6RdrQAeolG3pTtAH5K0_R7C96LkStbEAFF52a6uYOLiJe_MMG-om4nUKwBaDqUXCP0oZD_R1__zhVSy22clyp2K1k3Br9-6xvvsz0Zp3DiMaTe_VIG4gvUgn3R19gBc3j_p9L6GmWhWndDbB6RJV2bC2Gr1fawOT_A",
        },
        {
            name: "Jhamak Ghimire",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD3MTnPK2lNSN0QaG7axgD_9mKdDSotrVD1Bo_FmuvpLHMFmnZnO7hZ_vLch3e2RdsyUoBHS1s_Ee70llRuCzP1sK7vzIfN-PeH3Z3ynPteVWcSlIP-VSysUJ2zLQEoyS_qbCiFe2QR0ukOKJyhZOPCwkiVFJK8EXGYHJttHTgQO6a5vA_6tBHLvb8mcQufVQ_Gsal_fI1gLLTxI4bdVLuwte12dDfoXITwrtiREh8Qa9pKH3j7jQmkiYijU-OvxmIsvWGcENBbbE",
        },
    ];

    return (
        <div className="min-h-screen bg-bg-light selection:bg-primary/30 pb-24">
            <Header onSearch={setSearchQuery} />

            <main>
                {!searchQuery && activeBanner && (
                    <section className="px-4 py-5">
                        <motion.div
                            key={activeBanner.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative h-60 rounded-3xl overflow-hidden group shadow-2xl border border-slate-200"
                        >
                            <img
                                className="w-full h-full object-cover"
                                alt={activeBanner.title}
                                src={activeBanner.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-8">
                                <span className="text-primary font-black text-[9px] tracking-[0.2em] uppercase mb-1.5 antialiased">
                                    {activeBanner.badge}
                                </span>
                                <h2 className="text-3xl font-black text-white mb-2 leading-none tracking-tighter">
                                    {activeBanner.title} <br />
                                    <span className="text-primary">{activeBanner.subtitle}</span>
                                </h2>
                                <p className="text-slate-300 text-[11px] mb-6 max-w-[240px] leading-relaxed font-medium">
                                    {activeBanner.description}
                                </p>
                                <button className="bg-primary hover:bg-[#e68a00] text-white text-[10px] font-black tracking-widest px-8 py-3 rounded-xl w-fit shadow-xl shadow-primary/30 transition-all active:scale-95 uppercase">
                                    {activeBanner.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    </section>
                )}

                <section className="py-2">
                    {!searchQuery && (
                        <div className="flex items-center justify-between px-4 mb-3">
                            <h3 className="font-bold text-lg text-slate-dark">Popular Genres</h3>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider cursor-pointer">
                                View All
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-2 overflow-x-auto px-4 pb-4 hide-scrollbar">
                        {genres.map((genre) => (
                            <button
                                key={genre}
                                onClick={() => setSelectedGenre(genre)}
                                className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedGenre === genre
                                    ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                                    : "bg-white text-slate-500 border border-slate-100 hover:border-primary/30"
                                    }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="px-4 py-4">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="font-bold text-lg text-slate-dark decoration-primary decoration-4 underline-offset-8">
                            {searchQuery ? `Search Results for "${searchQuery}"` : "Featured Collection"}
                        </h3>
                        {filteredBooks.length > 0 && (
                            <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-widest">
                                {filteredBooks.length} Books
                            </span>
                        )}
                    </div>

                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <span className="material-icons text-6xl text-slate-200 mb-4">search_off</span>
                            <p className="text-slate-500 font-medium">No books found matching your search.</p>
                        </div>
                    )}
                </section>

                {!searchQuery && (
                    <section className="py-8 bg-slate-50 mt-8">
                        <div className="px-4 mb-6">
                            <h3 className="font-bold text-lg text-slate-dark">Renowned Authors</h3>
                            <p className="text-xs text-slate-500">Discover masters of Nepali literature</p>
                        </div>
                        <div className="flex gap-4 overflow-x-auto px-4 pb-4 hide-scrollbar">
                            {authors.map((author, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3 min-w-[80px]">
                                    <div className={`w-16 h-16 rounded-2xl overflow-hidden shadow-md ring-2 ${author.highlighted ? 'ring-primary' : 'ring-white'}`}>
                                        <img src={author.img} alt={author.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-700 text-center leading-tight">{author.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
