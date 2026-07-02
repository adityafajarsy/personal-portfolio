import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop/non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show cursor initially
    cursor.style.display = "flex";

    const handleMouseMove = (e) => {
      // Direct, instantaneous updates using CSS variables (bypasses JS animation loops)
      cursor.style.setProperty("--x", `${e.clientX}px`);
      cursor.style.setProperty("--y", `${e.clientY}px`);
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    // Fast, event-delegated hover detection using native class mutations
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer");

      if (isInteractive) {
        cursor.setAttribute("data-hover", "true");
      } else {
        cursor.removeAttribute("data-hover");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Instantly hide system cursor on desktop
    const style = document.createElement("style");
    style.id = "hide-system-cursor";
    style.innerHTML = `
      @media (min-width: 1024px) {
        a, button, input, select, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
        body, html {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      const styleEl = document.getElementById("hide-system-cursor");
      if (styleEl) styleEl.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden lg:flex fixed left-0 top-0 pointer-events-none z-[9999] rounded-full bg-white/20 border border-white/10 mix-blend-difference items-center justify-center overflow-hidden custom-cursor-element"
      style={{
        opacity: "0", // Hidden until mouse moves
        // Use GPU acceleration directly in CSS
        transform: "translate3d(var(--x, -100px), var(--y, -100px), 0) translate(-50%, -50%)",
        transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease",
      }}
    >
      {/* Styles for dynamic internal arrow hover inside CustomCursor */}
      <style>{`
        .custom-cursor-element {
          width: 20px;
          height: 20px;
        }
        .custom-cursor-element[data-hover="true"] {
          width: 42px;
          height: 42px;
        }
        .cursor-arrow-icon {
          display: none;
        }
        .custom-cursor-element[data-hover="true"] .cursor-arrow-icon {
          display: block !important;
        }
      `}</style>
      
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cursor-arrow-icon text-white animate-in fade-in zoom-in duration-200"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </div>
  );
}
