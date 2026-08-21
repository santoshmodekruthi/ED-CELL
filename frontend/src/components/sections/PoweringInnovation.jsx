import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Rocket, Users, Calendar, ArrowUpRight } from "lucide-react";
import SectionTitle from "../SectionTitle.jsx";

const FEATURE_TABS = [
  {
    id: "idea",
    label: "IDEA DEVELOPMENT",
    icon: Lightbulb,
    category: "Ideation Track",
    title: "Refining Concepts into Validated Ideas",
    description: "From abstract thoughts to structured validation. We help student teams evaluate target markets, build sandbox user personas, map early value propositions, and conduct systematic validation interviews.",
    stat: "150+ Ideas Vetted"
  },
  {
    id: "support",
    label: "STARTUP SUPPORT",
    icon: Rocket,
    category: "Incubation Sandbox",
    title: "Frictionless Paths to Launching MVPs",
    description: "Accessing early legal checks, sandbox web/cloud credits, dedicated co-working space allocation on campus, and sandbox prototyping materials to get your product in front of early users.",
    stat: "15+ MVPs Launched"
  },
  {
    id: "mentorship",
    label: "MENTORSHIP",
    icon: Users,
    category: "Advisory Network",
    title: "Vetted Guidance from Active Founders",
    description: "Connect one-on-one with seasoned startup founders, faculty advisors, and product leaders who review product roadmaps, conduct mock pitch reviews, and help clear roadblocks weekly.",
    stat: "25+ Expert Advisors"
  },
  {
    id: "workshops",
    label: "WORKSHOPS",
    icon: Calendar,
    category: "Programs Cohort",
    title: "Immersive Bootcamps and Pitch Seminars",
    description: "Participate in hands-on workshops covering design-thinking sprints, business model validation, and fundraising strategy. Present at regular mock panels to sharpen your narrative.",
    stat: "50+ Events Annually"
  },
  {
    id: "networking",
    label: "NETWORKING",
    icon: ArrowUpRight,
    category: "Venture Paths",
    title: "Accessing Capital and Alumni Circles",
    description: "Direct integration into active alumni startup circles, angel networks, and early-stage seed funds. Showcase your validation metrics to secure pilot clients and seed support.",
    stat: "10+ Co-investor Partners"
  }
];

export default function PoweringInnovation() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = FEATURE_TABS[activeTabIdx];
  const ActiveIcon = activeTab.icon;

  return (
    <section id="powering-innovation" className="py-24 bg-transparent px-6 relative border-t border-white/[0.02] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          text1="02 — CORE COMPETENCIES"
          text2="Powering Student Innovation"
          text3="An end-to-end framework built to structure campus projects into validated startup structures."
        />

        {/* Tab Controls */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 lg:gap-3 max-w-4xl mx-auto">
          {FEATURE_TABS.map((tab, idx) => {
            const TabIcon = tab.icon;
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 border ${
                  isActive
                    ? "bg-gradient-to-r from-[#A855F7] to-[#EC4899] border-[#B446FF]/40 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:opacity-95"
                    : "bg-[#0a070f]/75 border-[#B446FF]/15 text-[#9A9A9A] hover:text-white hover:border-[#B446FF]/35"
                }`}
              >
                <TabIcon size={14} className={isActive ? "text-white" : "text-[#B446FF]"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Single Premium Card Area */}
        <div className="mt-20 max-w-3xl mx-auto relative min-h-[380px] sm:min-h-[340px]">
          
          {/* Main Card Container */}
          <div className="relative z-10 bg-[#0a070f]/75 border border-[#B446FF]/25 rounded-[22px] p-8 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden min-h-[380px] sm:min-h-[340px] flex flex-col justify-between hover:-translate-y-[3px] hover:border-[#B446FF]/65 hover:shadow-[0_15px_30px_rgba(180,70,255,0.15)] transition-all duration-350 ease-out">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between gap-6"
              >
                <div>
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-black bg-[#B446FF]/10 border border-[#B446FF]/25 text-[#B446FF]">
                      {activeTab.category}
                    </span>
                    <span className="text-[10px] font-black text-[#EC4899] uppercase tracking-widest border-b border-[#EC4899]/30 pb-0.5">
                      {activeTab.stat}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight font-poppins mb-4">
                    {activeTab.title}
                  </h3>

                  <p className="text-sm text-[#A0A0A0] leading-relaxed font-semibold">
                    {activeTab.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-[#B446FF]/10 border border-[#B446FF]/35 shadow-[0_0_10px_rgba(180,70,255,0.25)] flex items-center justify-center shrink-0">
                    <ActiveIcon size={16} className="text-[#EC4899]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-white">
                    ED CELL VIIT RESOURCE PLATFORM
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle glow layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#B446FF]/5 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
