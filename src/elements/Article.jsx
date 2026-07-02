import React, { useRef } from "react";
import { m } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sloganVariants = {
  hidden: { opacity: 0, y: 5, skewX: 0 },
  visible: {
    opacity: [0, 1, 0.35, 1, 0.6, 1],
    y: 0,
    skewX: [0, -10, 10, -5, 5, 0],
    transition: {
      delay: 0.8,
      duration: 0.4,
      ease: "linear",
    }
  }
};

export default function Article({ onSelectArticle }) {
  const { t } = useLanguage();
  const listArticles = t("articles.list") || [];
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <m.section
      id="articles"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <m.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          {t("articles.label")}
        </m.span>
        <div className="relative mt-3">
          <m.span
            variants={sloganVariants}
            className="absolute top-[-8px] sm:top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 text-[1.35rem] sm:text-[clamp(1.1rem,3vw,1.7rem)]"
            style={{ fontFamily: "'Nothing You Could Do', cursive" }}
          >
            {t("articles.slogan")}
          </m.span>
          <m.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            {t("articles.title")}
          </m.h2>
        </div>
      </div>

      {/* ── Mobile Layout: 2 Columns Grid (hidden on sm and above) ── */}
      <div className="grid grid-cols-2 gap-4 mt-4 sm:hidden">
        {listArticles.map((article, index) => {
          const isLastOdd = index === listArticles.length - 1 && listArticles.length % 2 !== 0;
          return (
            <m.div
              key={article.id}
              className={`group bg-[#0B0B0B] border border-white/5 rounded-[20px] overflow-hidden flex flex-col hover:border-[#3B82F6]/30 hover:shadow-[0_12px_30px_rgba(59,130,246,0.06)] transition-all duration-300 cursor-pointer ${
                isLastOdd ? "col-span-2 justify-self-center w-full max-w-[calc(50%-8px)]" : ""
              }`}
              variants={itemVariants}
              onClick={() => onSelectArticle(article)}
            >
              {/* Image Cover */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-white/5 relative">
                <img
                  src={article.gambar}
                  alt={article.nama}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Content info */}
              <div className="p-3 flex flex-col gap-1 flex-1 justify-between">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[11px] font-bold text-white tracking-tight leading-snug">
                    {article.nama}
                  </h3>
                  <p className="text-[10px] leading-relaxed text-[#8A8A8A] line-clamp-2 mt-1">
                    {article.desk}
                  </p>
                </div>
              </div>
            </m.div>
          );
        })}
      </div>

      {/* ── Tablet & Desktop Layout: Horizontal Slider/Carousel (hidden on mobile) ── */}
      <div className="hidden sm:block relative w-full group/carousel mt-4">
        {/* Carousel Arrow Controls */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 backdrop-blur-[4px] border border-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-[#3B82F6] hover:border-[#3B82F6]/20 active:scale-95 transition-all duration-250 cursor-pointer z-20 shadow-xl opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll left"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-[40%] -translate-y-1/2 w-11 h-11 rounded-full bg-black/25 backdrop-blur-[4px] border border-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-[#3B82F6] hover:border-[#3B82F6]/20 active:scale-95 transition-all duration-250 cursor-pointer z-20 shadow-xl opacity-0 group-hover/carousel:opacity-100"
          aria-label="Scroll right"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Fade edges */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <m.div
          ref={carouselRef}
          className="flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-none"
          variants={containerVariants}
        >
          {listArticles.map((article) => (
            <m.div
              key={article.id}
              className="w-[290px] md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] flex-shrink-0 snap-start group bg-[#0B0B0B] border border-white/5 rounded-[20px] overflow-hidden flex flex-col hover:border-[#3B82F6]/30 hover:shadow-[0_12px_30px_rgba(59,130,246,0.06)] transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelectArticle(article)}
            >
              {/* Image Cover */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900 border-b border-white/5 relative">
                <img
                  src={article.gambar}
                  alt={article.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Content info */}
              <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[14px] lg:text-[15px] font-bold text-white tracking-tight leading-snug transition-colors duration-250 line-clamp-2">
                    {article.nama}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-[#8A8A8A] line-clamp-2 mt-1">
                    {article.desk}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </m.section>
  );
}
