import React, { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import PortfolioDetail from "./PortfolioDetail";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ── Icon helpers ──────────────────────────────────────────────────────────────
const IconArrowLeft = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);
const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconServer = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);
const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconX = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconExternal = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);

const moduleIconMap = { globe: IconGlobe, server: IconServer, edit: IconEdit };

// ── Section label component ───────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <span className="text-[11px] font-bold tracking-[0.15em] text-[#3B82F6] uppercase">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-[20px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
    {children}
  </h2>
);

// ── Architecture flow diagram ─────────────────────────────────────────────────
const ArchitectureDiagram = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Public flow */}
    <div className="bg-[#080808] border border-white/5 rounded-[16px] p-5 flex flex-col gap-0">
      <p className="text-[11px] font-bold tracking-widest text-[#3B82F6] uppercase mb-4">Public Information Flow</p>
      {[
        { label: "Citizen", color: "text-white", bg: "bg-white/5 border-white/10" },
        { label: "Portal PPID", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10 border-[#3B82F6]/20" },
        { label: "Submit Information Request", color: "text-white/70", bg: "bg-white/3 border-white/8 text-[12px]" },
        { label: "SIPIPI Internal System", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]/10 border-[#F59E0B]/20" },
        { label: "PPID Administrator Reviews", color: "text-white/70", bg: "bg-white/3 border-white/8 text-[12px]" },
        { label: "Upload & Respond with Documents", color: "text-white/70", bg: "bg-white/3 border-white/8 text-[12px]" },
        { label: "Auto Email Notification Sent", color: "text-[#10B981]", bg: "bg-[#10B981]/10 border-[#10B981]/20" },
        { label: "Citizen Receives Response", color: "text-white", bg: "bg-white/5 border-white/10" },
      ].map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-full text-center px-3 py-2 rounded-lg border text-[12px] font-semibold ${node.color} ${node.bg}`}>
            {node.label}
          </div>
          {i < 7 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-3 bg-white/15" />
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M4 6L0 0h8L4 6z" fill="#3B82F6" opacity="0.5"/></svg>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* CMS flow */}
    <div className="bg-[#080808] border border-white/5 rounded-[16px] p-5 flex flex-col gap-0">
      <p className="text-[11px] font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">Content Management Flow</p>
      {[
        { label: "CMS Module", color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10 border-[#8B5CF6]/20" },
        { label: "Administrator manages content", color: "text-white/70", bg: "bg-white/3 border-white/8 text-[12px]" },
      ].map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-full text-center px-3 py-2 rounded-lg border text-[12px] font-semibold ${node.color} ${node.bg}`}>
            {node.label}
          </div>
          {i < 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-3 bg-white/15" />
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M4 6L0 0h8L4 6z" fill="#8B5CF6" opacity="0.5"/></svg>
            </div>
          )}
        </div>
      ))}

      <div className="mt-3 grid grid-cols-2 gap-2">
        {["Banner", "News", "Documents", "FAQ", "Videos", "Public Information"].map((item, i) => (
          <div key={i} className="text-center px-2 py-1.5 rounded-md border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 text-[11px] font-medium text-[#A78BFA]">
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center py-1 mt-3">
        <div className="w-px h-3 bg-white/15" />
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M4 6L0 0h8L4 6z" fill="#8B5CF6" opacity="0.5"/></svg>
      </div>

      <div className="w-full text-center px-3 py-2 rounded-lg border border-[#3B82F6]/20 bg-[#3B82F6]/10 text-[12px] font-semibold text-[#3B82F6]">
        Portal PPID (Published)
      </div>

      {/* Integrated note */}
      <div className="mt-4 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
        <p className="text-[11px] text-white/40 leading-relaxed text-center">
          CMS & SIPIPI are integrated into the same internal application, eliminating the need for separate disconnected systems.
        </p>
      </div>
    </div>
  </div>
);

// ── Development Timeline ──────────────────────────────────────────────────────
const Timeline = ({ steps }) => (
  <div className="flex flex-col">
    {steps.map((step, i) => (
      <div key={i} className="flex gap-3">
        {/* Spine */}
        <div className="flex flex-col items-center">
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 z-10 ${
            step.current
              ? "border-[#3B82F6] bg-[#3B82F6]/20"
              : "border-white/15 bg-[#0B0B0B]"
          }`}>
            {step.current ? (
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="w-px flex-1 bg-white/8 my-0.5" />
          )}
        </div>

        {/* Content */}
        <div className={`pb-4 flex-1 ${i === steps.length - 1 ? "pb-0" : ""}`}>
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-[11px] font-bold ${step.current ? "text-[#3B82F6]" : "text-white"}`}>
              {step.phase}
            </span>
            {step.current && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/30 text-[#3B82F6] tracking-wide">
                CURRENT
              </span>
            )}
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed">{step.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
export default function ProjectDetail({ project, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: "instant" });
    const detailEl = document.getElementById("project-detail");
    if (detailEl) detailEl.scrollIntoView({ behavior: "instant", block: "start" });
  }, [project]);

  const handleBack = () => {
    onClose();
    setTimeout(() => {
      const projectSection = document.getElementById("project");
      if (projectSection) projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Detect project type
  const isBuilderArchive = project.id === 2;
  const isPPID = Boolean(project.modules);

  // ── Builder's Archive (Project 2) rendering ───────────────────────────────
  if (isBuilderArchive) {
    return <PortfolioDetail project={project} onClose={onClose} />;
  }

  // ── Default (legacy) rendering ───────────────────────────────────────────
  if (!isPPID) {
    return (
      <m.div
        id="project-detail"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col gap-10 pb-10"
      >
        <div>
          <button onClick={handleBack} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer">
            <IconArrowLeft /> {t("projects.backBtn")}
          </button>
        </div>
        <m.div variants={fadeUp} initial="hidden" animate="visible" className="w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5">
          <img src={project.gambar} alt={project.nama} className="w-full h-full object-cover" />
        </m.div>
        <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
          <h1 className="text-[26px] sm:text-[32px] font-black text-white tracking-tight">{project.nama}</h1>
          <p className="mt-3 text-[14px] text-white/60 leading-relaxed">{project.longDesc || project.desk}</p>
        </m.div>
      </m.div>
    );
  }

  // ── PPID Case Study rendering ─────────────────────────────────────────────
  const listProyek = t("projects.list") || [];
  const localizedProject = listProyek.find(p => p.id === project.id) || project;

  const facts = localizedProject.facts || [];
  const modules = localizedProject.modules || [];
  const problems = localizedProject.problems || [];
  const solutions = localizedProject.solutions || [];
  const responsibilities = localizedProject.responsibilities || [];
  const timeline = localizedProject.timeline || [];
  const techStack = localizedProject.techStack || { frontend: [], backend: [], deployment: [] };
  const results = localizedProject.results || [];
  const meta = localizedProject.meta || {};

  return (
    <m.div
      id="project-detail"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-12 pb-16"
    >
      {/* ── Back button ────────────────────────────────────────────────── */}
      <div>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <IconArrowLeft />
          {t("projects.backBtn") || "Back to Portfolio"}
        </button>
      </div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="flex flex-col gap-5">
        {/* Category tag */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#3B82F6] uppercase">{meta.category}</span>
          <span className="text-white/15">·</span>
          <span className="text-[11px] font-bold tracking-[0.1em] text-white/35 uppercase">{meta.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-white tracking-tight leading-tight max-w-2xl">
          {localizedProject.nama}
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed max-w-2xl">
          {localizedProject.subtitle || localizedProject.desk}
        </p>



        {/* Meta grid */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
          {[
            { label: t("ppidDetail.metaRole") || "Role", value: meta.role },
            { label: t("ppidDetail.metaTeam") || "Team", value: meta.team },
          ].filter(m => m.value).map((item, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold tracking-widest text-[#555] uppercase">{item.label}</span>
              <span className="text-[13px] font-bold text-white">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-col gap-2 pt-1">
          <span className="text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase">{t("ppidDetail.techLabel") || "Tech Stack"}</span>
          <div className="flex flex-wrap gap-1.5">
            {localizedProject.tools.map((tool, i) => (
              <span key={i} className="text-[11px] font-semibold text-white/60 bg-white/5 border border-white/8 px-2.5 py-1 rounded-md">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </m.div>

      <m.div variants={fadeUp} custom={1} initial="hidden" animate="visible" className="w-full aspect-[16/8] rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5 relative">
        <img src={localizedProject.gambar} alt={localizedProject.nama} className="w-full h-full object-cover" loading="lazy" decoding="async" width="1200" height="600" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <span className="text-[11px] font-bold text-white/50 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {t("ppidDetail.heroPreview")}
          </span>
        </div>
      </m.div>



      {/* ── 2. OVERVIEW ────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.overviewLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.overviewTitle")}</SectionTitle>
          <p className="mt-2 text-[13px] text-white/50 leading-relaxed max-w-2xl">
            {localizedProject.about}
          </p>
        </div>

        {/* Compact editorial module list — 2 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-1 divide-y divide-white/5 border border-white/5 rounded-[16px] overflow-hidden">
          {modules.map((mod, i) => {
            const isPublic = mod.type === "public";
            return (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3 bg-[#0B0B0B]"
              >
                {/* Left: type badge + name */}
                <div className="flex flex-col gap-1 w-[90px] sm:w-[180px] flex-shrink-0 pt-0.5">
                  <span className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded border self-start ${
                    isPublic
                      ? "text-[#3B82F6] border-[#3B82F6]/25 bg-[#3B82F6]/8"
                      : "text-white/30 border-white/10 bg-white/[0.03]"
                  }`}>
                    {isPublic ? t("ppidDetail.publicBadge") : t("ppidDetail.internalBadge")}
                  </span>
                  <span className="text-[13px] font-bold text-white leading-tight">{mod.name}</span>
                </div>

                {/* Right: desc only, features collapsed to dots */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white/45 leading-relaxed line-clamp-2 sm:line-clamp-none">{mod.desc}</p>
                  <p className="text-[10px] text-white/20 mt-1 leading-relaxed hidden sm:block">{mod.features.join(" · ")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </m.div>

      {/* ── 3. ARCHITECTURE ───────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="flex flex-col gap-4">
        <div>
          <SectionLabel>{t("ppidDetail.archLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.archTitle")}</SectionTitle>
        </div>

        {/* Compact two-column flow — side by side on all sizes */}
        <div className="grid grid-cols-2 gap-3">
          {/* Public flow */}
          <div className="bg-[#0B0B0B] border border-white/5 rounded-[12px] p-3 flex flex-col gap-1">
            <span className="text-[9px] font-bold tracking-widest text-[#3B82F6] uppercase mb-1">{t("ppidDetail.publicFlow")}</span>
            {[
              { label: t("ppidDetail.flowCitizen"), accent: false },
              { label: t("ppidDetail.flowPortal"), accent: "blue" },
              { label: t("ppidDetail.flowSipipi"), accent: "amber" },
              { label: t("ppidDetail.flowAdmin"), accent: false },
              { label: t("ppidDetail.flowEmail"), accent: "green" },
              { label: t("ppidDetail.flowResponse"), accent: false },
            ].map((node, i, arr) => (
              <div key={i} className="flex flex-col">
                <div className={`text-[10px] font-semibold px-2 py-1 rounded ${
                  node.accent === "blue" ? "text-[#3B82F6] bg-[#3B82F6]/8" :
                  node.accent === "amber" ? "text-[#F59E0B] bg-[#F59E0B]/8" :
                  node.accent === "green" ? "text-[#10B981] bg-[#10B981]/8" :
                  "text-white/45 bg-white/[0.03]"
                } leading-tight`}>{node.label}</div>
                {i < arr.length - 1 && <div className="self-start ml-2 w-px h-1.5 bg-white/10 mt-0.5" />}
              </div>
            ))}
          </div>

          {/* CMS flow */}
          <div className="bg-[#0B0B0B] border border-white/5 rounded-[12px] p-3 flex flex-col gap-1">
            <span className="text-[9px] font-bold tracking-widest text-[#8B5CF6] uppercase mb-1">{t("ppidDetail.contentFlow")}</span>
            <div className="text-[10px] font-semibold px-2 py-1 rounded text-[#A78BFA] bg-[#8B5CF6]/8 leading-tight">{t("ppidDetail.flowCms")}</div>
            <div className="self-start ml-2 w-px h-1.5 bg-white/10" />
            <div className="flex flex-wrap gap-1">
              {[
                t("ppidDetail.galleryLabels.homepage"),
                t("ppidDetail.galleryLabels.news"),
                t("ppidDetail.galleryLabels.docs"),
                t("ppidDetail.galleryLabels.faq"),
                "Video",
                "Info"
              ].map((item, i) => (
                <span key={i} className="text-[9px] font-medium text-[#A78BFA]/70 bg-[#8B5CF6]/5 border border-[#8B5CF6]/15 px-1.5 py-0.5 rounded">{item}</span>
              ))}
            </div>
            <div className="self-start ml-2 w-px h-1.5 bg-white/10" />
            <div className="text-[10px] font-semibold px-2 py-1 rounded text-[#3B82F6] bg-[#3B82F6]/8 leading-tight">Portal PPID</div>
            <p className="text-[9px] text-white/20 mt-1 leading-relaxed">
              CMS & SIPIPI run in one app.
            </p>
          </div>
        </div>
      </m.div>

      {/* ── 6. RESPONSIBILITIES ─────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={5} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.contribLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.contribTitle")}</SectionTitle>
          <p className="mt-2 text-[13px] text-white/50 leading-relaxed max-w-2xl">
            {t("ppidDetail.contribNote")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {responsibilities.map((group, i) => (
            <div key={i} className="bg-[#0B0B0B] border border-white/5 rounded-[12px] p-3 flex flex-col gap-2">
              <span className="text-[9px] font-bold tracking-widest text-[#3B82F6] uppercase">{group.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <span key={j} className="text-[10px] font-semibold text-white/55 bg-white/5 border border-white/8 px-2 py-0.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </m.div>

      {/* ── 7. TIMELINE ─────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={6} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.processLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.processTitle")}</SectionTitle>
        </div>
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[14px] p-4">
          <Timeline steps={timeline} />
        </div>
      </m.div>

      {/* ── 8. TECH STACK ───────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={7} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.techLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.techTitle")}</SectionTitle>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: t("ppidDetail.techFrontend") || "Frontend", items: techStack.frontend, color: "#3B82F6" },
            { label: t("ppidDetail.techBackend") || "Backend", items: techStack.backend, color: "#10B981" },
            { label: t("ppidDetail.techDeployment") || "Deployment", items: techStack.deployment, color: "#F59E0B" },
          ].map((group, i) => (
            <div key={i} className="bg-[#0B0B0B] border border-white/5 rounded-[12px] p-3 flex flex-col gap-2">
              <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: group.color }}>
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <span key={j} className="text-[10px] font-semibold text-white/55 bg-white/5 border border-white/8 px-1.5 py-0.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </m.div>

      {/* ── 9. GALLERY (Portal PPID only) ───────────────────────────────── */}
      <m.div variants={fadeUp} custom={8} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.galleryLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.galleryTitle")}</SectionTitle>
          <p className="mt-2 text-[13px] text-white/50 leading-relaxed max-w-2xl">
            {t("ppidDetail.galleryNote")}
          </p>
        </div>

        {localizedProject.images && localizedProject.images.length > 0 ? (
          <div className="flex flex-col gap-4">
            {/* Top item: Video demo */}
            {localizedProject.images[0].endsWith(".webm") ? (
              <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5 relative">
                <video
                  src={localizedProject.images[0]}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[11px] font-bold text-white/50 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {t("ppidDetail.demoVideoLabel")}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-zinc-900 border border-white/5 relative">
                <img src={localizedProject.images[0]} alt="Portal PPID preview" className="w-full h-full object-cover" loading="lazy" decoding="async" width="1200" height="675" />
              </div>
            )}

            {/* Bottom items: Grid compilation of other screenshots */}
            {localizedProject.images.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {localizedProject.images.slice(1).map((src, i) => (
                  <div key={i} className="rounded-[14px] overflow-hidden bg-zinc-900 border border-white/5 aspect-[16/10] group relative cursor-pointer">
                    <img src={src} alt={`Portal PPID screenshot ${i + 2}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" decoding="async" width="600" height="375" />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: t("ppidDetail.galleryLabels.homepage"), span: true },
              { label: t("ppidDetail.galleryLabels.pubInfo") },
              { label: t("ppidDetail.galleryLabels.news") },
              { label: t("ppidDetail.galleryLabels.docs") },
              { label: t("ppidDetail.galleryLabels.faq") },
              { label: t("ppidDetail.galleryLabels.req") },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-[14px] border border-dashed border-white/10 bg-white/[0.015] flex flex-col items-center justify-center gap-2 py-10 ${item.span ? "col-span-2" : ""}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                </svg>
                <span className="text-[11px] text-white/20 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        )}

      </m.div>

      {/* ── 10. INTERNAL PLATFORM (Confidential) ────────────────────────── */}
      <m.div variants={fadeUp} custom={9} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.internalLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.internalTitle")}</SectionTitle>
        </div>
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[20px] p-6 sm:p-8 flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 text-white/40">
              <IconLock />
            </div>
            <div className="flex-1">
              <h3 className="text-[14px] font-bold text-white mb-2">{t("ppidDetail.internalConfidential")}</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                {t("ppidDetail.internalNote")}
              </p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4">
            <p className="text-[12px] text-white/40 leading-relaxed mb-3">{t("ppidDetail.internalContribNote")}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(t("ppidDetail.internalContributions", { returnObjects: true }) || []).map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-white/45">
                  <span className="text-[#3B82F6]/60"><IconCheck /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </m.div>

      {/* ── 11. RESULTS ─────────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={10} initial="hidden" animate="visible" className="flex flex-col gap-4">
        <div>
          <SectionLabel>{t("ppidDetail.resultsLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.resultsTitle")}</SectionTitle>
        </div>
        <div className="flex flex-col">
          {results.map((result, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
              <span className="text-[#3B82F6]/60 flex-shrink-0 mt-0.5"><IconCheck /></span>
              <p className="text-[12px] text-white/60 leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </m.div>

      {/* ── 12. REPOSITORY ──────────────────────────────────────────────── */}
      <m.div variants={fadeUp} custom={11} initial="hidden" animate="visible" className="flex flex-col gap-5">
        <div>
          <SectionLabel>{t("ppidDetail.repoLabel")}</SectionLabel>
          <SectionTitle>{t("ppidDetail.repoTitle")}</SectionTitle>
        </div>
        <div className="bg-[#0B0B0B] border border-white/5 rounded-[16px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/35 flex-shrink-0">
              <IconLock />
            </div>
            <div>
              <p className="text-[13px] font-bold text-white">{t("ppidDetail.repoPrivate")}</p>
              <p className="text-[12px] text-white/40 mt-0.5">{t("ppidDetail.repoNote")}</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-white/30 bg-white/5 border border-white/8 px-3 py-1.5 rounded-lg whitespace-nowrap">
            {t("ppidDetail.repoUnavailable")}
          </span>
        </div>
      </m.div>


      {/* ── Footer back button ───────────────────────────────────────────── */}
      <div className="border-t border-white/5 pt-6">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <IconArrowLeft />
          {t("projects.backBtn") || "Back to Portfolio"}
        </button>
      </div>
    </m.div>
  );
}
