import React from "react";
import Marquee from "react-fast-marquee";

const companiesLogo = [
    { name: "Microsoft", logo: "/assets/companies-logo/microsoft.svg" },
    { name: "Huawei", logo: "/assets/companies-logo/huawei.svg" },
    { name: "Framer", logo: "/assets/companies-logo/framer.svg" },
    { name: "Instagram", logo: "/assets/companies-logo/instagram.svg" },
    { name: "Walmart", logo: "/assets/companies-logo/walmart.svg" }
];

export default function TrustedCompanies() {
    return (
        <div className="w-full">
            <h3 className="text-xs tracking-wider uppercase text-center text-slate-400 mt-28 pb-10 font-bold">
                Supported by and partnering with initiatives from —
            </h3>
            <Marquee className="max-w-5xl mx-auto" gradient={true} speed={20}>
                <div className="flex items-center justify-center">
                    {[...companiesLogo, ...companiesLogo].map((company, index) => (
                        <img key={index} className="mx-14 opacity-50 hover:opacity-80 transition duration-300 filter grayscale" src={company.logo} alt={company.name} width={110} height={110} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
}
