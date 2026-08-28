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

// ── Shared Section Label & Typography ─────────────────────────────────────────
const SLabel = ({ children }) => (
  <span className="text-[11px] font-bold tracking-[0.2em] text-[#10B981] uppercase block mb-1">
    {children}
  </span>
);

const STitle = ({ children }) => (
  <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight">
    {children}
  </h2>
);

const Divider = () => <div className="w-full h-px bg-white/5 my-8 sm:my-12" />;

const IconArrowLeft = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const IconExternal = () => (
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
);

const IconPlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconImage = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

// ── Organic Flow Line Graphic Motif ───────────────────────────────────────────
const OrganicFlowLine = ({ className = "" }) => (
  <svg
    viewBox="0 0 1200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto opacity-25 pointer-events-none ${className}`}
  >
    <path
      d="M0 60 C300 10, 600 110, 900 40 C1050 5, 1150 70, 1200 60"
      stroke="url(#saldo-mint-grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="saldo-mint-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.05" />
        <stop offset="50%" stopColor="#34D399" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
      </linearGradient>
    </defs>
  </svg>
);

// ── Reusable Editorial Media & Video Frame ─────────────────────────────────────
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
  caption,
  className = "",
}) => {
  const [mediaError, setMediaError] = React.useState(false);

  // Borderless direct image presentation
  if (borderless && imageSrc && !mediaError) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div
          className={`w-full relative flex items-center justify-center overflow-hidden rounded-[18px] sm:rounded-[24px] ${className}`}
        >
          <img
            src={imageSrc}
            alt={title}
            onError={() => setMediaError(true)}
            className={`w-full h-auto object-contain z-0 ${imgClassName}`}
            loading="lazy"
            decoding="async"
          />
        </div>
        {caption && (
          <span className="text-[11px] font-mono text-white/35 tracking-wider uppercase pl-1">
            {caption}
          </span>
        )}
      </div>
    );
  }

  // Full uncropped image display
  if (imageSrc && !mediaError && aspect === "aspect-auto") {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div
          className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#05120E] border border-white/8 relative shadow-2xl transition-all duration-300 hover:border-emerald-500/20 ${className}`}
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
        {caption && (
          <span className="text-[11px] font-mono text-white/35 tracking-wider uppercase pl-1">
            {caption}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#05120E] border border-white/8 relative flex flex-col ${aspect} justify-between p-4 sm:p-7 shadow-2xl transition-all duration-300 hover:border-emerald-500/20 ${className}`}
      >
        {/* Soft Mint Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/8 via-transparent to-[#047857]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b98110_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />

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
          /* Real Image Preview */
          <img
            src={imageSrc}
            alt={title}
            onError={() => setMediaError(true)}
            className={`absolute inset-0 w-full h-full object-cover z-0 ${imgClassName}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          /* Editorial Media Placeholder */
          <>
            {/* Top Bar Label */}
            <div className="relative z-10 flex items-center justify-between w-full border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-[10px] font-mono tracking-widest text-emerald-300/60 uppercase font-semibold">
                  {label}
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">SALDO</span>
            </div>

            {/* Center Visual Mockup Indicator */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center gap-3 px-4 py-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                {isVideo ? <IconPlay /> : <IconImage />}
              </div>
              <div className="flex flex-col gap-1 max-w-lg">
                <h4 className="text-[15px] sm:text-[18px] font-bold text-white tracking-tight">
                  {title}
                </h4>
                {subtitle && (
                  <p className="text-[12px] sm:text-[13px] text-white/45 leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
              <span className="text-[10px] font-mono text-emerald-400/40 bg-emerald-950/20 border border-emerald-500/10 px-2.5 py-1 rounded-md mt-1">
                Asset Slot · Place real asset in /public/assets/project4/
              </span>
            </div>

            {/* Bottom Bar Info */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/30 border-t border-white/5 pt-2.5">
              <span>
                {isVideo ? "VIDEO WALKTHROUGH" : "PRODUCT SCREENSHOT"}
              </span>
              <span>CALM FINANCIAL EXPERIENCE</span>
            </div>
          </>
        )}
      </div>

      {caption && (
        <span className="text-[11px] font-mono text-white/35 tracking-wider uppercase pl-1">
          {caption}
        </span>
      )}
    </div>
  );
};

export default function SaldoDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("saldoDetail") || {};

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
      className="flex flex-col gap-14 sm:gap-20 pb-20 select-none max-w-5xl mx-auto"
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
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-1 rounded-full uppercase">
            Money Tracker
          </span>
          <a
            href="https://usesaldo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-[12px] font-bold transition-all shadow-md shadow-[#10B981]/20 active:scale-95"
          >
            <span>Launch SALDO</span>
            <IconExternal />
          </a>
        </div>
      </div>

      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 sm:gap-8"
      >
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-mono text-emerald-400/60 uppercase tracking-widest font-semibold">
            {d.heroMeta || "STUDI KASUS · 2026 · SOLO BUILD"}
          </span>

          <STitle>{d.heroTitle || "SALDO - Efficient Money Tracker"}</STitle>

          <p className="text-[15px] sm:text-[18px] text-white/70 leading-relaxed max-w-3xl font-normal mt-1">
            {d.heroDesc ||
              "Managing money shouldn't feel like doing accounting. SALDO turns everyday money tracking into a simple conversation."}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-mono tracking-widest text-[#10B981]/80 uppercase font-semibold">
              EFFICIENT MONEY TRACKER · WEB APP · FULL-STACK
            </span>
          </div>
        </div>

        {/* Hero Visual Composition */}
        <MediaFrame
          title="SALDO Landing Page & Hero"
          subtitle="Clear product introduction, conversational capture demo, and calm design language."
          label="HERO SHOWCASE · 16:9"
          imageSrc="/assets/project4/hero-depan.png"
          aspect="aspect-auto"
        />
      </m.div>

      <OrganicFlowLine />

      {/* ── 01 — THE IDEA (BEFORE → SALDO TRANSFORMATION) ────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec1Label || "01 — THE IDEA"}</SLabel>
          <STitle>
            {d.sec1Title || "Money tracking should take seconds, not forms."}
          </STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec1Desc ||
              "SALDO started from a simple observation: recording a small expense shouldn't require navigating through multiple fields, categories, accounts, and dates."}
          </p>
        </div>

        {/* Visual Transformation: 7+ fields → 1 natural sentence (Clean Editorial Layout, NOT Cards) */}
        <div className="border-y border-white/10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Traditional Form Breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest font-bold">
              TRADITIONAL TRACKING · 7+ FIELDS
            </span>
            <div className="flex flex-col gap-2 font-mono text-[12px] text-white/50 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              <span className="text-red-400/70">✕ Date & Time Picker</span>
              <span className="text-red-400/70">✕ Category Tree Selection</span>
              <span className="text-red-400/70">✕ Account & Wallet Source</span>
              <span className="text-red-400/70">✕ Amount & Currency Field</span>
              <span className="text-red-400/70">✕ Notes & Item Breakdown</span>
              <span className="text-red-400/70">
                ✕ Repeat for second item...
              </span>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="lg:col-span-2 flex lg:flex-col items-center justify-center text-center my-auto py-2">
            <span className="text-[11px] font-mono text-emerald-400/70 uppercase tracking-widest font-bold">
              TRANSFORMS INTO
            </span>
            <span className="text-[20px] text-emerald-400 hidden lg:block mt-1">
              ↓
            </span>
            <span className="text-[20px] text-emerald-400 lg:hidden ml-2">
              →
            </span>
          </div>

          {/* SALDO Sentence Capture & Interpretation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-[#10B981] uppercase tracking-widest font-bold">
              SALDO · 1 NATURAL SENTENCE
            </span>
            <div className="flex flex-col gap-3 bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl">
              <span className="text-[14px] text-emerald-100 font-medium italic">
                &ldquo;gua beli nasi padang 12k, esteh 5k sama nasi goreng
                15k&rdquo;
              </span>
              <div className="border-t border-emerald-500/10 pt-2 flex flex-col gap-1.5 text-[12px] font-mono text-emerald-300/70">
                <div className="flex justify-between">
                  <span>• Nasi Padang (Food)</span>
                  <span className="text-white font-bold">Rp 12.000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Es Teh (Drink)</span>
                  <span className="text-white font-bold">Rp 5.000</span>
                </div>
                <div className="flex justify-between">
                  <span>• Nasi Goreng (Dinner)</span>
                  <span className="text-white font-bold">Rp 15.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── 02 — THE EXPERIENCE (HOW SALDO WORKS) ────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={2}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec2Label || "02 — THE EXPERIENCE"}</SLabel>
          <STitle>{d.sec2Title || "Tell SALDO what happened."}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec2Desc ||
              "Type the way you normally speak. SALDO interprets the transaction and prepares it for confirmation."}
          </p>
        </div>

        {/* Primary Video: SALDO Capture Flow */}
        <MediaFrame
          title="SALDO Capture Flow"
          subtitle="From natural language input to multi-item breakdown and instant confirmation."
          label="PRIMARY WALKTHROUGH · 16:9"
          videoSrc="/assets/project4/carakerja.webm"
          isVideo={true}
          aspect="aspect-[16/9]"
          caption="SALDO Capture — from a sentence to a saved transaction."
        />
      </m.div>

      <Divider />

      {/* ── 03 — THE PRODUCT (LANDING PAGE & SCROLL VIDEO) ────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec3Label || "03 — THE PRODUCT"}</SLabel>
          <STitle>
            {d.sec3Title || "A calm interface for everyday money."}
          </STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec3Desc ||
              "A serene financial experience designed with subtle mint tones, deep forest surfaces, and generous breathing room."}
          </p>
        </div>

        {/* Full Landing Page Scroll Video */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight">
              See the whole experience.
            </h3>
            <p className="text-[13.5px] sm:text-[15px] text-white/50 leading-relaxed max-w-2xl font-normal">
              A complete scroll through the SALDO landing page, from the first
              interaction to the final call to action.
            </p>
          </div>

          <MediaFrame
            title="Full Landing Page Scroll Video"
            subtitle="Hero, Capture demo, product story, insights, forecasting, and final CTA."
            label="FULL LANDING PAGE SCROLL · 16:9"
            videoSrc="/assets/project4/saldo.webm"
            isVideo={true}
            aspect="aspect-[16/9]"
            caption="Public landing page walkthrough"
          />
        </div>
      </m.div>

      <OrganicFlowLine />

      {/* ── HOW IT WORKS (EDITORIAL FLOW) ─────────────────────────────────────── */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-mono text-emerald-400/60 uppercase tracking-widest font-semibold">
            INTERACTION ARCHITECTURE
          </span>
          <h3 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">
            From thought to transaction.
          </h3>
        </div>

        {/* 4-Step Editorial Flow (Typography & Connectors, NO Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <span className="text-[11px] font-mono text-[#10B981] font-bold tracking-widest uppercase">
              01 — TELL
            </span>
            <h4 className="text-[15px] font-bold text-white tracking-tight">
              Say what happened.
            </h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Type or speak casually in your own everyday natural slang.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <span className="text-[11px] font-mono text-[#10B981] font-bold tracking-widest uppercase">
              02 — UNDERSTAND
            </span>
            <h4 className="text-[15px] font-bold text-white tracking-tight">
              SALDO interprets details.
            </h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Amounts, items, categories, accounts, and dates are extracted.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <span className="text-[11px] font-mono text-[#10B981] font-bold tracking-widest uppercase">
              03 — REVIEW
            </span>
            <h4 className="text-[15px] font-bold text-white tracking-tight">
              Check the result.
            </h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              A clean preview appears instantly for zero-friction inspection.
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <span className="text-[11px] font-mono text-[#10B981] font-bold tracking-widest uppercase">
              04 — SAVE
            </span>
            <h4 className="text-[15px] font-bold text-white tracking-tight">
              Confirm the transaction.
            </h4>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Single-tap confirmation commits all items to your ledger.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 04 — THE APP (DESKTOP, MOBILE, DARK MODE, AUTH) ──────────────────── */}
      <m.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec4Label || "04 — THE APP"}</SLabel>
          <STitle>{d.sec4Title || "The same idea, once you're inside."}</STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec4Desc ||
              "SALDO keeps the interface quiet so the important information stays visible: what you have, what you've spent, and what's likely next."}
          </p>
        </div>

        {/* Desktop / Tablet App Experience */}
        <MediaFrame
          title="SALDO iPad & Desktop App Interface"
          subtitle="Home dashboard, pace-based forecasting, and account balances in one serene view."
          label="IPAD & DESKTOP SHOWCASE"
          imageSrc="/assets/project4/ipad-responsive.webp"
          aspect="aspect-auto"
          caption="Responsive tablet and desktop workspace"
        />

        {/* Mobile Experience (Kiri Kanan Layout) */}
        <div className="border-t border-white/5 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Sisi Kiri: Teks & Deskripsi */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-emerald-400/60 uppercase tracking-widest font-semibold">
              RESPONSIVE SMARTPHONE
            </span>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-white tracking-tight leading-snug">
              Designed to fit the moment.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed font-normal">
              Money gets recorded when life happens. SALDO keeps the same
              experience compact on smaller screens, optimized for quick, one-handed capture on the go.
            </p>
          </div>

          {/* Sisi Kanan: Mockup HP Mobile */}
          <div className="md:col-span-6 lg:col-span-7 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              <MediaFrame
                title="SALDO Responsive Mobile Experience"
                subtitle="Home, Capture, Insights, and Accounts optimized for one-handed smartphone ergonomics."
                label="RESPONSIVE MOBILE"
                imageSrc="/assets/project4/light-mode-responsive-mobile.webp"
                borderless={true}
                aspect="aspect-auto"
                caption="Light mode mobile experience"
              />
            </div>
          </div>
        </div>

        {/* Dark Mode Experience */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight">
              Light when you want clarity. Dark when you want depth.
            </h3>
          </div>

          <MediaFrame
            title="SALDO Dark Mode Walkthrough"
            subtitle="Deep forest obsidian palette for nighttime ease and OLED displays."
            label="DARK MODE EXPERIENCE · 16:9"
            videoSrc="/assets/project4/dark mode.webm"
            imageSrc="/assets/project4/dark-mode-mobile.webp"
            isVideo={true}
            aspect="aspect-[16/9]"
            caption="Dark mode walkthrough & OLED experience"
          />
        </div>
      </m.div>

      <Divider />

      {/* ── 05 — THE VISUAL LANGUAGE ─────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={5}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec5Label || "05 — THE VISUAL LANGUAGE"}</SLabel>
          <STitle>
            {d.sec5Title || "Calm, expressive, and intentionally simple."}
          </STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec5Desc ||
              "Soft mint surfaces, deep forest tones, expressive typography, and organic motion give SALDO a visual language that feels closer to a product than a spreadsheet."}
          </p>
        </div>

        <MediaFrame
          title="SALDO UI & Identity Collage"
          subtitle="Design system tokens, typography scales, mint palettes, and fluid motion studies."
          label="DESIGN SYSTEM & COLLAGE"
          imageSrc="/assets/project4/cover-icon.webp"
          aspect="aspect-auto"
          caption="Visual identity and design language"
        />
      </m.div>

      <Divider />

      {/* ── SMALL DETAILS, CONSIDERED (SELECTED FEATURES LIST) ────────────────── */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono text-emerald-400/60 uppercase tracking-widest font-semibold">
            PRODUCT CAPABILITIES
          </span>
          <h3 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">
            Small details, considered.
          </h3>
        </div>

        {/* Clean Divider List (NO Cards) */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">
              Natural language capture
            </span>
            <span className="text-[13.5px] text-white/50">
              Record transactions using everyday language.
            </span>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">
              Multi-item transactions
            </span>
            <span className="text-[13.5px] text-white/50">
              Handle sentences containing multiple purchases at once.
            </span>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">
              Backdated entries
            </span>
            <span className="text-[13.5px] text-white/50">
              Record transactions from earlier in the current month.
            </span>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">
              Insights & forecasting
            </span>
            <span className="text-[13.5px] text-white/50">
              Understand spending patterns and projected month-end balance.
            </span>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">
              Multiple accounts
            </span>
            <span className="text-[13.5px] text-white/50">
              Keep cash, bank accounts, and e-wallets in one unified place.
            </span>
          </div>

          <div className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
            <span className="text-[15px] font-bold text-white">Dark mode</span>
            <span className="text-[13.5px] text-white/50">
              A complete alternative visual experience for night viewing.
            </span>
          </div>
        </div>
      </div>

      <Divider />

      {/* ── 06 — THE OUTCOME & CLOSING ────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={6}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <SLabel>{d.sec6Label || "06 — THE OUTCOME"}</SLabel>
          <STitle>
            {d.sec6Title || "Money tracking that feels like a conversation."}
          </STitle>
          <p className="text-[14.5px] sm:text-[16px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {d.sec6Desc ||
              "SALDO turns the small, repetitive task of recording money into a faster, calmer experience — while keeping the bigger picture visible."}
          </p>
        </div>

        {/* Final Product Showcase */}
        <MediaFrame
          title="SALDO Final Product Showcase"
          subtitle="Desktop and mobile experiences working seamlessly together."
          label="FINAL PRODUCT SHOWCASE"
          imageSrc="/assets/project4/cover-icon.webp"
          aspect="aspect-auto"
        />

        {/* Launch CTA */}
        <div className="flex items-center justify-start pt-2">
          <a
            href="https://usesaldo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-[14px] font-bold transition-all shadow-lg shadow-[#10B981]/20 active:scale-95 group"
          >
            <span>Launch SALDO</span>
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <IconExternal />
            </span>
          </a>
        </div>
      </m.div>

      {/* ── ROLE & TECH STACK (MINIMAL FOOTER) ────────────────────────────────── */}
      <div className="border-t border-white/10 pt-8 mt-2 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest font-bold">
            ROLE
          </span>
          <span className="text-[14px] font-semibold text-white">
            Product · UI/UX · Frontend · Full-stack
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:text-right">
          <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest font-bold">
            BUILT WITH
          </span>
          <span className="text-[14px] font-mono font-semibold text-[#10B981]">
            React · Node.js · MongoDB · Express · OpenRouter · Tailwind CSS
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
          href="https://usesaldo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#10B981] hover:text-[#34D399] text-[13px] sm:text-[14px] font-bold transition-colors group"
        >
          <span>usesaldo.vercel.app</span>
          <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            <IconExternal />
          </span>
        </a>
      </div>
    </m.div>
  );
}
