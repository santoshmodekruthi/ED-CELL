import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "../TestimonialCard";
import SectionTitle from "../SectionTitle";

const testimonialsData = [
    {
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
        name: "Rohan Sharma",
        handle: "@rohanbuilds",
        quote: "ED Cell helped us find our co-founder and validate our MVP within three months of joining the circle."
    },
    {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        name: "Ananya Rao",
        handle: "@ananya_dev",
        quote: "The direct access to alumni operators and founders gave us actionable feedback that saved us months of trial."
    },
    {
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
        name: "Vikram Sen",
        handle: "@vikramcircle",
        quote: "From an abstract pitch deck to an operational prototype, the guidance from ED Cell mentors was crucial."
    },
    {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        name: "Sujith Reddy",
        handle: "@sujith_innov",
        quote: "The bootcamps and pitch practice sessions completely transformed how we present our venture to investors."
    }
];

export default function Testimonials() {
    return (
        <div className="w-full">
            <SectionTitle 
                text1="Student Stories" 
                text2="Success of Our Builders" 
                text3="See how student-led founders and builders are finding their footing and developing ventures at VIIT." 
            />

            <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={15}>
                <div className="flex items-center justify-center py-4">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
            <Marquee className="max-w-5xl mx-auto mt-2" gradient={true} speed={15} direction="right">
                <div className="flex items-center justify-center py-4">
                    {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}
