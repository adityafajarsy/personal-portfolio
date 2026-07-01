import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

const resolvePath = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem("preferred_language");
    if (saved === "en" || saved === "id") return saved;
    // Autodetect Indonesian browser locale or fallback to English
    const locale = navigator.language || navigator.userLanguage;
    return locale.toLowerCase().startsWith("id") ? "id" : "en";
  });

  const setLang = (newLang) => {
    if (newLang === "en" || newLang === "id") {
      setLangState(newLang);
      localStorage.setItem("preferred_language", newLang);
    }
  };

  const t = (path) => {
    const dict = translations[lang] || translations.en;
    const resolved = resolvePath(dict, path);
    return resolved !== undefined ? resolved : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
