"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft, Quote, BookOpen, Globe, Users } from "lucide-react";
import Link from "next/link";

const stories = [
    {
        id: 1,
        author: "Dr. Saroj Sharma",
        location: "Houston, Texas",
        quote: "Hamrobooks has been a bridge I never thought was possible. My latest collection of essays reached Nepali families across 42 states within the first month. It's not just a store; it's a cultural lifeline.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
        helpedWith: "Logistics & Distribution",
    },
    {
        id: 2,
        author: "Prerana Karki",
        location: "Queens, New York",
        quote: "Writing for children in the diaspora is hard because physical books are rare here. Hamrobooks made my picture books accessible to every Nepali parent in the USA. Seeing children here read my poems is my greatest reward.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
        helpedWith: "Community Reach",
    },
    {
        id: 3,
        author: "Kiran Adhikari",
        location: "Seattle, Washington",
        quote: "The platform's dedication to authentic literature is unmatched. They helped me organize a virtual book launch that connected me with readers from Kathmandu to Kentucky. Truly a global community.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
        helpedWith: "Marketing & Launch",
    }
];

export default function SuccessStories() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] selection:bg-primary/30 pb-24">
            <Header onSearch={() => { }} />

            <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back to Store</span>
                </Link>

                {/* Hero Section */}
                <section className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                            Writer's Spotlight
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-[#1a1a5a] mt-4 mb-6 leading-tight tracking-tighter">
                            Bridging the Gap: <br />
                            <span className="text-primary italic">Authors' Voices in the USA</span>
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Discover how Hamrobooks is empowering Nepali writers to transcend borders and connect with thousands of readers across the United States.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-12 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <div className="text-center">
                            <div className="text-2xl font-black text-[#1a1a5a]">50+</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Independent Authors</div>
                        </div>
                        <div className="text-center border-x border-slate-100 px-4">
                            <div className="text-2xl font-black text-[#1a1a5a]">48</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">States Reached</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-[#1a1a5a]">10k+</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Readers Impacted</div>
                        </div>
                    </div>
                </section>

                {/* Stories Grid */}
                <section className="space-y-8 mb-16">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col md:flex-row border border-white"
                        >
                            <div className="md:w-1/3 relative h-64 md:h-auto">
                                <img src={story.image} alt={story.author} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a1a5a]/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-black text-xl leading-none">{story.author}</p>
                                    <p className="text-xs text-slate-200 mt-1 font-medium">{story.location}</p>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50">
                                <Quote className="text-primary/20 mb-4" size={40} />
                                <p className="text-slate-700 text-lg leading-relaxed font-medium italic mb-6">
                                    "{story.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Impacted By:</span>
                                    <span className="bg-[#1a1a5a] text-white text-[10px] font-bold px-3 py-1 rounded-full">{story.helpedWith}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Writer's Benefit Section */}
                <section className="bg-[#1a1a5a] rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden mb-16 shadow-2xl shadow-blue-900/40">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <h2 className="text-3xl font-black mb-12">How we empower writers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <Globe className="text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Nationwide Logistics</h4>
                            <p className="text-xs text-slate-300 leading-relaxed">Fast, reliable distribution across all 50 US states, handling everything from storage to doorstep delivery.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Targeted Marketing</h4>
                            <p className="text-xs text-slate-300 leading-relaxed">Direct access to a curated community of thousands of Nepali literature lovers in the diaspora.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen className="text-primary" />
                            </div>
                            <h4 className="font-bold mb-2">Digital Presence</h4>
                            <p className="text-xs text-slate-300 leading-relaxed">SEO-optimized author profiles and dedicated book landing pages that rank high on search results.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-white border border-slate-100 p-12 rounded-[2.5rem] shadow-sm">
                    <h3 className="text-2xl font-black text-[#1a1a5a] mb-4">Are you a writer?</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto font-medium">
                        Join our community of over 50 authors and reach thousands of readers across the USA with our seamless distribution platform.
                    </p>
                    <Link href="/authors/apply">
                        <button className="bg-primary hover:bg-[#e68a00] text-white px-10 py-4 rounded-2xl font-black tracking-widest uppercase text-xs shadow-xl shadow-primary/30 transition-all active:scale-95">
                            Tell Your Story
                        </button>
                    </Link>
                </section>
            </main>

            <BottomNav />
        </div>
    );
}
