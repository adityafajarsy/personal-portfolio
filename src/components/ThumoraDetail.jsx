import React from "react";
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

// ── Shared Section Label & Title ──────────────────────────────────────────────
const SLabel = ({ children }) => (
  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C084FC] uppercase block mb-1">
    {children}
  </span>
);

const STitle = ({ children }) => (
  <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight">
    {children}
  </h2>
);

const Divider = () => <div className="w-full h-px bg-white/5 my-6 sm:my-8" />;

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

const IconPlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconImage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

// ── Reusable Editorial Media & Video Placeholder Frame ────────────────────────
const MediaFrame = ({
  title,
  subtitle,
  label = "ASSET PLACEHOLDER",
  imageSrc,
  videoSrc,
  aspect = "aspect-[16/9]",
  isVideo = false,
  borderless = false,
  imgClassName = "",
  className = "",
}) => {
  const [mediaError, setMediaError] = React.useState(false);

  if (borderless && imageSrc && !mediaError) {
    return (
      <div className={`w-full relative flex items-center justify-center overflow-hidden rounded-[16px] ${className}`}>
        <img
          src={imageSrc}
          alt={title}
          onError={() => setMediaError(true)}
          className={`w-full h-auto object-contain z-0 ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  // When real image is provided and aspect is aspect-auto, display full uncropped image
  if (imageSrc && !mediaError && aspect === "aspect-auto") {
    return (
      <div
        className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#08080C] border border-white/8 relative shadow-2xl transition-all duration-300 hover:border-white/15 ${className}`}
      >
        <img
          src={imageSrc}
          alt={title}
          onError={() => setMediaError(true)}
          className={`w-full h-auto block z-0 ${imgClassName}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#08080C] border border-white/8 relative flex flex-col ${aspect} justify-between p-4 sm:p-7 shadow-2xl transition-all duration-300 hover:border-white/15 ${className}`}
    >
      {/* Subtle Purple / Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/5 via-transparent to-[#3B82F6]/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

      {/* Real Video Player if provided */}
      {videoSrc && !mediaError ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setMediaError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      ) : imageSrc && !mediaError ? (
        /* Real Image Preview if provided */
        <img
          src={imageSrc}
          alt={title}
          onError={() => setMediaError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
          decoding="async"
        />
      ) : (
        /* Minimalist & Editorial Media Placeholder */
        <>
          {/* Top Bar Label */}
          <div className="relative z-10 flex items-center justify-between w-full border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C084FC]/70" />
              <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase font-semibold">
                {label}
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/30">THUMORA AI</span>
          </div>

          {/* Center Visual Mockup Indicator */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center gap-3 px-4 py-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#C084FC] shadow-inner">
              {isVideo ? <IconPlay /> : <IconImage />}
            </div>
            <div className="flex flex-col gap-1 max-w-lg">
              <h4 className="text-[15px] sm:text-[18px] font-bold text-white tracking-tight">{title}</h4>
              {subtitle && (
                <p className="text-[12px] sm:text-[13px] text-white/45 leading-relaxed">{subtitle}</p>
              )}
            </div>
            <span className="text-[10px] font-mono text-white/30 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md mt-1">
              Asset Slot · Place real asset in /public/assets/project3/
            </span>
          </div>

          {/* Bottom Bar Info */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/30 border-t border-white/5 pt-2.5">
            <span>{isVideo ? "VIDEO WALKTHROUGH" : "PRODUCT SCREENSHOT"}</span>
            <span>HIGH-RES SHOWCASE</span>
          </div>
        </>
      )}
    </div>
  );
};

export default function ThumoraDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("thumoraDetail") || {};
  const localizedProject = (t("projects.list") || []).find(p => p.id === 3) || project || {};

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
      {/* ── Top Navigation / Back Button ─────────────────────────────────────── */}
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

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#C084FC] bg-[#C084FC]/10 border border-[#C084FC]/25 px-2.5 py-1 rounded-full uppercase">
            AI Product
          </span>
          <a
            href="https://thumoraai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#A855F7] hover:bg-[#9333EA] text-white text-[12px] font-bold transition-all shadow-md shadow-[#A855F7]/20 active:scale-95"
          >
            <span>Live App</span>
            <IconExternal />
          </a>
        </div>
      </div>

      {/* ── SECTION 01 — INTRO / THE PRODUCT ─────────────────────────────────── */}
      <m.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <SLabel>{d.sec1Label || "01 / THE PRODUCT"}</SLabel>
          <STitle>{d.sec1Title || "AI Thumbnail Generator for Creators"}</STitle>
          <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed max-w-3xl font-normal mt-1">
            {d.sec1Desc || "Thumora helps creators turn simple ideas into ready-to-use thumbnails — or explore existing creations as references for their next one."}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase font-semibold">
              AI THUMBNAIL GENERATOR · WEB APP · FULL-STACK PROJECT
            </span>
          </div>
        </div>

        {/* Large Media Area — Landing Page */}
        <MediaFrame
          title="Thumora Landing Page"
          subtitle="Clean product introduction, value proposition, and creator onboarding."
          label="ASSET PLACEHOLDER · 16:9"
          imageSrc="/assets/project3/cover-thumora.webp"
          aspect="aspect-[16/9]"
        />
      </m.div>

      <Divider />

      {/* ── SECTION 02 — FROM IDEA TO THUMBNAIL ──────────────────────────────── */}
      <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec2Label || "02 / THE EXPERIENCE"}</SLabel>
          <STitle>{d.sec2Title || "From Idea to Thumbnail"}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec2Desc || "A simple workflow built around the way creators make thumbnails: define an idea, shape the visual direction, generate, and save the result."}
          </p>
        </div>

        {/* Large Media Area — Generate Page Screenshot */}
        <MediaFrame
          title="Generate Workspace"
          subtitle="Prompt composition, visual styles, color temperature, aspect ratios, and reference-guided generation."
          label="ASSET PLACEHOLDER · 16:9"
          imageSrc="/assets/project3/refine-idea.webp"
          aspect="aspect-[16/9]"
        />

        {/* Editorial Text Annotations (Clean Typography, NOT Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14px] font-bold text-white tracking-tight">Concept</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Start with a simple idea or prompt.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14px] font-bold text-white tracking-tight">Visual Direction</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Choose style, color palette, aspect ratio, and reference images.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14px] font-bold text-white tracking-tight">Generate</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Turn the concept into a finished thumbnail.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14px] font-bold text-white tracking-tight">Save & Reuse</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Keep generated work in your personal gallery.
            </p>
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── SECTION 03 — SEE IT IN ACTION ────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec3Label || "03 / SEE IT IN ACTION"}</SLabel>
          <STitle>{d.sec3Title || "See Thumora in Action"}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec3Desc || "From exploring the product to generating a thumbnail, these walkthroughs show the experience in practice."}
          </p>
        </div>

        {/* Video Asset 1 — Landing Walkthrough */}
        <div className="flex flex-col gap-3">
          <MediaFrame
            title="Landing Page Walkthrough"
            subtitle="Scrolled walkthrough of the landing page experience from hero to footer showcase."
            label="PRODUCT WALKTHROUGH · 16:9"
            videoSrc="/assets/project3/landing-video.webm"
            isVideo={true}
            aspect="aspect-[16/9]"
          />
        </div>

        {/* Video Asset 2 — Thumbnail Generation Flow */}
        <div className="flex flex-col gap-3">
          <MediaFrame
            title="Thumbnail Generation Flow"
            subtitle="Prompt crafting, setting parameters, live generation progress, and final thumbnail delivery."
            label="GENERATION FLOW · 16:9"
            videoSrc="/assets/project3/generate-video.webm"
            isVideo={true}
            aspect="aspect-[16/9]"
          />
        </div>
      </m.div>

      <Divider />

      {/* ── SECTION 04 — COMMUNITY ───────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec4Label || "04 / COMMUNITY"}</SLabel>
          <STitle>{d.sec4Title || "More Than a Generator"}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec4Desc || "Thumora also gives creators a place to discover thumbnail ideas, inspect how they were made, and use them as references for their own work."}
          </p>
        </div>

        {/* Large Media Area — Community Screenshot */}
        <MediaFrame
          title="Community Inspiration Gallery Feed"
          subtitle="Explore trending thumbnails, inspect verified prompt recipes, and clone generation presets with one click."
          label="ASSET PLACEHOLDER · 16:9"
          imageSrc="/assets/project3/community-img.webp"
          aspect="aspect-[16/9]"
        />

        {/* Minimal Editorial Text Treatment (NO CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-2">
          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14.5px] font-bold text-white tracking-tight">Discover</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Explore thumbnails created by the community.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14.5px] font-bold text-white tracking-tight">Inspect</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              See the prompt, style, color, and aspect ratio behind a creation.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <h4 className="text-[14.5px] font-bold text-white tracking-tight">Create</h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Use an existing idea as a starting point for your own thumbnail.
            </p>
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── SECTION 05 — RESPONSIVE + PRODUCT DETAILS ────────────────────────── */}
      <m.div variants={fadeUp} custom={4} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec5Label || "05 / PRODUCT DETAILS"}</SLabel>
          <STitle>{d.sec5Title || "Designed for the Web"}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec5Desc || "Thumora is built as a responsive web application, with authentication, thumbnail generation, personal generation history, and interfaces designed for both desktop and mobile."}
          </p>
        </div>

        {/* Clean Media Composition (Visual Evidence, NOT Feature Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Asset 1: Authentication View */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <MediaFrame
              title="OTP / Authentication Flow"
              subtitle="Passwordless email OTP authentication and session security."
              label="AUTHENTICATION"
              imageSrc="/assets/project3/otp-sec.webp"
              borderless={true}
              aspect="aspect-auto"
              imgClassName="scale-[1.35] sm:scale-[1.42] origin-center py-4"
              className="w-full"
            />
          </div>

          {/* Asset 2: Mobile Responsive View */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <MediaFrame
              title="Responsive Mobile Interface"
              subtitle="Creator workspace optimized for smartphone screens."
              label="RESPONSIVE MOBILE"
              imageSrc="/assets/project3/mobile-respo.webp"
              borderless={true}
              aspect="aspect-auto"
              className="w-full"
            />
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── SECTION 06 — FINAL SHOWCASE / CLOSING ────────────────────────────── */}
      <m.div variants={fadeUp} custom={5} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec6Label || "FINAL SHOWCASE"}</SLabel>
          <STitle>{d.sec6Title || "Built to Turn Ideas Into Thumbnails."}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec6Desc || "Thumora combines AI generation, creative controls, and community inspiration in one simple workflow for creators."}
          </p>
        </div>

        {/* Final Large Thumbnail Showcase */}
        <MediaFrame
          title="Final Thumbnail Showcase & Compilation"
          subtitle="Production-ready thumbnails across multiple niches, visual styles, and color palettes."
          label="ASSET PLACEHOLDER · WIDE SHOWCASE"
          imageSrc="/assets/project3/community-section.webp"
          borderless={true}
          aspect="aspect-auto"
        />
      </m.div>

      {/* ── SECTION 07 — ROLE + STACK (EXTREMELY SIMPLE EDITORIAL LAYOUT) ─────── */}
      <div className="border-t border-white/10 pt-8 mt-2 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest font-bold">
            MY ROLE
          </span>
          <span className="text-[14px] font-semibold text-white">
            Product · UI/UX · Frontend · Full-stack
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:text-right">
          <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest font-bold">
            CORE STACK
          </span>
          <span className="text-[14px] font-mono font-semibold text-[#C084FC]">
            React · TypeScript · Express · MongoDB · OpenRouter · Cloudinary
          </span>
        </div>
      </div>

      {/* ── Footer Back Button & Live Link ───────────────────────────────────── */}
      <div className="border-t border-white/5 pt-8 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/8 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
            <IconArrowLeft />
          </span>
          <span>{t("projects.backBtn") || "Back to Portfolio"}</span>
        </button>

        <a
          href="https://thumoraai.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#C084FC] hover:text-[#D8B4FE] text-[13px] sm:text-[14px] font-bold transition-colors group"
        >
          <span>thumoraai.vercel.app</span>
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            <IconExternal />
          </span>
        </a>
      </div>
    </m.div>
  );
}
