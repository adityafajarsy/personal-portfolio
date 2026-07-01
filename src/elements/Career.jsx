import React, { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function EducationExperience() {
  const { t } = useLanguage();
  const [expandedEdu, setExpandedEdu] = useState(null);
  const education = t("education.list") || [];

  return (
    <div className="flex flex-col gap-24">

      {/* Education Section */}
      <motion.section
        id="education"
        className="scroll-mt-24 flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-1">
          <motion.span
            className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase flex items-center gap-2"
            variants={itemVariants}
          >
            <GraduationCap size={12} className="text-[#3B82F6]" />
            {t("education.label")}
          </motion.span>
          <div className="relative mt-3">
            <motion.span
              variants={sloganVariants}
              className="absolute top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10"
              style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
            >
              {t("education.slogan")}
            </motion.span>
            <motion.h2
              className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
              variants={itemVariants}
            >
              {t("education.title")}
            </motion.h2>
          </div>
        </div>

        <motion.div className="flex flex-col gap-4" variants={containerVariants}>
          {education.map((edu, index) => {
            const isExpanded = expandedEdu === index;
            return (
              <motion.div
                key={index}
                className="bg-[#0B0B0B] border border-white/5 rounded-[24px] p-6 hover:border-[#3B82F6]/30 hover:shadow-[0_8px_25px_rgba(59,130,246,0.04)] transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Logo Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#161616] border border-white/5 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:border-[#3B82F6]/20 transition-all duration-300">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "/assets/icon.png";
                      }}
                    />
                  </div>

                  {/* Main Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[18px] font-bold text-white tracking-tight group-hover:text-[#3B82F6] transition-colors duration-250">
                      {edu.institution}
                    </h3>
                    <p className="text-[14px] text-white/80 font-medium mt-0.5">
                      {edu.degree}
                    </p>

                    {/* Meta Row */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-[#8A8A8A] mt-3.5 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => setExpandedEdu(isExpanded ? null : index)}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#3B82F6] hover:text-[#60A5FA] cursor-pointer transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={14} />
                          <span>{t("education.hideDetails")}</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          <span>{t("education.showDetails")}</span>
                        </>
                      )}
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/5">
                            <span className="text-[11px] font-bold tracking-wider text-[#8A8A8A] uppercase block mb-2.5">
                              {t("education.activities")}
                            </span>
                            <ul className="space-y-2">
                              {edu.responsibilities.map((res, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-[14px] text-[#8A8A8A] leading-relaxed hover:text-white transition-colors duration-200"
                                >
                                  <span className="text-[#3B82F6] font-bold mt-0.5">•</span>
                                  <span>{res}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </div>
  );
}
