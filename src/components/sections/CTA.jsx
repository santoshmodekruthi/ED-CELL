import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grad-primary opacity-[0.1]" />
      <div className="absolute inset-0 bg-grad-radial opacity-50" />
      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center glass-panel glow-border rounded-3xl px-8 md:px-12 py-16 md:py-20 backdrop-blur-xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Have an Idea?
            <br />
            <span className="text-gradient">Let's Build It Together</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Join the Entrepreneurship Development Cell and transform your ideas into meaningful impact. We're here to support your entrepreneurial journey.
          </p>
          <Button as="a" href="#contact" variant="primary">
            Get Started <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
