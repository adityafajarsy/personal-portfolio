import React, { useState, useEffect } from "react";
import {
  m,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const [hoveredProject, setHoveredProject] = useState(null);
  // Mobile fullscreen overlay state
  const [mobileOverlay, setMobileOverlay] = useState(null);

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    if (mobileOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOverlay]);

  // Mouse cursor tracking for floating preview
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 22, stiffness: 260, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothX, (latest) => {
    if (typeof window === "undefined") return 0;
    const center = window.innerWidth / 2;
    return ((latest - center) / center) * 10;
  });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const toggle = (id) => {
    setHoveredProject(null);
    // On mobile: open fullscreen overlay instead of inline expand
    if (window.innerWidth < 640) {
      const project = listProyek.find((p) => p.id === id);
      if (project) {
        setMobileOverlay(project);
        return;
      }
    }
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
    {/* ── Mobile Bottom Sheet Overlay ── */}
    <AnimatePresence>
      {mobileOverlay && (
        <>
          {/* Backdrop — no blur during animation, too expensive on mobile */}
          <m.div
            key="backdrop"
            className="sm:hidden fixed inset-0 z-[199] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOverlay(null)}
          />

          {/* Bottom Sheet — outer layer: transform only (GPU composite) */}
          <m.div
            key="mobile-sheet"
            className="sm:hidden fixed bottom-0 inset-x-0 z-[200]"
            style={{ height: "60vh", willChange: "transform" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.8 }}
          >
            {/* Inner visual layer: radius + clip + bg (static, no transform) */}
            <div className="w-full h-full rounded-t-[28px] overflow-hidden bg-[#0D0D0D] border-t border-white/10 flex flex-col">
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Cover image — top 45% of sheet */}
            <div className="relative shrink-0" style={{ height: "45%" }}>
              <img
                src={mobileOverlay.gambar}
                alt={mobileOverlay.nama}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/20 to-transparent" />

              {/* Top-right icon bar: view detail + live + close */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                {/* View Detail pill (icon + text) */}
                <button
                  onClick={() => {
                    setMobileOverlay(null);
                    onSelectProject && onSelectProject(mobileOverlay);
                  }}
                  className="h-9 px-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center gap-1.5"
                  aria-label="View Detail"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <span className="text-[11px] font-semibold text-white">View Details</span>
                </button>

                {/* Live project icon (only if link exists) */}
                {mobileOverlay.link && (
                  <a
                    href={mobileOverlay.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    aria-label="Launch Project"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                )}

                {/* Close */}
                <button
                  onClick={() => setMobileOverlay(null)}
                  className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center"
                  aria-label="Close"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col px-5 pt-3 pb-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-bold text-white tracking-tight leading-tight">
                  {mobileOverlay.nama}
                </h3>
                {mobileOverlay.meta?.date && (
                  <span className="text-[11px] text-white/35 font-medium">{mobileOverlay.meta.date}</span>
                )}
              </div>
              {mobileOverlay.meta?.category && (
                <span className="text-[10px] font-bold tracking-[0.15em] text-white/35 uppercase mt-0.5">
                  {mobileOverlay.meta.category}
                </span>
              )}
              <p className="mt-2 text-[12px] text-white/55 leading-relaxed line-clamp-3">
                {mobileOverlay.desk}
              </p>
            </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>

    <m.section
      id="project"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
    >
      {/* Desktop Floating Cursor Image Preview */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-[90] overflow-hidden">
        <AnimatePresence>
          {hoveredProject && expandedId !== hoveredProject.id && (
            <m.div
              key={hoveredProject.id}
              initial={{ opacity: 0, scale: 0.6, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                y: 10,
                transition: { duration: 0.18 },
              }}
              style={{
                position: "fixed",
                left: smoothX,
                top: smoothY,
                x: "-50%",
                y: "-50%",
                rotate: rotateX,
              }}
              className="w-[290px] h-[180px] rounded-[16px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(59,130,246,0.2)] border border-white/20 bg-[#0B0B0B] p-1.5 flex flex-col"
            >
              <div className="w-full h-full rounded-[12px] overflow-hidden relative">
                <img
                  src={hoveredProject.gambar}
                  alt={hoveredProject.nama}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11.5px] font-bold text-white tracking-wide truncate drop-shadow-md">
                    {hoveredProject.nama}
                  </span>
                  <span className="text-[9.5px] font-semibold text-[#3B82F6] bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15 shrink-0">
                    {hoveredProject.category ||
                      hoveredProject.meta?.category ||
                      "Explore"}
                  </span>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
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
              className="font-bold text-white tracking-tight whitespace-nowrap"
              style={{ fontSize: "clamp(1.75rem, 7vw, 2.5rem)" }}
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
            width="120"
            height="120"
            loading="lazy"
            decoding="async"
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
              {/* Row ,  */}
              <button
                className="w-full text-left py-6 flex items-center gap-4 group cursor-pointer focus:outline-none relative"
                onClick={() => toggle(project.id)}
                onMouseEnter={() => {
                  if (!isOpen) setHoveredProject(project);
                }}
                onMouseLeave={() => setHoveredProject(null)}
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span
                  className={`text-[14px] font-bold tracking-widest tabular-nums transition-colors duration-200 w-8 shrink-0 ${
                    isOpen ? "text-[#3B82F6]" : "text-white/25"
                  }`}
                >
                  {num}
                </span>

                {/* Project name */}
                <div className="flex-1">
                  <span
                    className={`text-[23px] sm:text-[24px] lg:text-[26px] font-bold tracking-tight leading-tight transition-colors duration-200 ${
                      isOpen
                        ? "text-[#3B82F6]"
                        : "text-white group-hover:text-white/80"
                    }`}
                  >
                    {project.nama}
                  </span>
                </div>

                {/* ,  on small mobile */}
                <span className="hidden sm:block text-[13px] text-white/40 font-medium w-40 shrink-0">
                  {project.meta?.category || "Web Application"}
                </span>

                {/* Year */}
                <span className="text-[14px] text-white/40 font-medium w-12 shrink-0 text-right sm:text-left">
                  {project.meta?.date || "2025"}
                </span>

                {/* Expand icon */}
                <div
                  className={`ml-3 shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? "border-[#3B82F6]/60 text-[#3B82F6] bg-[#3B82F6]/10 rotate-45"
                      : "border-white/15 text-white/40 group-hover:border-white/30 group-hover:text-white/70"
                  }`}
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
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
                            onClick={() =>
                              onSelectProject && onSelectProject(project)
                            }
                            className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white transition-colors duration-150"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <path d="M21 21l-4.35-4.35" />
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
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
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
                          width="420"
                          height="262"
                          loading="lazy"
                          decoding="async"
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
                            onClick={() =>
                              onSelectProject && onSelectProject(project)
                            }
                            className="flex items-center gap-2 text-[12px] font-bold text-white/60 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-4 py-2 transition-all duration-200"
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <path d="M21 21l-4.35-4.35" />
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
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
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
    </>
  );
}
