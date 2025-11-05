import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/public/assets/project/5.png";
import Proyek2 from "/public/assets/project/3.png";
import Proyek3 from "/public/assets/project/2.png";
import Proyek4 from "/public/assets/project/4.png";
import Proyek5 from "/public/assets/project/8.png";
import Proyek6 from "/public/assets/project/7.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Portfolio",
    desk: "My first portfolio website build. I took inspiration from Coding Mastery and combined several ideas I found on the internet based on my own preferences.",
    tools: ["Vite", "React", "Tailwind", "AOS", "Animate.style", "Responsive"],
    dad: "200",
    link: "https://adxtya-personal-portfolio.netlify.app", // ✅
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Netflix Clone",
    desk: "My first full-stack course project, by a FastCampus course by Dea Afrizal. I learned both front-end and back-end development using Firebase, MongoDB, Express.js, and Node.js (MERN Stack).",
    tools: [
      "Vite",
      "React",
      "Tailwind",
      "DaisyUI",
      "MongoDB",
      "Firebase",
      "NodeJS",
      "ExpressJs",
      "Responsive",
    ],
    dad: "300",
    link: "", // ❌ belum dideploy
  },
  {
    id: 3,
    gambar: Proyek4,
    nama: "Simple E-Commerce (The Hamburger)",
    desk: "My first dummy project based on my Hacktiv8 capstone task, featuring basic e-commerce functions, a self-made logo, custom dummy database, and planned visual identity.",
    tools: [
      "Vite",
      "ReactJS",
      "Tailwind",
      "Axios",
      "React-router-dom",
      "Responsive",
    ],
    dad: "500",
    link: "https://thehamburger.netlify.app", //✅
  },
  {
    id: 4,
    gambar: Proyek5,
    nama: "Bar Website Landing (Leveldva)",
    desk: "My first GSAP project, smooth, bar-inspired landing page that blends motion, light, and elegance into immersive experience!",
    tools: ["Vite", "Tailwind", "React", "GSAP", "Animation", "Motion"],
    dad: "600",
    link: "https://leveldvaditx.vercel.app/", //
  },
  {
    id: 5,
    gambar: Proyek6,
    nama: "Ai Assistant Project Landing Page",
    desk: "AI Assitant landing website, design website to implementing modern like design!",
    tools: ["Vite", "Tailwind", "React", "CSS Animation", "Vercel"],
    dad: "600",
    link: "https://ai-assist-coding.vercel.app/", // ✅
  },
];
