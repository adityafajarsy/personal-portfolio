import React from "react";
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const techStack = {
  frontend: ["React", "JavaScript", "TypeScript", "Tailwind", "Shadcn"],
  backend: ["Node.js", "Express", "Python"],
  database: ["MongoDB", "PostgreSQL", "Firebase"],
  tools: ["Docker", "VS Code", "Antigravity", "Git"],
  design: ["Figma", "Canva"],
};

export default function MobileProfile() {
  const { t } = useLanguage();
  const langList = t("sidebar.langList") || [];

  return (
    <div className="flex flex-col gap-8 lg:hidden w-full pb-4">
      {/* Avatar + Name row */}
      <div className="flex items-center gap-4">
        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/10 shadow-lg flex-shrink-0">
          <img
            src="/assets/adityafajarsy.webp"
            alt="Aditya Fajar SY"
            className="w-full h-full object-cover object-[center_15%]"
            onError={(e) => {
              e.target.src = "/assets/hero-img.webp";
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[20px] font-bold text-white tracking-tight leading-none">
              Aditya Fajar SY
            </span>
            {/* Verified badge */}
            <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.927.1-1.34.28C14.843 2.5 13.518 1.5 12 1.5s-2.843 1-3.43 2.29c-.413-.18-.86-.28-1.34-.28-2.11 0-3.82 1.78-3.82 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .927-.1 1.34-.28.587 1.29 1.912 2.29 3.43 2.29s2.843-1 3.43-2.29c.413.18.86.28 1.34.28 2.11 0 3.82-1.78 3.82-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                fill="#3B82F6"
              />
              <path
                d="M8.3 12.3l2.7 2.7 5.7-5.7"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-[13px] text-[#8A8A8A] mt-1">{t("sidebar.role")}</span>
        </div>
      </div>

      {/* Social icons row */}
      <div className="flex items-center gap-5 -mt-2">
        <a href="https://github.com/adityafajarsy" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-white transition-colors duration-200" aria-label="GitHub">
          <i className="ri-github-fill ri-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/adityafajarsy/" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-white transition-colors duration-200" aria-label="LinkedIn">
          <i className="ri-linkedin-fill ri-xl"></i>
        </a>
        <a href="https://instagram.com/adityafajarsyy" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-white transition-colors duration-200" aria-label="Instagram">
          <i className="ri-instagram-line ri-xl"></i>
        </a>
        <a href="https://x.com/elonmusk" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-white/40 transition-colors duration-200 cursor-default" aria-label="X" onClick={(e) => e.preventDefault()}>
          <i className="ri-twitter-x-fill ri-lg"></i>
        </a>
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
          <a href="mailto:adityafajar.sy90@email.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <Mail size={14} /> <span>adityafajar.sy90@email.com</span>
          </a>
          <a href="https://github.com/adityafajarsy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <Globe size={14} /> <span>github.com/adityafajarsy</span>
          </a>
          <a href="tel:+6287741583948" className="flex items-center gap-2.5 hover:text-white transition-colors duration-200">
            <Phone size={14} /> <span>+62 877-4158-3948</span>
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
