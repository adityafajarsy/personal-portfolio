import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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

const expandVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function Project({ onSelectProject }) {
  const { t } = useLanguage();
  const listProyek = t("projects.list") || [];
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <m.section
      id="project"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <m.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          {t("projects.label")}
        </m.span>
        <div className="flex items-center gap-4">
          <div className="relative mt-3">
            <m.span
              variants={sloganVariants}
              className="absolute top-[-8px] sm:top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 text-[1.35rem] sm:text-[clamp(1.1rem,3vw,1.7rem)] whitespace-nowrap"
              style={{ fontFamily: "'Nothing You Could Do', cursive" }}
            >
              {t("projects.slogan")}
            </m.span>
            <m.h2
              className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
              variants={itemVariants}
            >
              {t("projects.title")}
            </m.h2>
          </div>

          {/* Crown graffiti */}
          <m.img
            src="/assets/crown.webp"
            alt="crown"
            className="w-[80px] sm:w-[100px] lg:w-[120px] object-contain select-none pointer-events-none mt-3"
            style={{ rotate: "-12deg" }}
            variants={itemVariants}
          />
        </div>
      </div>

      {/* Editorial List */}
      <m.div className="flex flex-col" variants={containerVariants}>
        {listProyek.map((project, index) => {
          const isOpen = expandedId === project.id;
          const num = String(index + 1).padStart(2, "0");

          return (
            <m.div
              key={project.id}
              className="border-t border-white/8 last:border-b"
              variants={itemVariants}
            >
              {/* Row Header — clickable */}
              <button
                className="w-full text-left py-5 flex items-center gap-4 group cursor-pointer focus:outline-none"
                onClick={() => toggle(project.id)}
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span
                  className={`text-[13px] font-bold tracking-widest tabular-nums transition-colors duration-200 w-7 shrink-0 ${isOpen ? "text-[#3B82F6]" : "text-white/25"
                    }`}
                >
                  {num}
                </span>

                {/* Project name */}
                <div className="flex-1">
                  <span
                    className={`relative inline-flex items-center text-[20px] sm:text-[24px] lg:text-[26px] font-bold tracking-tight leading-tight transition-colors duration-200 ${isOpen
                      ? "text-[#3B82F6]"
                      : "text-white group-hover:text-white/80"
                      }`}
                  >
                    {project.nama}
                    {project.id === 1 && (
                      <span
                        className="absolute top-[-14px] left-[105px] sm:left-auto sm:right-[-48px] sm:top-[-10px] text-[#3B82F6] text-[12px] sm:text-[13px] tracking-tight font-bold select-none pointer-events-none whitespace-nowrap"
                        style={{ fontFamily: "'Nothing You Could Do', cursive", transform: "rotate(-6deg)" }}
                      >
                        3 Apps
                      </span>
                    )}
                    {project.id === 2 && (
                      <span
                        className="absolute top-[-14px] left-[110px] sm:left-auto sm:right-[-52px] sm:top-[-10px] text-[#3B82F6] text-[12px] sm:text-[13px] tracking-tight font-bold select-none pointer-events-none whitespace-nowrap"
                        style={{ fontFamily: "'Nothing You Could Do', cursive", transform: "rotate(-6deg)" }}
                      >
                        Portfolio
                      </span>
                    )}

                  </span>
                </div>

                {/* Category — hidden on small mobile */}
                <span className="hidden sm:block text-[13px] text-white/40 font-medium w-40 shrink-0">
                  {project.meta?.category || "Web Application"}
                </span>

                {/* Year */}
                <span className="text-[13px] text-white/40 font-medium w-12 shrink-0 text-right sm:text-left">
                  {project.meta?.date || "2025"}
                </span>

                {/* Expand icon */}
                <div
                  className={`ml-3 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen
                    ? "border-[#3B82F6]/60 text-[#3B82F6] bg-[#3B82F6]/10 rotate-45"
                    : "border-white/15 text-white/40 group-hover:border-white/30 group-hover:text-white/70"
                    }`}
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="7" y1="1" x2="7" y2="13" />
                    <line x1="1" y1="7" x2="13" y2="7" />
                  </svg>
                </div>
              </button>

              {/* Expanded Panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    key="panel"
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ overflow: "hidden" }}
                  >
                    {/* ─── MOBILE: ghost image background + content ─── */}
                    <div className="sm:hidden relative mb-6 rounded-[16px] overflow-hidden bg-[#0B0B0B] border border-white/5 min-h-[180px] flex flex-col justify-end">
                      {/* Ghost background image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${project.gambar})`,
                          opacity: 0.2,
                        }}
                      />
                      {/* Gradient fade on top of ghost image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />

                      {/* Content on top */}
                      <div className="relative z-10 p-4 flex flex-col gap-3">
                        {/* Description */}
                        <p className="text-[12px] text-white/60 leading-relaxed line-clamp-3">
                          {project.desk}
                        </p>
                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.slice(0, 5).map((tool, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-semibold text-white/50 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                        {/* Launch / View Detail row */}
                        <div className="flex items-center gap-3 mt-1">
                          <button
                            onClick={() => onSelectProject && onSelectProject(project)}
                            className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white transition-colors duration-150"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                            View Detail
                          </button>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-[11px] font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-150 ml-auto"
                            >
                              {t("projects.launchBtn")}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* ─── DESKTOP: image left + content right ─── */}
                    <div className="hidden sm:flex gap-6 mb-7 items-start">
                      {/* Project image */}
                      <div className="w-[42%] lg:w-[38%] flex-shrink-0 rounded-[14px] overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5">
                        <img
                          src={project.gambar}
                          alt={project.nama}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Right content */}
                      <div className="flex-1 flex flex-col gap-4 pt-1">
                        {/* Role badge */}
                        {project.meta?.role && (
                          <span className="text-[11px] font-bold tracking-widest text-[#3B82F6] uppercase">
                            {project.meta.role}
                          </span>
                        )}

                        {/* Description */}
                        <p className="text-[13px] lg:text-[14px] text-white/60 leading-relaxed">
                          {project.desk}
                        </p>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-semibold text-white/50 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md leading-none"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-4 mt-2">
                          <button
                            onClick={() => onSelectProject && onSelectProject(project)}
                            className="flex items-center gap-2 text-[12px] font-bold text-white/60 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-4 py-2 transition-all duration-200"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                            </svg>
                            View Detail
                          </button>

                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[12px] font-bold text-[#3B82F6] hover:text-[#60A5FA] border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 rounded-full px-4 py-2 transition-all duration-200"
                            >
                              {t("projects.launchBtn")}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                              </svg>
                            </a>
                          ) : (
                            <span className="text-[11px] font-medium text-white/25 italic">
                              {t("projects.notDeployed")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          );
        })}
      </m.div>
    </m.section>
  );
}
