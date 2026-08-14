import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import SkeletonCard from "../ui/SkeletonCard.jsx";
import NewsCard from "./NewsCard.jsx";

export default function CampusNews({ items = [], loading = false }) {
  const published = items.filter((a) => a.status !== "unpublished");

  return (
    <div className="container-shell">
      <SectionHeading
        eyebrow="Campus News"
        title="Latest from Vignan University"
        description="Announcements, milestones and updates from across the university."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {loading ? (
            <React.Fragment key="skeleton">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </React.Fragment>
          ) : (
            <React.Fragment key="content">
              {published.length === 0 ? (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center text-white/50">
                  No news right now. Check back soon.
                </motion.p>
              ) : (
                published.map((item, i) => (
                  <NewsCard
                    key={item.id || item._id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    index={i}
                  />
                ))
              )}
            </React.Fragment>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
