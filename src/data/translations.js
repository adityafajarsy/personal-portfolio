import VSCodeImg from "/assets/tools/vscode.png";
import ReactImg from "/assets/tools/reactjs.png";
import NextImg from "/assets/tools/nextjs.png";
import TailwindImg from "/assets/tools/tailwind.png";
import BootstrapImg from "/assets/tools/bootstrap.png";
import JSImg from "/assets/tools/js.png";
import NodeImg from "/assets/tools/nodejs.png";
import GithubImg from "/assets/tools/github.png";
import CanvaImg from "/assets/tools/canva.png";
import FigmaImg from "/assets/tools/figma.png";

import ProjectNetflixImg from "/assets/project/3.png";
import ProjectEcomImg from "/assets/project/4.png";
import ProjectCompanyImg from "/assets/project/8.png";

const listToolsStatic = [
  { id: 1, gambar: VSCodeImg, nama: "Visual Studio Code" },
  { id: 2, gambar: ReactImg, nama: "React JS" },
  { id: 3, gambar: NextImg, nama: "Next JS" },
  { id: 4, gambar: TailwindImg, nama: "Tailwind CSS" },
  { id: 5, gambar: BootstrapImg, nama: "Bootstrap" },
  { id: 6, gambar: JSImg, nama: "Javascript" },
  { id: 7, gambar: NodeImg, nama: "Node JS" },
  { id: 8, gambar: "https://cdn.simpleicons.org/express/white", nama: "Express JS" },
  { id: 9, gambar: "https://cdn.simpleicons.org/docker/2496ED", nama: "Docker" },
  { id: 10, gambar: "https://cdn.simpleicons.org/ubuntu/E95420", nama: "Ubuntu" },
  { id: 11, gambar: "https://cdn.simpleicons.org/vercel/white", nama: "Vercel" },
  { id: 12, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='9'/><path d='M12 16V8M9 11l3-3 3 3'/></svg>", nama: "Antigravity" },
  { id: 13, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D97706' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 17 10 11 4 5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>", nama: "Claude Code" },
  { id: 15, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EC4899' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3v1M12 20v1M4 12H3M21 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M5.64 5.64l.7.7M17.66 17.66l.7.7M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z'/></svg>", nama: "AI Tools" },
  { id: 16, gambar: GithubImg, nama: "Github" },
  { id: 17, gambar: CanvaImg, nama: "Canva" },
  { id: 18, gambar: FigmaImg, nama: "Figma" },
];

const listToolsStaticEn = listToolsStatic.map(t => {
  let ket = "Language";
  if (t.id === 1) ket = "Code Editor";
  else if (t.id === 2 || t.id === 3 || t.id === 4 || t.id === 5) ket = "Framework";
  else if (t.id === 7) ket = "Javascript Runtime";
  else if (t.id === 8) ket = "Backend Framework";
  else if (t.id === 9) ket = "Containerization";
  else if (t.id === 10) ket = "Linux Server OS";
  else if (t.id === 11) ket = "Cloud Deployment";
  else if (t.id === 12) ket = "AI Coding Assistant";
  else if (t.id === 13) ket = "AI Terminal Agent";
  else if (t.id === 15) ket = "AI Workflows";
  else if (t.id === 16) ket = "Repository";
  else if (t.id === 17 || t.id === 18) ket = "Design App";
  return { ...t, ket };
});

export const translations = {
  en: {
    preloader: {
      tagline: "Welcome to Aditya's",
    },
    sidebar: {
      role: "he/him",
      aboutTitle: "ABOUT",
      aboutText: "Jakarta-based product designer and developer, currently focused on frontend / fullstack MERN with +1 year of hands-on building web app.",
      contactTitle: "CONTACT",
      techTitle: "TECH STACK",
      langTitle: "LANGUAGES",
      langList: [
        { name: "Indonesian", flag: "🇮🇩" },
        { name: "English", flag: "🇬🇧" },
        { name: "Russian", flag: "🇷🇺" },
      ],
    },
    home: {
      intro: "Intro",
      quote: "For me, coding is problem solving..",
      title: "Hi, I'm Aditya Fajar SY",
      bio: "A Front-End Developer with a background in Language Literature, Graphic Design and Creative Media. I build user pov websites where proper design meets seamless functionality. Balancing technical execution with strategic business goals, my focus is always on engineering web solutions that effectively solve real company problems.",
      downloadCv: "Download CV",
      connectMe: "Connect with me",
    },
    projects: {
      label: "Projects",
      slogan: "crafting digital experiences",
      title: "Selected Works",
      swipe: "Swipe",
      launchBtn: "Launch Project",
      notDeployed: "Not Deployed (Local Dev)",
      backBtn: "Back to Portfolio",
      list: [
        {
          id: 1,
          gambar: ProjectNetflixImg,
          nama: "Netflix Clone",
          desk: "My first full-stack course project, by a FastCampus course by Dea Afrizal. I learned both front-end and back-end development using Firebase, MongoDB, Express.js, and Node.js (MERN Stack).",
          longDesc: "This project was my introduction to full-stack development, completed as part of a structured FastCampus course by Dea Afrizal. I built a Netflix-inspired streaming interface that involved implementing user authentication with Firebase, managing a MongoDB database for storing movie metadata, and creating a RESTful API using Express.js and Node.js. The frontend was developed with React and Vite, using TailwindCSS and DaisyUI for rapid UI styling. Key learnings included understanding client-server architecture, JWT authentication flow, and connecting a React frontend to a Node backend. The project helped me establish a solid MERN stack foundation.",
          tools: ["Vite", "React", "Tailwind", "DaisyUI", "MongoDB", "Firebase", "NodeJS", "ExpressJs", "Responsive"],
          images: [],
          link: "",
          meta: { date: "2025", role: "Full Stack Developer", category: "MERN Stack Clone" }
        },
        {
          id: 2,
          gambar: ProjectEcomImg,
          nama: "E-Commerce (The Hamburger)",
          desk: "My first dummy project based on my Hacktiv8 capstone task, featuring basic e-commerce functions, a self-made logo, custom dummy database, and planned visual identity.",
          longDesc: "The Hamburger is a fully responsive e-commerce web app built as my capstone project during the Hacktiv8 ReactJS Bootcamp. The project features a product listing page, individual product detail views, cart management, and a checkout flow — all connected to a custom dummy database via Axios. I also designed the logo and visual identity from scratch using Figma. The routing is handled by React Router DOM, and the UI is built with TailwindCSS. Deploying to Netlify was also part of the process, making this a complete end-to-end frontend project.",
          tools: ["Vite", "ReactJS", "Tailwind", "Axios", "React-router-dom", "Responsive"],
          images: [],
          link: "https://thehamburger.netlify.app",
          meta: { date: "2025", role: "Frontend Developer", category: "E-Commerce Web" }
        },
        {
          id: 3,
          gambar: ProjectCompanyImg,
          nama: "Website Company (Leveldva)",
          desk: "A modern, elegant company website project designed with GSAP and Tailwind CSS. The site features smooth scrolling, dynamic animations, and a premium user interface, perfect for professional portfolios or company branding.",
          longDesc: "Leveldva is a company profile website designed to feel premium and motion-rich. The entire page is animated using GSAP, with scroll-triggered reveals, smooth section transitions, and micro-interactions throughout. Built with Vite and React, styled with TailwindCSS, and enhanced with Framer Motion alongside GSAP. The design emphasizes whitespace, bold typography, and a refined dark color palette. Deployed to Vercel, the site is also fully responsive and optimized for performance.",
          tools: ["Vite", "Tailwind", "React", "GSAP", "Animation", "Motion"],
          images: [],
          link: "https://leveldva.vercel.app/",
          meta: { date: "2025", role: "Frontend Developer", category: "GSAP" }
        }
      ]
    },
    education: {
      label: "Education",
      slogan: "never stop learning",
      title: "Academic Path",
      showDetails: "Show details",
      hideDetails: "Hide details",
      activities: "Campus Activities & Responsibilities",
      list: [
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
        }
      ]
    },
    about: {
      expLabel: "Experience",
      expSlogan: "professional journey",
      expTitle: "Career Journey",
      toolsLabel: "Tools",
      toolsSlogan: "my daily arsenal",
      toolsTitle: "Tech Stack & Workspace",
      toolsDesc: "The software, frameworks, languages, and design applications that I leverage daily.",
      listTools: listToolsStaticEn,
      experiences: [
        {
          role: "Web Designer & Frontend Developer",
          company: "Kementerian PANRB",
          period: "Nov 2025 - May 2026",
          location: "Jakarta, Indonesia",
          color: "bg-[#1E293B] border border-slate-700/50",
          desc: "Directed the complete UI/UX design, user flows, and agile/scrum planning for two portal web applications (PPID & SIPIPI). Collaborated in a two-person team via Git, building the frontend using Next.js, TypeScript, and Tailwind.",
          descMobile: "Directed UI/UX design, user flows, and agile planning for two web portals (PPID & SIPIPI). Collaborated via Git to build the Next.js and TypeScript frontend.",
        },
        {
          role: "Career Break (T-Shaped Upskilling)",
          company: "Independent Learning",
          period: "Jan 2025 - Nov 2025",
          location: "Remote",
          color: "bg-[#312E81] border border-indigo-700/50",
          desc: "Built a T-shaped profile by researching cross-disciplinary skills, including AI workflows, product marketing, and advanced frontend paradigms, followed by intensive self-study in production-grade software engineering.",
          descMobile: "Researched cross-disciplinary skills including AI workflows, product marketing, and advanced frontend paradigms to build a versatile T-shaped profile.",
        },
        {
          role: "ReactJS for Frontend Developer Bootcamp",
          company: "Hacktiv8 Indonesia",
          period: "Aug 2024 - Dec 2024",
          location: "Jakarta, Indonesia",
          color: "bg-[#450A0A] border border-red-900/40",
          desc: "Transitioned from a creative/multimedia background to specialized frontend engineering, mastering modern React.js, modular component architectures, state management, and Git workflows.",
          descMobile: "Mastered frontend engineering principles, modern React.js workflows, component-driven architectures, state management, and collaborative Git practices.",
        },
        {
          role: "Creative Design & Multimedia Lead",
          company: "Universitas Padjadjaran",
          period: "2021 - 2025",
          location: "Sumedang, Indonesia",
          color: "bg-[#451A03] border border-amber-900/40",
          desc: "Led visual design and multimedia production for various campus organizations and events, establishing strong foundational skills in UI/UX layout, graphic assets, and user workflows.",
          descMobile: "Directed visual asset design and multimedia production for campus groups, establishing core skills in UI/UX layout and user flow architecture.",
        },
      ]
    },
    articles: {
      label: "Articles",
      slogan: "ideas in ink",
      title: "Insights & Writing",
      backBtn: "Back to Portfolio",
      bacaText: "min read",
      list: [
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
      ]
    },
    contact: {
      label: "Contact",
      slogan: "let's build together!",
      title: "Get in Touch",
      desc: "Ready to work on your next project? Let's connect and build something together.",
      channels: "Contact Channels",
      availableText: "Available for freelance opportunities & remote roles.",
      sendWa: "Send WhatsApp Message",
      name: "Name",
      email: "Email",
      message: "Message",
      sendBtn: "Send Message",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderMsg: "Tell me about your project...",
    }
  },
  id: {
    preloader: {
      tagline: "Welcome to Aditya's",
    },
    sidebar: {
      role: "he/him",
      aboutTitle: "ABOUT",
      aboutText: "Product designer dan web developer yang berbasis di Jakarta, saat ini fokus pada frontend / fullstack MERN dengan pengalaman praktis +1 tahun membangun aplikasi web.",
      contactTitle: "CONTACT",
      techTitle: "TECH STACK",
      langTitle: "LANGUAGES",
      langList: [
        { name: "Indonesia", flag: "🇮🇩" },
        { name: "Inggris", flag: "🇬🇧" },
        { name: "Rusia", flag: "🇷🇺" },
      ],
    },
    home: {
      intro: "Intro",
      quote: "For me, coding is problem solving..",
      title: "Hi, I'm Aditya Fajar SY",
      bio: "Seorang Front-End Developer dengan latar belakang Sastra Bahasa, Desain Grafis, dan Media Kreatif. Saya membangun situs web dari sudut pandang pengguna di mana desain yang tepat berpadu dengan fungsionalitas yang mulus. Menyeimbangkan eksekusi teknis dengan tujuan bisnis strategis, fokus saya adalah merekayasa solusi web yang memecahkan masalah nyata perusahaan secara efektif.",
      downloadCv: "Unduh CV",
      connectMe: "Hubungkan dengan saya",
    },
    projects: {
      label: "Projects",
      slogan: "crafting digital experiences",
      title: "Selected Works",
      swipe: "Geser",
      launchBtn: "Buka Proyek",
      notDeployed: "Tidak Dideploy (Lokal)",
      backBtn: "Kembali ke Portofolio",
      list: [
        {
          id: 1,
          gambar: ProjectNetflixImg,
          nama: "Netflix Clone",
          desk: "Proyek kursus full-stack pertama saya, dari kursus FastCampus oleh Dea Afrizal. Saya mempelajari pengembangan front-end dan back-end menggunakan Firebase, MongoDB, Express.js, dan Node.js (MERN Stack).",
          longDesc: "Proyek ini adalah pengenalan pertama saya ke pengembangan full-stack, diselesaikan sebagai bagian dari kursus terstruktur FastCampus oleh Dea Afrizal. Saya membangun antarmuka streaming bergaya Netflix yang mencakup implementasi autentikasi pengguna dengan Firebase, pengelolaan database MongoDB untuk menyimpan metadata film, dan pembuatan RESTful API menggunakan Express.js dan Node.js. Frontend dikembangkan dengan React dan Vite, menggunakan TailwindCSS dan DaisyUI untuk styling UI yang cepat. Pembelajaran utama meliputi pemahaman arsitektur client-server, alur autentikasi JWT, dan koneksi frontend React ke backend Node. Proyek ini membantu saya membangun fondasi MERN stack yang solid.",
          tools: ["Vite", "React", "Tailwind", "DaisyUI", "MongoDB", "Firebase", "NodeJS", "ExpressJs", "Responsive"],
          images: [],
          link: "",
          meta: { date: "2025", role: "Full Stack Developer", category: "MERN Stack Clone" }
        },
        {
          id: 2,
          gambar: ProjectEcomImg,
          nama: "E-Commerce (The Hamburger)",
          desk: "Proyek dummy pertama saya berdasarkan tugas capstone Hacktiv8, menampilkan fungsi dasar e-commerce, logo buatan sendiri, database dummy khusus, dan identitas visual yang direncanakan.",
          longDesc: "The Hamburger adalah aplikasi web e-commerce yang sepenuhnya responsif, dibangun sebagai proyek capstone saya selama Hacktiv8 ReactJS Bootcamp. Proyek ini menampilkan halaman daftar produk, tampilan detail produk individual, manajemen keranjang, dan alur checkout — semuanya terhubung ke database dummy khusus melalui Axios. Saya juga merancang logo dan identitas visual dari awal menggunakan Figma. Routing ditangani oleh React Router DOM, dan UI dibangun dengan TailwindCSS. Deploy ke Netlify juga menjadi bagian dari prosesnya, menjadikan ini proyek frontend end-to-end yang lengkap.",
          tools: ["Vite", "ReactJS", "Tailwind", "Axios", "React-router-dom", "Responsive"],
          images: [],
          link: "https://thehamburger.netlify.app",
          meta: { date: "2025", role: "Frontend Developer", category: "E-Commerce Web" }
        },
        {
          id: 3,
          gambar: ProjectCompanyImg,
          nama: "Website Company (Leveldva)",
          desk: "Proyek situs web perusahaan yang modern dan elegan yang dirancang dengan GSAP dan Tailwind CSS. Situs ini menampilkan scroll yang mulus, animasi dinamis, dan antarmuka pengguna premium, cocok untuk portofolio profesional atau branding perusahaan.",
          longDesc: "Leveldva adalah website company profile yang dirancang untuk terasa premium dan kaya gerakan. Seluruh halaman dianimasikan menggunakan GSAP, dengan scroll-triggered reveals, transisi section yang mulus, dan micro-interaction di seluruh bagian. Dibangun dengan Vite dan React, diberi style dengan TailwindCSS, dan ditingkatkan dengan Framer Motion bersama GSAP. Desainnya menekankan whitespace, tipografi bold, dan palet warna gelap yang halus. Di-deploy ke Vercel, situs ini juga sepenuhnya responsif dan dioptimalkan untuk performa.",
          tools: ["Vite", "Tailwind", "React", "GSAP", "Animation", "Motion"],
          images: [],
          link: "https://leveldva.vercel.app/",
          meta: { date: "2025", role: "Frontend Developer", category: "GSAP" }
        }
      ]

    },
    education: {
      label: "Education",
      slogan: "never stop learning",
      title: "Academic Path",
      showDetails: "Tampilkan detail",
      hideDetails: "Sembunyikan detail",
      activities: "Aktivitas Kampus & Tanggung Jawab",
      list: [
        {
          institution: "Universitas Padjadjaran",
          degree: "Sarjana, Sastra Rusia · IPK 3.70/4.00",
          period: "2021 - 2025",
          location: "Bandung, Sumedang",
          logo: "/assets/logo-unpad1.png",
          responsibilities: [
            "Berpartisipasi aktif dalam berbagai organisasi kampus, termasuk Himpunan Mahasiswa Studi Rusia dan Badan Eksekutif Mahasiswa (BEM).",
            "Terlibat dalam pengembangan diri melalui seminar dan lokakarya tentang Desain Grafis, Pengeditan Video, AI, Pemrograman, Keuangan, dan Investasi.",
            "Berkontribusi langsung ke Departemen Studi Rusia dengan membantu dalam desain visual dan pengeditan video untuk tujuan akademis dan promosi.",
          ],
        }
      ]
    },
    about: {
      expLabel: "Experience",
      expSlogan: "professional journey",
      expTitle: "Career Journey",
      toolsLabel: "Tools",
      toolsSlogan: "my daily arsenal",
      toolsTitle: "Tech Stack & Workspace",
      toolsDesc: "Perangkat lunak, framework, bahasa pemrograman, dan aplikasi desain yang saya gunakan setiap hari.",
      listTools: listToolsStaticEn,
      experiences: [
        {
          role: "Web Designer & Frontend Developer",
          company: "Kementerian PANRB",
          period: "Nov 2025 - May 2026",
          location: "Jakarta, Indonesia",
          color: "bg-[#1E293B] border border-slate-700/50",
          desc: "Mengarahkan desain UI/UX lengkap, alur pengguna, dan perencanaan lincah (agile/scrum) untuk dua aplikasi web portal (PPID & SIPIPI). Berkolaborasi dalam tim dua orang melalui Git, membangun frontend menggunakan Next.js, TypeScript, dan Tailwind.",
          descMobile: "Mengarahkan desain UI/UX, alur pengguna, dan perencanaan lincah untuk dua portal web (PPID & SIPIPI). Berkolaborasi melalui Git untuk membangun frontend Next.js dan TypeScript.",
        },
        {
          role: "Career Break (T-Shaped Upskilling)",
          company: "Independent Learning",
          period: "Jan 2025 - Nov 2025",
          location: "Remote",
          color: "bg-[#312E81] border border-indigo-700/50",
          desc: "Membangun profil T-shaped dengan meneliti keterampilan lintas disiplin, termasuk alur kerja AI, pemasaran produk, dan paradigma frontend lanjutan, diikuti oleh studi mandiri intensif dalam rekayasa perangkat lunak tingkat produksi.",
          descMobile: "Meneliti keterampilan lintas disiplin termasuk alur kerja AI, pemasaran produk, dan paradigma frontend lanjutan untuk membangun profil T-shaped yang serbaguna.",
        },
        {
          role: "ReactJS for Frontend Developer Bootcamp",
          company: "Hacktiv8 Indonesia",
          period: "Aug 2024 - Dec 2024",
          location: "Jakarta, Indonesia",
          color: "bg-[#450A0A] border border-red-900/40",
          desc: "Beralih dari latar belakang kreatif/multimedia ke frontend engineering khusus, menguasai React.js modern, arsitektur komponen modular, manajemen state, dan alur kerja Git.",
          descMobile: "Menguasai prinsip frontend engineering, alur kerja React.js modern, arsitektur berbasis komponen, manajemen state, dan praktik Git kolaboratif.",
        },
        {
          role: "Creative Design & Multimedia Lead",
          company: "Universitas Padjadjaran",
          period: "2021 - 2025",
          location: "Sumedang, Indonesia",
          color: "bg-[#451A03] border border-amber-900/40",
          desc: "Memimpin desain visual dan produksi multimedia untuk berbagai organisasi dan acara kampus, membangun keterampilan dasar yang kuat dalam tata letak UI/UX, aset grafis, dan alur kerja pengguna.",
          descMobile: "Mengarahkan desain aset visual dan produksi multimedia untuk kelompok kampus, membangun keterampilan inti dalam tata letak UI/UX dan arsitektur alur pengguna.",
        },
      ]
    },
    articles: {
      label: "Articles",
      slogan: "ideas in ink",
      title: "Insights & Writing",
      backBtn: "Kembali ke Portofolio",
      bacaText: "menit baca",
      list: [
        {
          id: 1,
          gambar: "/assets/article_ui_ai.png",
          kategori: "UI/UX & AI",
          tanggal: "28 Juni 2026",
          baca: "5 menit baca",
          nama: "Merancang untuk Web Masa Depan: Konvergensi UI & AI",
          desk: "Bagaimana antarmuka generatif dan sistem desain sadar konteks mendefinisikan kembali cara manusia berinteraksi dengan aplikasi digital.",
          isi: `
## Pendahuluan

Kecerdasan Buatan (AI) bukan lagi sekadar alat bantu backend. Hari ini, kita menyaksikan munculnya antarmuka generatif—UI yang beradaptasi, berubah bentuk, dan menyesuaikan diri secara real-time berdasarkan perilaku dan niat pengguna. Konvergensi desain User Interface (UI) dan Artificial Intelligence (AI) ini mengubah web secara mendasar.

## Pergeseran ke UI Generatif

Desain web tradisional bergantung pada tata letak statis. Kita memprediksi alur pengguna, membuat wireframe, dan mengode kontainer tetap. Dengan model AI sadar konteks yang terintegrasi langsung di sisi klien, antarmuka sekarang dapat menghasilkan modul tata letak dengan cepat.

Bayangkan sebuah dashboard di mana:
- Sidebar menyesuaikan elemen prioritasnya berdasarkan tugas Anda saat ini.
- Widget diubah ukurannya secara dinamis untuk fokus pada anomali data.
- Palet warna dan spasi merespons metrik fokus pengguna.

## Merekayasa Sinergi

Untuk membangun pengalaman generasi berikutnya ini, pengembang perlu berpikir di luar pohon komponen tradisional. Kode itu sendiri harus modular dan tangguh. Memanfaatkan alat-alat seperti React Server Components, Tailwind CSS, dan model lokal yang ringan, kita dapat membangun UI yang berkinerja tinggi sekaligus cerdas secara kontekstual.

> "Antarmuka terbaik adalah yang menyesuaikan dengan pikiran Anda, bukan yang memaksa Anda menyesuaikan diri dengan strukturnya."

## Apa Selanjutnya?

Ke depan, peran pengembang frontend akan bergeser dari menulis tata letak kaku menjadi merancang sistem desain yang bertindak sebagai aturan fleksibel untuk mesin tata letak bertenaga AI. Masa depan web bersifat pribadi, dinamis, dan cair.
          `
        },
        {
          id: 2,
          gambar: "/assets/article_speed_ux.png",
          kategori: "Kinerja Web",
          tanggal: "14 Mei 2026",
          baca: "4 menit baca",
          nama: "Mengapa Performa adalah Metrik UX Tertinggi",
          desk: "Pembahasan mendalam tentang ukuran bundel, node DOM, dan mengapa waktu muat yang cepat mengalahkan transisi mewah setiap saat.",
          isi: `
## Psikologi Kecepatan

Pengalaman pengguna dibangun di atas kepercayaan, dan kepercayaan dibangun di atas keandalan. Jika sebuah situs web membutuhkan waktu lebih dari tiga detik untuk dimuat, lebih dari 40% pengguna akan meninggalkannya. Setiap milidetik latensi adalah titik gesekan yang mengurangi kepuasan pengguna.

## Bottleneck dalam Aplikasi Web Modern

Meskipun framework modern memungkinkan kita membangun aplikasi satu halaman yang kompleks, mereka juga memperkenalkan overhead yang signifikan:
1. **JavaScript yang Menggembung**: Mengirimkan megabyte JS yang perlu diurai dan dikompilasi oleh browser.
2. **Kompleksitas Pohon DOM**: Mereplikasi pohon tata letak atau merender elemen yang tidak terlihat, yang memperlambat kalkulasi ulang.
3. **Aset yang Memblokir Render**: Impor stylesheet berat atau memuat font khusus melalui impor CSS yang lambat.

## Strategi Utama untuk Optimasi Maksimal

Untuk membangun aplikasi web yang secepat kilat, fokuslah pada optimasi kritis berikut:
- **Minimalkan Jumlah Node DOM**: Hindari menduplikasi struktur elemen (misalnya merender pohon desktop/mobile terpisah secara bersamaan).
- **Ekstrak Alokasi Statis**: Definisikan animasi, daftar statis, dan ikon di luar siklus render untuk mencegah kebocoran memori dan overhead pengumpulan sampah (garbage collection).
- **Terapkan Lazy Loading**: Tangguhkan gambar di luar layar dan bagi bundel menggunakan impor dinamis.

## Kesimpulan

Antarmuka yang indah tidak berguna jika pengguna pergi sebelum selesai dimuat. Prioritaskan performa sebagai pondasi inti dari pengalaman pengguna Anda.
          `
        },
        {
          id: 3,
          gambar: "/assets/article_lang_code.png",
          kategori: "Rekayasa Perangkat Lunak",
          tanggal: "02 April 2026",
          baca: "6 menit baca",
          nama: "Bahasa & Kode: Menerjemahkan Semantik menjadi Perangkat Lunak",
          desk: "Bagaimana latar belakang linguistik dan sastra membangun perspektif unik dalam menulis kode yang bersih dan mudah dipelihara.",
          isi: `
## Bahasa adalah kode, Kode adalah bahasa

Pada intinya, baik bahasa manusia maupun bahasa pemrograman adalah sistem simbol, aturan, dan sintaksis yang dirancang untuk mentransfer makna. Sementara sastra Rusia mengandalkan aturan tata bahasa yang kompleks dan nuansa semantik, JavaScript mengandalkan cakupan leksikal, operator, dan fungsi.

## Pendekatan Linguistik terhadap Arsitektur

Mempelajari linguistik mengajarkan Anda untuk menganalisis sistem. Anda belajar bagaimana kata-kata bergabung membentuk frasa, dan bagaimana konteks mengubah makna. Ketika diterapkan pada rekayasa perangkat lunak, perspektif ini menawarkan manfaat unik:
- **Konvensi Penamaan yang Bersih**: Memilih nama variabel dan fungsi yang jelas, deskriptif, dan konsisten secara struktur.
- **HTML Semantik**: Menstrukturkan dokumen sehingga elemen-elemennya menyampaikan makna yang tepat bagi mesin pencari dan alat aksesibilitas.
- **Debugging Dekonstruktif**: Memecah masalah algoritmik yang kompleks menjadi blok semantik intinya, mirip seperti menganalisis struktur kalimat.

## Menjembatani Celah

Menjadi pengembang dengan latar belakang humaniora bukanlah kemunduran; itu adalah keuntungan. Ini memungkinkan Anda menerjemahkan persyaratan manusia yang kompleks menjadi arsitektur perangkat lunak yang logis dan terstruktur dengan baik. Bagaimanapun, menulis kode hanyalah bentuk lain dari terjemahan.
          `
        }
      ]
    },
    contact: {
      label: "Contact",
      slogan: "let's build together!",
      title: "Get in Touch",
      desc: "Siap bekerja sama untuk proyek Anda berikutnya? Mari terhubung dan bangun sesuatu bersama.",
      channels: "Contact Channels",
      availableText: "Tersedia untuk kesempatan freelance & peran remote.",
      sendWa: "Kirim Pesan WhatsApp",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      sendBtn: "Kirim Pesan",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderMsg: "Ceritakan tentang proyek Anda...",
    }
  }
};
