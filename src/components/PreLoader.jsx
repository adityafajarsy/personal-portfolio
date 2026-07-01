import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const NAME = "PORTFOLIO";

function useGlitchText(target, duration = 900, startDelay = 0) {
  const [text, setText] = useState(() => target.replace(/./g, " "));
  const frame = useRef(null);

  useEffect(() => {
    let iteration = 0;
    const totalFrames = 28;
    let started = false;

    const timeout = setTimeout(() => {
      started = true;
      const tick = () => {
        iteration++;
        setText(
          target
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < Math.floor((iteration / totalFrames) * target.length)) {
                return target[i];
              }
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            })
            .join("")
        );
        if (iteration < totalFrames) {
          frame.current = requestAnimationFrame(tick);
        } else {
          setText(target);
        }
      };
      frame.current = requestAnimationFrame(tick);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, startDelay]);

  return text;
}

export default function PreLoader() {
  const { t } = useLanguage();
  const [phase, setPhase] = useState("intro"); // intro | glitch | exit
  const [scanLine, setScanLine] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [chromatic, setChromatic] = useState(false);

  const nameText = useGlitchText(NAME, 900, 400);
  const taglineText = useGlitchText(t("preloader.tagline"), 800, 1400);

  // Scan line animation
  useEffect(() => {
    let raf;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      setScanLine(((elapsed * 0.05) % 110));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Show tagline
  useEffect(() => {
    const t = setTimeout(() => setShowTagline(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Random chromatic glitch bursts
  useEffect(() => {
    const burst = () => {
      setChromatic(true);
      setTimeout(() => setChromatic(false), 80 + Math.random() * 120);
    };
    const times = [600, 1100, 1800, 2300, 2600];
    const timers = times.map((t) => setTimeout(burst, t));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Trigger exit slide
  useEffect(() => {
    const t = setTimeout(() => setPhase("exit"), 3000);
    return () => clearTimeout(t);
  }, []);

  // Unmount after exit
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => setVisible(false), 900);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#030303",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transition: phase === "exit" ? "transform 0.85s cubic-bezier(0.77,0,0.18,1)" : "none",
        transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      {/* ── Scan line overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
          zIndex: 2,
        }}
      />

      {/* ── Moving horizontal scan beam ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${scanLine}%`,
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* ── Chromatic aberration glitch ── */}
      {chromatic && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,0,60,0.06)",
              transform: "translateX(-4px)",
              mixBlendMode: "screen",
              zIndex: 4,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,200,255,0.06)",
              transform: "translateX(4px)",
              mixBlendMode: "screen",
              zIndex: 4,
              pointerEvents: "none",
            }}
          />
          {/* horizontal tear */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${30 + Math.random() * 40}%`,
              height: `${2 + Math.random() * 8}px`,
              background: "rgba(59,130,246,0.25)",
              transform: `translateX(${(Math.random() - 0.5) * 24}px)`,
              zIndex: 5,
              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* ── Corner brackets ── */}
      {[
        { top: 24, left: 24, borderTop: "2px solid", borderLeft: "2px solid", borderRight: "none", borderBottom: "none" },
        { top: 24, right: 24, borderTop: "2px solid", borderRight: "2px solid", borderLeft: "none", borderBottom: "none" },
        { bottom: 24, left: 24, borderBottom: "2px solid", borderLeft: "2px solid", borderTop: "none", borderRight: "none" },
        { bottom: 24, right: 24, borderBottom: "2px solid", borderRight: "2px solid", borderTop: "none", borderLeft: "none" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 28,
            height: 28,
            borderColor: "rgba(59,130,246,0.5)",
            ...s,
            zIndex: 6,
          }}
        />
      ))}

      {/* ── STATUS label ── */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 10,
          letterSpacing: "0.25em",
          color: "rgba(59,130,246,0.6)",
          fontFamily: "monospace",
          zIndex: 6,
          animation: "flicker 0.15s infinite",
        }}
      >
        INITIALIZING SYSTEM...
      </div>

      {/* ── Main glitch text ── */}
      <div style={{ position: "relative", zIndex: 6, display: "inline-block", textAlign: "left", userSelect: "none" }}>
        {/* Tagline (Welcome) */}
        <p
          style={{
            fontFamily: "'Nothing You Could Do', cursive",
            fontSize: "clamp(1.3rem, 3.8vw, 2.2rem)",
            fontWeight: "bold",
            color: showTagline ? "#3B82F6" : "transparent",
            position: "absolute",
            top: "calc(-12px - 1.2vw)",
            left: "8px",
            transition: "color 0.4s ease",
            whiteSpace: "nowrap",
            zIndex: 7,
            textShadow: "0 0 12px rgba(59, 130, 246, 0.5)",
            margin: 0,
          }}
        >
          {taglineText}
        </p>

        {/* Red ghost */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            color: chromatic ? "rgba(255,40,80,0.35)" : "transparent",
            fontFamily: "'Inter', monospace",
            fontSize: "clamp(2.5rem, 9.5vw, 6.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            transform: "translateX(-3px)",
            pointerEvents: "none",
            transition: "color 0.05s",
            whiteSpace: "nowrap",
          }}
        >
          {nameText}
        </div>
        {/* Cyan ghost */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            color: chromatic ? "rgba(0,210,255,0.35)" : "transparent",
            fontFamily: "'Inter', monospace",
            fontSize: "clamp(2.5rem, 9.5vw, 6.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            transform: "translateX(3px)",
            pointerEvents: "none",
            transition: "color 0.05s",
            whiteSpace: "nowrap",
          }}
        >
          {nameText}
        </div>
        {/* Main text */}
        <h1
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: "clamp(2.5rem, 9.5vw, 6.2rem)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          {nameText}
        </h1>


        {/* Progress bar */}
        <div
          style={{
            marginTop: 40,
            height: 1,
            width: "100%",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
              borderRadius: 999,
              animation: "loadBar 2.6s cubic-bezier(0.4,0,0.2,1) forwards",
            }}
          />
        </div>
      </div>

      {/* ── Bottom status ── */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.2)",
          fontFamily: "monospace",
          zIndex: 6,
          whiteSpace: "nowrap",
        }}
      >
        PORTFOLIO v2.0 · BUILD 2026
      </div>

      <style>{`
        @keyframes loadBar {
          0%   { width: 0% }
          60%  { width: 75% }
          85%  { width: 90% }
          100% { width: 100% }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1 }
          50%       { opacity: 0.6 }
        }
      `}</style>
    </div>
  );
}
