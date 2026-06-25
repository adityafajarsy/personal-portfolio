import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { listTools } from "../data";

export default function About() {
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
    <motion.section
      id="about"
      className="flex flex-col gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Bio / The Intersection Story Card */}
      <div className="flex flex-col gap-6">
        <motion.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          My Story
        </motion.span>

        <motion.div
          className="p-6 lg:p-8 rounded-[24px] bg-[#0B0B0B] border border-white/5 relative overflow-hidden group hover:border-[#3B82F6]/30 transition-all duration-300 shadow-xl"
          variants={itemVariants}
        >
          {/* subtle glow top right */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
              <Sparkles size={18} className="text-[#3B82F6]" />
            </div>
            <h3 className="text-[18px] font-bold text-white tracking-tight">The Intersection</h3>
          </div>

          <p className="text-[15px] leading-relaxed text-[#8A8A8A] font-normal mb-8">
            I started my{" "}
            <span className="text-white font-medium">journey in the creative field</span> during freshman college year, working on{" "}
            <span className="text-white font-medium">Graphic Designs</span>, logos, banners, ID cards, lanyards, and{" "}
            <span className="text-white font-medium">video productions</span>. My path in software development began in{" "}
            <span className="text-[#3B82F6] font-medium">Sept 2024</span> through a four-month bootcamp{" "}
            <span className="text-white font-semibold inline-flex items-center gap-1.5 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
              "Hacktiv8"
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s"
                alt="Hacktiv8 Logo"
                className="w-4 h-4 rounded-sm object-cover"
              />
            </span>
            . After a short break to finish my studies, I've been fully focused on self-learning since{" "}
            <span className="text-[#3B82F6] font-medium">August 2025</span>, continuously grinding my skills as a{" "}
            <span className="text-white font-semibold">developer</span>.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/5">
            <div>
              <span className="text-[28px] font-black text-white tracking-tight leading-none">
                6<span className="text-[#3B82F6]">+</span>
              </span>
              <p className="text-[12px] text-[#8A8A8A] mt-1 font-medium">Projects Done</p>
            </div>
            <div>
              <span className="text-[28px] font-black text-white tracking-tight leading-none">
                8<span className="text-[#3B82F6]">+</span>
              </span>
              <p className="text-[12px] text-[#8A8A8A] mt-1 font-medium">Months of Learning</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col gap-6">
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <span className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase">
            Tools
          </span>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-white tracking-tight">
            Tech Stack & Workspace
          </h2>
          <p className="text-[14px] text-[#8A8A8A] max-w-md">
            The software, frameworks, languages, and design applications that I leverage daily.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {listTools.map((tool) => (
            <motion.div
              key={tool.id}
              className="flex items-center gap-4 p-4 rounded-[16px] bg-[#0B0B0B] border border-white/5 hover:border-[#3B82F6]/30 transition-all duration-300 group shadow-md"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/5 p-2 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 flex-shrink-0">
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[14px] text-white truncate leading-snug group-hover:text-[#3B82F6] transition-colors duration-250">
                  {tool.nama}
                </h4>
                <p className="text-[12px] text-[#8A8A8A] truncate">{tool.ket}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
