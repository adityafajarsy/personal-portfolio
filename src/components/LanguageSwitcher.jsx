import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 lg:top-8 lg:right-12 z-50 select-none">
      <div
        className="flex items-center gap-2 text-[16px] sm:text-[17px] font-bold"
        style={{ fontFamily: "'Nothing You Could Do', cursive" }}
      >
        <button
          onClick={() => setLang("en")}
          className={`cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded px-1 ${
            lang === "en"
              ? "text-[#3B82F6] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] font-black"
              : "text-white/30 hover:text-white/60"
          }`}
          aria-label="Switch language to English"
        >
          EN
        </button>
        <span className="text-white/20">/</span>
        <button
          onClick={() => setLang("id")}
          className={`cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded px-1 ${
            lang === "id"
              ? "text-[#3B82F6] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] font-black"
              : "text-white/30 hover:text-white/60"
          }`}
          aria-label="Switch language to Indonesian"
        >
          ID
        </button>
      </div>
    </div>
  );
}
