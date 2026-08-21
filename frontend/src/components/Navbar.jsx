import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import NecLink from "./ui/NecLink.jsx";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Mentors", to: "/mentors" },
  { label: "Members", to: "/team" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMobileMenu ? "hidden" : "";
  }, [openMobileMenu]);

  useEffect(() => {
    setOpenMobileMenu(false);
  }, [location]);

  return (
    <nav
      className="flex items-center justify-between fixed z-50 top-0 w-full px-5 md:px-10 lg:px-16 py-3.5"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: scrolled ? "0 2px 20px rgba(37,99,235,0.08)" : "none",
        transition: "box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2.5 shrink-0">
        <img
          className="h-9 w-9 rounded-xl object-cover border border-blue-100 shadow-sm"
          src="/ed-cell-logo.jpeg"
          alt="ED Cell Logo"
          width={36}
          height={36}
        />
        <div className="flex flex-col leading-none">
          <span className="text-sm font-bold text-[#0F172A] font-display tracking-wide">ED CELL</span>
          <span className="text-[9px] text-[#64748B] font-semibold tracking-wider">VIIT</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1 lg:gap-2">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.label}
              to={link.to}
              className="relative px-3 py-2 text-[13px] font-semibold font-body rounded-lg transition-colors duration-200"
              style={{ color: isActive ? "#2563EB" : "#64748B" }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#2563EB"; e.currentTarget.style.background = "#EFF6FF"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#64748B"; e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="navUnderline"
                  className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: "#2563EB" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right: NEC + Hamburger */}
      <div className="flex items-center gap-3">
        <NecLink
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-white text-xs font-bold rounded-xl font-display tracking-wide shadow-md transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.3)"; }}
        />
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="md:hidden p-2 rounded-lg text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition"
        >
          {openMobileMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: openMobileMenu ? 1 : 0, y: openMobileMenu ? 0 : -10 }}
        style={{
          pointerEvents: openMobileMenu ? "all" : "none",
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 8px 30px rgba(37,99,235,0.1)",
          padding: "1.25rem 1.5rem 1.5rem",
          zIndex: 49,
        }}
      >
        <div className="flex flex-col gap-1 mb-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setOpenMobileMenu(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-semibold font-body transition-all duration-200 ${
                  isActive
                    ? "bg-[#EFF6FF] text-[#2563EB]"
                    : "text-[#475569] hover:bg-[#F8FAFF] hover:text-[#2563EB]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <NecLink
          className="w-full flex items-center justify-center gap-1.5 px-4 py-3 text-white text-sm font-bold rounded-xl font-display"
          style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", boxShadow: "0 4px 14px rgba(37,99,235,0.25)" }}
          onClick={() => setOpenMobileMenu(false)}
        />
      </motion.div>
    </nav>
  );
}
