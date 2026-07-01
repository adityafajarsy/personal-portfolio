import React, { useEffect } from "react";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function ProjectDetail({ project, onClose }) {
  const { t } = useLanguage();
  const images = project.images || [];
  const hasImages = images.length > 0;

  // Scroll to top on open
  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: "instant" });
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-10 pb-10"
    >
      {/* ── Back button ── */}
      <div>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ArrowLeft size={14} className="text-[#3B82F6]" />
          {t("projects.backBtn") || "Back to Portfolio"}
        </button>
      </div>

      {/* ── Hero image ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5"
      >
        <img
          src={project.gambar}
          alt={project.nama}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Header: title + meta + live link ── */}
      <motion.div
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[38px] font-black text-white tracking-tight leading-tight max-w-xl">
            {project.nama}
          </h1>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[13px] font-bold transition-all duration-200 flex-shrink-0"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

        {/* Meta row */}
        {project.meta && (
          <div className="flex flex-wrap gap-4 text-[13px] text-[#8A8A8A]">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-[#3B82F6]" />
              {project.meta.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={13} className="text-[#3B82F6]" />
              {project.meta.role}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={13} className="text-[#3B82F6]" />
              {project.meta.category}
            </span>
          </div>
        )}
      </motion.div>

      {/* ── Main content grid: description + tech stack ── */}
      <motion.div
        variants={fadeUp}
        custom={2}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6"
      >
        {/* Description */}
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[20px] p-6 flex flex-col gap-3">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            About this project
          </span>
          <p className="text-[15px] leading-[1.8] text-[#C0C0C0] font-normal">
            {project.longDesc || project.desk}
          </p>
        </div>

        {/* Tech stack sidebar */}
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[20px] p-6 flex flex-col gap-4 h-fit">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="text-[12px] font-semibold text-white/70 bg-white/5 border border-white/8 px-3 py-1 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Image gallery grid ── */}
      {hasImages ? (
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            Gallery
          </span>
          <div className="grid grid-cols-2 gap-3">
            {/* First image spans both columns as wide featured shot */}
            {images.map((src, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={4 + i}
                initial="hidden"
                animate="visible"
                className={`rounded-[16px] overflow-hidden bg-zinc-900 border border-white/5 ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={src}
                  alt={`${project.nama} screenshot ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        /* Placeholder when no extra images are added yet */
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            Gallery
          </span>
          <div className="grid grid-cols-2 gap-3">
            {/* Placeholder slots */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-[16px] border border-white/5 border-dashed bg-white/[0.02] flex items-center justify-center ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span className="text-[11px] text-[#555] font-medium">
                    Add images to <code className="text-[#3B82F6] text-[10px]">project.images[]</code>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Footer back button ── */}
      <div className="border-t border-white/5 pt-6">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ArrowLeft size={14} className="text-[#3B82F6]" />
          {t("projects.backBtn") || "Back to Portfolio"}
        </button>
      </div>
    </motion.div>
  );
}
