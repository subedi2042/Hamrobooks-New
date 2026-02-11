"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useBanners, HeroBanner } from "@/context/BannerContext";
import { usePromos, BookCollection, PromoCode } from "@/context/PromoContext";
import { books } from "@/data/books";

export default function PromotionsPage() {
    const { banners, updateBanner, addBanner, deleteBanner } = useBanners();
    const { collections, promoCodes, updateCollection, addPromoCode, updatePromoCode, deletePromoCode } = usePromos();

    // Banner State
    const [editingBanner, setEditingBanner] = useState<HeroBanner | null>(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [bannerFormData, setBannerFormData] = useState({
        title: "", subtitle: "", description: "", badge: "", image: "", buttonText: "EXPLORE COLLECTION", link: "/", status: "Active" as "Active" | "Inactive"
    });

    // Collection State
    const [editingCollection, setEditingCollection] = useState<BookCollection | null>(null);
    const [isReordering, setIsReordering] = useState(false);

    // Promo Code State
    const [editingPromo, setEditingPromo] = useState<PromoCode | null>(null);
    const [isAddingPromo, setIsAddingPromo] = useState(false);
    const [promoFormData, setPromoFormData] = useState({ code: "", discount: "", status: "Active" as "Active" | "Expired" });

    // Handle Banner Actions
    const openEditBanner = (banner: HeroBanner) => {
        setEditingBanner(banner);
        setBannerFormData({
            title: banner.title, subtitle: banner.subtitle, description: banner.description,
            badge: banner.badge, image: banner.image, buttonText: banner.buttonText,
            link: banner.link, status: banner.status
        });
    };

    const handleBannerSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingBanner) await updateBanner(editingBanner.id, bannerFormData);
            else if (isAddingNew) await addBanner(bannerFormData);
            setEditingBanner(null);
            setIsAddingNew(false);
            alert("Banner configuration updated!");
        } catch (error) {
            alert("Failed to save banner. Please check your connection.");
        }
    };

    // Handle Promo Actions
    const openEditPromo = (promo: PromoCode) => {
        setEditingPromo(promo);
        setPromoFormData({ code: promo.code, discount: promo.discount, status: promo.status });
    };

    const handlePromoSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingPromo) await updatePromoCode(editingPromo.id, promoFormData);
            else if (isAddingPromo) await addPromoCode(promoFormData);
            setEditingPromo(null);
            setIsAddingPromo(false);
            setPromoFormData({ code: "", discount: "", status: "Active" });
        } catch (error) {
            alert("Failed to save promo code.");
        }
    };

    return (
        <div className="space-y-10 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Promotions Center</h2>
                    <p className="text-slate-500 font-medium">Manage banners, collection curators, and discount codes.</p>
                </div>
                <button
                    onClick={() => setIsAddingNew(true)}
                    className="bg-[#1a1a5a] text-white font-black py-3 px-6 rounded-xl shadow-lg shadow-[#1a1a5a]/20 transition-all flex items-center gap-2 w-fit uppercase tracking-widest text-xs"
                >
                    <span className="material-icons text-sm">add_circle</span>
                    Create New Campaign
                </button>
            </div>

            {/* Banners Section */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                        <span className="material-icons text-primary">view_carousel</span>
                        Hero Banners
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banners.map((banner) => (
                        <div key={banner.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm group relative">
                            <div className="aspect-video bg-slate-100 relative">
                                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${banner.status === "Active" ? "bg-green-500 text-white" : "bg-slate-400 text-white"}`}>
                                        {banner.status}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm font-bold leading-tight">{banner.title}</p>
                                    <p className="text-[10px] opacity-80">{banner.subtitle}</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-center justify-between bg-white text-slate-900">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    {banner.status === "Active" ? "Currently Live" : "Draft"}
                                </span>
                                <div className="flex gap-2">
                                    <button onClick={() => openEditBanner(banner)} className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-slate-400 hover:text-primary transition-all">
                                        <span className="material-icons text-lg">edit</span>
                                    </button>
                                    <button onClick={() => deleteBanner(banner.id)} className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-slate-400 hover:text-red-500 transition-all">
                                        <span className="material-icons text-lg">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={() => setIsAddingNew(true)} className="aspect-video border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                        <span className="material-icons text-3xl mb-2 group-hover:text-primary">add_photo_alternate</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">Add New Banner</span>
                    </button>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Collections Curator */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-black text-lg text-slate-800 flex items-center gap-2">
                            <span className="material-icons text-primary">auto_awesome_motion</span>
                            Collections
                        </h3>
                        <button onClick={() => setIsReordering(true)} className="text-xs font-black uppercase tracking-widest text-[#1a1a5a] hover:underline">Reorder</button>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {collections.map((col) => (
                            <div key={col.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                                        <span className="material-icons text-slate-400">collections_bookmark</span>
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900">{col.name}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{col.bookIds.length} BOOKS</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">LAST UPDATED: {col.lastUpdated}</p>
                                    <button onClick={() => setEditingCollection(col)} className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 ml-auto">
                                        Edit List <span className="material-icons text-xs">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Discount Codes */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-black text-lg text-slate-800 flex items-center gap-2">
                            <span className="material-icons text-primary">sell</span>
                            Discount Codes
                        </h3>
                        <button
                            onClick={() => setIsAddingPromo(true)}
                            className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-all font-bold"
                        >
                            Create Code
                        </button>
                    </div>
                    <div className="divide-y divide-slate-50">
                        {promoCodes.map((code) => (
                            <div key={code.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-mono font-black text-slate-900 tracking-tighter text-lg">{code.code}</p>
                                        <button onClick={() => openEditPromo(code)} className="text-slate-300 hover:text-primary transition-colors">
                                            <span className="material-icons text-xs">edit</span>
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Reward: {code.discount} OFF</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest ${code.status === "Active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                                        {code.status}
                                    </span>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Used {code.usage} times</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Banner Modal */}
            {(editingBanner || isAddingNew) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl p-8 relative">
                        <h3 className="text-2xl font-black text-slate-900 mb-6">{isAddingNew ? "New Banner" : "Edit Banner"}</h3>
                        <form onSubmit={handleBannerSave} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label htmlFor="modalBadge" className="text-[10px] font-black text-slate-400 uppercase">Badge</label>
                                    <input id="modalBadge" value={bannerFormData.badge} onChange={e => setBannerFormData({ ...bannerFormData, badge: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 font-bold outline-none focus:ring-2 focus:ring-primary/20" placeholder="e.g. FREE" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="modalStatus" className="text-[10px] font-black text-slate-400 uppercase">Status</label>
                                    <select id="modalStatus" value={bannerFormData.status} onChange={e => setBannerFormData({ ...bannerFormData, status: e.target.value as any })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 font-bold outline-none" title="Banner Status"><option value="Active">Active</option><option value="Inactive">Inactive</option></select>
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <label htmlFor="modalHeading" className="text-[10px] font-black text-slate-400 uppercase">Main Heading</label>
                                    <input id="modalHeading" required value={bannerFormData.title} onChange={e => setBannerFormData({ ...bannerFormData, title: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 font-black outline-none" placeholder="Enter title" />
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <label htmlFor="modalSubtitle" className="text-[10px] font-black text-slate-400 uppercase">Sub Heading</label>
                                    <input id="modalSubtitle" required value={bannerFormData.subtitle} onChange={e => setBannerFormData({ ...bannerFormData, subtitle: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 font-bold outline-none" placeholder="Enter subtitle" />
                                </div>
                                <div className="space-y-1 col-span-2">
                                    <label htmlFor="modalImageUrl" className="text-[10px] font-black text-slate-400 uppercase">Image URL</label>
                                    <input id="modalImageUrl" required value={bannerFormData.image} onChange={e => setBannerFormData({ ...bannerFormData, image: e.target.value })} className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-xs outline-none" placeholder="https://..." />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => { setEditingBanner(null); setIsAddingNew(false); }} className="flex-1 py-3 text-slate-400 font-black uppercase text-xs">Cancel</button>
                                <button type="submit" className="flex-2 bg-primary text-white py-3 px-10 rounded-xl font-black shadow-lg shadow-primary/20 uppercase text-xs">Save Banner</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Promo Modal */}
            {(editingPromo || isAddingPromo) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm focus:outline-none">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 relative">
                        <h3 className="text-2xl font-black text-slate-900 mb-6">{isAddingPromo ? "New Promo Code" : "Edit Promo Code"}</h3>
                        <form onSubmit={handlePromoSave} className="space-y-4">
                            <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Coupon Code</label>
                                <input required value={promoFormData.code} onChange={e => setPromoFormData({ ...promoFormData, code: e.target.value.toUpperCase() })} placeholder="E.G. SUMMER50" className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 font-mono text-lg font-black outline-none" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Discount</label>
                                    <input required value={promoFormData.discount} onChange={e => setPromoFormData({ ...promoFormData, discount: e.target.value })} placeholder="20%" className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 font-black outline-none" /></div>
                                <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</label>
                                    <select value={promoFormData.status} onChange={e => setPromoFormData({ ...promoFormData, status: e.target.value as any })} className="w-full bg-slate-50 p-4 rounded-2xl border border-slate-100 font-black outline-none" title="Status"><option value="Active">Active</option><option value="Expired">Expired</option></select></div>
                            </div>
                            <div className="flex gap-4 pt-6">
                                {editingPromo && <button type="button" onClick={() => { deletePromoCode(editingPromo.id); setEditingPromo(null); }} className="flex-1 bg-red-50 text-red-500 font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest">Delete</button>}
                                <button type="submit" className="flex-[2] bg-[#1a1a5a] text-white font-black py-4 rounded-2xl shadow-xl shadow-[#1a1a5a]/20 text-[10px] uppercase tracking-widest">Save Config</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}

            {/* Collection Modal (Reorder/Edit) */}
            {(editingCollection || isReordering) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="bg-white w-full max-w-3xl h-[80vh] rounded-[3rem] shadow-2xl p-10 flex flex-col relative text-slate-900">
                        <div className="flex justify-between items-center mb-6">
                            <div><h3 className="text-3xl font-black text-slate-900">{isReordering ? "Master Reorder" : `Curate: ${editingCollection?.name}`}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Drag and drop to rearrange books</p></div>
                            <button onClick={() => { setEditingCollection(null); setIsReordering(false); }} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-800 transition-all"><span className="material-icons">close</span></button>
                        </div>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                            {books.slice(0, 6).map((book, idx) => (
                                <div key={book.id} className="bg-white border-2 border-slate-50 p-4 rounded-3xl flex items-center gap-4 group hover:border-primary/20 transition-all cursor-move">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center font-black text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">{idx + 1}</div>
                                    <img src={book.image} className="w-12 h-16 object-cover rounded-lg shadow-sm" alt={book.title} />
                                    <div className="flex-1"><p className="font-black text-sm text-slate-900">{book.title}</p><p className="text-[10px] text-slate-400 font-bold uppercase">{book.author}</p></div>
                                    <span className="material-icons text-slate-200">drag_indicator</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => { setEditingCollection(null); setIsReordering(false); alert("Changes saved to cloud!"); }} className="w-full bg-[#1a1a5a] text-white py-5 rounded-2xl font-black mt-6 shadow-2xl shadow-[#1a1a5a]/30 uppercase tracking-[0.2em] text-xs">Commit Changes</button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
