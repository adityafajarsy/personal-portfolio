import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sloganVariants = {
  hidden: { opacity: 0, y: 5, skewX: 0 },
  visible: {
    opacity: [0, 1, 0.35, 1, 0.6, 1],
    y: 0,
    skewX: [0, -10, 10, -5, 5, 0],
    transition: { delay: 0.8, duration: 0.4, ease: "linear" },
  },
};

export default function Project({ onSelectProject }) {
  const { t } = useLanguage();
  const listProyek = t("projects.list") || [];

  return (
    <motion.section
      id="project"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <motion.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          {t("projects.label")}
        </motion.span>
        <div className="relative mt-3">
          <motion.span
            variants={sloganVariants}
            className="absolute top-[-8px] sm:top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 text-[1.35rem] sm:text-[clamp(1.1rem,3vw,1.7rem)]"
            style={{ fontFamily: "'Nothing You Could Do', cursive" }}
          >
            {t("projects.slogan")}
          </motion.span>
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            {t("projects.title")}
          </motion.h2>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="relative w-full">
        {/* Right edge fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-none"
          variants={containerVariants}
        >
          {listProyek.map((project) => (
            <motion.div
              key={project.id}
              className="w-[88vw] sm:w-[72%] lg:w-[68%] flex-shrink-0 snap-start group bg-[#0B0B0B] border border-white/5 rounded-[24px] overflow-hidden hover:border-white/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.015, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              {/* Clickable Thumbnail — big */}
              <button
                className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 block cursor-pointer focus:outline-none"
                onClick={() => onSelectProject && onSelectProject(project)}
                aria-label={`View ${project.nama} project`}
              >
                <img
                  src={project.gambar}
                  alt={project.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-[#0B0B0B]/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

                {/* Hover pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                  <div className="bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5 text-[13px] font-bold text-white flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View Project
                  </div>
                </div>
              </button>

              {/* Name + Tech Pills */}
              <div className="px-5 py-4 flex flex-col gap-3">
                <h3 className="text-[17px] font-bold text-white tracking-tight leading-snug">
                  {project.nama}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-[11px] font-semibold text-white/50 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md leading-none"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
