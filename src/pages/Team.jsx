import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const teamData = [
  {
    section: "LEAD",
    members: [
      { name: "Samshitha Amujuri", role: "Lead", image: "/team/A.Samshitha.jpg.jpeg" }
    ],
    layout: "lead"
  },
  {
    section: "CO-LEADS",
    members: [
      { name: "Santosh Modekruthi", role: "Co-Lead & Technical Lead", image: "/team/santosh.jpg.jpeg" },
      { name: "Saragada Venkata Kishore Reddy", role: "Co-Lead", image: "/team/S.Kishore.jpg.jpeg" }
    ],
    layout: "duo"
  },
  {
    section: "LEADERSHIP",
    members: [
      { name: "Khaja Eshaq", role: "Social Media Lead", image: "/team/Khaja eshaq.jpg.jpeg" },
      { name: "Peela Leela", role: "Management Lead", image: "/team/P.Leela.jpg.jpeg" }
    ],
    layout: "duo"
  },
  {
    section: "EVENT ORGANIZERS",
    members: [
      { name: "Y. Koushik", role: "Event Organizer", image: "/team/Y.Koushik.jpg.jpeg", objectPosition: "center", objectFit: "object-contain bg-white" },
      { name: "G. Komali", role: "Event Organizer", image: "/team/G.Komali.jpg.jpeg", objectPosition: "center", objectFit: "object-contain bg-white" },
      { name: "Ashritha", role: "Event Organizer", image: "/team/Ashritha.jpg.jpeg" }
    ],
    layout: "trio"
  },
  {
    section: "SOCIAL MEDIA",
    members: [
      { name: "E. Kavya Sri Nidhi", role: "Social Media Member", image: "/team/E.Kavya.jpg.jpeg", objectPosition: "center", objectFit: "object-contain bg-white" },
      { name: "P. Manasa", role: "Social Media Member", image: "/team/Manasa.jpg.jpeg" }
    ],
    layout: "duo"
  },
  {
    section: "TECHNICAL & DESIGN",
    members: [
      { name: "Bharath", role: "Technical Member", image: "/team/Bharath.jpg.jpeg" },
      { name: "Likitha Tejeswi", role: "Designing", image: "/team/Likitha Tejeswi.jpg.jpeg" }
    ],
    layout: "duo"
  },
  {
    section: "MEMBERS",
    members: [
      { name: "P. Vignesh", role: "Member", image: "/team/P.Vignesh.jpg.jpeg" },
      { name: "R. Balateja", role: "Member", image: "/team/R.Balateja.jpg.jpeg" }
    ],
    layout: "duo"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", stiffness: 100, damping: 20 
    } 
  }
};

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent"></div>
      </div>

      <Navbar />
      
      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mt-12 mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0a192f] tracking-tight mb-6">
              OUR TEAM
            </h1>
            <p className="text-lg sm:text-xl text-blue-600/80 font-medium max-w-2xl mx-auto leading-relaxed">
              Passionate minds. Stronger together. Creating impact with innovation.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-24">
            {teamData.map((group, sectionIndex) => (
              <motion.section 
                key={group.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="flex flex-col items-center"
              >
                <div className="mb-10 text-center">
                  <h2 className="text-2xl font-bold tracking-widest text-[#0a192f] uppercase">
                    {group.section}
                  </h2>
                  <div className="h-1 w-16 bg-blue-500 mx-auto mt-3 rounded-full opacity-70"></div>
                </div>

                <div className={`grid gap-8 w-full ${
                  group.layout === 'lead' ? 'max-w-md mx-auto grid-cols-1' :
                  group.layout === 'duo' ? 'max-w-4xl mx-auto md:grid-cols-2 grid-cols-1' :
                  'max-w-5xl mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1'
                }`}>
                  {group.members.map((member) => (
                    <motion.div
                      key={member.name}
                      variants={cardVariants}
                      className={`group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-blue-100/50 p-6 sm:p-8 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-2 ${group.layout === 'lead' ? 'sm:p-10' : ''}`}
                    >
                      {/* Subtle Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Profile Photo */}
                        <div className={`relative mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-100 to-blue-300 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-500 shadow-sm ${group.layout === 'lead' ? 'w-48 h-48' : 'w-40 h-40'}`}>
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            style={{ objectPosition: member.objectPosition || "center" }}
                            className={`w-full h-full ${member.objectFit || "object-cover"} rounded-full border-4 border-white transition-transform duration-500 group-hover:scale-105`}
                          />
                        </div>

                        {/* Info */}
                        <h3 className={`font-bold text-[#0a192f] mb-2 ${group.layout === 'lead' ? 'text-2xl' : 'text-xl'}`}>
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a192f] mb-6 leading-tight">
            Together, we innovate. <br/>
            <span className="text-blue-600">Together, we create impact.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            One Team. One Vision. Limitless Impact.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

