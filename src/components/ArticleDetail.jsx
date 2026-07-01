import React, { useEffect } from "react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const renderMarkdown = (text) => {
  return text.split("\n").map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={idx} className="h-4" />;

    // Headings
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={idx}
          className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight mt-8 mb-4 border-b border-white/5 pb-2"
        >
          {trimmed.replace("## ", "")}
        </h2>
      );
    }

    // Blockquotes
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-[#3B82F6] pl-4 italic text-[#8A8A8A] text-[15px] sm:text-[16px] my-6 font-medium bg-white/2 py-3 pr-4 rounded-r-xl"
        >
          {trimmed.replace("> ", "").replace(/"/g, "")}
        </blockquote>
      );
    }

    // List items
    if (trimmed.startsWith("- ")) {
      return (
        <li
          key={idx}
          className="list-none flex items-start gap-2.5 text-[#8A8A8A] text-[14px] sm:text-[15px] leading-relaxed my-2"
        >
          <span className="text-[#3B82F6] font-bold mt-0.5">•</span>
          <span>{trimmed.replace("- ", "")}</span>
        </li>
      );
    }

    // Default Paragraph
    return (
      <p
        key={idx}
        className="text-[#8A8A8A] text-[14px] sm:text-[15px] leading-relaxed my-4 font-normal"
      >
        {trimmed}
      </p>
    );
  });
};

export default function ArticleDetail({ article: initialArticle, onClose }) {
  const { t } = useLanguage();
  const articlesList = t("articles.list") || [];
  const article = articlesList.find((a) => a.id === initialArticle.id) || initialArticle;

  // Scroll so that the detail article starts at the top of the viewport
  useEffect(() => {
    // For desktop (scrollable main container)
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: "instant" });
    }
    
    // For mobile (scrollable window), scroll directly to the top of this article detail view
    const detailEl = document.querySelector("article");
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }, [article]);

  const handleBack = () => {
    onClose();
    // After state changes back to list view, scroll back to the articles section
    setTimeout(() => {
      const articleSection = document.getElementById("articles");
      if (articleSection) {
        articleSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-6"
    >
      {/* Back Button */}
      <div>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ArrowLeft size={14} className="text-[#3B82F6]" />
          <span>{t("articles.backBtn")}</span>
        </button>
      </div>

      {/* Meta Headers */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#8A8A8A] font-semibold">
          <span className="flex items-center gap-1">
            <Calendar size={12} className="text-white/40" />
            {article.tanggal}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-white/40" />
            {article.baca}
          </span>
        </div>

        <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-white tracking-tight leading-tight">
          {article.nama}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 relative">
        <img
          src={article.gambar}
          alt={article.nama}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 to-transparent pointer-events-none" />
      </div>

      {/* Main Body content */}
      <div className="text-[15px] sm:text-[16px] leading-relaxed max-w-3xl mt-2">
        {renderMarkdown(article.isi)}
      </div>

      {/* Footer separator line */}
      <div className="border-t border-white/5 pt-8 mt-6">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[13px] font-bold text-white hover:bg-white/10 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ArrowLeft size={14} className="text-[#3B82F6]" />
          <span>{t("articles.backBtn")}</span>
        </button>
      </div>
    </motion.article>
  );
}
