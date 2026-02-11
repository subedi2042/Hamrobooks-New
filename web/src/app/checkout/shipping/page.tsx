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
        <div className="bg-white min-h-screen flex flex-col items-center pb-32">
            <header className="w-full max-w-md px-4 py-2 flex items-center justify-between sticky top-0 bg-white z-10">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                >
                    <span className="material-icons text-primary text-xl">arrow_back_ios_new</span>
                </button>
                <h1 className="text-lg font-bold">Shipping Details</h1>
                <div className="w-10"></div>
            </header>

            <CheckoutSteps currentStep={1} />

            <main className="w-full max-w-md flex-1 px-6 mt-4">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold mb-1">Where should we send your books?</h2>
                    <p className="text-slate-500 text-sm font-medium">
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

                    <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-primary p-2 rounded-lg shadow-sm">
                                <span className="material-icons text-white text-sm">local_shipping</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Standard Shipping</p>
                                <p className="text-xs text-slate-500 font-medium">Estimated: {isCanada ? "5-8 days" : "3-5 days"}</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-primary">FREE</span>
                    </div>

                    <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex flex-col items-center z-10">
                        <div className="w-full max-w-md flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    Total (incl. tax)
                                </span>
                                <span className="text-xl font-bold text-slate-900">
                                    ${(totalPrice * 1.08).toFixed(2)}
                                </span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs font-bold text-primary cursor-pointer hover:underline">
                                <span>View items</span>
                                <span className="material-icons text-sm">keyboard_arrow_right</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full max-w-md bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
                        >
                            <span>Continue to Payment</span>
                            <span className="material-icons">arrow_forward</span>
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}
