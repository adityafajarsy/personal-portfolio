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

// ── Shared Section Label & Typography ─────────────────────────────────────────
const SLabel = ({ children }) => (
  <span className="text-[11px] font-bold tracking-[0.2em] text-[#38BDF8] uppercase block mb-1">
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

const IconCopy = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="13" height="13" x="9" y="9" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
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

// ── Reusable Editorial Media & Screenshot Frame ───────────────────────────────
const MediaFrame = ({
  title,
  subtitle,
  label = "ASSET PLACEHOLDER",
  imageSrc,
  videoSrc,
  hoverVideoSrc,
  aspect = "aspect-[16/9]",
  borderless = false,
  imgClassName = "",
  caption,
  className = "",
  children,
}) => {
  const [mediaError, setMediaError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (hoverVideoSrc) {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (hoverVideoSrc) {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  if (children) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div
          className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#070B12] border border-white/8 relative shadow-2xl transition-all duration-300 hover:border-sky-500/25 ${className}`}
        >
          {children}
        </div>
        {caption && (
          <span className="text-[11px] font-mono text-white/35 tracking-wider uppercase pl-1">
            {caption}
          </span>
        )}
      </div>
    );
  }

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
          className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#070B12] border border-white/8 relative shadow-2xl transition-all duration-300 hover:border-sky-500/25 ${className}`}
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#070B12] border border-white/8 relative flex flex-col ${aspect} justify-between p-5 sm:p-8 shadow-2xl transition-all duration-300 hover:border-sky-500/30 group ${className}`}
      >
        {/* Soft Electric Cyan Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0284C7]/10 via-transparent to-[#38BDF8]/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf810_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        {/* Real Video Player if direct videoSrc provided */}
        {videoSrc && !mediaError ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setMediaError(true)}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : imageSrc && !mediaError ? (
          <>
            <img
              src={imageSrc}
              alt={title}
              onError={() => setMediaError(true)}
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out ${
                hoverVideoSrc && isHovered ? "scale-[1.02]" : "scale-100"
              } ${imgClassName}`}
              loading="lazy"
              decoding="async"
            />

            {/* Hover Video Transition Overlay */}
            {hoverVideoSrc && (
              <video
                ref={videoRef}
                src={hoverVideoSrc}
                loop
                muted
                playsInline
                preload="metadata"
                className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 pointer-events-none ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </>
        ) : (
          <>
            {/* Top Bar Label */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-[10px] font-mono font-bold tracking-wider text-white/50 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                {label}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Center Content Placeholder */}
            <div className="flex flex-col items-center justify-center text-center gap-2.5 my-auto z-10 py-6">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8]/70 shadow-inner">
                <IconImage />
              </div>
              <h4 className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight">
                {title}
              </h4>
              {subtitle && (
                <p className="text-[12.5px] sm:text-[13.5px] text-white/45 max-w-md leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Bottom Meta Bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-white/30 tracking-widest uppercase border-t border-white/5 pt-3 z-10">
              <span>NEMU INSPECTOR UI</span>
              <span>VISUAL INTELLIGENCE</span>
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

export default function NemuDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("nemuDetail") || {};
  const [customText, setCustomText] = useState("VISUAL INTELLIGENCE");
  const [copiedHex, setCopiedHex] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleBack = () => {
    onClose();
    setTimeout(() => {
      const s = document.getElementById("project");
      if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const copyToClipboard = (text, type = "hex") => {
    navigator.clipboard.writeText(text);
    if (type === "hex") {
      setCopiedHex(text);
      setTimeout(() => setCopiedHex(null), 1800);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 1800);
    }
  };

  const sampleColors = [
    { name: "Primary Dark", hex: "#0B0F19", rgb: "11, 15, 25", dominance: "48%", isLight: false },
    { name: "Electric Cyan", hex: "#38BDF8", rgb: "56, 189, 248", dominance: "24%", isLight: false },
    { name: "Acid Lime Accent", hex: "#C8FF3D", rgb: "200, 255, 61", dominance: "16%", isLight: true },
    { name: "Clean Surface", hex: "#F3F4F6", rgb: "243, 244, 246", dominance: "12%", isLight: true },
  ];

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
          <a
            href="https://nemu-in.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-[12px] font-bold transition-all shadow-md shadow-[#0284C7]/20 active:scale-95"
          >
            <span>{d.launchBtn || "Launch NEMU"}</span>
            <IconExternal />
          </a>
        </div>
      </div>

      {/* ── Hero Header ──────────────────────────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-[38px] sm:text-[54px] lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.06]">
            NEMU
          </h1>

          <p className="text-[16px] sm:text-[19px] text-white/60 leading-relaxed max-w-3xl font-normal">
            {project.subtitle || d.sec1Desc}
          </p>
        </div>

        {/* Hero Cover Frame with Interactive Hover Video */}
        <MediaFrame
          title="NEMU: Visual Reference Intelligence"
          subtitle="Turn any design reference into inspectable typography, color systems, and actionable creative direction."
          label="FLAGSHIP SHOWCASE"
          imageSrc="/assets/nemu/banner-nemu.webp"
          hoverVideoSrc="/assets/nemu/landing-page.webm"
          aspect="aspect-[16/9]"
        />
      </m.div>

      <Divider />

      {/* ── SECTION ,  → VISUAL INTELLIGENCE ──────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={1}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-3">
          <STitle>{d.sec1Title || "What if you could inspect why a reference works?"}</STitle>
          <p className="text-[15px] sm:text-[17px] text-white/65 leading-relaxed max-w-3xl font-normal">
            {d.sec1Desc || "Designers constantly collect references from posters, websites, branding, and photography. The difficult part isn't finding inspiration; it's understanding what makes it work and translating that visual language into structured, actionable information."}
          </p>
        </div>

        {/* Visual Intelligence Analysis Pipeline Media */}
        <MediaFrame
          title="NEMU Visual Reference Intelligence"
          subtitle="Transform raw visual inspiration into actionable typography, color palette, style taxonomy, and generation prompts."
          label="ANALYSIS SHOWCASE"
          imageSrc="/assets/nemu/nemu-analysis.webp"
          aspect="aspect-[16/9]"
        />
      </m.div>

      <Divider />

      {/* ── SECTION ,  NEMU INSPECTOR ──────────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={2}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-3">
          <STitle>{d.sec2Title || "One reference. A complete visual breakdown."}</STitle>
          <p className="text-[15px] sm:text-[17px] text-white/65 leading-relaxed max-w-3xl font-normal">
            {d.sec2Desc || "NEMU keeps the original reference visible on the left while breaking its visual language into inspectable layers on the right (style, typography, color, composition, and creative direction). The user is never forced to mentally compare the original artwork with isolated text."}
          </p>
        </div>

        {/* Large Inspector Media Frame with Real Flow Analysis Video */}
        <MediaFrame
          title="NEMU Split-Screen Inspector"
          subtitle="Side-by-side inspection: the reference remains visible while its visual DNA unfolds into structured layers."
          label="FLAGSHIP WORKSPACE"
          videoSrc="/assets/nemu/flow-analyze.webm"
          aspect="aspect-[16/9]"
          caption="Split-screen inspection interface showing reference lock with synchronous intelligence panel."
        />

        {/* 4 Integrated Analytical Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {/* Callout 1: Style */}
          <div className="flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
              {d.callouts?.styleLabel || "STYLE"}
            </span>
            <h4 className="text-[14px] font-bold text-white tracking-tight">
              {d.callouts?.styleTitle || "Editorial / Swiss-Inspired"}
            </h4>
            <p className="text-[12.5px] text-white/50 leading-relaxed">
              {d.callouts?.styleDesc || "Identifies stylistic movements, grid discipline, and structural visual mood."}
            </p>
          </div>

          {/* Callout 2: Typography */}
          <div className="flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
              {d.callouts?.typeLabel || "TYPOGRAPHY"}
            </span>
            <h4 className="text-[14px] font-bold text-white tracking-tight">
              {d.callouts?.typeTitle || "Classification → Closest Google Font"}
            </h4>
            <p className="text-[12.5px] text-white/50 leading-relaxed">
              {d.callouts?.typeDesc || "Detects font classification and pairs it with immediately testable Google Fonts."}
            </p>
          </div>

          {/* Callout 3: Color */}
          <div className="flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
              {d.callouts?.colorLabel || "COLOR PALETTE"}
            </span>
            <h4 className="text-[14px] font-bold text-white tracking-tight">
              {d.callouts?.colorTitle || "Dominant Palette + Exact HEX / RGB"}
            </h4>
            <p className="text-[12.5px] text-white/50 leading-relaxed">
              {d.callouts?.colorDesc || "Extracts mathematical color dominance, exact color codes, and contrast relationships."}
            </p>
          </div>

          {/* Callout 4: Composition */}
          <div className="flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
              {d.callouts?.compLabel || "COMPOSITION"}
            </span>
            <h4 className="text-[14px] font-bold text-white tracking-tight">
              {d.callouts?.compTitle || "Grid, Focal Point & Balance"}
            </h4>
            <p className="text-[12.5px] text-white/50 leading-relaxed">
              {d.callouts?.compDesc || "Analyzes focal hierarchy, negative whitespace balance, and layout alignment rules."}
            </p>
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── SECTION ,  INSIGHT TO ACTION ──────────────────────────────── */}
      <m.div
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-3">
          <STitle>{d.sec3Title || "The output isn't just an explanation. It's a starting point."}</STitle>
          <p className="text-[15px] sm:text-[17px] text-white/65 leading-relaxed max-w-3xl font-normal">
            {d.sec3Desc || "Rather than simply offering a passive description of an image, NEMU converts visual impressions into concrete design tools: a live typography playground, exact color swatches, and high-intent search & generation prompts."}
          </p>
        </div>

        {/* Output A: Typography Playground */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-[22px] bg-[#070B12] border border-white/7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/6 pb-5">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#38BDF8] tracking-widest uppercase">
                {d.actionA?.label || "A. TYPOGRAPHY PLAYGROUND"}
              </span>
              <h3 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight mt-0.5">
                {d.actionA?.title || "Classification → Immediately Testable Font"}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-mono text-white/50">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#38BDF8]">Match Confidence: 94%</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Google Font</span>
            </div>
          </div>

          <p className="text-[13.5px] text-white/60 leading-relaxed max-w-3xl">
            {d.actionA?.desc || "NEMU doesn't stop at identifying a font style. It pairs the reference with the closest Google Font alternative, provides confidence metrics, and gives the designer an interactive specimen where they can test custom copy in real-time."}
          </p>

          {/* Interactive Specimen Box */}
          <div className="p-6 rounded-[16px] bg-[#0A0F1A] border border-white/8 flex flex-col gap-5 mt-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">DETECTED ALTERNATIVE</span>
                <span className="text-[18px] sm:text-[20px] font-bold text-white font-mono tracking-tight">
                  SPACE GROTESK · 700 BOLD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Type custom test copy..."
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[12px] text-white focus:outline-none focus:border-[#38BDF8]/60 transition-colors w-48 sm:w-64"
                />
              </div>
            </div>

            {/* Live Specimen Rendering */}
            <div className="py-6 border-y border-white/6">
              <p className="text-[28px] sm:text-[44px] lg:text-[52px] font-extrabold text-white tracking-tight leading-tight uppercase select-text font-sans">
                {customText || "VISUAL INTELLIGENCE"}
              </p>
              <p className="text-[13px] font-mono text-white/35 mt-2">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
              </p>
            </div>
          </div>
        </div>

        {/* Output B: Color Palette Extraction */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-[22px] bg-[#070B12] border border-white/7">
          <div className="border-b border-white/6 pb-5">
            <span className="text-[11px] font-mono font-bold text-[#38BDF8] tracking-widest uppercase">
              {d.actionB?.label || "B. COLOR PALETTE EXTRACTION"}
            </span>
            <h3 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight mt-0.5">
              {d.actionB?.title || "A visual impression becomes usable design data."}
            </h3>
          </div>

          <p className="text-[13.5px] text-white/60 leading-relaxed max-w-3xl">
            {d.actionB?.desc || "Color extraction isn't just swatches; it's usable design data. Dominant colors are measured with percentage dominance, exact HEX, RGB, and contrast readiness with one-click copy."}
          </p>

          {/* Color Swatch Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {sampleColors.map((col, idx) => {
              const isCopied = copiedHex === col.hex;
              return (
                <div
                  key={idx}
                  onClick={() => copyToClipboard(col.hex, "hex")}
                  className="flex flex-col rounded-[16px] overflow-hidden bg-[#0A0F1A] border border-white/8 cursor-pointer group hover:border-[#38BDF8]/40 transition-all duration-200"
                >
                  <div
                    className="h-24 sm:h-28 w-full relative p-3 flex items-start justify-between"
                    style={{ backgroundColor: col.hex }}
                  >
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        col.isLight ? "bg-black/20 text-black" : "bg-white/20 text-white"
                      }`}
                    >
                      {col.dominance}
                    </span>
                    <span
                      className={`text-[11px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-mono font-bold px-2 py-0.5 rounded ${
                        col.isLight ? "bg-black/30 text-white" : "bg-white/30 text-white"
                      }`}
                    >
                      {isCopied ? <IconCheck /> : <IconCopy />}
                      {isCopied ? "Copied" : "Copy"}
                    </span>
                  </div>
                  <div className="p-3.5 flex flex-col gap-1 bg-[#0A0F1A]">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold text-white font-mono">{col.hex}</span>
                      <span className="text-[10px] text-white/40 uppercase">{col.name}</span>
                    </div>
                    <span className="text-[10.5px] font-mono text-white/35">RGB: ({col.rgb})</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Output C: Prompt Studio & Search Discovery */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-[22px] bg-[#070B12] border border-white/7">
          <div className="border-b border-white/6 pb-5">
            <span className="text-[11px] font-mono font-bold text-[#38BDF8] tracking-widest uppercase">
              {d.actionC?.label || "C. PROMPT STUDIO & DISCOVERY"}
            </span>
            <h3 className="text-[18px] sm:text-[22px] font-bold text-white tracking-tight mt-0.5">
              {d.actionC?.title || "From visual DNA to creative exploration."}
            </h3>
          </div>

          <p className="text-[13.5px] text-white/60 leading-relaxed max-w-3xl">
            {d.actionC?.desc || "Once the visual language is understood, NEMU translates it into curated Pinterest keywords and structured AI generation prompts so the designer can continue exploring similar directions."}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
            {/* Pinterest Keywords */}
            <div className="p-5 rounded-[16px] bg-[#0A0F1A] border border-white/8 flex flex-col gap-3">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                CURATED PINTEREST SEARCH KEYWORDS
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Swiss Grid Poster Design",
                  "Neo-Grotesk Typography Layout",
                  "Minimalist Cyan Contrast Poster",
                  "Constructivist Print Layout",
                  "Editorial Brutalism 2026",
                ].map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[12px] text-white/80 font-medium"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Image Generation Prompt */}
            <div className="p-5 rounded-[16px] bg-[#0A0F1A] border border-white/8 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider">
                  STRUCTURED GENERATION PROMPT
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "Editorial exhibition poster, bold Swiss typography 'NEMU VISUAL INTELLIGENCE', structured modular grid, electric cyan and deep obsidian color palette, clean negative space, premium risograph print texture --ar 4:5 --v 6.1",
                      "prompt"
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-white transition-all active:scale-95"
                >
                  {copiedPrompt ? <IconCheck /> : <IconCopy />}
                  <span>{copiedPrompt ? "Copied Prompt" : "Copy Prompt"}</span>
                </button>
              </div>
              <p className="text-[12px] font-mono text-white/70 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/5 select-text">
                "Editorial exhibition poster, bold Swiss typography 'NEMU VISUAL INTELLIGENCE', structured modular grid, electric cyan and deep obsidian color palette, clean negative space, premium risograph print texture --ar 4:5 --v 6.1"
              </p>
            </div>
          </div>
        </div>
      </m.div>

      {/* ── Footer Back Button ────────────────────────────────────────────────── */}
      <div className="border-t border-white/5 pt-8 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/8 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-200">
            <IconArrowLeft />
          </span>
          <span>{t("projects.backBtn") || "Back to Portfolio"}</span>
        </button>

        <a
          href="https://nemu-in.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#38BDF8] hover:text-sky-300 transition-colors"
        >
          <span>nemu-in.vercel.app</span>
          <IconExternal />
        </a>
      </div>
    </m.div>
  );
}
