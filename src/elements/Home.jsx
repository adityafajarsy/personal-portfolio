import React, { useState, useEffect } from "react";
import { Download, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const roles = [
    "Web Developer",
    "Product Engineer",
    "UI/UX Designer",
    "Fullstack MERN Devs"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      id="intro"
      className="scroll-mt-24 pt-4 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Small uppercase label */}
      <motion.span
        className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
        variants={itemVariants}
      >
        Intro
      </motion.span>

      {/* Quote Banner */}
      <motion.div
        className="flex items-center gap-3 bg-[#0B0B0B] border border-white/5 w-fit py-2.5 px-4 rounded-full text-[13px] text-[#8A8A8A]"
        variants={itemVariants}
      >
        <div className="w-5 h-5 rounded-full overflow-hidden border border-white/10">
          <img
            src="/assets/icon aditya.png"
            alt="Aditya Fajar SY"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "/assets/adityafajarsy.png";
            }}
          />
        </div>
        <q className="italic">For me, coding is problem solving..</q>
      </motion.div>

      {/* Main Title */}
      <motion.div className="flex flex-col gap-1" variants={itemVariants}>
        <h2 className="text-[36px] lg:text-[44px] font-black tracking-tight leading-none text-white">
          Hi, I'm Aditya Fajar SY
        </h2>
        <div className="h-[44px] lg:h-[54px] overflow-visible relative -mt-1 lg:-mt-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, x: 0, skewX: 0, scaleY: 1 }}
              animate={{
                opacity: [0, 1, 0.45, 1, 0.75, 1],
                x: [0, -6, 6, -3, 3, -1, 1, 0],
                skewX: [0, -12, 12, -6, 6, 0],
                scaleY: [1, 1.25, 0.75, 1.1, 0.9, 1],
              }}
              exit={{
                opacity: [1, 0.45, 0.75, 0.15, 0],
                x: [0, 5, -5, 2, -2, 0],
                skewX: [0, 8, -8, 4, -4, 0],
              }}
              transition={{
                duration: 0.35,
                ease: "linear",
              }}
              className="text-[32px] lg:text-[40px] font-semibold text-[#3B82F6] absolute left-0 leading-none"
              style={{ fontFamily: "'Nothing You Could Do', cursive" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Biography Description */}
      <motion.p
        className="text-[16px] lg:text-[18px] leading-relaxed text-[#8A8A8A] max-w-2xl font-normal"
        variants={itemVariants}
      >
        A Front-End Developer with a background in Language Literature, Graphic Design and Creative Media. I build user pov websites where proper design meets seamless functionality. Balancing technical execution with strategic business goals, my focus is always on engineering web solutions that effectively solve real company problems.
      </motion.p>

      {/* Action Buttons */}
      <motion.div className="flex flex-wrap items-center gap-4 mt-2" variants={itemVariants}>
        <a
          href="/assets/CV bahasa indonesia.pdf"
          download="Aditya Fajar Satya Yudha-CV.pdf"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-white/90 transition-all active:scale-95 shadow-md shadow-white/5"
        >
          <Download size={16} />
          <span>Download CV</span>
        </a>

        <a
          href="https://www.linkedin.com/in/adityafajarsy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0B0B0B] border border-white/5 text-white font-medium text-[14px] hover:border-[#3B82F6]/50 hover:bg-[#0F0F0F] transition-all active:scale-95 shadow-lg"
        >
          <Linkedin size={16} className="text-[#3B82F6]" />
          <span>Connect with me</span>
        </a>
      </motion.div>
    </motion.section>
  );
}
