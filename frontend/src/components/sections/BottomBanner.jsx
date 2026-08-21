import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomBanner() {
    return (
        <div className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto mt-28 px-6 md:px-16">
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-bold text-slate-800 max-w-sm">Have a startup idea? Let's build it together.</p>
                <Link to="/contact" className="flex items-center gap-2 rounded-md py-3.5 px-6 bg-indigo-600 hover:bg-indigo-700 transition text-white font-bold text-sm shadow-lg shadow-indigo-600/20 active:scale-95 duration-150">
                    <span>Contact Us</span>
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
