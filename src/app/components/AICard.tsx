import React from "react";
import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
// Image for AI Spot -> Using the Tablet one (Figma code said FinTouchApp, let's try it)
import imgAI from "../../assets/ai_spot.png";

export const AICard = () => {
  return (
    <BentoCard className="col-span-1 h-full min-h-[240px] bg-white" href="/case-studies/ai-spot">
      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform group-hover:rotate-45">
        <ArrowUpRight size={18} className="text-white" />
      </div>

      <div className="absolute inset-0 h-full w-full">
        <img
          src={imgAI}
          alt="AI Defect Reporting"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="relative z-10 mt-auto p-6">
        <p className="mb-1 text-xs font-medium text-white/70">Human-in-the-loop AI</p>
        <h3 className="text-[18px] font-bold leading-tight text-white">Defect Reporting</h3>
      </div>
    </BentoCard>
  );
};
