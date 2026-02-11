"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CheckoutSteps from "@/components/CheckoutSteps";
import { motion } from "framer-motion";

export default function ShippingPage() {
    const router = useRouter();
    const { shippingInfo, setShippingInfo, totalPrice } = useCart();

    const isCanada = shippingInfo.country === "Canada";

    const fetchAddressFromZip = async (zip: string, country: string) => {
        const countryCode = country === "Canada" ? "ca" : "us";

        // Zippopotam.us works with first 3 chars for Canada, 5 digits for US
        const lookupZip = countryCode === "ca" ? zip.substring(0, 3) : zip;

        if (lookupZip.length < (countryCode === "us" ? 5 : 3)) return;

        try {
            const response = await fetch(`https://api.zippopotam.us/${countryCode}/${lookupZip}`);
            if (response.ok) {
                const data = await response.json();
                const place = data.places[0];
                setShippingInfo((prev) => ({
                    ...prev,
                    city: place["place name"],
                    state: place["state abbreviation"],
                }));
            }
        } catch (error) {
            console.error("Error fetching zip info:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setShippingInfo((prev) => ({ ...prev, [name]: value }));

        if (name === "zipCode") {
            const cleanZip = value.replace(/\s/g, "");
            if (shippingInfo.country === "USA" && cleanZip.length === 5) {
                fetchAddressFromZip(cleanZip, "USA");
            } else if (shippingInfo.country === "Canada" && cleanZip.length >= 3) {
                fetchAddressFromZip(cleanZip, "Canada");
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/checkout/payment");
    };

    const usStates = [
        { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
        { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
        { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },
        { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
        { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
        { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
        { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
        { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
        { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
        { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
        { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
        { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
        { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
        { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
        { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
        { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
        { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" }
    ];

    const caProvinces = [
        { code: "AB", name: "Alberta" }, { code: "BC", name: "British Columbia" },
        { code: "MB", name: "Manitoba" }, { code: "NB", name: "New Brunswick" },
        { code: "NL", name: "Newfoundland and Labrador" }, { code: "NS", name: "Nova Scotia" },
        { code: "NT", name: "Northwest Territories" }, { code: "NU", name: "Nunavut" },
        { code: "ON", name: "Ontario" }, { code: "PE", name: "Prince Edward Island" },
        { code: "QC", name: "Quebec" }, { code: "SK", name: "Saskatchewan" },
        { code: "YT", name: "Yukon" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col items-center pb-32">
            <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-primary/10 rounded-xl transition-colors flex items-center gap-2 group"
                    >
                        <span className="material-icons text-primary text-xl group-hover:-translate-x-1 transition-transform">arrow_back_ios_new</span>
                        <span className="text-sm font-bold text-slate-600 hidden md:block">Back to Cart</span>
                    </button>
                    <h1 className="text-lg md:text-xl font-black text-[#1a1a5a] tracking-tight">Shipping Details</h1>
                    <div className="w-10"></div>
                </div>
            </header>

            <main className="w-full max-w-7xl flex-1 px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-12">
                    <CheckoutSteps currentStep={1} />
                </div>

                <div className="lg:col-span-7 space-y-8 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-[#1a1a5a] mb-2 tracking-tighter">Where should we send your books?</h2>
                        <p className="text-slate-500 text-sm md:text-base font-medium">
                            We currently ship to {isCanada ? "USA and Canada" : "all 50 US states"} via USPS, UPS, and FedEx.
                        </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label htmlFor="fullName" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                required
                                name="fullName"
                                value={shippingInfo.fullName}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                placeholder="e.g. Biraj Mahato"
                                type="text"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="country" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                Country
                            </label>
                            <div className="relative">
                                <select
                                    id="country"
                                    required
                                    name="country"
                                    title="Select Country"
                                    aria-label="Select Country"
                                    value={shippingInfo.country}
                                    onChange={(e) => {
                                        setShippingInfo({ ...shippingInfo, country: e.target.value, state: "", city: "", zipCode: "" });
                                    }}
                                    className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 font-medium"
                                >
                                    <option value="USA">United States</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    expand_more
                                </span>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="address" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                Street Address
                            </label>
                            <input
                                id="address"
                                required
                                name="address"
                                value={shippingInfo.address}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                placeholder={isCanada ? "e.g. 123 Spadina Ave" : "123 Nepali Way, Apt 4B"}
                                type="text"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="zipCode" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                {isCanada ? "Postal Code" : "Zip Code"}
                            </label>
                            <input
                                id="zipCode"
                                required
                                name="zipCode"
                                value={shippingInfo.zipCode}
                                onChange={handleChange}
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                placeholder={isCanada ? "e.g. M5V 2L7" : "10001"}
                                type="text"
                            />
                            <p className="text-[10px] text-slate-400 font-medium ml-1">Enter code to auto-populate City and {isCanada ? "Province" : "State"}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="city" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    City
                                </label>
                                <input
                                    id="city"
                                    required
                                    name="city"
                                    value={shippingInfo.city}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                                    placeholder={isCanada ? "Toronto" : "New York"}
                                    type="text"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="state" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                                    {isCanada ? "Province" : "State"}
                                </label>
                                <div className="relative">
                                    <select
                                        id="state"
                                        required
                                        name="state"
                                        title={isCanada ? "Select Province" : "Select State"}
                                        aria-label={isCanada ? "Select Province" : "Select State"}
                                        value={shippingInfo.state}
                                        onChange={handleChange}
                                        className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 font-medium"
                                    >
                                        <option value="">Select</option>
                                        {(isCanada ? caProvinces : usStates).map(item => (
                                            <option key={item.code} value={item.code}>{item.code} - {item.name}</option>
                                        ))}
                                    </select>
                                    <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary p-3 rounded-xl shadow-lg shadow-primary/20">
                                    <span className="material-icons text-white">local_shipping</span>
                                </div>
                                <div>
                                    <p className="text-base font-black text-slate-900 leading-tight">Standard Shipping</p>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Estimated Delivery: {isCanada ? "5-8 days" : "3-5 days"}</p>
                                </div>
                            </div>
                            <span className="text-lg font-black text-primary italic">FREE</span>
                        </div>

                        {/* Mobile and tablet only footer fixed bottom */}
                        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex flex-col items-center z-10">
                            <div className="w-full max-w-md flex items-center justify-between mb-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total (incl. tax)</span>
                                    <span className="text-xl font-bold text-slate-900">${(totalPrice * 1.08).toFixed(2)}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-xs font-bold text-primary cursor-pointer hover:underline">
                                    <span>View items</span>
                                    <span className="material-icons text-sm">keyboard_arrow_right</span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full max-w-md bg-primary hover:bg-[#e68a00] text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                            >
                                <span className="uppercase tracking-widest text-sm font-black">Continue to Payment</span>
                                <span className="material-icons">arrow_forward</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sidebar Summary for Desktop */}
                <aside className="hidden lg:block lg:col-span-5 relative">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8">
                            <h3 className="text-xl font-black text-[#1a1a5a] mb-6 tracking-tight">Order Summary</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-primary font-bold italic">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-500 font-medium">
                                    <span>Taxes (8%)</span>
                                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                                    <span className="text-lg font-black text-[#1a1a5a]">Order Total</span>
                                    <span className="text-3xl font-black text-primary tracking-tighter">${(totalPrice * 1.08).toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-primary hover:bg-[#e68a00] text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                            >
                                <span className="uppercase tracking-widest text-sm">Review & Pay</span>
                                <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>

                            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-center gap-6">
                                <div className="flex flex-col items-center gap-1 opacity-40">
                                    <span className="material-icons text-xl">verified_user</span>
                                    <span className="text-[8px] font-black uppercase tracking-widest">Secure SSL</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 opacity-40">
                                    <span className="material-icons text-xl">shield</span>
                                    <span className="text-[8px] font-black uppercase tracking-widest">PCI Level 1</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1a1a5a]/5 rounded-2xl p-6 border border-[#1a1a5a]/10">
                            <div className="flex gap-4">
                                <span className="material-icons text-primary">contact_support</span>
                                <div>
                                    <p className="text-sm font-black text-[#1a1a5a] mb-1">Need help with shipping?</p>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Our logistics team ensures your books arrive safely across all 50 states. Contact support for bulk ordering.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
