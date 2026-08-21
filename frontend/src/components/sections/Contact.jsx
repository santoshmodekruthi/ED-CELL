import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Send, CheckCircle2 } from "lucide-react";
import api from "../../lib/api.js";

export default function Contact({ contact, socialLinks }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.submitContact(form);
      setSent(true);
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }, 3000);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full bg-white border rounded-xl py-3 px-4 text-sm font-medium text-[#0F172A] placeholder:text-[#CBD5E1] outline-none transition-all duration-200`;
  const inputStyle = { borderColor: "#E2E8F0" };
  const inputFocus = (e) => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.08)"; };
  const inputBlur = (e) => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "none"; };

  return (
    <section id="contact" className="py-20 px-5 md:px-10 lg:px-16 bg-white">
      <div className="container-shell max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto mb-5">Contact Us</div>
          <h2 className="font-display font-bold mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "#0F172A" }}>
            Get In Touch
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "#64748B" }}>
            Have a question, partnership idea, or want to join ED Cell? Reach out to us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
          className="light-card p-8 md:p-12 shadow-sm"
          style={{ boxShadow: "0 2px 20px rgba(37,99,235,0.06)" }}
        >
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left: Info */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0F172A" }}>Office Info</h3>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Vignan Institute of Information Technology campus. Stop by or drop a message.
              </p>

              <div className="space-y-5">
                {[
                  { Icon: Mail, label: "Email", value: contact?.email || "contact@viitedcell.com", href: `mailto:${contact?.email || "contact@viitedcell.com"}` },
                  { Icon: Phone, label: "Phone", value: contact?.phone || "+91-999-999-9999", href: `tel:${contact?.phone || "+91-999-999-9999"}` },
                  { Icon: MapPin, label: "Location", value: contact?.address || "VIIT Campus, Duvvada, Visakhapatnam, AP" },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                      <Icon size={16} style={{ color: "#2563EB" }} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold mb-0.5" style={{ color: "#94A3B8" }}>{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-medium transition-colors duration-200" style={{ color: "#0F172A" }} onMouseEnter={e => e.currentTarget.style.color = "#2563EB"} onMouseLeave={e => e.currentTarget.style.color = "#0F172A"}>{value}</a>
                        : <p className="text-sm font-medium" style={{ color: "#0F172A" }}>{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #E2E8F0" }}>
                {[{ href: socialLinks?.instagram, Icon: Instagram, label: "Instagram" },
                  { href: socialLinks?.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: socialLinks?.youtube, Icon: Youtube, label: "YouTube" }].map(({ href, Icon, label }) =>
                  href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                      className="h-9 w-9 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{ background: "#F8FAFF", border: "1px solid #E2E8F0", color: "#64748B" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.borderColor = "#BFDBFE"; e.currentTarget.style.color = "#2563EB"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#F8FAFF"; e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.color = "#64748B"; }}
                    >
                      <Icon size={15} />
                    </a>
                  ) : null
                )}
              </div>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <h3 className="font-display font-bold text-lg mb-5" style={{ color: "#0F172A" }}>Send Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold" style={{ color: "#64748B" }}>Name *</label>
                  <input type="text" required placeholder="Your name" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={inputClass} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold" style={{ color: "#64748B" }}>Email *</label>
                  <input type="email" required placeholder="Your email" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold" style={{ color: "#64748B" }}>Subject *</label>
                <input type="text" required placeholder="Incubation / Partnership / General Query" value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className={inputClass} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur} />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold" style={{ color: "#64748B" }}>Message *</label>
                <textarea required rows={4} placeholder="Tell us about your startup idea or query..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`} style={inputStyle} onFocus={inputFocus} onBlur={inputBlur}
                />
              </div>

              <button type="submit" disabled={sent || loading}
                className="btn-primary w-full justify-center py-3.5 text-sm"
                style={{ opacity: sent || loading ? 0.85 : 1 }}
              >
                {sent ? <><CheckCircle2 size={15} /> Message Sent!</> : <><Send size={14} /> {loading ? "Sending..." : "Send Message"}</>}
              </button>
              {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
