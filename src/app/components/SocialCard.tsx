import React from "react";
import { BentoCard } from "./BentoCard";
import { Linkedin, Mail, Dribbble, Globe } from "lucide-react";

export const SocialCard = () => {
  const socials = [
    { icon: <Dribbble size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Globe size={20} />, href: "#" },
    { icon: <Mail size={20} />, href: "mailto:hello@example.com" },
  ];

  return (
    <BentoCard className="col-span-1 h-full bg-white p-0">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-3 p-4">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#f5f5f5] text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-black"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </BentoCard>
  );
};
