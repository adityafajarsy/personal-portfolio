import React, { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, m } from "framer-motion";

// ── Hotspot definitions (position as % of image container) ─────────────────────
// x/y are the CENTER of the hotspot dot relative to the image container (0–100)
// cardSide: preferred side to show the floating card ("right" | "left" | "top" | "bottom")
const HOTSPOTS = [
  {
    id: "01",
    x: 13.5,
    y: 14,
    cardSide: "right",
    title: "Profile Photo",
    desc: "Personal branding dimulai dari kesan pertama. Foto dipilih sederhana agar fokus tetap pada karya, bukan visual yang berlebihan.",
  },
  {
    id: "02",
    x: 6.5,
    y: 50,
    cardSide: "right",
    title: "Sidebar Layout",
    desc: "Sidebar digunakan sebagai identitas permanen selama pengguna menjelajah website sehingga informasi utama selalu mudah diakses.",
  },
  {
    id: "03",
    x: 22,
    y: 38,
    cardSide: "right",
    title: "Icon & Accent",
    desc: "Seluruh ikon dan aksen biru dipilih untuk menjaga fokus visual tanpa mengganggu hierarchy konten.",
  },
  {
    id: "04",
    x: 62,
    y: 30,
    cardSide: "left",
    title: "Card Design",
    desc: "Radius, spacing, dan border dibuat konsisten agar seluruh komponen terasa berasal dari satu design system.",
  },
  {
    id: "05",
    x: 72,
    y: 15,
    cardSide: "left",
    title: "Typography Pairing",
    desc: "Inter digunakan untuk keterbacaan, sedangkan handwriting digunakan sebagai aksen emosional yang membangun karakter visual.",
  },
  {
    id: "06",
    x: 42,
    y: 20,
    cardSide: "right",
    title: "Handwriting Accent",
    desc: "Handwriting terinspirasi dari editorial magazine dan branding esports untuk memberi kesan personal, human, dan mudah diingat.",
  },
  {
    id: "07",
    x: 55,
    y: 72,
    cardSide: "top",
    title: "CTA Button",
    desc: "Call-to-action dibuat paling kontras agar pengguna langsung mengetahui tindakan utama tanpa mengganggu keseimbangan layout.",
  },
  {
    id: "08",
    x: 80,
    y: 55,
    cardSide: "left",
    title: "Section Hierarchy",
    desc: "Setiap section dipisahkan menggunakan whitespace dan kontras sehingga ritme membaca terasa natural.",
  },
  {
    id: "09",
    x: 88,
    y: 82,
    cardSide: "left",
    title: "Visual Consistency",
    desc: "Warna, spacing, animasi, ikon, dan tipografi mengikuti satu sistem yang konsisten sehingga seluruh website terasa sebagai satu identitas.",
  },
];

