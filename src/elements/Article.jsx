import React from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.section
      id="articles"
      className="scroll-mt-24 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <motion.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          {t("articles.label")}
        </motion.span>
        <div className="relative mt-3">
          <motion.span
            variants={sloganVariants}
            className="absolute top-[-8px] sm:top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 text-[1.35rem] sm:text-[clamp(1.1rem,3vw,1.7rem)]"
            style={{ fontFamily: "'Nothing You Could Do', cursive" }}
          >
            {t("articles.slogan")}
          </motion.span>
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            {t("articles.title")}
          </motion.h2>
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
        {listArticles.map((article, index) => {
          const isLastOdd = index === listArticles.length - 1 && listArticles.length % 2 !== 0;
          return (
            <motion.div
              key={article.id}
              className={`group bg-[#0B0B0B] border border-white/5 rounded-[20px] overflow-hidden flex flex-col hover:border-[#3B82F6]/30 hover:shadow-[0_12px_30px_rgba(59,130,246,0.06)] transition-all duration-300 cursor-pointer ${isLastOdd ? "col-span-2 justify-self-center w-full max-w-[calc(50%-8px)] lg:col-span-1 lg:max-w-none" : ""
                }`}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
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
              <div className="p-3 sm:p-4 flex flex-col gap-1.5 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] sm:text-[15px] font-bold text-white tracking-tight leading-snug transition-colors duration-250">
                    {article.nama}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] leading-relaxed text-[#8A8A8A] line-clamp-2">
                    {article.desk}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
