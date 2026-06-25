import React from "react";
import { ExternalLink, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { listProyek } from "../data";

export default function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Maps static project metadata based on description content
  const getProjectMeta = (id) => {
    switch (id) {
      case 1:
        return { date: "2025", role: "Full Stack Developer", category: "MERN Stack Clone" };
      case 2:
        return { date: "2025", role: "Frontend Developer", category: "E-Commerce Web" };
      case 3:
        return { date: "2025", role: "Frontend Developer", category: "GSAP" };
      case 4:
        return { date: "2025", role: "UI & Interaction Developer", category: "Creative Landing Page" };
      case 5:
        return { date: "2025", role: "Web Developer", category: "AI Landing Page" };
      default:
        return { date: "2024", role: "Developer", category: "Web App" };
    }
  };

  return (
    <motion.section
      id="project"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Uppercase Section Header */}
      <div className="flex flex-col gap-1">
        <motion.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          Projects
        </motion.span>
        <motion.h2
          className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
          variants={itemVariants}
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Projects Horizontal Carousel — with swipe hint on mobile */}
      <div className="relative w-full">
        {/* Swipe hint: right fade gradient (mobile only) */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 lg:hidden" />

        {/* Swipe pill indicator (mobile only) */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 lg:hidden flex items-center gap-1.5 bg-white/5 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[11px] text-[#8A8A8A] font-medium select-none"
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Swipe
        </motion.div>

        <motion.div
          className="flex overflow-x-auto gap-6 mt-4 pb-10 snap-x snap-mandatory scroll-smooth scrollbar-none w-full"
          variants={containerVariants}
        >
          {listProyek.map((project) => {
            const meta = getProjectMeta(project.id);
            return (
              <motion.div
                key={project.id}
                className="w-[85vw] sm:w-[480px] flex-shrink-0 snap-start group bg-[#0B0B0B] border border-white/5 rounded-[28px] overflow-hidden flex flex-col hover:border-[#3B82F6]/30 hover:shadow-[0_12px_30px_rgba(59,130,246,0.08)] transition-all duration-300 relative"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                {/* Image Container */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/5 relative">
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#8A8A8A] font-medium leading-none">
                    <span>{meta.date}</span>
                    <span>•</span>
                    <span>{meta.role}</span>
                    <span>•</span>
                    <span className="text-[#3B82F6]">{meta.category}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] font-bold text-white tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors duration-250">
                      {project.nama}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#8A8A8A] font-normal">
                      {project.desk}
                    </p>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-semibold text-white/60 bg-[#161616] border border-white/5 px-2 py-0.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Link Action */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full text-[13px] font-bold text-white bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded-xl px-4 py-2.5 transition-all duration-200"
                      >
                        <span>Launch Project</span>
                        <ExternalLink size={14} className="text-[#3B82F6]" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-between w-full text-[13px] font-medium text-[#8A8A8A] bg-white/0 border border-white/5 border-dashed rounded-xl px-4 py-2.5 cursor-not-allowed">
                        <span>Not Deployed (Local Dev)</span>
                        <Lock size={14} className="text-[#8A8A8A]" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
