import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import NecLink from "./ui/NecLink.jsx";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Mentors", to: "/mentors" },
  { label: "Members", to: "/team" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer({ contact, socialLinks }) {
  const email = contact?.email || "contact@viitedcell.com";
  const phone = contact?.phone || "+91-999-999-9999";

  return (
    <footer style={{ background: "#F8FAFF", borderTop: "1px solid #E2E8F0" }}>
      <div className="container-shell max-w-6xl mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12 pb-12" style={{ borderBottom: "1px solid #E2E8F0" }}>

          {/* Brand col */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img className="h-10 w-10 rounded-xl object-cover border border-blue-100" src="/ed-cell-logo.jpeg" alt="ED Cell Logo" width={40} height={40} />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold font-display" style={{ color: "#0F172A" }}>ED CELL</span>
                <span className="text-[9px] font-semibold tracking-wider" style={{ color: "#64748B" }}>VIIT</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
              Nurturing innovation, leadership, and entrepreneurial thinking among students at Vignan Institute of Information Technology.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {[
                { href: socialLinks?.instagram, label: "IG" },
                { href: socialLinks?.linkedin, label: "LI" },
                { href: socialLinks?.youtube, label: "YT" },
              ].map(({ href, label }) => href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-[9px] font-bold transition-all duration-200"
                  style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                >
                  {label}
                </a>
              ) : null)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider mb-5" style={{ color: "#0F172A" }}>Quick Links</h3>
            <ul className="space-y-2.5">
              {LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-xs font-medium transition-colors duration-200" style={{ color: "#64748B" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#2563EB"}
                    onMouseLeave={e => e.currentTarget.style.color = "#64748B"}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider mb-5" style={{ color: "#0F172A" }}>Get In Touch</h3>
            <div className="space-y-3 text-xs" style={{ color: "#64748B" }}>
              <p>
                Email:{" "}
                <a href={`mailto:${email}`} className="font-medium transition-colors duration-200" style={{ color: "#2563EB" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#1D4ED8"}
                  onMouseLeave={e => e.currentTarget.style.color = "#2563EB"}
                >{email}</a>
              </p>
              <p>Phone: <a href={`tel:${phone}`} className="font-medium" style={{ color: "#0F172A" }}>{phone}</a></p>
              <p className="leading-relaxed">VIIT Campus, Duvvada, Visakhapatnam,<br />Andhra Pradesh, India.</p>
            </div>
          </div>

          {/* NEC */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider mb-5" style={{ color: "#0F172A" }}>NEC Initiative</h3>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "#64748B" }}>
              Join our National Entrepreneurship Certificate programs and unlock new opportunities.
            </p>
            <NecLink
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-white text-xs font-bold rounded-xl font-display transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", boxShadow: "0 4px 14px rgba(37,99,235,0.25)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.25)"; }}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px]" style={{ color: "#94A3B8" }}>Copyright 2026 © ED Cell VIIT. All Rights Reserved.</p>
          <p className="text-[11px]" style={{ color: "#CBD5E1" }}>Vignan Institute of Information Technology</p>
        </div>
      </div>
    </footer>
  );
}
