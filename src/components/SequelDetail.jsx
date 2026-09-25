import React, { useState } from "react";
import { m } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const IconExternal = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconMediaPlaceholder = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-red-400/60">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

// ── Typography & Dividers ─────────────────────────────────────────────────────
const STitle = ({ children }) => (
  <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight">
    {children}
  </h2>
);

const Divider = () => <div className="w-full h-px bg-white/5 my-10 sm:my-16" />;

// ── Non-Cropped Media Frame (No hover zoom, fits 100% full content) ───────────
const MediaFrame = ({
  src,
  title,
  caption,
  className = "",
}) => {
  const [hasError, setHasError] = useState(false);
  const isVideo = src && (src.endsWith(".webm") || src.endsWith(".mp4"));

  return (
    <div className={`flex flex-col gap-2.5 w-full ${className}`}>
      <div className="w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#0B0407] border border-white/10 relative shadow-2xl flex items-center justify-center p-1 sm:p-2.5">
        {/* Subtle Static Background Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EF4444]/6 via-transparent to-[#B91C1C]/4 pointer-events-none" />

        {src && !hasError ? (
          isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onError={() => setHasError(true)}
              className="w-full h-auto max-h-[760px] object-contain rounded-[12px] sm:rounded-[18px] z-0 block"
            />
          ) : (
            <img
              src={src}
              alt={title || "Sequel visual"}
              onError={() => setHasError(true)}
              className="w-full h-auto max-h-[760px] object-contain rounded-[12px] sm:rounded-[18px] z-0 block"
              loading="lazy"
              decoding="async"
            />
          )
        ) : (
          /* Media Slot Placeholder */
          <div className="w-full aspect-[16/9] min-h-[240px] sm:min-h-[320px] flex flex-col items-center justify-center gap-3.5 p-6 text-center bg-gradient-to-b from-[#180A0E] via-[#0E0507] to-[#0A0406] rounded-[12px] sm:rounded-[18px]">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center shadow-lg shadow-red-950/40">
              <IconMediaPlaceholder />
            </div>
            <div className="flex flex-col gap-1.5 max-w-md">
              <span className="text-[14px] font-bold text-white/90 tracking-wide">
                {title || "Media Slot (Photo / Video)"}
              </span>
              <span className="text-[11px] font-mono text-red-300/60 bg-red-950/40 border border-red-800/30 px-3 py-1 rounded-md inline-block mx-auto">
                Siap diisi file: {src || "/assets/sequel/..."}
              </span>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <span className="text-[11px] sm:text-[12px] font-mono text-white/40 tracking-wider pl-1">
          // {caption}
        </span>
      )}
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function SequelDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("sequelDetail") || {};

  const handleBack = () => {
    onClose();
    setTimeout(() => {
      const s = document.getElementById("project");
      if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <m.div
      id="project-detail"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-12 sm:gap-16 pb-20 select-none max-w-5xl mx-auto"
    >
      {/* ── Top Bar Navigation ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
            <IconArrowLeft />
          </span>
          <span>{t("projects.backBtn") || "Back to Portfolio"}</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={d.repoUrl || "https://github.com/adityafajarsy/Sequel_ai-design-clone"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-white/80 text-[12px] font-bold transition-all active:scale-95"
          >
            <IconGithub />
            <span className="hidden sm:inline">{d.repoBtn || "GitHub Repo"}</span>
          </a>
          <a
            href={d.liveDemoUrl || "https://sequelstudio.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#B91C1C] hover:opacity-95 text-white text-[12px] font-bold transition-all shadow-md shadow-red-500/25 active:scale-95"
          >
            <span>{d.launchBtn || "Launch Sequel"}</span>
            <IconExternal />
          </a>
        </div>
      </div>

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-black text-white tracking-tight leading-[1.04]">
              Sequel
            </h1>
            <span className="text-[#EF4444] text-[36px] sm:text-[52px] leading-none font-black">•</span>
          </div>

          <p className="text-[16px] sm:text-[19px] text-white/70 leading-relaxed max-w-3xl font-normal">
            {d.heroHeadline || project.subtitle}
          </p>
        </div>

        {/* Hero Mockup Frame */}
        <MediaFrame
          src="/assets/sequel/banner-cover.webp"
          title="Sequel Studio Showcase"
          caption="Sequel platform cover — Consistent visual DNA across social media feeds"
        />
      </m.div>

      <Divider />

      {/* ── Section 01: Mode 2 — Visual DNA & Lineage Continuation ────────────── */}
      <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <div>
            <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-red-300 uppercase shadow-sm">
              {d.sec1Badge || "MODE 2: LINEAGE CONTINUATION"}
            </span>
          </div>
          <STitle>{d.sec1Title || "Visual DNA & Lineage Continuation from existing posts."}</STitle>
          <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec1Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec1MediaSrc || "/assets/sequel/continue-section.webp"}
          title="Visual DNA & Lineage Continuation"
          caption={d.sec1Caption}
        />
      </m.div>

      <Divider />

      {/* ── Section 02: Mode 1 — Guided Editorial Intake ──────────────────────── */}
      <m.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <div>
            <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-red-300 uppercase shadow-sm">
              {d.sec2Badge || "MODE 1: GUIDED STUDIO INTAKE"}
            </span>
          </div>
          <STitle>{d.sec2Title || "Guided Editorial Intake on an interactive studio canvas."}</STitle>
          <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec2Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec2MediaSrc || "/assets/sequel/section-mode-1.webp"}
          title="Guided Studio Editorial Intake"
          caption={d.sec2Caption}
        />
      </m.div>

      <Divider />

      {/* ── Section 03: In-Canvas AI Edit Pass & Pipeline ─────────────────────── */}
      <m.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <div>
            <span className="px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-red-300 uppercase shadow-sm">
              {d.sec3Badge || "IN-CANVAS ITERATION & PIPELINE"}
            </span>
          </div>
          <STitle>{d.sec3Title || "In-Canvas AI Edit Pass & Two-Stage Pipeline."}</STitle>
          <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec3Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec3MediaSrc || "/assets/sequel/edit-canvas.webp"}
          title="In-Canvas AI Edit Pass & Studio Pipeline"
          caption={d.sec3Caption}
        />
      </m.div>

      {/* ── Bottom Launch CTA ─────────────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="visible"
        className="mt-6 p-6 sm:p-10 rounded-[24px] bg-gradient-to-r from-[#200A10] via-[#100508] to-[#200A10] border border-red-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="flex flex-col gap-2 text-center sm:text-left z-10 max-w-xl">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-red-400 uppercase">
              {d.ctaTag || "SAME VIBE, FURTHER"}
            </span>
          </div>
          <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
            {d.ctaHeadline || "Ready to experience Sequel?"}
          </h3>
          <p className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed">
            {d.ctaDesc || "Explore the live studio application or inspect the architecture repository on GitHub."}
          </p>
        </div>

        <div className="flex items-center gap-3 z-10 w-full sm:w-auto justify-center">
          <a
            href={d.repoUrl || "https://github.com/adityafajarsy/Sequel_ai-design-clone"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-[13px] font-bold transition-all active:scale-95 inline-flex items-center gap-2"
          >
            <IconGithub />
            <span>{d.repoBtn || "GitHub"}</span>
          </a>
          <a
            href={d.liveDemoUrl || "https://sequelstudio.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#EF4444] via-[#DC2626] to-[#B91C1C] hover:opacity-95 text-white text-[13px] font-bold transition-all shadow-lg shadow-red-500/30 active:scale-95 inline-flex items-center gap-2"
          >
            <span>{d.launchBtn || "Launch Sequel"}</span>
            <IconExternal />
          </a>
        </div>
      </m.div>
    </m.div>
  );
}
