import React, { useState } from "react";
import { Mail, Globe, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
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

const contactLinks = [
  { label: "Email", value: "adityafajar.sy90@gmail.com", href: "mailto:adityafajar.sy90@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/adityafajarsy", href: "https://www.linkedin.com/in/adityafajarsy/", icon: Linkedin },
  { label: "GitHub", value: "github.com/adityafajarsy", href: "https://github.com/adityafajarsy", icon: Globe },
  { label: "Instagram", value: "instagram.com/adityafajarsyy", href: "https://instagram.com/adityafajarsyy", icon: Instagram },
];

export default function Contact() {
  const { lang, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <m.section
      id="kontak"
      className="scroll-mt-24 flex flex-col gap-8 pb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header labels */}
      <div className="flex flex-col gap-1">
        <m.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          {t("contact.label")}
        </m.span>
        <div className="relative mt-3">
          <m.span
            variants={sloganVariants}
            className="absolute top-[-8px] sm:top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10 text-[1.35rem] sm:text-[clamp(1.1rem,3vw,1.7rem)]"
            style={{ fontFamily: "'Nothing You Could Do', cursive" }}
          >
            {t("contact.slogan")}
          </m.span>
          <m.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            {t("contact.title")}
          </m.h2>
        </div>
        <m.p
          className="text-[14px] text-[#8A8A8A] max-w-md mt-1"
          variants={itemVariants}
        >
          {t("contact.desc")}
        </m.p>
      </div>

      <div className="mt-2 w-full max-w-2xl">
        {/* Contact Channels Card */}
        <m.div
          className="bg-[#0B0B0B] border border-white/5 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between shadow-2xl"
          variants={itemVariants}
        >
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-wider text-[#8A8A8A] uppercase mb-4 block">
              {t("contact.channels")}
            </span>
            <div
              className="flex flex-col group/channelsList"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                const isCurrentHovered = hoveredIndex === idx;
                const isAnyHovered = hoveredIndex !== null;

                return (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className={`flex items-center justify-between py-4 border-b border-white/5 last:border-b-0 px-3 rounded-xl transition-all duration-300 cursor-pointer group ${isAnyHovered
                        ? isCurrentHovered
                          ? "bg-white/[0.04] opacity-100"
                          : "opacity-30 scale-[0.99]"
                        : "opacity-100 hover:bg-white/[0.02]"
                      }`}
                  >
                    <span className={`text-[13.5px] font-medium flex items-center gap-3 transition-colors duration-300 ${isCurrentHovered ? "text-white" : "text-[#8A8A8A]"
                      }`}>
                      <Icon size={16} className={`transition-colors duration-300 ${isCurrentHovered ? "text-[#3B82F6]" : "text-white/40"
                        }`} />
                      {link.label}
                    </span>
                    <span className={`text-[13px] sm:text-[13.5px] font-semibold transition-colors duration-300 flex items-center gap-1.5 truncate text-right ${isCurrentHovered ? "text-white" : "text-[#8A8A8A]"
                      }`}>
                      <span>{link.value}</span>
                      <ArrowUpRight size={13} className={`transition-all duration-300 ${isCurrentHovered ? "text-[#3B82F6] opacity-100 translate-x-0.5 -translate-y-0.5" : "opacity-0"}`} />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-[12px] text-[#8A8A8A] font-medium flex items-center gap-2 p-3.5 bg-white/[0.02] rounded-xl border border-white/5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>{t("contact.availableText")}</span>
          </div>
        </m.div>
      </div>
    </m.section>
  );
}
