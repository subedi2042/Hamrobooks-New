"use client";

import React, { use, useState, useEffect } from "react";
import { books } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookCard from "@/components/BookCard";
import AddedToCartModal from "@/components/AddedToCartModal";
import CartDrawer from "@/components/CartDrawer";

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { addToCart, totalItems } = useCart();
    const router = useRouter();
    const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        if (book) {
            addToCart(book);
            setIsAddedModalOpen(true);
        }
    };

    const book = books.find((b) => b.id === id);
    const bookImages = book?.images && book.images.length > 0 ? book.images : [book?.image || ""];
    const [activeImage, setActiveImage] = useState(bookImages[0]);

    useEffect(() => {
        if (bookImages.length > 0) setActiveImage(bookImages[0]);
    }, [book]);

    if (!book) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Book not found</h1>
                <Link href="/" className="text-primary font-bold">
                    Go back home
                </Link>
            </div>
        );
    }

    const relatedBooks = books.filter((b) => b.id !== id).slice(0, 4);

    return (
        <div className="bg-bg-light min-h-screen pb-32 selection:bg-primary/20">
            {/* iOS Top Navigation */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b border-primary/10 shadow-sm">
                <button
                    onClick={() => router.back()}
                    className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-700 active:scale-90 transition-all border border-slate-100"
                >
                    <span className="material-icons text-xl">arrow_back_ios_new</span>
                </button>

                <h2 className="text-xs font-black tracking-widest text-slate-800 uppercase line-clamp-1 max-w-[150px]">
                    {book.title}
                </h2>

                <div className="flex gap-2">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-700 relative active:scale-90 transition-all border border-slate-100"
                    >
                        <span className="material-icons text-xl">shopping_bag</span>
                        {mounted && totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] flex items-center justify-center font-black rounded-full ring-2 ring-white shadow-lg animate-in zoom-in duration-300">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-700 active:scale-90 transition-all border border-slate-100">
                        <span className="material-icons text-xl">favorite_border</span>
                    </button>
                </div>
            </nav>

            <header className="flex flex-col items-center pt-6 pb-8 px-6">
                <div className="w-full max-w-sm space-y-4">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-[2/3] group shadow-2xl rounded-2xl overflow-hidden border border-slate-200"
                    >
                        <img alt={book.title} className="w-full h-full object-cover" src={activeImage} />
                    </motion.div>

                    {bookImages.length > 1 && (
                        <div className="flex justify-center gap-2 overflow-x-auto py-2 hide-scrollbar">
                            {bookImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    title={`View image ${idx + 1}`}
                                    className={`relative w-16 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === img ? "border-primary scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">{book.title}</h1>
                    {book.nepaliTitle && (
                        <h2 className="text-xl font-medium text-slate-600">{book.nepaliTitle}</h2>
                    )}
                    <div className="pt-1">
                        <span className="text-primary font-semibold">{book.author}</span>
                    </div>

                    <div className="flex items-center justify-center gap-1 mt-2">
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-icons text-sm">
                                    {i < Math.floor(book.rating || 0) ? "star" : "star_outline"}
                                </span>
                            ))}
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                            ({book.rating || "N/A"} • {book.reviews || "0"} reviews)
                        </span>
                    </div>

                    <div className="text-2xl font-bold text-slate-900 mt-2">
                        ${book.price.toFixed(2)}
                        {book.originalPrice && (
                            <span className="text-sm font-normal text-slate-400 line-through ml-2">
                                ${book.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* Action Buttons */}
            <section className="px-6 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 rounded-xl hover:bg-primary/5 transition-colors">
                    <span className="material-icons text-lg">menu_book</span>
                    Read Sample
                </button>
                <button
                    onClick={handleAddToCart}
                    className="flex-[1.5] flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all"
                >
                    <span className="material-icons text-lg">shopping_cart</span>
                    Add to Cart
                </button>
            </section>

            {/* Quick Info */}
            <section className="mt-8 px-6 grid grid-cols-3 gap-4 border-y border-primary/10 py-4">
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Pages</p>
                    <p className="text-sm font-semibold text-slate-900">{book.pages || "???"}</p>
                </div>
                <div className="text-center border-x border-primary/10">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Language</p>
                    <p className="text-sm font-semibold text-slate-900">{book.language || "Nepali"}</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Format</p>
                    <p className="text-sm font-semibold text-slate-900">{book.format || "Paperback"}</p>
                </div>
            </section>

            {/* Synopsis Section */}
            <section className="mt-8 px-6">
                <h3 className="text-lg font-bold mb-3 text-slate-900">Synopsis</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                    {book.synopsis || "Description coming soon..."}
                </p>
            </section>

            {/* Author Section */}
            <section className="mt-10 px-6">
                <div className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                            <img
                                alt={book.author}
                                className="w-full h-full object-cover"
                                src={book.authorImage || `https://ui-avatars.com/api/?name=${book.author}`}
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">About the Author</h4>
                            <p className="text-sm text-primary font-medium">{book.author}</p>
                        </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-500 leading-snug">
                        {book.authorBio || `${book.author} is a prominent voice in Nepali literature.`}
                    </p>
                </div>
            </section>

            {/* Related Books */}
            <section className="mt-10 mb-12">
                <div className="px-6 flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Related Books</h3>
                    <button className="text-primary text-sm font-semibold">View All</button>
                </div>
                <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar pb-4">
                    {relatedBooks.map((relatedBook) => (
                        <BookCard key={relatedBook.id} book={relatedBook} compact />
                    ))}
                </div>
            </section>

            {/* Sticky Bottom Checkout Bar (Optional) */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-primary/10 flex items-center justify-between gap-4 z-40">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Book Price</span>
                    <span className="text-xl font-bold text-slate-900">${book.price.toFixed(2)}</span>
                </div>
                <button
                    onClick={handleAddToCart}
                    className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/30 flex items-center gap-2 transition-transform active:scale-95"
                >
                    Buy Now
                    <span className="material-icons text-sm">arrow_forward</span>
                </button>
            </div>

            <AddedToCartModal
                isOpen={isAddedModalOpen}
                onClose={() => setIsAddedModalOpen(false)}
                bookTitle={book.title}
            />

            <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </div>
    );
}
