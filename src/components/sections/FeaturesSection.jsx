import React from "react";
import SectionTitle from "../SectionTitle";

const pillars = [
    {
        image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png",
        title: "Ideation & Validation",
        text: "Structure student ideas through structured workshops, validation circles, and pitch events."
    },
    {
        image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png",
        title: "Expert Mentorship",
        text: "Direct access to alumni operators, startup founders, and faculty advisors at every stage."
    },
    {
        image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png",
        title: "Incubation & Incubation Labs",
        text: "Hands-on tools, cloud credits, coworking desk access, and prototyping resources."
    }
];

export default function FeaturesSection() {
    return (
        <div className="w-full">
            <SectionTitle 
                text1="Core Offerings" 
                text2="How We Support Founders" 
                text3="Our structured pillars are designed to guide student-led ideas from early concepts to validated startup companies." 
            />

            <div className="flex flex-wrap items-stretch justify-center gap-10 mt-16 px-6">
                {pillars.map((pillar, index) => (
                    <div key={index} className="max-w-80 border border-slate-100 bg-white/50 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <img className="rounded-xl object-cover aspect-[4/3] w-full" src={pillar.image} alt={pillar.title} height={400} width={400} />
                            <h3 className="text-lg font-bold text-slate-800 mt-5">{pillar.title}</h3>
                            <p className="text-sm text-slate-500 mt-2 leading-relaxed font-medium">{pillar.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
