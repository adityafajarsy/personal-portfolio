import React from "react";
import { m } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import DesignAnatomyHotspot from "./DesignAnatomyHotspot";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ── Shared section label / title ──────────────────────────────────────────────
const SLabel = ({ children }) => (
  <span className="text-[11px] font-bold tracking-[0.18em] text-[#3B82F6] uppercase">
    {children}
  </span>
);

const STitle = ({ children }) => (
  <h2 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight leading-snug mt-1">
    {children}
  </h2>
);

const Divider = () => <div className="w-full h-px bg-white/5 my-2" />;

// ── Foundation icon ────────────────────────────────────────────────────────────
const FoundationIcon = ({ type }) => {
  const cls = "w-5 h-5 text-[#3B82F6]";
  if (type === "problem")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  if (type === "research")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  if (type === "design")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

// ── Icons ──────────────────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconExternal = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

// ── Color swatch ───────────────────────────────────────────────────────────────
const ColorSwatch = ({ hex, name }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg border border-white/10 flex-shrink-0" style={{ backgroundColor: hex }} />
    <div>
      <p className="text-[12px] font-bold text-white">{name}</p>
      <p className="text-[11px] text-white/40 font-mono">{hex}</p>
    </div>
  </div>
);

// ── Gallery placeholder tile ───────────────────────────────────────────────────
const GalleryTile = ({ label, wide = false }) => (
  <div className={`relative rounded-[14px] overflow-hidden border border-dashed border-white/10 bg-white/[0.015] flex flex-col items-center justify-center gap-2 py-10 ${wide ? "col-span-2" : ""}`}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
    </svg>
    <span className="text-[11px] text-white/20 font-medium">{label}</span>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
export default function PortfolioDetail({ project, onClose }) {
  const { t } = useLanguage();
  const d = t("builderDetail") || {};
  const localizedProject = (t("projects.list") || []).find(p => p.id === 2) || project;

  const foundations = d.foundations || [];
  const journey = d.journey || [];
  const visual = d.visual || [];
  const refs = d.refs || [];
  const process = d.process || [];
  const outcomes = d.outcomes || [];
  const galleryGroups = d.galleryGroups || [];
  const engFrontendItems = d.engFrontendItems || [];
  const engAnimationItems = d.engAnimationItems || [];
  const engDeploymentItems = d.engDeploymentItems || [];
  const influencesCaption = d.influencesCaption || [];
  const influencesStory = d.influencesStory || [];
  const intentionLabel = d.intentionLabel || "";
  const intentionTitle = d.intentionTitle || "";
  const intentionCaption = d.intentionCaption || "";
  const intentionCards = d.intentionCards || [];
  const philosophyLabel = d.philosophyLabel || "";
  const philosophyTitle = d.philosophyTitle || "";
  const philosophyBody = d.philosophyBody || [];
  const philosophyQuote = d.philosophyQuote || "";
  const philosophySign = d.philosophySign || "";
  const detailsLabel = d.detailsLabel || "";
  const detailsTitle = d.detailsTitle || "";
  const detailsCaption = d.detailsCaption || "";
  const detailsQuote = d.detailsQuote || "";

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
      className="flex flex-col gap-14 pb-20"
    >
      {/* ── Back button ────────────────────────────────────────────────────── */}
      <div>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
        >
          <IconArrowLeft /> {t("projects.backBtn")}
        </button>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="flex flex-col gap-5">
        {/* Cover */}
        <div className="w-full aspect-[16/8] rounded-[20px] overflow-hidden bg-[#070712] border border-white/5 relative flex items-center justify-center">
          {/* Background image */}
          <img
            src="/assets/project2/banner_detail.webp"
            alt={localizedProject.nama}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Dark Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#3B82F6]/10 blur-[80px] pointer-events-none" />

          {/* Center content */}
          <div className="relative z-10 text-center px-6 flex flex-col items-center gap-3">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#3B82F6] uppercase">{d.heroLabel || "Case Study"}</p>
            <h1 className="text-[32px] sm:text-[46px] font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Builder's Archive
            </h1>
            <p
              className="text-[1.15rem] sm:text-[1.5rem] text-[#3B82F6] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              style={{ fontFamily: "'Nothing You Could Do', cursive" }}
            >
              digital identity system
            </p>
          </div>

          <div className="absolute bottom-4 left-5 z-10">
            <span className="text-[11px] font-bold text-white/50 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              {localizedProject.category || "Creative Engineering"} · {localizedProject.meta?.date || "2026"}
            </span>
          </div>
        </div>

        {/* Title block */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <SLabel>{d.heroLabel || "Case Study"}</SLabel>
            <span className="text-white/15">·</span>
            <span className="text-[11px] font-bold text-white/30 tracking-widest uppercase">{localizedProject.category}</span>
          </div>
          <h1 className="text-[28px] sm:text-[36px] font-black text-white tracking-tight leading-tight">
            {localizedProject.nama}
          </h1>
          <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed max-w-2xl">
            {d.heroSubtitle}
          </p>
        </div>

        {/* Meta details & Tech stack */}
        <div className="flex flex-col gap-4 pt-1">
          {/* Row 1: Role & Team */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold tracking-widest text-[#555] uppercase">{d.metaRole || "Role"}</span>
              <span className="text-[13px] font-bold text-white">{localizedProject.meta?.role || "Product Designer & Frontend Engineer"}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold tracking-widest text-[#555] uppercase">{d.metaTeam || "Team"}</span>
              <span className="text-[13px] font-bold text-white">{localizedProject.meta?.team || "Solo"}</span>
            </div>
          </div>

          {/* Row 2: Tech stack */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase">{d.techLabel || "Tech Stack"}</span>
            <div className="flex flex-wrap gap-1.5">
              {["Vite", "React", "Tailwind CSS", "Framer Motion", "Lucide"].map((tool, i) => (
                <span key={i} className="text-[11px] font-semibold text-white/60 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </m.div>


      <Divider />

      {/* ── 1. WHY THIS EXISTS ───────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="flex flex-col gap-6 relative">
        <div>
          <SLabel>{d.whyLabel}</SLabel>
          <STitle>{d.whyTitle}</STitle>
        </div>
        <div className="flex flex-col gap-5 relative">
          {(d.whyBody || []).map((para, i, arr) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0
                  ? "text-[16px] sm:text-[18px] font-semibold text-white/90"
                  : "text-[14px] text-white/55"
              }`}
            >
              {para}
            </p>
          ))}
          {/* Signature/Name at the bottom right */}
          <div className="flex justify-end pt-1">
            <span
              className="text-[20px] sm:text-[24px] text-[#3B82F6] font-bold select-none rotate-[-4deg] translate-y-1"
              style={{ fontFamily: "'Nothing You Could Do', cursive" }}
            >
              — Aditya Fajar
            </span>
          </div>
        </div>
      </m.div>

      <Divider />

      {/* ── 2. HOW REFERENCES BECAME DESIGN DECISIONS ────────────────────────── */}
      <m.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <SLabel>{d.influencesLabel || "INFLUENCES"}</SLabel>
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-4 mt-1">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight leading-snug">
              {d.influencesTitle || "Every Reference Left a Mark"}
            </h2>
            <div className="mb-2.5 sm:mb-0 sm:relative sm:-top-3.5 sm:ml-1 shrink-0">
              <img src="/assets/dripping-graf/fire.webp" alt="Fire Graffiti" className="w-8 h-8 sm:w-14 sm:h-14 object-contain rotate-12" />
            </div>
          </div>
        </div>

        {/* Section Visual Image */}
        <div className="w-full rounded-[20px] overflow-hidden bg-[#070712] border border-white/5 relative flex items-center justify-center p-2 sm:p-4">
          <img
            src="/assets/project2/how_references_became_design.webp"
            alt="How References Became Design Decisions Schema"
            className="w-full h-auto max-h-[600px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Caption & Story Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Left Column: Influences Caption (Takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {influencesCaption.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? "text-[16px] sm:text-[18px] font-semibold text-white/95"
                    : "text-[13.5px] text-white/50"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Short Story (Takes 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:border-l lg:border-white/5 lg:pl-8">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#3B82F6] tracking-wider uppercase font-bold">
                {d.influencesStoryTitle || "Short Story"}
              </span>
              <span className="text-white/10">•</span>
              <span
                className="text-[12px] text-[#3B82F6]"
                style={{ fontFamily: "'Nothing You Could Do', cursive" }}
              >
                behind the curation
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {influencesStory.map((para, i) => (
                <p key={i} className="text-[13.5px] text-white/55 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </m.div>

      <Divider />      {/* ── 3. BUILT WITH INTENTION ──────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <SLabel>{intentionLabel || "BUILT WITH INTENTION"}</SLabel>
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-4 mt-1">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight leading-snug">
              {intentionTitle || "Every visual decision exists for a reason."}
            </h2>
            <div className="mb-2.5 sm:mb-0 sm:relative sm:-top-3.5 sm:ml-1 shrink-0">
              <img src="/assets/dripping-graf/star.webp" alt="Star Graffiti" className="w-8 h-8 sm:w-14 sm:h-14 object-contain -rotate-12" />
            </div>
          </div>
          <p className="mt-2 text-[14px] text-white/55 leading-relaxed max-w-3xl">
            {intentionCaption}
          </p>
        </div>

        {/* Section Visual Image — Interactive Design Anatomy Hotspot */}
        <DesignAnatomyHotspot />

        {/* 3x2 Premium Grid (Compact 3-column layout on all screen sizes) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {intentionCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#0B0B0B] border border-white/5 hover:border-[#3B82F6]/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] rounded-[12px] sm:rounded-[18px] p-2.5 sm:p-5 flex flex-col gap-1.5 sm:gap-3 transition-all duration-300"
            >
              <div className="flex items-center">
                <span className="text-[8px] sm:text-[10px] font-mono font-black tracking-widest text-[#3B82F6] bg-[#3B82F6]/5 border border-[#3B82F6]/10 px-1.5 py-0.5 rounded">
                  {card.num}
                </span>
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1.5">
                <h3 className="text-[10px] sm:text-[14px] font-bold text-white tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="text-[9.5px] sm:text-[12.5px] text-white/40 sm:text-white/50 leading-normal sm:leading-relaxed">
                  <span className="block sm:hidden">{card.shortDesc || card.desc}</span>
                  <span className="hidden sm:block">{card.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </m.div>

      <Divider />

      {/* ── THINGS YOU PROBABLY DIDN'T NOTICE ──────────────────────────────── */}
      <m.div variants={fadeUp} custom={3.8} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <SLabel>{detailsLabel || "Small Decisions, Big Difference."}</SLabel>
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-4 mt-1">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight leading-snug">
              {detailsTitle || "Things You Probably Didn't Notice"}
            </h2>
            <div className="mb-2.5 sm:mb-0 sm:relative sm:-top-4 sm:ml-1 shrink-0">
              <img src="/assets/crown.webp" alt="Crown Icon" className="w-10 h-10 sm:w-18 sm:h-18 object-contain rotate-[6deg]" />
            </div>
          </div>
          <p className="mt-2 text-[14px] text-white/55 leading-relaxed max-w-3xl">
            {detailsCaption}
          </p>
        </div>

        {/* Section Visual Image (Small Details) — No border/bg wrapper to blend with page background */}
        <div className="w-full relative flex items-center justify-center">
          <img
            src="/assets/project2/small_details.webp"
            alt="Small Details Illustration"
            className="w-full h-auto max-h-[600px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Big Text Quote Below Image */}
        <div className="text-center mt-2 flex flex-col gap-1 sm:gap-2">
          <p className="text-[14px] sm:text-[18px] text-white font-bold leading-snug tracking-tight">
            {detailsQuote ? detailsQuote.split("\n\n")[0] : "Identity isn't built by one big idea."}
          </p>
          <p className="text-[12.5px] sm:text-[15px] text-[#3B82F6] font-medium tracking-wide">
            {detailsQuote ? detailsQuote.split("\n\n")[1] : "It's built by hundreds of intentional decisions."}
          </p>
        </div>
      </m.div>

      <Divider />

      {/* ── BUILDING PHILOSOPHY ────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={4} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <SLabel>{philosophyLabel || "BUILDING PHILOSOPHY"}</SLabel>
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-4 mt-1">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight leading-snug">
              {philosophyTitle || "I don't collect references. I collect principles."}
            </h2>
            <div className="mb-2.5 sm:mb-0 sm:relative sm:-top-3.5 sm:ml-1 shrink-0">
              <img src="/assets/dripping-graf/quotes.webp" alt="Quotes Graffiti" className="w-8 h-8 sm:w-14 sm:h-14 object-contain" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {philosophyBody.map((paragraph, i) => (
            <p key={i} className="text-[13.5px] text-white/55 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-4 border-l-2 border-[#3B82F6]/30 pl-4 py-1.5 flex flex-col gap-2">
          <blockquote className="text-[17px] sm:text-[21px] font-bold text-white leading-snug tracking-tight whitespace-pre-line">
            {philosophyQuote}
          </blockquote>
          <span
            className="text-[#3B82F6] text-[18px] sm:text-[20px] mt-1"
            style={{ fontFamily: "'Nothing You Could Do', cursive" }}
          >
            {philosophySign}
          </span>
        </div>
      </m.div>

      <Divider />

      {/* ── 8. GALLERY ───────────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={8} initial="hidden" animate="visible" className="flex flex-col gap-6">
        <div>
          <SLabel>{d.galleryLabel}</SLabel>
          <STitle>{d.galleryTitle}</STitle>
          <p className="mt-2 text-[13px] text-white/40 leading-relaxed">{d.galleryNote}</p>
        </div>
        {localizedProject.images && localizedProject.images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {localizedProject.images.map((src, i) => (
              <div key={i} className={`rounded-[14px] overflow-hidden bg-zinc-900 border border-white/5 aspect-[16/10] ${i === 0 ? "col-span-2" : ""}`}>
                <img src={src} alt={`Portfolio screenshot ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {galleryGroups.map((label, i) => (
              <GalleryTile key={i} label={label} wide={i === 0} />
            ))}
          </div>
        )}
      </m.div>



      <Divider />

      {/* ── 10. REPOSITORY ───────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={10} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SLabel>{d.repoLabel}</SLabel>
          <STitle>{d.repoTitle}</STitle>
        </div>
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[20px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
            <IconGithub />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-[15px] font-bold text-white">adityafajarsy / personal-portfolio</p>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                {d.repoPublic}
              </span>
            </div>
            <p className="text-[13px] text-white/45 leading-relaxed">{d.repoDesc}</p>
          </div>
          <a
            href="https://github.com/adityafajarsy/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-[13px] font-bold text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200 flex-shrink-0 cursor-pointer"
          >
            {d.repoBtn} <IconExternal />
          </a>
        </div>
      </m.div>
    </m.div>
  );
}
