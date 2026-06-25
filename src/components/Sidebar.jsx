import React from "react";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Sidebar() {
  const techStack = {
    frontend: ["React", "JavaScript", "TypeScript", "Tailwind", "Shadcn"],
    backend: ["Node.js", "Express", "Python"],
    database: ["MongoDB", "PostgreSQL", "Firebase"],
    tools: ["Docker", "VS Code", "Antigravity", "Git"],
    design: ["Figma", "Canva"],
  };

  const languages = [
    { name: "Indonesian", flag: "🇮🇩" },
    { name: "English", flag: "🇬🇧" },
    { name: "Russian", flag: "🇷🇺" },
  ];

  return (
    <aside className="w-[410px] h-screen flex-shrink-0 border-r border-white/5 bg-transparent overflow-y-auto px-[48px] pt-[80px] pb-[48px] flex flex-col gap-[32px] select-none scrollbar-none">
      {/* Profile Header */}
      <div className="flex flex-col gap-4">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white/10 shadow-lg relative group">
          <img
            src="/assets/adityafajarsy.png"
            alt="Aditya Fajar SY"
            className="w-full h-full object-cover object-[center_15%]"
            onError={(e) => {
              e.target.src = "/assets/hero-img.webp"; // fallback if main photo fails
            }}
          />
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-[24px] font-bold text-white tracking-tight leading-none">
              Aditya Fajar SY
            </h1>
            {/* Custom blue verification checkmark */}
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Badge Background */}
              <path
                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.927.1-1.34.28C14.843 2.5 13.518 1.5 12 1.5s-2.843 1-3.43 2.29c-.413-.18-.86-.28-1.34-.28-2.11 0-3.82 1.78-3.82 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .927-.1 1.34-.28.587 1.29 1.912 2.29 3.43 2.29s2.843-1 3.43-2.29c.413.18.86.28 1.34.28 2.11 0 3.82-1.78 3.82-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                fill="#3B82F6"
              />
              {/* Thick rounded checkmark */}
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
          <span className="text-[14px] text-[#8A8A8A] font-medium mt-1 inline-block">
            he/him
          </span>
        </div>
      </div>

      {/* About / Bio */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
          About
        </h3>
        <p className="text-[14px] leading-relaxed text-[#8A8A8A] font-normal">
          A motivated web and application developer focused on creating modern,
          efficient, and user-friendly digital experiences. I love combining
          creative design with AI and cloud-powered technologies.
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
          Contact
        </h3>
        <div className="flex flex-col gap-2.5 text-[14px] text-[#8A8A8A]">
          <a
            href="mailto:adityafajar.sy90@email.com"
            className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
          >
            <Mail size={16} className="text-[#8A8A8A]" />
            <span className="truncate">adityafajar.sy90@email.com</span>
          </a>
          <a
            href="https://github.com/adityafajarsy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
          >
            <Globe size={16} className="text-[#8A8A8A]" />
            <span className="truncate">github.com/adityafajarsy</span>
          </a>
          <a
            href="tel:+6287741583948"
            className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
          >
            <Phone size={16} className="text-[#8A8A8A]" />
            <span>+62 877-4158-3948</span>
          </a>
          <div className="flex items-center gap-2.5">
            <MapPin size={16} className="text-[#8A8A8A]" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
          Tech Stack
        </h3>
        <div className="flex flex-col gap-3">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold text-[#8A8A8A] capitalize">
                {category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-medium text-white px-2 py-0.5 bg-[#0B0B0B] border border-white/5 rounded-md hover:border-[#3B82F6]/40 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
          Languages
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="flex items-center gap-1.5 text-[12px] font-medium text-white px-2.5 py-1 bg-[#0B0B0B] border border-white/5 rounded-full"
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Social Icons Footer */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
        <a
          href="https://github.com/adityafajarsy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8A8A8A] hover:text-white transition-colors duration-250"
          aria-label="GitHub"
        >
          <i className="ri-github-fill ri-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adityafajarsy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8A8A8A] hover:text-white transition-colors duration-250"
          aria-label="LinkedIn"
        >
          <i className="ri-linkedin-fill ri-xl"></i>
        </a>
        <a
          href="https://instagram.com/adityafajarsyy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8A8A8A] hover:text-white transition-colors duration-250"
          aria-label="Instagram"
        >
          <i className="ri-instagram-line ri-xl"></i>
        </a>
        <a
          href="#"
          className="text-[#8A8A8A] hover:text-white/40 transition-colors duration-250 cursor-default"
          aria-label="X"
          onClick={(e) => e.preventDefault()}
        >
          <i className="ri-twitter-x-fill ri-lg"></i>
        </a>
        <a
          href="#"
          className="text-[#8A8A8A] hover:text-white/40 transition-colors duration-250 cursor-default"
          aria-label="Youtube"
          onClick={(e) => e.preventDefault()}
        >
          <i className="ri-youtube-fill ri-xl"></i>
        </a>
      </div>
    </aside>
  );
}