// ── Card animation variants ─────────────────────────────────────────────────────
const cardVariants = {
  initial: { opacity: 0, scale: 0.93, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.93,
    y: 8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ── Single Hotspot ──────────────────────────────────────────────────────────────
const HotspotDot = React.memo(({ spot, isActive, onActivate, onDeactivate, isMobile }) => {
  const dotRef = useRef(null);

  // Compute card anchor (in % of container) based on preferred side
  const getCardStyle = () => {
    const side = spot.cardSide;
    const offset = 4; // % gap between dot and card edge
    if (side === "right") return { left: `${spot.x + offset}%`, top: `${spot.y}%`, transform: "translateY(-50%)" };
    if (side === "left") return { right: `${100 - spot.x + offset}%`, top: `${spot.y}%`, transform: "translateY(-50%)" };
    if (side === "top") return { bottom: `${100 - spot.y + offset}%`, left: `${spot.x}%`, transform: "translateX(-50%)" };
    // bottom
    return { top: `${spot.y + offset}%`, left: `${spot.x}%`, transform: "translateX(-50%)" };
  };

  const cardStyle = getCardStyle();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isActive ? onDeactivate() : onActivate(spot.id);
    }
    if (e.key === "Escape") onDeactivate();
  };

  return (
    <div
      style={{
        position: "absolute",
        left: `${spot.x}%`,
        top: `${spot.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        pointerEvents: "auto",
      }}
    >
      {/* Dot */}
      <button
        ref={dotRef}
        id={`hotspot-${spot.id}`}
        aria-label={`Hotspot ${spot.id}: ${spot.title}`}
        aria-expanded={isActive}
        tabIndex={0}
        onMouseEnter={() => !isMobile && onActivate(spot.id)}
        onMouseLeave={() => !isMobile && onDeactivate()}
        onClick={() => isMobile && (isActive ? onDeactivate() : onActivate(spot.id))}
        onKeyDown={handleKeyDown}
        style={{ cursor: "pointer", background: "none", border: "none", padding: 0, position: "relative" }}
      >
        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: "-6px",
            borderRadius: "50%",
            border: "1px solid rgba(59,130,246,0.35)",
            animation: "hotspot-pulse 2.4s ease-out infinite",
            pointerEvents: "none",
          }}
        />
        {/* Main dot circle */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isActive ? 20 : 16,
            height: isActive ? 20 : 16,
            borderRadius: "50%",
            border: `1.5px solid ${isActive ? "#3B82F6" : "rgba(59,130,246,0.7)"}`,
            background: isActive ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.06)",
            boxShadow: isActive ? "0 0 12px 3px rgba(59,130,246,0.3)" : "0 0 6px 1px rgba(59,130,246,0.15)",
            transition: "all 0.2s ease",
            fontSize: "7px",
            fontWeight: 900,
            color: "#3B82F6",
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          {spot.id}
        </span>
      </button>

      {/* Floating Card + Connector */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* SVG Connector Line */}
            <m.svg
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1, transition: { duration: 0.25, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                overflow: "visible",
                pointerEvents: "none",
                zIndex: 11,
              }}
              width="0"
              height="0"
            >
              <line
                x1={spot.cardSide === "left" ? -8 : spot.cardSide === "right" ? 8 : 0}
                y1={spot.cardSide === "top" ? -8 : spot.cardSide === "bottom" ? 8 : 0}
                x2={spot.cardSide === "left" ? -38 : spot.cardSide === "right" ? 38 : 0}
                y2={spot.cardSide === "top" ? -38 : spot.cardSide === "bottom" ? 38 : 0}
                stroke="rgba(59,130,246,0.4)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
            </m.svg>

            {/* Floating Card */}
            <m.div
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              role="tooltip"
              aria-live="polite"
              onMouseEnter={() => !isMobile && onActivate(spot.id)}
              onMouseLeave={() => !isMobile && onDeactivate()}
              style={{
                position: "absolute",
                zIndex: 20,
                width: 220,
                maxWidth: "calc(100vw - 32px)",
                ...cardStyle,
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  background: "rgba(17,17,17,0.95)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 16,
                  padding: "12px 14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {/* Card Header */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span
                    style={{
                      fontSize: 8,
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                      color: "#3B82F6",
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      borderRadius: 5,
                      padding: "2px 6px",
                      fontFamily: "monospace",
                    }}
                  >
                    {spot.id}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.92)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {spot.title}
                  </span>
                </div>
                {/* Separator */}
                <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 8 }} />
                {/* Description */}
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.48)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {spot.desc}
                </p>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});

HotspotDot.displayName = "HotspotDot";

// ── Main Component ──────────────────────────────────────────────────────────────
export default function DesignAnatomyHotspot() {
  const [activeId, setActiveId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect touch/mobile
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia("(hover: none)").matches || window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setActiveId(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close on click outside (mobile)
  useEffect(() => {
    if (!isMobile) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMobile]);

  const handleActivate = useCallback((id) => setActiveId(id), []);
  const handleDeactivate = useCallback(() => setActiveId(null), []);

  return (
    <>
      {/* Keyframe for pulse animation injected once */}
      <style>{`
        @keyframes hotspot-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          60%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
      `}</style>

      {/* Container — borderless & bg-less to blend with page background */}
      <div
        ref={containerRef}
        className="w-full relative flex items-center justify-center"
        style={{ userSelect: "none" }}
      >
        {/* Base image wrapper — hugs the image exactly so percentages match pixels */}
        <div style={{ position: "relative", display: "inline-block", maxWidth: "100%" }}>
          <img
            src="/assets/project2/design_anatomy.webp"
            alt="Design Anatomy Schema"
            className="w-full h-auto max-h-[600px]"
            loading="lazy"
            draggable={false}
            style={{ display: "block" }}
          />

          {/* Hotspot overlay — absolute layer, covers same area as the image (hidden on mobile) */}
          {!isMobile && (
            <div
              aria-label="Interactive Design Anatomy — hover or tap hotspots to inspect design decisions"
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none", // children opt-in with pointerEvents: auto
              }}
            >
              {HOTSPOTS.map((spot) => (
                <HotspotDot
                  key={spot.id}
                  spot={spot}
                  isActive={activeId === spot.id}
                  onActivate={handleActivate}
                  onDeactivate={handleDeactivate}
                  isMobile={isMobile}
                />
              ))}
            </div>
          )}
        </div>

        {/* Legend hint (hidden on mobile) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 14,
              display: "flex",
              alignItems: "center",
              gap: 5,
              pointerEvents: "none",
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              border: "1.5px solid rgba(59,130,246,0.5)",
              background: "rgba(59,130,246,0.1)",
              flexShrink: 0,
            }} />
            <span style={{
              fontSize: 9, color: "rgba(255,255,255,0.3)",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>
              Hover hotspots to inspect
            </span>
          </div>
        )}
      </div>
    </>
  );
}
