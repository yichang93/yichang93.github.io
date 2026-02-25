import React from "react";
import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
// Image for "Prisma System" -> Using the green geometric one (ProjectCard6 in Figma which used ImagePrismaSystem)
import imgDesignSystem from "../../assets/design_system.png";

export const DesignSystemCard = () => {
  return (
    <BentoCard className="col-span-1 lg:h-full min-h-[240px] bg-white" href="/case-studies/design-system">
      <div className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-md transition-transform group-hover:rotate-45">
        <ArrowUpRight size={18} className="text-white" />
      </div>

      <div className="absolute inset-0 h-full w-full">
        <img
          src={imgDesignSystem}
          alt="Design System"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mt-auto p-6">
        <p className="mb-1 text-xs font-medium text-white/70">Design System</p>
        <h3 className="text-[18px] font-bold leading-tight text-white w-2/3">
          Build for Scale
        </h3>
      </div>
    </BentoCard>
  );
};
