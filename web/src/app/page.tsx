"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { books } from "@/data/books";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

            <main className="max-w-7xl mx-auto">
                {!searchQuery && activeBanner && (
                    <section className="px-4 py-6 md:py-10">
                        <motion.div
                            key={activeBanner.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative min-h-[380px] md:h-[400px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl border border-slate-200"
                        >
                            <img
                                className="w-full h-full absolute inset-0 object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
                                alt={activeBanner.title}
                                src={activeBanner.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-start px-6 md:px-20 py-10 md:py-16">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-primary font-black text-[9px] md:text-[11px] tracking-[0.2em] uppercase mb-2 md:mb-4 antialiased"
                                >
                                    {activeBanner.badge}
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 leading-tight tracking-tighter"
                                >
                                    {activeBanner.title} <br />
                                    <span className="text-primary italic">{activeBanner.subtitle}</span>
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-8 md:mb-10 space-y-2 bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-white/10 w-fit"
                                >
                                    <p className="text-white text-sm md:text-lg font-bold tracking-tight leading-tight">
                                        "Bringing Nepali stories home, <br className="md:hidden" /> wherever home is."
                                    </p>
                                    <p className="text-primary text-[10px] md:text-sm font-bold">
                                        "नेपाली कथाहरूलाई घर ल्याउँदै, जहाँ पनि घर होस्।"
                                    </p>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-slate-300 text-[11px] md:text-sm mb-8 md:mb-12 max-w-[240px] md:max-w-md leading-relaxed font-medium line-clamp-2 md:line-clamp-none"
                                >
                                    {activeBanner.description}
                                </motion.p>
                                <Link href="#featured-books" className="mt-4 md:mt-8 mb-4 md:mb-0">
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-primary hover:bg-[#e68a00] text-white text-[9px] md:text-[10px] font-black tracking-widest px-6 md:px-10 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl w-fit shadow-xl shadow-primary/30 transition-all active:scale-95 uppercase"
                                    >
                                        {activeBanner.buttonText}
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                )}

                {!searchQuery && !activeBanner && (
                    <section className="px-4 py-6 md:py-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative min-h-[380px] md:h-[400px] rounded-[2rem] md:rounded-[3.5rem] bg-[#1a1a5a] overflow-hidden group shadow-2xl border border-slate-200 flex flex-col justify-start px-6 md:px-20 py-10 md:py-16"
                        >
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <img
                                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000"
                                    className="w-full h-full object-cover grayscale"
                                    alt="Background"
                                />
                            </div>
                            <div className="relative z-10">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-primary font-black text-[9px] md:text-[11px] tracking-[0.2em] uppercase mb-1 md:mb-2 antialiased"
                                >
                                    Our Mission
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-lg md:text-2xl font-black text-white mb-3 md:mb-6 leading-none tracking-tighter"
                                >
                                    Authentic <span className="text-primary italic">Nepali Literature</span>
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-4 md:mb-6 space-y-1 bg-white/5 backdrop-blur-md p-3 md:p-5 rounded-[1.25rem] md:rounded-[1.75rem] border border-white/10 w-fit shadow-2xl"
                                >
                                    <p className="text-white text-xs md:text-sm font-bold tracking-tight leading-tight">
                                        "Bringing Nepali stories home, <br className="md:hidden" /> wherever home is."
                                    </p>
                                    <p className="text-primary text-[8px] md:text-[10px] font-bold">
                                        "नेपाली कथाहरूलाई घर ल्याउँदै, जहाँ पनि घर होस्।"
                                    </p>
                                </motion.div>

                                <Link href="#featured-books" className="mt-4 md:mt-8 mb-4 md:mb-0">
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-primary hover:bg-[#e68a00] text-white text-[9px] md:text-[10px] font-black tracking-widest px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl w-fit shadow-xl shadow-primary/30 transition-all active:scale-95 uppercase"
                                    >
                                        Explore Collection
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                )}

                <section className="py-2 md:py-8">
                    {!searchQuery && (
                        <div className="flex items-center justify-between px-4 mb-4 md:mb-8">
                            <h3 className="font-black text-xl md:text-3xl text-slate-dark tracking-tighter">Popular Genres</h3>
                            <button className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                                Explore All
                            </button>
                        </div>
                    )}

                    <div className="flex items-center gap-3 overflow-x-auto px-4 pb-4 hide-scrollbar md:flex-wrap md:justify-start">
                        {genres.map((genre) => (
                            <button
                                key={genre}
                                onClick={() => setSelectedGenre(genre)}
                                className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-[1.25rem] text-[10px] md:text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap ${selectedGenre === genre
                                    ? "bg-[#1a1a5a] text-white shadow-xl shadow-blue-900/20 scale-105"
                                    : "bg-white text-slate-500 border border-slate-100 hover:border-primary/30 hover:shadow-lg"
                                    }`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </section>

                <section id="featured-books" className="px-4 py-8 md:py-16 scroll-mt-20">
                    <div className="flex items-center justify-between mb-8 md:mb-12">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-black text-xl md:text-4xl text-[#1a1a5a] tracking-tighter">
                                {searchQuery ? `Search Results for "${searchQuery}"` : "Featured Collection"}
                            </h3>
                            {!searchQuery && <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Handpicked for you this week</p>}
                        </div>
                        {filteredBooks.length > 0 && (
                            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                                <span className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest">
                                    {filteredBooks.length}
                                </span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Books</span>
                            </div>
                        )}
                    </div>

                    {filteredBooks.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16">
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
                    <section className="px-4 py-12 md:py-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-6 md:space-y-8"
                        >
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                            <h2 className="text-2xl md:text-5xl font-black text-[#1a1a5a] tracking-tighter leading-tight">
                                Across miles and memories, <br />
                                <span className="text-primary italic">Nepali stories find their way to you.</span>
                            </h2>
                            <p className="text-xl md:text-3xl font-bold text-slate-400">
                                "दूरी र सम्झनाहरू पार गर्दै, नेपाली कथाहरू तपाईंको नजिक आइपुग्छन्।"
                            </p>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                        </motion.div>
                    </section>
                )}

                {!searchQuery && (
                    <section className="py-12 md:py-24 bg-slate-50/50 mt-12 md:mt-24 rounded-[3rem] md:rounded-[5rem] mx-4 border border-slate-100">
                        <div className="px-4 mb-8 md:mb-16 text-center">
                            <h3 className="font-black text-xl md:text-5xl text-[#1a1a5a] tracking-tighter mb-2">Heritage <span className="text-primary italic">Authors</span></h3>
                            <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-[0.2em]">Curating the giants of Nepali literature</p>
                        </div>
                        <div className="flex gap-6 md:gap-12 overflow-x-auto px-8 pb-8 hide-scrollbar md:justify-center">
                            {authors.map((author, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="flex flex-col items-center gap-4 min-w-[100px] md:min-w-[180px] group"
                                >
                                    <div className={`w-20 h-20 md:w-32 md:h-32 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all ${author.highlighted ? 'ring-4 ring-primary shadow-primary/20' : 'ring-4 ring-white shadow-slate-200'}`}>
                                        <img
                                            src={author.img}
                                            alt={author.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xs md:text-lg font-black text-[#1a1a5a] block mb-1">{author.name}</span>
                                        <span className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity italic">View Collections</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* New Author Success Promotion */}
                {!searchQuery && (
                    <section className="px-4 py-16 md:py-32">
                        <Link href="/authors-success">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="relative min-h-[380px] md:h-[400px] rounded-[3rem] md:rounded-[4.5rem] overflow-hidden group shadow-3xl cursor-pointer border border-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                                    alt="Authors"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a5a] via-[#1a1a5a]/80 to-transparent p-10 md:p-24 flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="space-y-4 md:space-y-8"
                                    >
                                        <span className="bg-primary text-white font-black text-[9px] md:text-[11px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full w-fit">Impact Story</span>
                                        <h3 className="text-3xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">Empowering Writers <br /><span className="text-primary italic">Across the USA</span></h3>
                                        <p className="text-slate-300 text-sm md:text-lg font-medium max-w-[280px] md:max-w-xl leading-relaxed">
                                            We've bridged the gap for over 100+ authors, bringing authentic Nepali literature to bookshelves in all 50 states. Discover how our platform is changing lives.
                                        </p>
                                        <div className="flex items-center gap-4 group/btn">
                                            <span className="text-white font-black text-sm uppercase tracking-widest border-b-2 border-primary pb-1 group-hover/btn:pr-4 transition-all">Read Success Stories</span>
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover/btn:rotate-[-45deg] transition-transform">
                                                <ArrowRight className="text-white" size={20} />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    </section>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
