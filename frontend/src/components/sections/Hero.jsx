import React from "react";
import { Link } from "react-router-dom";
import InnovationEcosystem from "./InnovationEcosystem.jsx";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-transparent w-full select-none"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading, Description, and CTAs */}
        <div className="lg:col-span-6 text-left flex flex-col items-start">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-[#B446FF]/15 bg-[#0a070f]/70 backdrop-blur-md mb-6 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
            <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#A1A1AA]">
              ED CELL • VIIT
            </span>
          </div>

          {/* Headline with split gradients */}
          <h1 className="text-[44px]/[1.05] sm:text-[58px]/[1.05] md:text-[68px]/[1.05] font-extrabold tracking-tighter text-white font-poppins">
            Building the <br />
            <span className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              Entrepreneurial
            </span> <br />
            <span className="bg-gradient-to-r from-[#EC4899] to-[#F97316] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(236,72,153,0.25)]">
              Ecosystem
            </span>
          </h1>

          {/* Description - muted light-gray text */}
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-6 leading-relaxed font-semibold max-w-xl">
            ED Cell is dedicated to fostering innovation, leadership, and entrepreneurial thinking among students at Vignan Institute of Information Technology.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8 w-full">
            <Link
              to="/events"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316] text-white hover:opacity-95 font-bold text-xs sm:text-sm shadow-md shadow-[#EC4899]/15 hover:shadow-[0_0_25px_rgba(236,72,153,0.45)] hover:scale-[1.02] active:scale-98 transition-all duration-300 select-none cursor-pointer uppercase tracking-wider"
            >
              EXPLORE EVENTS
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full border border-[#B446FF]/35 bg-[#0a070f]/40 backdrop-blur-md text-white font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-98 transition-all hover:shadow-[0_0_20px_rgba(180,70,255,0.15)] hover:border-[#EC4899] duration-300 select-none cursor-pointer uppercase tracking-wider"
            >
              JOIN ED CELL
            </Link>
          </div>

        </div>

        {/* Right Column: Innovation Network Animation */}
        <div className="lg:col-span-6 w-full flex items-center justify-center h-[24rem] sm:h-[30rem] lg:h-[36rem] relative">
          <InnovationEcosystem 
            coreLabel="ED CELL" 
            nodeLabels={["IDEAS", "STUDENTS", "ENTREPRENEURS", "MENTORS", "INNOVATION", "NETWORK"]}
          />
        </div>

      </div>
    </section>
  );
}
