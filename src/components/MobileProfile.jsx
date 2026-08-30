import React from "react";
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { m } from "framer-motion";
import GithubActivity from "./GithubActivity";

const techStack = {
  frontend: ["React", "JavaScript", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express", "Python"],
  database: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  skills: ["Design Research", "UX", "User Research"],
  tools: ["Docker", "VS Code", "Antigravity", "Git"],
  design: ["Figma", "Canva"],
};

export default function MobileProfile() {
  const { t } = useLanguage();
  const langList = t("sidebar.langList") || [];

  return (
    <div className="flex flex-col gap-8 lg:hidden w-full pb-4">
      {/* Profile Container (Left: Info + Social, Right: Rose) */}
      <div className="flex items-end justify-between gap-3 w-full">
        {/* Left Column: Avatar/Name & Social Icons */}
        <div className="flex flex-col gap-3 min-w-0">
          {/* Avatar + Name row */}
          <div className="flex items-center gap-3">
            <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/10 shadow-lg flex-shrink-0">
              <img
                src="/assets/adityafajarsy.webp"
                alt="Aditya Fajar SY"
                className="w-full h-full object-cover object-[center_15%]"
                width="72"
                height="72"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                onError={(e) => {
                  e.target.src = "/assets/hero-img.webp";
                }}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap min-w-0">
                <span className="text-[17px] min-[380px]:text-[19px] min-[400px]:text-[20px] font-bold text-white tracking-tight leading-none">
                  Aditya Fajar SY
                </span>
                {/* Verified badge */}
                <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.927.1-1.34.28C14.843 2.5 13.518 1.5 12 1.5s-2.843 1-3.43 2.29c-.413-.18-.86-.28-1.34-.28-2.11 0-3.82 1.78-3.82 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .927-.1 1.34-.28.587 1.29 1.912 2.29 3.43 2.29s2.843-1 3.43-2.29c.413.18.86.28 1.34.28 2.11 0 3.82-1.78 3.82-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                    fill="#3B82F6"
                  />
                  <path d="M8.3 12.3l2.7 2.7 5.7-5.7" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[13px] text-[#8A8A8A] font-medium mt-1">
                {t("sidebar.role")}
              </span>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-4 text-[#8A8A8A]">
            <a href="https://github.com/adityafajarsy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/adityafajarsy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://instagram.com/adityafajarsyy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Rose Graphic */}
        <m.div
          animate={{
            y: [-3, 3, -3],
            rotate: [-1, 1.5, -1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.25, 1, 0.5, 1]
          }}
          className="w-[72px] h-[72px] min-[390px]:w-[84px] min-[390px]:h-[84px] relative flex items-center justify-center flex-shrink-0 pb-1"
        >
          <img
            src="/assets/rose.webp"
            alt="Rose decoration"
            className="w-full h-full object-contain"
            width="84"
            height="84"
            loading="lazy"
            decoding="async"
          />
        </m.div>
      </div>

      {/* About */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">{t("sidebar.aboutTitle")}</h3>
        <p className="text-[14px] leading-relaxed text-[#8A8A8A]">
          {t("sidebar.aboutText")}
        </p>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">{t("sidebar.contactTitle")}</h3>
        <div className="flex flex-col gap-2 text-[13px] text-[#8A8A8A]">
          <a href="mailto:adityafajar.sy90@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <Mail size={14} /> <span>adityafajar.sy90@gmail.com</span>
          </a>
          <a href="https://github.com/adityafajarsy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <Globe size={14} /> <span>github.com/adityafajarsy</span>
          </a>
          <div className="flex items-center gap-2.5">
            <MapPin size={14} /> <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">{t("sidebar.techTitle")}</h3>
        <div className="flex flex-col gap-2">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-[#8A8A8A] capitalize">{category}</span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="text-[11px] font-medium text-white px-2 py-0.5 bg-[#0B0B0B] border border-white/5 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Activity Section */}
      <GithubActivity isMobile={true} />

      {/* Languages */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[11px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">{t("sidebar.langTitle")}</h3>
        <div className="flex flex-wrap gap-1.5">
          {langList.map((lang) => (
            <span key={lang.name} className="flex items-center gap-1.5 text-[12px] font-medium text-white px-2.5 py-1 bg-[#0B0B0B] border border-white/5 rounded-full">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/5" />
    </div>
  );
}
