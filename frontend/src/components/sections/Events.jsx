import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { previousEvents } from "../../data/previousEvents.js";

function formatDate(dateStr) {
  try { return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }
  catch { return dateStr; }
}

export default function Events({ events = [] }) {
  const published = events.filter((e) => e.status !== "unpublished").slice(0, 6);

  return (
    <section id="events" className="py-20 px-5 md:px-10 lg:px-16 bg-white">
      <div className="container-shell max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="section-label mb-4">Events</div>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "#0F172A" }}>
              Upcoming Events
            </h2>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-colors duration-200"
            style={{ color: "#2563EB" }}
            onMouseEnter={e => e.currentTarget.style.color = "#1D4ED8"}
            onMouseLeave={e => e.currentTarget.style.color = "#2563EB"}
          >
            View all events <ArrowRight size={14} />
          </Link>
        </motion.div>

        {published.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm font-medium" style={{ color: "#94A3B8" }}>No upcoming events right now. Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {published.map((event, index) => (
              <motion.article
                key={event.id || event._id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="card-white overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-t-2xl" style={{ background: "#EFF6FF" }}>
                  {event.image && (
                    <img
                      src={event.image} alt={event.title} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-sm mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>
                    {event.title}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-3 mb-4 flex-1" style={{ color: "#64748B" }}>
                    {event.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-1.5 text-[11px] font-medium mb-4 pb-4" style={{ borderBottom: "1px solid #E2E8F0", color: "#94A3B8" }}>
                    <div className="flex items-center gap-2"><Calendar size={12} style={{ color: "#2563EB" }} /><span>{formatDate(event.date)}</span></div>
                    <div className="flex items-center gap-2"><Clock size={12} style={{ color: "#2563EB" }} /><span>{event.time}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={12} style={{ color: "#2563EB" }} /><span className="line-clamp-1">{event.location}</span></div>
                  </div>

                  <a
                    href={event.registrationUrl || "#"} target="_blank" rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-xs py-2.5"
                  >
                    Register Now <ArrowRight size={12} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Previous Events Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-20 mb-12"
        >
          <div>
            <div className="section-label mb-4">Past Events</div>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "#0F172A" }}>
              Previous Events
            </h2>
          </div>
        </motion.div>

        {previousEvents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm font-medium" style={{ color: "#94A3B8" }}>No previous events to display.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousEvents.map((event, index) => (
              <motion.article
                key={event.id || event._id || index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="card-white overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden rounded-t-2xl" style={{ background: "#EFF6FF" }}>
                  {event.image && (
                    <img
                      src={event.image} alt={event.title} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-sm mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>
                    {event.title}
                  </h3>
                  <p className="text-xs leading-relaxed line-clamp-3 mb-4 flex-1" style={{ color: "#64748B" }}>
                    {event.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-1.5 text-[11px] font-medium mb-4 pb-4" style={{ borderBottom: "1px solid #E2E8F0", color: "#94A3B8" }}>
                    <div className="flex items-center gap-2"><Calendar size={12} style={{ color: "#2563EB" }} /><span>{formatDate(event.date)}</span></div>
                    {event.time && <div className="flex items-center gap-2"><Clock size={12} style={{ color: "#2563EB" }} /><span>{event.time}</span></div>}
                    <div className="flex items-center gap-2"><MapPin size={12} style={{ color: "#2563EB" }} /><span className="line-clamp-1">{event.location}</span></div>
                  </div>

                  {event.registrationUrl && (
                    <a
                      href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
                      className="btn-primary w-full justify-center text-xs py-2.5"
                    >
                      View Details <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
