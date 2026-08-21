import React from "react";
import { Sparkles, Check } from "lucide-react";
import SectionTitle from "../SectionTitle";

const incubationPlans = [
    {
        title: "Ideation Wing",
        status: "Pre-Incubation",
        price: "Concept",
        buttonText: "Join Ideation",
        mostPopular: false,
        features: [
            "Weekly Ideation Sprints",
            "Peer-to-Peer Collaborations",
            "Basics of Business Design",
            "Access to Cohort Meetups"
        ]
    },
    {
        title: "Validation Circle",
        status: "Cohort Program",
        price: "MVP Phase",
        buttonText: "Submit MVP",
        mostPopular: true,
        features: [
            "1-on-1 Alumni Mentorship",
            "Prototyping Lab Access",
            "Pitch Deck Refinement",
            "Cloud Infrastructure Credits"
        ]
    },
    {
        title: "Incubation Wing",
        status: "Accelerated",
        price: "Funded Stage",
        buttonText: "Pitch to Angels",
        mostPopular: false,
        features: [
            "Angel Investor Network",
            "Incubation Hub Space",
            "Co-working Desk Access",
            "Startup Registration Support"
        ]
    }
];

export default function Pricing() {
    return (
        <div className="w-full">
            <SectionTitle 
                text1="Incubation Pipeline" 
                text2="Stages of Business Growth" 
                text3="Flexible programs designed to guide student founders from raw idea validation to investment-ready ventures." 
            />

            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-16 px-6">
                {incubationPlans.map((plan, index) => (
                    <div key={index} className={`p-6 rounded-2xl max-w-sm w-full shadow-[0px_4px_26px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between ${plan.mostPopular ? "relative pt-12 bg-gradient-to-b from-indigo-600 to-violet-600 text-white border-none" : "bg-white text-slate-800"}`}>
                        {plan.mostPopular && (
                            <div className="flex items-center text-[10px] uppercase tracking-wider gap-1.5 py-1 px-2.5 text-indigo-600 absolute top-4 right-4 rounded-full bg-white font-bold">
                                <Sparkles size={12} />
                                <span>Most Active</span>
                            </div>
                        )}
                        <div>
                            <p className={`text-xs uppercase font-bold tracking-wider ${plan.mostPopular ? "text-indigo-200" : "text-indigo-600"}`}>{plan.status}</p>
                            <h4 className={`text-xl font-bold mt-2 ${plan.mostPopular ? "text-white" : "text-slate-900"}`}>{plan.title}</h4>
                            <h4 className={`text-3xl font-extrabold mt-3 ${plan.mostPopular ? "text-white" : "text-slate-900"}`}>
                                {plan.price}
                            </h4>
                            <hr className={`my-6 ${plan.mostPopular ? "border-indigo-500/50" : "border-slate-100"}`} />
                            <div className="space-y-3 font-semibold text-xs uppercase tracking-wide">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <Check size={14} className={`${plan.mostPopular ? "text-white" : "text-indigo-600"}`} />
                                        <span className={plan.mostPopular ? "text-indigo-100" : "text-slate-600"}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="/contact" className={`transition w-full text-center py-3 rounded-lg font-bold text-xs uppercase tracking-wider mt-8 block active:scale-95 duration-150 ${plan.mostPopular ? "bg-white hover:bg-slate-100 text-slate-900 shadow-lg shadow-black/10" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/10"}`}>
                            <span>{plan.buttonText}</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
