import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  gradient?: string;
}

export const BentoCard = ({ children, className, href, gradient }: BentoCardProps) => {
  const Content = (
    <motion.div
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[24px] shadow-sm transition-all hover:shadow-md",
        className
      )}
      style={{ background: gradient }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (href.startsWith("/")) {
       return (
        <Link to={href} className="block h-full w-full">
          {Content}
        </Link>
      );
    }
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="block h-full w-full">
        {Content}
      </a>
    );
  }

  return Content;
};
