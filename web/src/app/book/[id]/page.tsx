"use client";

import React, { use, useState, useEffect } from "react";
import { books as staticBooks, Book } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookCard from "@/components/BookCard";
import AddedToCartModal from "@/components/AddedToCartModal";
import CartDrawer from "@/components/CartDrawer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { addToCart, totalItems } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const router = useRouter();
    const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [book, setBook] = useState<Book | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
        const fetchBook = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(db, "books", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBook({ id: docSnap.id, ...docSnap.data() } as Book);
                } else {
                    const found = staticBooks.find(b => b.id === id);
                    if (found) setBook(found);
                }
            } catch (error) {
                console.error("Error fetching book:", error);
                const found = staticBooks.find(b => b.id === id);
                if (found) setBook(found);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        if (book) {
            addToCart(book);
            setIsAddedModalOpen(true);
        }
    };

    const bookImages = book?.images && book.images.length > 0 ? book.images : [book?.image || ""];
    const [activeImage, setActiveImage] = useState("");

    useEffect(() => {
        if (bookImages.length > 0) setActiveImage(bookImages[0]);
    }, [book, bookImages.length]);

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center font-black text-slate-400 uppercase tracking-widest">Loading details...</div>;
    }

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

    const relatedBooks = staticBooks.filter((b: Book) => b.id !== id).slice(0, 4);
    const bookTitle = book.title;

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
                    <button
                        onClick={() => book && toggleWishlist(book)}
                        className={`w-10 h-10 flex items-center justify-center rounded-2xl border transition-all active:scale-90 ${book && isInWishlist(book.id)
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                            : "bg-slate-50 text-slate-700 border-slate-100"
                            }`}
                    >
                        <span className="material-icons text-xl">{book && isInWishlist(book.id) ? "favorite" : "favorite_border"}</span>
                    </button>
                </div>
            </nav>

            <header className="max-w-6xl mx-auto pt-6 pb-12 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Images */}
                    <div className="space-y-6 sticky top-24">
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-[2/3] group shadow-2xl rounded-3xl overflow-hidden border border-slate-200 bg-white"
                        >
                            <img alt={book.title} className="w-full h-full object-cover" src={activeImage} />
                        </motion.div>

                        {bookImages.length > 1 && (
                            <div className="flex justify-center gap-3 overflow-x-auto py-2 hide-scrollbar">
                                {bookImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(img)}
                                        title={`View image ${idx + 1}`}
                                        className={`relative w-20 h-28 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === img ? "border-primary scale-105 shadow-md" : "border-slate-100 opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Details */}
                    <div className="space-y-8">
                        <div className="space-y-4 text-left">
                            <div className="space-y-1">
                                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1a1a5a] leading-tight">{book.title}</h1>
                                {book.nepaliTitle && (
                                    <h2 className="text-2xl font-medium text-slate-500 font-hindi">{book.nepaliTitle}</h2>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-lg text-primary font-black uppercase tracking-widest">{book.author}</span>
                                <span className="text-slate-300">|</span>
                                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{book.genre}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-icons text-lg">
                                            {i < Math.floor(book.rating || 5) ? "star" : "star_outline"}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-sm text-slate-500 font-bold">
                                    {book.rating || "5.0"} ({book.reviews || "12"} reviews)
                                </span>
                            </div>

                            <div className="flex items-baseline gap-4 mt-6">
                                <span className="text-4xl font-black text-[#1a1a5a]">${book.price.toFixed(2)}</span>
                                {book.originalPrice && (
                                    <span className="text-xl text-slate-400 line-through">
                                        ${book.originalPrice.toFixed(2)}
                                    </span>
                                )}
                                {book.inventory && book.inventory > 0 ? (
                                    <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">In Stock</span>
                                ) : (
                                    <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Pre-Order</span>
                                )}
                            </div>

                            {(!book.inventory || book.inventory <= 0) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3"
                                >
                                    <span className="material-icons text-amber-500">info</span>
                                    <p className="text-sm font-bold text-amber-800 leading-snug">
                                        The book(s) you have selected is out of stock but you can order it as a <span className="underline">Pre-Order</span> and we will ship it once it arrives.
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-[2] flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white font-black py-5 rounded-[2rem] shadow-xl shadow-primary/20 active:scale-[0.98] transition-all uppercase tracking-widest text-sm"
                            >
                                <span className="material-icons">{(!book.inventory || book.inventory <= 0) ? "event_repeat" : "shopping_cart"}</span>
                                {(!book.inventory || book.inventory <= 0) ? "Pre-Order Now" : "Add to Cart"}
                            </button>
                            <button
                                onClick={() => toggleWishlist(book)}
                                className={`flex-1 flex items-center justify-center gap-2 border-2 font-black py-5 rounded-[2rem] transition-all uppercase tracking-widest text-xs ${isInWishlist(book.id)
                                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                    : "border-primary text-primary hover:bg-primary/5"
                                    }`}
                            >
                                <span className="material-icons">{isInWishlist(book.id) ? "favorite" : "favorite_border"}</span>
                                {isInWishlist(book.id) ? "In Wishlist" : "Wishlist"}
                            </button>
                        </div>

                        {/* Quick Specs Grid */}
                        <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate-100">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Pages</p>
                                <p className="text-base font-black text-slate-800">{book.pages || "240"}</p>
                            </div>
                            <div className="space-y-1 text-center border-x border-slate-100">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Language</p>
                                <p className="text-base font-black text-slate-800">{book.language || "Nepali"}</p>
                            </div>
                            <div className="space-y-1 text-right">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Format</p>
                                <p className="text-base font-black text-slate-800">{book.format || "Paperback"}</p>
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-black uppercase tracking-widest text-[#1a1a5a]">Synopsis</h3>
                            <div className="text-slate-600 leading-relaxed font-medium text-lg prose prose-slate max-w-none">
                                {book.synopsis?.replace(/<[^>]*>?/gm, "") || "Description coming soon..."}
                            </div>
                        </div>

                        {/* Author Short */}
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center gap-5">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                                <img
                                    alt={book.author}
                                    className="w-full h-full object-cover"
                                    src={book.authorImage || `https://ui-avatars.com/api/?name=${book.author}&background=1a1a5a&color=fff`}
                                />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-1">About the Author</p>
                                <h4 className="font-black text-[#1a1a5a]">{book.author}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                    {(!book.inventory || book.inventory <= 0) ? "Pre-Order" : "Buy Now"}
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
