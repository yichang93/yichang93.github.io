import React from "react";
import { BentoCard } from "./BentoCard";
import { Download } from "lucide-react";

export const ResumeCard = () => {
  return (
    <BentoCard href="Yichang_LI_CV.pdf" className="h-[188px] bg-[#fdc700] text-black">
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/10 backdrop-blur-sm transition-colors group-hover:bg-black/20">
          <Download size={24} className="text-black" />
        </div>
        <div>
          <h3 className="text-[18px] font-bold text-black">Resume</h3>
          <p className="text-[12px] font-medium text-black/70">PDF • 1.4 MB</p>
        </div>
      </div>
    </BentoCard>
  );
};
