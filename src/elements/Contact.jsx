import React from "react";
import { Send, Mail, Phone, Globe, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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
  { label: "Email", value: "adityafajar.sy90@gmail.com", href: "mailto:adityafajar.sy90@email.com", icon: Mail },
  { label: "Phone", value: "+62 877-4158-3948", href: "tel:+6287741583948", icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/adityafajarsy", href: "https://www.linkedin.com/in/adityafajarsy/", icon: Linkedin },
  { label: "GitHub", value: "github.com/adityafajarsy", href: "https://github.com/adityafajarsy", icon: Globe },
  { label: "Instagram", value: "instagram.com/adityafajarsyy", href: "https://instagram.com/adityafajarsyy", icon: Instagram },
];

export default function Contact() {

  return (
    <motion.section
      id="kontak"
      className="scroll-mt-24 flex flex-col gap-8 pb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header labels */}
      <div className="flex flex-col gap-1">
        <motion.span
          className="text-[12px] font-bold tracking-[0.15em] text-[#8A8A8A] uppercase"
          variants={itemVariants}
        >
          Contact
        </motion.span>
        <div className="relative mt-3">
          <motion.span
            variants={sloganVariants}
            className="absolute top-[-16px] left-1 font-bold tracking-tighter text-[#3B82F6] select-none origin-left z-10"
            style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: "clamp(1.1rem, 3vw, 1.7rem)" }}
          >
            let's build together!
          </motion.span>
          <motion.h2
            className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
        </div>
        <motion.p
          className="text-[14px] text-[#8A8A8A] max-w-md mt-1"
          variants={itemVariants}
        >
          Ready to work on your next project? Let's connect and build something together.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-stretch mt-4">
        {/* Left Side: Minimal Contact Table */}
        <motion.div
          className="flex-1 bg-[#0B0B0B] border border-white/5 rounded-[24px] p-6 lg:p-8 flex flex-col justify-between"
          variants={itemVariants}
        >
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-wider text-[#8A8A8A] uppercase mb-4 block">
              Contact Channels
            </span>
            <div className="flex flex-col">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-b-0 hover:bg-white/2 px-2 rounded-lg transition-all duration-200"
                  >
                    <span className="text-[13px] text-[#8A8A8A] font-medium flex items-center gap-2">
                      <Icon size={14} className="text-white/40" />
                      {link.label}
                    </span>
                    <a
                      href={link.href}
                      target={link.label !== "Phone" && link.label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[13px] text-white font-semibold hover:text-[#3B82F6] transition-colors duration-200 truncate max-w-[180px] sm:max-w-none text-right"
                    >
                      {link.value}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-[12px] text-[#8A8A8A] font-medium flex items-center gap-1.5 p-3.5 bg-white/2 rounded-xl border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available for freelance opportunities & remote roles.</span>
          </div>
        </motion.div>

        {/* Right Side: Message Form */}
        <motion.div
          className="flex-1 bg-[#0B0B0B] border border-white/5 rounded-[24px] p-6 lg:p-8"
          variants={itemVariants}
        >
          <span className="text-[11px] font-bold tracking-wider text-[#8A8A8A] uppercase mb-5 block">
            Send WhatsApp Message
          </span>
          <form
            className="flex flex-col gap-4"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.nama.value;
              const email = e.target.email.value;
              const message = e.target.pesan.value;

              const text = `Halo, saya ${name} (${email})%0A%0A${message}`;
              const phone = "6287741583948";

              const url = `https://wa.me/${phone}?text=${text}`;
              window.open(url, "_blank");
            }}
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#8A8A8A] uppercase">Name</label>
              <input
                className="bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6]/50 focus:bg-[#161616] transition-all duration-200"
                type="text"
                name="nama"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-bold text-[#8A8A8A] uppercase">Email</label>
              <input
                className="bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6]/50 focus:bg-[#161616] transition-all duration-200"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="pesan" className="text-[12px] font-bold text-[#8A8A8A] uppercase">
                Message
              </label>
              <textarea
                className="bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6]/50 focus:bg-[#161616] transition-all duration-200 resize-none"
                name="pesan"
                id="pesan"
                rows="4"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white hover:bg-white/90 text-black text-[14px] font-bold transition-all duration-250 cursor-pointer active:scale-[0.98]"
            >
              <Send size={14} />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
