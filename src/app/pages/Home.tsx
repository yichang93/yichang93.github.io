import React from "react";
import { ProfileCard } from "../components/ProfileCard";
import { DesignSystemCard } from "../components/DesignSystemCard";
import { SaaSProductCard } from "../components/SaaSProductCard";
import { AICard } from "../components/AICard";
import { IconSetCard } from "../components/IconSetCard";
import { ResumeCard } from "../components/ResumeCard";
import { TechStackCard } from "../components/TechStackCard";
import { PrototypeCard } from "../components/PrototypeCard";
import { motion } from "motion/react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(180px,auto)]"
        >
          {/* Row 1 & 2 Left: Profile (2x2) */}
          <div className="col-span-1 md:col-span-2 md:row-span-2">
            <ProfileCard />
          </div>

          {/* Row 1 Right: Header Text (2x1) */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center lg:justify-end pb-4">
            <p className="mb-2 text-[14px] uppercase tracking-wider text-[#737373]">
              Portfolio 2026
            </p>
            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.1] text-[#171717] tracking-tight">
              Good design is
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32B3CD] to-[#FF9A00]">
                &nbsp;invisible
              </span>
            </h1>
          </div>

          {/* Row 2 Right: Resume & Tech (1x1 each) */}
          <div className="col-span-1">
            <ResumeCard />
          </div>
          <div className="col-span-1">
            <TechStackCard />
          </div>

          {/* Row 3 Left: Icon (1x1) + SaaS (2x1) */}
          <div className="col-span-1">
            <IconSetCard />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <SaaSProductCard />
          </div>

          {/* Row 3 & 4 Right: AI (1x2) */}
          <div className="col-span-1 md:col-span-1 md:row-span-2 h-full">
            <DesignSystemCard />
          </div>

          {/* Row 4 Left: Design System (2x1) + Social (1x1) */}
          <div className="col-span-1 lg:col-span-2">
            <AICard />
          </div>
          <div className="col-span-1">
            <PrototypeCard />
          </div>
        </motion.div>

        <footer className="mt-16 text-center text-sm text-[#A1A1A1]">
          <p>© 2026 Yichang Li. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};