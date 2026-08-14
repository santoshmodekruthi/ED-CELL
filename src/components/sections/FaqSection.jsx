import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "../SectionTitle";

const faqsData = [
    {
        question: "Who can join the ED Cell at VIIT?",
        answer: "Any student with a builder mindset, regardless of branch or year. Whether you want to launch a startup, learn marketing, or work as a developer, we have a place for you."
    },
    {
        question: "Do I need a fully formed business plan to start?",
        answer: "Not at all. Most student founders start with simple thoughts. We host ideation sprints and networking sessions to help you form teams and brainstorm concepts."
    },
    {
        question: "Does the ED Cell offer financial funding?",
        answer: "Yes, for validated student cohorts. We help you pitch to angel investors, secure university innovation grants, and connect you with seed capital operators."
    },
    {
        question: "What is the New Entrepreneurs Circle (NEC)?",
        answer: "NEC is a wing of the ED Cell focused specifically on helping first-time builders launch their validation phase. They coordinate cohorts and hands-on bootcamps."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-6 md:px-0">
            <SectionTitle 
                text1="FAQ" 
                text2="Frequently asked questions" 
                text3="Got questions? We have answers. Learn more about joining, resources, funding, and mentorship." 
            />
            <div className="mt-12 w-full">
                {faqsData.map((faq, index) => (
                    <div className="border-b border-slate-100 py-5 cursor-pointer w-full text-slate-800" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-semibold text-slate-800">
                                {faq.question}
                            </h3>
                            <ChevronDown size={16} className={`${openIndex === index && "rotate-180"} transition-all duration-300 ease-in-out text-slate-400`} />
                        </div>
                        <p className={`text-sm text-slate-500 transition-all duration-300 ease-in-out max-w-xl ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
