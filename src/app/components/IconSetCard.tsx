import React from "react";
import { BentoCard } from "./BentoCard";
import { ArrowUpRight } from "lucide-react";
import imgIcons from "../../assets/icons.png";

export const IconSetCard = () => {
  return (
    <BentoCard className="col-span-1 h-full min-h-[180px] bg-[#fafafa]">
      {/* <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight size={18} className="text-neutral-500" />
      </div> */}

      <div className="absolute bottom-0 right-0 w-32 h-24">
        <img src={imgIcons} alt="Icons" className="object-contain w-full h-full object-bottom opacity-80" />
      </div>

      <div className="relative z-10 p-6">
        <h3 className="text-[18px] font-bold text-[#171717]">Glassy Icons</h3>
        <p className="text-xs text-[#737373]">Icon Set</p>
      </div>
    </BentoCard>
  );
};
