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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
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

// ── Flexible Media Frame (Video / Photo / Elegant Placeholder) ────────────────
const MediaFrame = ({
  src,
  title,
  badge,
  caption,
  aspect = "aspect-[16/9]",
  objectFit = "object-cover",
  objectPosition = "object-center",
}) => {
  const [hasError, setHasError] = useState(false);
  const isVideo = src && (src.endsWith(".webm") || src.endsWith(".mp4"));

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div
        className={`w-full ${aspect} rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#0A0713] border border-white/10 relative shadow-2xl transition-all duration-300 hover:border-pink-500/30 group`}
      >
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EC4899]/10 via-transparent to-[#8B5CF6]/5 pointer-events-none" />

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
              className={`w-full h-full ${objectFit} ${objectPosition} z-0`}
            />
          ) : (
            <img
              src={src}
              alt={title || "PICO feature visual"}
              onError={() => setHasError(true)}
              className={`w-full h-full ${objectFit} ${objectPosition} z-0 transition-transform duration-700 group-hover:scale-[1.01]`}
              loading="lazy"
              decoding="async"
            />
          )
        ) : (
          /* Sleek Media Slot Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-b from-[#130E22] to-[#0A0713]">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <IconMediaPlaceholder />
            </div>
            <div className="flex flex-col gap-1 max-w-sm">
              <span className="text-[13px] font-bold text-white/80">
                {title || "Media Slot (Photo / Video)"}
              </span>
              <span className="text-[11px] font-mono text-white/40">
                Siap diisi file: {src || "/assets/pico/..."}
              </span>
            </div>
          </div>
        )}

        {/* Top / Bottom Overlay Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713]/80 via-transparent to-transparent pointer-events-none" />

        {badge && (
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-pink-300 uppercase">
              {badge}
            </span>
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
export default function PicoDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("picoDetail") || {};

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
            href={d.repoUrl || "https://github.com/adityafajarsy/PICO-Social-Media-Designer"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-white/80 text-[12px] font-bold transition-all active:scale-95"
          >
            <IconGithub />
            <span className="hidden sm:inline">{d.repoBtn || "GitHub Repo"}</span>
          </a>
          <a
            href={d.liveDemoUrl || "https://picorner.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#D946EF] hover:opacity-95 text-white text-[12px] font-bold transition-all shadow-md shadow-pink-500/20 active:scale-95"
          >
            <span>{d.launchBtn || "Launch PICO"}</span>
            <IconExternal />
          </a>
        </div>
      </div>

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-black text-white tracking-tight leading-[1.04]">
            PICO
          </h1>

          <p className="text-[16px] sm:text-[19px] text-white/70 leading-relaxed max-w-3xl font-normal">
            {d.heroHeadline || project.subtitle}
          </p>
        </div>

        {/* Hero Mockup Frame */}
        <MediaFrame
          src="/assets/pico/pico-laptop.webp"
          title="PICO Studio Workspace"
          badge="PICO — CORNER FOR DESIGNERS"
          caption="PICO live platform on desktop — picorner.vercel.app"
          aspect="aspect-[16/9]"
          objectPosition="object-center"
        />
      </m.div>

      <Divider />

      {/* ── Section 01: The Spark (Kenapa PICO Dibuat) ────────────────────────── */}
      <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <STitle>{d.sec1Title || "A dedicated gathering space for designers."}</STitle>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec1Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec1MediaSrc || "/assets/pico/feed-3d.webp"}
          title="PICO Community Feed & Exploration"
          badge={d.sec1Badge || "FEED OVERVIEW"}
          caption={d.sec1Caption}
          aspect="aspect-[16/9]"
          objectPosition="object-center"
        />
      </m.div>

      <Divider />

      {/* ── Section 02: Showcase Reference (Pinterest Vibe) ──────────────────── */}
      <m.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <STitle>{d.sec2Title || "Showcase & visual discovery, Pinterest-style."}</STitle>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec2Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec2MediaSrc || "/assets/pico/moodboard.webp"}
          title="Visual Pinning & Masonry Moodboard"
          badge={d.sec2Badge || "SHOWCASE REFERENCE"}
          caption={d.sec2Caption}
          aspect="aspect-[16/9]"
          objectPosition="object-center"
        />
      </m.div>

      <Divider />

      {/* ── Section 03: Mascot Pico & In-Thread @pico-ai (ala Grok) ───────────── */}
      <m.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <STitle>{d.sec3Title || "Meet Pico the cat & the in-thread @pico-ai."}</STitle>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec3Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec3MediaSrc || "/assets/pico/pico-chat.webp"}
          title="In-Thread @pico-ai Multimodal Assistant"
          badge={d.sec3Badge || "@PICO-AI MULTIMODAL IN-THREAD"}
          caption={d.sec3Caption}
          aspect="aspect-[16/9]"
          objectPosition="object-center"
        />
      </m.div>

      <Divider />

      {/* ── Section 04: The Social Core (Komunitas Medsos) ────────────────────── */}
      <m.div variants={fadeUp} custom={4} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <STitle>{d.sec4Title || "A living social platform for creators."}</STitle>
          <p className="mt-3 text-[14px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl">
            {d.sec4Desc}
          </p>
        </div>

        <MediaFrame
          src={d.sec4MediaSrc || "/assets/pico/last-section.webp"}
          title="Community Discussions & Dynamic Reactions"
          badge={d.sec4Badge || "COMMUNITY & DISCUSSIONS"}
          caption={d.sec4Caption}
          aspect="aspect-[16/9]"
          objectPosition="object-center"
        />
      </m.div>

      {/* ── Bottom Launch CTA ─────────────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={5}
        initial="hidden"
        animate="visible"
        className="mt-6 p-6 sm:p-10 rounded-[24px] bg-gradient-to-r from-[#170E28] via-[#0E0B1A] to-[#170E28] border border-pink-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ec489915_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 border border-pink-400/40 shadow-lg shadow-pink-500/20 flex-shrink-0 flex items-center justify-center">
            <img
              src="/assets/pico/pico-reaction.jpg"
              alt="Pico Reaction Mascot"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <span className="text-[11px] font-mono text-[#F43F5E] uppercase tracking-widest font-bold">
              PICO — CORNER FOR DESIGNERS
            </span>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
              Live Platform
            </h3>
            <p className="text-[13px] text-white/60 max-w-md">
              Eksplorasi kurasi moodboard visual, diskusi komunitas desainer, dan mention @pico-ai di platform live.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 z-10 flex-wrap justify-center">
          <a
            href={d.liveDemoUrl || "https://picorner.vercel.app"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#EC4899] to-[#D946EF] hover:opacity-95 text-white text-[13px] font-bold shadow-lg shadow-pink-500/25 active:scale-95 transition-all"
          >
            <span>{d.launchBtn || "Launch PICO"}</span>
            <IconExternal />
          </a>

          <a
            href={d.repoUrl || "https://github.com/adityafajarsy/PICO-Social-Media-Designer"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[13px] font-bold active:scale-95 transition-all"
          >
            <IconGithub />
            <span>{d.repoBtn || "GitHub Repo"}</span>
          </a>
        </div>
      </m.div>
    </m.div>
  );
}
