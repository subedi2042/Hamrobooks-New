"use client";

import React from "react";

interface CheckoutStepsProps {
    currentStep: 1 | 2 | 3;
}

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
    const steps = [
        { id: 1, label: "SHIPPING" },
        { id: 2, label: "PAYMENT" },
        { id: 3, label: "REVIEW" },
    ];

    return (
        <div className="w-full max-w-md px-6 py-4 mx-auto">
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Step {currentStep}: {steps[currentStep - 1].label}
                </span>
                <span className="text-xs font-medium text-slate-400">{currentStep} of 3</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div
                    className={`h-full bg-primary rounded-full transition-all duration-500 ${currentStep === 1 ? "w-1/3" : currentStep === 2 ? "w-2/3" : "w-full"
                        }`}
                />
            </div>
            <div className="flex justify-between mt-2 px-1">
                {steps.map((step) => (
                    <span
                        key={step.id}
                        className={`text-[10px] font-bold tracking-widest ${currentStep >= step.id ? "text-primary" : "text-slate-400"
                            }`}
                    >
                        {step.label}
                    </span>
                ))}
            </div>
        </div>
    );
}
