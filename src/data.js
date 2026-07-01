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
    gambar: "https://cdn.simpleicons.org/express/white",
    nama: "Express JS",
    ket: "Backend Framework",
    dad: "750",
  },
  {
    id: 9,
    gambar: "https://cdn.simpleicons.org/docker/2496ED",
    nama: "Docker",
    ket: "Containerization",
    dad: "820",
  },
  {
    id: 10,
    gambar: "https://cdn.simpleicons.org/ubuntu/E95420",
    nama: "Ubuntu",
    ket: "Linux Server OS",
    dad: "830",
  },
  {
    id: 11,
    gambar: "https://cdn.simpleicons.org/vercel/white",
    nama: "Vercel",
    ket: "Cloud Deployment",
    dad: "840",
  },
  {
    id: 12,
    gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='9'/><path d='M12 16V8M9 11l3-3 3 3'/></svg>",
    nama: "Antigravity",
    ket: "AI Coding Assistant",
    dad: "850",
  },
  {
    id: 13,
    gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D97706' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 17 10 11 4 5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>",
    nama: "Claude Code",
    ket: "AI Terminal Agent",
    dad: "860",
  },
  {
    id: 15,
    gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EC4899' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3v1M12 20v1M4 12H3M21 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M5.64 5.64l.7.7M17.66 17.66l.7.7M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z'/></svg>",
    nama: "AI Tools",
    ket: "AI Workflows",
    dad: "880",
  },
  {
    id: 16,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 17,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 18,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek2 from "/assets/project/3.png";
import Proyek4 from "/assets/project/4.png";
import Proyek5 from "/assets/project/8.png";

export const listProyek = [
  // {
  //   id: 1,
  //   gambar: Proyek1,
  //   nama: "Website Portfolio",
  //   desk: "My first portfolio website build. I took inspiration from Coding Mastery and combined several ideas I found on the internet based on my own preferences.",
  //   tools: ["Vite", "React", "Tailwind", "AOS", "Animate.style", "Responsive"],
  //   dad: "200",
  //   link: "https://adxtya-personal-portfolio.netlify.app", // ✅
  // },
  {
    id: 1,
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
    id: 2,
    gambar: Proyek4,
    nama: "E-Commerce (The Hamburger)",
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
    id: 3,
    gambar: Proyek5,
    nama: "Website Company (Leveldva)",
    desk: "A modern, elegant company website project designed with GSAP and Tailwind CSS. The site features smooth scrolling, dynamic animations, and a premium user interface, perfect for professional portfolios or company branding.",
    tools: ["Vite", "Tailwind", "React", "GSAP", "Animation", "Motion"],
    dad: "600",
    link: "https://leveldva.vercel.app/", //✅
  },
  // {
  //   id: 5,
  //   gambar: Proyek6,
  //   nama: "Ai Assistant Project Landing Page",
  //   desk: "AI Assitant landing website, design website to implementing modern like design!",
  //   tools: ["Vite", "Tailwind", "React", "CSS Animation", "Vercel"],
  //   dad: "600",
  //   link: "https://ai-assist-coding.vercel.app/", //
  // },
];

export const listArticles = [
  {
    id: 1,
    gambar: "/assets/article_ui_ai.png",
    kategori: "UI/UX & AI",
    tanggal: "June 28, 2026",
    baca: "5 min read",
    nama: "Designing for the Next Web: The Convergence of UI & AI",
    desk: "How generative interfaces and context-aware design systems are redefining how humans interact with digital applications.",
    isi: `
## Introduction

Artificial Intelligence is no longer just a backend utility. Today, we are witnessing the emergence of generative interfaces—UIs that adapt, morph, and customize themselves in real-time based on user behavior and intent. This convergence of User Interface (UI) design and Artificial Intelligence (AI) is transforming the web.

## The Shift to Generative UIs

Traditional web design relies on static layouts. We predict user flows, create wireframes, and code fixed containers. With context-aware AI models directly integrated into the client, interfaces can now generate layout modules on the fly. 

Imagine a dashboards where:
- The sidebar adapts its priority elements based on your current task.
- Widgets dynamically resize to focus on anomalous data.
- Color palettes and spacing respond to the user's focus metrics.

## Engineering the Synergy

To build these next-generation experiences, developers need to think beyond traditional component trees. The code itself must be modular and resilient. Leveraging tools like React Server Components, Tailwind CSS, and lightweight local transformers, we can build UIs that are both highly performant and contextually intelligent.

> "The best interface is the one that adjusts to your thoughts, not the one that forces you to adjust to its structure."

## What's Next?

As we move forward, the role of the frontend developer will shift from writing rigid layouts to crafting design systems that act as flexible rulesets for AI-driven layout engines. The future of the web is personalized, dynamic, and fluid.
    `
  },
  {
    id: 2,
    gambar: "/assets/article_speed_ux.png",
    kategori: "Web Performance",
    tanggal: "May 14, 2026",
    baca: "4 min read",
    nama: "Why Performance is the Ultimate UX Metric",
    desk: "Deep dive into bundle sizes, DOM nodes, and why fast load times beat fancy transitions every single time.",
    isi: `
## The Psychology of Speed

User experience is built on trust, and trust is built on reliability. If a website takes more than three seconds to load, over 40% of users will abandon it. Every millisecond of latency is a friction point that diminishes user satisfaction.

## Bottlenecks in Modern Web Apps

While modern frameworks allow us to build complex single-page applications, they also introduce significant overhead:
1. **JavaScript Bloat**: Shipping megabytes of JS that need to be parsed and compiled by the browser.
2. **DOM Tree Complexity**: Replicating layout trees or rendering invisible elements, which slows down recalculations.
3. **Render-blocking Assets**: Importing heavy stylesheets or loading custom fonts via slow CSS imports.

## Key Strategies for Maximum Optimization

To build lightning-fast web applications, focus on these critical optimizations:
- **Minimize DOM Node Count**: Avoid duplicating element structures (e.g. rendering separate desktop/mobile trees simultaneously).
- **Extract Static Allocations**: Define animations, static lists, and icons outside the render cycle to prevent memory leaks and garbage collection overhead.
- **Implement Lazy Loading**: Defer off-screen images and split bundles using dynamic imports.

## Conclusion

A beautiful interface is useless if users leave before it finishes loading. Prioritize performance as the core foundation of your user experience.
    `
  },
  {
    id: 3,
    gambar: "/assets/article_lang_code.png",
    kategori: "Software Engineering",
    tanggal: "April 02, 2026",
    baca: "6 min read",
    nama: "Language & Code: Translating Semantics into Software",
    desk: "How a background in linguistics and literature builds a unique perspective on writing clean, maintainable code.",
    isi: `
## Language is code, Code is language

At their core, both human languages and programming languages are systems of symbols, rules, and syntax designed to transfer meaning. While Russian literature relies on complex grammar rules and semantic nuances, JavaScript relies on lexical scope, operators, and functions.

## The Linguistic Approach to Architecture

Studying linguistics teaches you to analyze systems. You learn how words combine to form phrases, and how context changes meaning. When applied to software engineering, this perspective offers unique benefits:
- **Clean Naming Conventions**: Choosing variable and function names that are clear, descriptive, and structurally consistent.
- **Semantic HTML**: Structuring documents so their elements convey proper meaning to both search engines and accessibility tools.
- **Deconstructive Debugging**: Breaking complex algorithmic problems down into their core semantic blocks, much like analyzing sentence structure.

## Bridging the Gap

Being a developer with a background in humanities is not a setback; it is an advantage. It allows you to translate complex human requirements into logical, well-structured software architectures. After all, writing code is just another form of translation.
    `
  }
];
