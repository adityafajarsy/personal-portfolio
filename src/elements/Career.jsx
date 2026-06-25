import React, { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationExperience() {
  const [expandedEdu, setExpandedEdu] = useState(null);

  const education = [
    {
      institution: "Universitas Padjadjaran",
      degree: "Sarjana, Sastra Rusia · GPA 3.70/4.00",
      period: "2021 - 2025",
      location: "Bandung, Sumedang",
      logo: "/assets/logo-unpad1.png",
      responsibilities: [
        "Actively participated in various campus organizations, including the Russian Studies Student Association and the Student Executive Board (BEM).",
        "Engaged in self-development through seminars and workshops on Graphic Design, Video Editing, AI, Programming, Finance, and Investment.",
        "Contributed directly to the Russian Studies Department by assisting in visual design and video editing for academic and promotional purposes.",
      ],
    },
  ];

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
            Education
          </motion.span>
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            Academic Path
          </motion.h2>
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
                          <span>Hide details</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          <span>Show details</span>
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
                              Campus Activities & Responsibilities
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
