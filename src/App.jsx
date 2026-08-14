import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home.jsx";
import NEC from "./pages/NEC.jsx";
import EventsPage from "./pages/Events.jsx";
import MentorsPage from "./pages/Mentors.jsx";
import AboutPage from "./pages/About.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/Team.jsx";

import SplashScreen from "./components/SplashScreen.jsx";
import AnimatedBackground from "./components/ui/AnimatedBackground.jsx";
import PageTransition from "./components/PageTransition.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem("edcell_splash_played");
  });
  const location = useLocation();

  useEffect(() => {
    if (showSplash) {
      const timer = window.setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("edcell_splash_played", "true");
      }, 2300);
      return () => window.clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <>
      {/* Intro Animation Layer */}
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <>
          {/* Global Interactive Canvas Particle Network Background */}
          <AnimatedBackground />

          {/* Page Transitions Wrapper */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
              <Route path="/mentors" element={<PageTransition><MentorsPage /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
              <Route path="/nec" element={<PageTransition><NEC /></PageTransition>} />
              <Route path="*" element={<PageTransition><Home /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
