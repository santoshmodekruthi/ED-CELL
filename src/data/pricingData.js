import { Check } from "lucide-react";

export const pricingData = [
    {
        title: "Aspiring Founder",
        price: "Free",
        isFree: true,
        features: [
            {
                name: "Community Workspace Access",
                icon: Check,
            },
            {
                name: "Basic Mentorship Sessions",
                icon: Check,
            },
            {
                name: "Access to Ideation Workshops",
                icon: Check,
            },
            {
                name: "Collaborative Peer Network",
                icon: Check,
            },
            {
                name: "Pitch Presentation Feedback",
                icon: Check,
            },
        ],
        buttonText: "Join Community",
    },
    {
        title: "Incubated Startup",
        price: "Select",
        mostPopular: true,
        features: [
            {
                name: "Dedicated Startup Desk",
                icon: Check,
            },
            {
                name: "Priority 1-on-1 Expert Advisory",
                icon: Check,
            },
            {
                name: "Cloud Credits & Developer Tools",
                icon: Check,
            },
            {
                name: "Prototyping Lab Access",
                icon: Check,
            },
            {
                name: "Pilot Run & Market Testing Support",
                icon: Check,
            },
            {
                name: "Direct Investor Pitch Sessions",
                icon: Check,
            }
        ],
        buttonText: "Apply for Incubation",
    },
    {
        title: "Growth Stage",
        price: "Active",
        features: [
            {
                name: "Structured Seed Grant Opportunity",
                icon: Check,
            },
            {
                name: "Dedicated Legal & Compliance Aid",
                icon: Check,
            },
            {
                name: "Custom Go-to-Market Strategy",
                icon: Check,
            },
            {
                name: "1-on-1 Venture Capital Matching",
                icon: Check,
            },
            {
                name: "Global Accelerator / Partner Access",
                icon: Check,
            }
        ],
        buttonText: "Scale Your Startup",
    }
];
