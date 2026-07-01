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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const toolsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15
    }
  }
};

const toolsItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.94,
    rotateX: 12,
    rotateY: -3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 13,
      mass: 0.65
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      mass: 0.8
    }
  }
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

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const CompanyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function About() {
  const { t } = useLanguage();
  const listTools = t("about.listTools") || [];
  const expTranslations = t("about.experiences") || [];

  const experiences = expTranslations.map((exp, idx) => {
    const icons = [
      <img
        src="/assets/Logo PanRB.png"
        alt="Kementerian PANRB Logo"
        className="w-7.5 h-7.5 object-contain rounded-md"
        loading="lazy"
      />,
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>,
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s"
        alt="Hacktiv8 Logo"
        className="w-6 h-6 object-contain rounded-md"
        loading="lazy"
      />,
      <img
        src="/assets/logo-unpad1.png"
        alt="Unpad Logo"
        className="w-7 h-7 object-contain rounded-md"
        loading="lazy"
      />
    ];
    return {
      ...exp,
      icon: icons[idx] || null
    };
  });

  return (
    <motion.section
      id="about"
      className="flex flex-col gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >

      {/* Work Experience Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <motion.span
            className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
            variants={itemVariants}
          >
            {t("about.expLabel")}
          </motion.span>
          <div className="relative mt-3">
            <motion.span
              variants={sloganVariants}
              className="absolute top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10"
              style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
            >
              {t("about.expSlogan")}
            </motion.span>
            <motion.h2
              className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
              variants={itemVariants}
            >
              {t("about.expTitle")}
            </motion.h2>
          </div>
        </div>

        {/* Experience Cards Stack */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, idx) => {
            return (
              <motion.div
                key={idx}
                className="p-6 rounded-[16px] bg-[#0B0B0B] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Left Side: Circular Logo Container */}
                <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {exp.icon}
                </div>

                {/* Right Side: Details & Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] font-bold text-white tracking-tight leading-snug">
                    {exp.role}
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-x-4 mt-2 sm:mt-1.5 text-[11.5px] sm:text-[13px] text-[#8A8A8A] font-normal">
                    <div className="flex flex-row flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span className="flex items-center gap-1">
                        <CalendarIcon />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <CompanyIcon />
                        {exp.company}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <MapIcon />
                      {exp.location}
                    </span>
                  </div>

                  {/* Paragraph Description — Desktop */}
                  <p className="hidden sm:block text-[14px] leading-relaxed text-[#8A8A8A] mt-3 font-normal">
                    {exp.desc}
                  </p>

                  {/* Paragraph Description — Mobile */}
                  <p className="block sm:hidden text-[13px] leading-relaxed text-[#8A8A8A] mt-2.5 font-normal">
                    {exp.descMobile}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col gap-6">
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <span className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            {t("about.toolsLabel")}
          </span>
          <div className="relative mt-3 w-fit">
            <motion.span
              variants={sloganVariants}
              className="absolute top-[-10px] left-[52%] sm:left-[50%] font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 whitespace-nowrap"
              style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
            >
              {t("about.toolsSlogan")}
            </motion.span>
            <h2 className="text-[23px] min-[380px]:text-[25px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight whitespace-nowrap pr-2">
              {t("about.toolsTitle")}
            </h2>
          </div>
          <p className="text-[14px] text-[#8A8A8A] max-w-md mt-2">
            {t("about.toolsDesc")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 perspective-[900px]"
          variants={toolsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {listTools.map((tool) => (
            <motion.div
              key={tool.id}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-[12px] sm:rounded-[16px] bg-[#0B0B0B] border border-white/5 hover:border-[#3B82F6]/30 transition-all duration-300 group shadow-md text-center sm:text-left origin-center"
              variants={toolsItemVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 300, damping: 14 } 
              }}
            >
              {/* Icon Container */}
              <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl border border-white/5 p-1.5 sm:p-2 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 flex-shrink-0">
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Text Container */}
              <div className="min-w-0 w-full flex-1">
                <h4 className="font-bold text-[10px] sm:text-[14px] text-white truncate leading-snug group-hover:text-[#3B82F6] transition-colors duration-250">
                  {tool.nama}
                </h4>
                <p className="hidden sm:block text-[12px] text-[#8A8A8A] truncate mt-0.5">{tool.ket}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
