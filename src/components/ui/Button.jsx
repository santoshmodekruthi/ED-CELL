import React from "react";

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] hover:opacity-95 text-white shadow-lg shadow-[#EC4899]/20 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300",
  gold:
    "relative overflow-hidden bg-gradient-to-r from-[#F97316] to-[#FACC15] hover:opacity-95 text-black font-bold shadow-lg shadow-orange-500/25 hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200",
  outline:
    "border border-white/20 text-white hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300",
  badge:
    "bg-[#A855F7]/25 border border-[#A855F7]/35 text-white text-xs px-3.5 py-1 rounded-full hover:shadow-glow-sm hover:bg-[#A855F7]/35 active:scale-95 transition-all duration-200",
};

export default function Button({ 
  as: Tag = "button", 
  variant = "primary", 
  className = "", 
  children, 
  ...rest 
}) {
  const baseClasses = "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out";
  
  return (
    <Tag
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
