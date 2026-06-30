import React, { useEffect, useState, useRef } from "react";
import { User, Folder, GraduationCap, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "intro", label: "Profile", icon: User },
  { id: "project", label: "Projects", icon: Folder },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "kontak", label: "Contact", icon: Mail },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    setActiveSection(id);

    const isDesktop = window.innerWidth >= 1024;
    const target = document.getElementById(id);

    if (isDesktop) {
      const desktopMain = document.querySelector("main");
      if (desktopMain && target) {
        const offset = target.offsetTop - desktopMain.offsetTop;
        desktopMain.scrollTo({ top: offset - 80, behavior: "smooth" });
        return;
      }
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 lg:left-[calc(50%+205px)] -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-6 py-2 rounded-full bg-[#0F0F0FC0] backdrop-blur-xl border border-white/8 shadow-2xl relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative p-1.5 rounded-full text-[#8A8A8A] hover:text-white transition-colors duration-250 flex items-center justify-center cursor-pointer group"
              aria-label={item.label}
            >
              {/* Active Background Capsule */}
              {isActive && (
                <motion.div
                  layoutId="activeNavBg"
                  className="absolute inset-0 bg-white/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/5"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                size={18}
                className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "text-[#3B82F6] scale-105" : "text-[#8A8A8A]"
                }`}
              />

              {/* Tooltip on Hover */}
              <span className="absolute bottom-full mb-2 bg-[#0B0B0B] border border-white/5 text-white text-[11px] px-2 py-1 rounded-md opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-md whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
