import React from "react";
import { BentoCard } from "./BentoCard";
import { MapPin } from "lucide-react";
import imgProfile from "../../assets/profile_photo.png";

export const ProfileCard = () => {
  return (
    <BentoCard
      className="col-span-1 row-span-2 h-full min-h-[400px] lg:col-span-2 lg:min-h-full"
      gradient="linear-gradient(142.125deg, rgb(238, 251, 255) 0%, rgb(255, 248, 239) 100%)"
    >
      <div className="flex h-full flex-col justify-between p-6 md:p-8">
        {/* Top: Profile Image */}
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm">
          <img
            src={imgProfile}
            alt="Yichang Li"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Middle: Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-[30px] font-bold tracking-tight text-[#171717] leading-tight">
              Yichang Li
            </h1>
            <p className="text-[18px] font-medium text-[#737373]">
              Product Designer <br /> & Strategist
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-[16px] leading-[24px] text-neutral-600">
              Crafting digital experiences that blend aesthetics with functionality. Provided solutions across IoT, AI, fintech, and e-commerce.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#A1A1A1]">
            {/* MapPin Icon from Figma SVG path if needed, or Lucide */}
            <MapPin size={16} />
            <span className="text-[14px]">Singapore</span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};
