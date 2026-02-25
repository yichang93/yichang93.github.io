import React from "react";
import { BentoCard } from "./BentoCard";

export const PrototypeCard = () => {

    return (
        <BentoCard className="col-span-1 h-full min-h-[240px] bg-[#fafafa]">
            <video
                className="object-cover absolute inset-0 h-full w-full" loop preload="auto" playsInline autoPlay muted
                src="/src/assets/ai_prototype.mp4"
            />
            <div className="relative z-10 mt-auto p-6">
                <h3 className="text-[18px] font-bold leading-tight text-white w-3/4">
                    Quick Prototyping with AI
                </h3>
            </div>
        </BentoCard>
    );
};
