"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface BookCardProps {
    book: Book;
    compact?: boolean;
}

export default function BookCard({ book, compact = false }: BookCardProps) {
    const { addToCart } = useCart();
    const displayImage = book.images && book.images.length > 0 ? book.images[0] : book.image;

    if (compact) {
        return (
            <Link href={`/book/${book.id}`} className="flex-shrink-0 w-32 group">
                <div className="aspect-[2/3] rounded-lg shadow-md mb-2 overflow-hidden bg-slate-200 relative">
                    <img
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        src={displayImage}
                    />
                    {book.images && book.images.length > 1 && (
                        <div className="absolute top-1 left-1 bg-black/50 text-white rounded-md px-1 py-0.5 scale-75 origin-top-left flex items-center gap-0.5">
                            <span className="material-icons text-[10px]">collections</span>
                            <span className="text-[8px] font-black">{book.images.length}</span>
                        </div>
                    )}
                </div>
                <p className="text-xs font-bold truncate text-slate-900">{book.title}</p>
                <p className="text-[10px] text-slate-500 mb-1">{book.author}</p>
                <p className="text-xs font-bold text-primary">${book.price.toFixed(2)}</p>
            </Link>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="relative aspect-[2/3] bg-slate-100 rounded-xl overflow-hidden shadow-sm group">
                <Link href={`/book/${book.id}`}>
                    <img
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        alt={book.title}
                        src={displayImage}
                    />
                    {book.images && book.images.length > 1 && (
                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[#1a1a5a] rounded-lg px-2 py-1 shadow-sm flex items-center gap-1">
                            <span className="material-icons text-xs">collections</span>
                            <span className="text-[10px] font-black">{book.images.length}</span>
                        </div>
                    )}
                </Link>
                <button className="absolute top-2 right-2 bg-white/95 p-2 rounded-full shadow-md text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-icons text-sm">favorite_border</span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/60 to-transparent">
                    <button
                        onClick={() => addToCart(book)}
                        className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold shadow-lg active:scale-95 transition-all"
                    >
                        QUICK ADD
                    </button>
                </div>
            </div>
            <div className="pt-3">
                <Link href={`/book/${book.id}`}>
                    <h4 className="font-bold text-sm text-slate-dark leading-tight line-clamp-1 hover:text-primary transition-colors">
                        {book.title}
                    </h4>
                </Link>
                <p className="text-slate-400 text-[11px] mt-0.5">{book.author}</p>
                <div className="mt-2 flex items-center justify-between">
                    <span className="text-slate-dark font-extrabold">
                        ${book.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => addToCart(book)}
                        className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-1.5 rounded-lg transition-colors"
                    >
                        <span className="material-icons text-lg">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
