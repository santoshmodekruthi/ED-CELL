import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const FAQS = [
  {
    q: "What are the eligibility criteria for undergraduate admission?",
    a: "Applicants must have completed their higher secondary education (10+2) with a minimum aggregate as specified for the chosen program, along with a valid entrance exam score where applicable.",
  },
  {
    q: "Does the university offer scholarships?",
    a: "Yes — merit-based and need-based scholarships are available across most programs. Details are shared during the admissions counselling process.",
  },
  {
    q: "Is on-campus hostel accommodation available?",
    a: "Separate hostel facilities are available for men and women, with mess, Wi-Fi, and recreational amenities included.",
  },
  {
    q: "How can I apply?",
    a: "Click 'Apply Now' to start your application online. You'll need your academic records, a valid photo ID, and entrance exam details (if applicable).",
  },
  {
    q: "Who can I contact for admissions queries?",
    a: "Reach the admissions office through the Contact section below — our counsellors respond within one working day.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl panel-on-light overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm sm:text-base ${isOpen ? "text-gold-600" : "text-ink-900"}`}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${isOpen ? "bg-grad-gold text-ink-950" : "bg-ink-900/5 text-ink-900"}`}
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-ink-900/70 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdmissionsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container-shell">
      <SectionHeading eyebrow="Admissions" title="Frequently Asked Questions" />
      <div className="mt-14 max-w-2xl mx-auto space-y-3">
        {FAQS.map((item, i) => (
          <FAQItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
        ))}
      </div>
    </div>
  );
}
