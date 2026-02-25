import React from "react";
import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
// Image for SaaS Platform -> Using the Dark Dashboard (ProjectCard3 in Figma used ImageNexusDashboard)
import imgDashboard from "../../assets/workspace.png";

export const SaaSProductCard = () => {
  return (
    <BentoCard className="col-span-1 lg:col-span-2 h-[188px] bg-white" href="/case-studies/saas-dashboard">
      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform group-hover:rotate-45">
        <ArrowUpRight size={18} className="text-white" />
      </div>

      <div className="absolute inset-0 h-full w-full bg-[#1e1e1e]"> {/* Dark fallback bg */}
        <img
          src={imgDashboard}
          alt="SaaS Platform"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 mt-auto p-6">
        <p className="mb-1 text-xs font-medium text-white/70">SaaS Platform</p>
        <h3 className="text-[18px] font-bold leading-tight text-white">Survey Data Storage and Post-Processing</h3>
      </div>
    </BentoCard>
  );
};
