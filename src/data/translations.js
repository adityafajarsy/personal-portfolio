const ProjectPPIDImg = "/projects/ppid-cover.webp";
// Placeholder: replace with actual PPID screenshot when available
const ProjectNetflixImg = "/projects/netflix-clone.webp";
const ProjectEcomImg = "/projects/hamburger.webp";
const ProjectCompanyImg = "/projects/leveldva.webp";

const listToolsStatic = [
  {
    id: 1,
    gambar: "/assets/tools/vscode.svg",
    nama: "Visual Studio Code",
  },
  {
    id: 2,
    gambar: "https://cdn.simpleicons.org/react/61DAFB",
    nama: "React JS",
  },
  {
    id: 3,
    gambar: "https://cdn.simpleicons.org/nextdotjs/white",
    nama: "Next JS",
  },
  {
    id: 4,
    gambar: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    nama: "Tailwind CSS",
  },
  {
    id: 5,
    gambar: "https://cdn.simpleicons.org/bootstrap/7952B3",
    nama: "Bootstrap",
  },
  {
    id: 6,
    gambar: "https://cdn.simpleicons.org/javascript/F7DF1E",
    nama: "Javascript",
  },
  {
    id: 7,
    gambar: "https://cdn.simpleicons.org/nodedotjs/339933",
    nama: "Node JS",
  },
  {
    id: 8,
    gambar: "https://cdn.simpleicons.org/express/white",
    nama: "Express JS",
  },
  {
    id: 9,
    gambar: "https://cdn.simpleicons.org/docker/2496ED",
    nama: "Docker",
  },
  {
    id: 10,
    gambar: "https://cdn.simpleicons.org/ubuntu/E95420",
    nama: "Ubuntu",
  },
  {
    id: 11,
    gambar: "https://cdn.simpleicons.org/vercel/white",
    nama: "Vercel",
  },
  {
    id: 12,
    gambar: "/assets/icon-antigravity.webp",
    nama: "Antigravity",
  },
  {
    id: 13,
    gambar: "/assets/icon-claudecode.webp.webp",
    nama: "Claude Code",
  },
  {
    id: 16,
    gambar: "https://cdn.simpleicons.org/github/white",
    nama: "Github",
  },
  {
    id: 17,
    gambar: "/assets/icon-canva.webp.webp",
    nama: "Canva",
  },
  { id: 18, gambar: "https://cdn.simpleicons.org/figma/F24E1B", nama: "Figma" },
];

const listToolsStaticEn = listToolsStatic.map((t) => {
  let ket = "Language";
  if (t.id === 1) ket = "Code Editor";
  else if (t.id === 2 || t.id === 3 || t.id === 4 || t.id === 5)
    ket = "Framework";
  else if (t.id === 7) ket = "Javascript Runtime";
  else if (t.id === 8) ket = "Backend Framework";
  else if (t.id === 9) ket = "Containerization";
  else if (t.id === 10) ket = "Linux Server OS";
  else if (t.id === 11) ket = "Cloud Deployment";
  else if (t.id === 12) ket = "AI Coding Assistant";
  else if (t.id === 13) ket = "AI Assistant";
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
      aboutText:
        "Jakarta-based product designer and developer, currently focused on frontend / fullstack MERN with +1 year of hands-on building web app.",
      contactTitle: "CONTACT",
      techTitle: "TECH STACK",
      githubTitle: "GITHUB ACTIVITY",
      githubContributions: "contributions",
      githubInLast6Months: "in the last 6 months",
      githubLess: "Less",
      githubMore: "More",
      langTitle: "LANGUAGES",
      langList: [
        { name: "Indonesian", flag: "🇮🇩" },
        { name: "English", flag: "🇬🇧" },
        { name: "Russian", flag: "🇷🇺" },
      ],
    },
    home: {
      intro: "Intro",
      quote: "I start with real problems...",
      title: "Hi, I'm Aditya Fajar SY",
      bio: "I build digital products by translating real problems into meaningful solutions. Combining Language, Graphic Design, and Software Engineering, I approach every product through research, user understanding, and thoughtful engineering. Technology isn't where great products begin. Understanding people is.",
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
          id: 3,
          gambar: "/assets/project3/cover-thumora.webp",
          nama: "Thumora AI",
          desk: "An AI-powered thumbnail creation platform designed to turn a simple content concept into production-ready thumbnails with minimal effort.",
          subtitle:
            "AI-Powered Thumbnail Generation Platform designed around real creator workflows, resilient SSE streaming, and community-driven inspiration.",
          about:
            "Thumora AI is an AI-powered thumbnail creation workspace built for creators. Beyond a simple API wrapper, it integrates prompt enhancement, modular visual style systems, dual-engine generation (streaming SSE & non-streaming reference synthesis), fair quota governance, and a community inspiration platform.",
          category: "AI Product Engineering",
          facts: [
            "AI Product",
            "Solo Build",
            "2026",
            "React + TypeScript",
            "Express + MongoDB",
            "OpenRouter + Cloudinary",
          ],
          tools: [
            "React",
            "TypeScript",
            "Express",
            "MongoDB",
            "OpenRouter",
            "Cloudinary",
            "Tailwind CSS",
            "SSE",
          ],
          images: [],
          link: "https://thumoraai.vercel.app",
          meta: {
            date: "2026",
            role: "Product / UI/UX / Fullstack",
            category: "AI Product Engineering",
            team: "Solo",
            status: "Live",
          },
        },
        {
          id: 4,
          gambar: "/assets/project4/cover-icon.webp",
          nama: "SALDO",
          desk: "An efficient money tracker powered by natural language capture, turning daily financial tracking from a tedious chore into a simple, natural conversation.",
          subtitle:
            "Efficient Money Tracker — Natural language financial capture, pace-aware forecasting, and calm editorial design.",
          about:
            "Managing money shouldn't feel like accounting. SALDO is an efficient money tracker built from a simple premise: tracking expenses should be as easy as telling someone what happened. Featuring multi-item natural language interpretation, period-over-period intelligence, pace forecasting, and a calm, non-cliché visual system.",
          category: "Financial Technology",
          facts: [
            "Fintech App",
            "Solo Build",
            "2026",
            "React + Node.js",
            "MongoDB + Express",
            "OpenRouter AI",
          ],
          tools: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "OpenRouter",
            "Tailwind CSS",
            "Vercel",
          ],
          images: [],
          link: "https://usesaldo.vercel.app",
          meta: {
            date: "2026",
            role: "Product / UI/UX / Fullstack",
            category: "Financial Technology",
            team: "Solo",
            status: "Live",
          },
        },
        {
          id: 1,
          gambar: "/assets/project1/banner_utama.webp",
          video: "/assets/project1/demo_homePage.webm",
          // TODO: replace gambar with ProjectPPIDImg once screenshot is ready
          nama: "PPID Digital Ecosystem",
          desk: "A complete government digital ecosystem developed during a 6-month internship at Kementerian PANRB, consisting of a public information portal, an internal request management system, and a custom CMS.",
          subtitle:
            "A modern digital ecosystem for Indonesia's Public Information and Documentation Management, consisting of a public information portal, an internal request management platform, and a custom content management system.",
          about:
            "PPID Digital Ecosystem is a complete digital ecosystem developed during my 6-month internship at Indonesia's Ministry of Administrative and Bureaucratic Reform (Kementerian PANRB). The ecosystem modernizes existing PPID services by redesigning the user experience, rebuilding the frontend, improving internal workflows, and replacing outdated content management processes. The project consists of three integrated modules — Portal PPID (Public Website), SIPIPI (Internal Information Request Management System), and CMS (Internal Content Management System) — all belonging to one integrated ecosystem.",
          facts: [
            "Government Project",
            "Internship Project",
            "6 Months",
            "Team of 2 Developers",
            "Production Ready",
            "Awaiting Penetration Testing",
          ],
          modules: [
            {
              name: "Portal PPID",
              label: "Public Website",
              type: "public",
              icon: "globe",
              desc: "A public-facing website where citizens can access public information, read news, download documents, browse FAQs, submit requests, and track their status in real time.",
              features: [
                "Access public information",
                "Read news articles",
                "Download public documents",
                "Browse FAQs",
                "Submit information requests",
                "Track request status in real time",
              ],
            },
            {
              name: "SIPIPI",
              label: "Internal Request Management",
              type: "internal",
              icon: "server",
              desc: "An internal platform for PPID administrators to manage the full lifecycle of public information requests — from receipt to response.",
              features: [
                "Receive new requests",
                "Verify submissions",
                "Process and review requests",
                "Upload requested documents",
                "Respond to citizens",
                "Update request status",
                "Automatic email notifications",
              ],
            },
            {
              name: "CMS",
              label: "Content Management System",
              type: "internal",
              icon: "edit",
              desc: "An internal CMS integrated into the same application, replacing the previous WordPress workflow and allowing administrators to manage all Portal PPID content.",
              features: [
                "Banner management",
                "News articles",
                "FAQ management",
                "Public documents",
                "Video content",
                "Public information data",
                "Other portal content",
              ],
            },
          ],
          responsibilities: [
            {
              category: "UX Research & Strategy",
              items: [
                "UX Research",
                "Competitor Benchmarking",
                "Information Architecture",
              ],
            },
            {
              category: "Design",
              items: [
                "UI Design",
                "UX Design",
                "Wireframing",
                "High-Fidelity Prototyping",
              ],
            },
            {
              category: "Frontend Development",
              items: [
                "Frontend Development",
                "Responsive Development",
                "Component Design",
                "Frontend-Backend Integration",
              ],
            },
            {
              category: "Deployment & Media",
              items: [
                "Product Demo via Vercel",
                "Deployment Collaboration",
                "Multimedia Design",
                "Creative Content",
              ],
            },
          ],
          timeline: [
            {
              phase: "Research",
              desc: "UX research, competitor benchmarking, and user flow analysis",
            },
            {
              phase: "UI & UX Design",
              desc: "Wireframing, high-fidelity prototyping, and design system creation",
            },
            {
              phase: "Prototype",
              desc: "Interactive prototype review and stakeholder feedback sessions",
            },
            {
              phase: "Frontend Development",
              desc: "Component development, responsive layouts, and full UI implementation",
            },
            {
              phase: "Backend Integration",
              desc: "API integration, data fetching, and frontend-backend system connection",
            },
            {
              phase: "Deployment",
              desc: "Docker containerization and Ubuntu server production deployment",
            },
          ],
          techStack: {
            frontend: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "TanStack",
              "Radix UI",
            ],
            backend: ["Prisma", "MariaDB", "MinIO"],
            deployment: ["Docker", "Ubuntu Server", "SSH"],
          },
          results: [
            "Redesigned an outdated government portal into a modern, accessible digital ecosystem",
            "Built a complete UI/UX design system with consistent visual identity across all three platforms",
            "Streamlined the public information request workflow into a single, unified platform",
            "Replaced the old WordPress CMS with a purpose-built internal content management system",
            "Improved mobile responsiveness and accessibility following government digital standards",
            "Integrated real-time request tracking and automated email notifications for citizens",
            "Successfully deployed to Ubuntu Server using Docker containerization",
            "Approved by project stakeholders after thorough review",
          ],

          tools: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "TanStack",
            "Radix UI",
            "Prisma",
            "MariaDB",
            "MinIO",
            "Docker",
            "Ubuntu",
          ],
          images: [
            "/assets/project1/demo_homePage.webm",
            "/assets/project1/DIP_Grid.webp",
            "/assets/project1/Laporan-statistika_grid.webp",
            "/assets/project1/berita-grid.webp",
            "/assets/project1/faq-grid.webp",
            "/assets/project1/lacak-permohonan_grid.webp",
            "/assets/project1/laporan_evaluasi_grid.webp",
            "/assets/project1/permohonan-informasi-grid.webp",
            "/assets/project1/statistiklaporan_grid.webp",
          ],
          link: "",
          meta: {
            date: "2026",
            role: "Frontend Dev & UI/UX Designer",
            category: "Government Digital Platform",
            team: "2 Developers",
            duration: "6 Months",
            client: "Kementerian PANRB",
            status: "Production Ready",
          },
        },
        {
          id: 2,
          gambar: "/assets/project2/banner_cover.webp",
          nama: "Builder's Archive",
          desk: "A personal digital identity system designed to communicate design thinking, engineering philosophy, and creative process, not simply to showcase projects.",
          subtitle:
            "A personal digital identity designed to communicate how I think, research, design, and engineer digital products, not simply to showcase projects.",
          about:
            "Builder's Archive is my personal portfolio website. But it is not just a portfolio. It is a digital identity system built to communicate my design philosophy, creative process, and engineering capability. Every visual decision, every interaction, and every word on this website exists to tell a story about how I approach problems and build products.",
          category: "Creative Engineering",
          facts: [
            "Personal Project",
            "Solo Build",
            "2026",
            "React + Vite",
            "Framer Motion",
            "Bilingual (EN/ID)",
          ],
          tools: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript",
            "Vercel",
          ],
          images: [],
          link: "",
          meta: {
            date: "2026",
            role: "Product Designer & Frontend Engineer",
            category: "Creative Engineering",
            team: "Solo",
            status: "Live",
          },
        },
      ],
    },
    ppidDetail: {
      overviewLabel: "Overview",
      overviewTitle: "Three Integrated Systems",
      archLabel: "System Architecture",
      archTitle: "Ecosystem Flow",
      contribLabel: "Contribution",
      contribTitle: "My Responsibilities",
      contribNote:
        "I primarily focused on frontend development and UI/UX design, collaborating closely with a backend engineer responsible for backend architecture and API implementation.",
      processLabel: "Process",
      processTitle: "Development Timeline",
      techLabel: "Technology",
      techTitle: "Tech Stack",
      galleryLabel: "Gallery",
      galleryTitle: "Portal PPID Screenshots",
      galleryNote:
        "Public-facing Portal PPID interface. Screenshots of the internal systems (SIPIPI & CMS) are not publicly displayed due to confidentiality.",
      internalLabel: "Internal Systems",
      internalTitle: "SIPIPI & CMS Platform",
      internalConfidential: "Confidential — Not Publicly Disclosed",
      internalNote:
        "Due to confidentiality and security considerations, the internal management platform (SIPIPI & CMS), source code, and administrative interfaces cannot be publicly disclosed.",
      internalContribNote:
        "My contributions to the internal platforms included:",
      resultsLabel: "Outcomes",
      resultsTitle: "Project Results",
      repoLabel: "Source Code",
      repoTitle: "Repository",
      repoPrivate: "Private / Confidential",
      repoNote: "This project was developed for a government institution.",
      repoUnavailable: "Source code unavailable",
      publicFlow: "Public Flow",
      contentFlow: "Content Flow",
      publicBadge: "Public",
      internalBadge: "Internal",
      systemNote:
        "CMS & SIPIPI run in the same internal app — no separate systems needed.",
      heroPreview: "Portal PPID — Public Interface Preview",
      demoVideoLabel: "Portal PPID — Interactive Video Demo",
      metaRole: "Role",
      metaTeam: "Team",
      flowCitizen: "Citizen",
      flowPortal: "Portal PPID",
      flowSipipi: "SIPIPI",
      flowAdmin: "Admin Reviews",
      flowEmail: "Email Notif",
      flowResponse: "Citizen Gets Response",
      flowCms: "CMS Module",
      flowPublished: "Portal PPID",
      flowNote: "CMS & SIPIPI run in one app.",
      techFrontend: "Frontend",
      techBackend: "Backend",
      techDeployment: "Deployment",
      internalContributions: [
        "UX Redesign",
        "Frontend Development",
        "Workflow Optimization",
        "Frontend-Backend Integration",
        "Deployment Collaboration",
        "Multimedia Design",
      ],
      galleryLabels: {
        homepage: "Homepage",
        pubInfo: "Public Information",
        news: "News",
        docs: "Documents",
        faq: "FAQ",
        req: "Information Request",
      },
    },
    builderDetail: {
      heroLabel: "Case Study",
      heroSubtitle:
        "A personal digital identity designed to communicate how I think, research, design, and engineer digital products, not simply to showcase projects.",
      metaRole: "Role",
      metaTeam: "Team",
      metaYear: "Year",
      metaCategory: "Category",
      metaStack: "Stack",
      techLabel: "Tech Stack",

      // Section 1 — Why This Exists
      whyLabel: "Origin",
      whyTitle: "Why This Exists",
      whyBody: [
        "Branding is not just visual. Branding is how a product is recognized before it is explained.",
        "For years, I have collected references across multiple disciplines: design, branding, software engineering, esports, streetwear, crypto, investment, editorial, and technology. Not to copy them, but to understand why a piece of work can build a strong identity and leave a lasting impression.",
        "This website is the result of that process. A space where all my experience, references, and way of thinking are translated into a single, cohesive visual language.",
      ],
      influencesLabel: "INFLUENCES",
      influencesTitle: "Every Reference Left a Mark",
      influencesCaption: [
        "Not just a single reference shaped this website.",
        "The visual identity of this website is an accumulation of various worlds I observed from esports branding, streetwear culture, language and literature, creative organizations, to software engineering.",
        "Each reference taught a different principle. This website is the result of all these principles meeting in a single visual language.",
      ],
      influencesStoryTitle: "Short Story",
      influencesStory: [
        "During my university years, I studied Russian Literature. Outside the classroom, I spent most of my time in design, publishing, creative media, copywriting, and student organizations. From there, I began to realize that building a product is not just about visuals, but also about how a message can be effectively communicated.",
        "Over time, that curiosity led me to various worlds that seemed completely unrelated. I began exploring branding, software engineering, Web3, crypto, and streetwear culture. Not to follow trends, but to understand why a piece of work can be recognized, remembered, and establish a strong identity.",
        "One of the most memorable influences was the visual identity of 100 Thieves. I was fascinated by how they built character through handwriting typography, editorial layouts, and visual consistency across all media. On the other hand, the BLUM × Pokras Lampas collaboration introduced me to a more experimental visual language graffiti, symbols, dripping elements, and hacker aesthetics which heavily influenced my visual exploration.",
      ],
      intentionLabel: "BUILT WITH INTENTION",
      intentionTitle: "Every visual decision exists for a reason.",
      intentionCaption:
        "Behind every visual element lies a reason. No decision was made simply because it looks good.",
      intentionCards: [
        {
          num: "01",
          title: "Problem Before Pixels",
          desc: "Before determining colors, animations, or layouts, I always start by understanding what needs to be communicated. Visuals serve as an answer to a problem, not as a starting point.",
          shortDesc:
            "Visuals serve as a solution to a problem, not just a starting point.",
        },
        {
          num: "02",
          title: "Identity Before Decoration",
          desc: "Handwriting, dripping graffiti, typography, and symbols are not mere decorations. They are chosen to build a recognizable visual character and consistency across all pages.",
          shortDesc:
            "Elements are chosen to build a strong and recognizable character.",
        },
        {
          num: "03",
          title: "Motion With Purpose",
          desc: "Animations are used to guide attention, clarify transitions between sections, and establish a reading rhythm. Movement supports the experience rather than diverting focus.",
          shortDesc:
            "Motion is used to guide attention and clarify layout transitions.",
        },
        {
          num: "04",
          title: "Consistency Creates Trust",
          desc: "Colors, typography, spacing, components, and interactions follow a single unified system. Consistency makes the experience feel professional while reinforcing product identity.",
          shortDesc:
            "Consistency creates professional trust and reinforces identity.",
        },
        {
          num: "05",
          title: "Research Shapes Design",
          desc: "Every reference I collect is not to be copied, but to be understood. I observe the rationale behind design decisions and translate them into a visual language tailored to my identity.",
          shortDesc:
            "References are analyzed and translated into matching visual codes.",
        },
        {
          num: "06",
          title: "Engineering Supports Design",
          desc: "The visual experience does not end in Figma. Frontend implementation, performance, responsiveness, and animation are key to ensuring the design is felt exactly as intended.",
          shortDesc:
            "Frontend execution and animations ensure visual intent is fully felt.",
        },
      ],
      detailsLabel: "Small Decisions, Big Difference.",
      detailsTitle: "Things You Probably Didn't Notice",
      detailsCaption:
        "The experience isn't shaped by one big idea, but by dozens of small decisions working together.",
      detailsQuote:
        "Identity isn't built by one big idea.\n\nIt's built by hundreds of intentional decisions.",
      philosophyLabel: "BUILDING PHILOSOPHY",
      philosophyTitle: "I don't collect references. I collect principles.",
      philosophyBody: [
        "During the process of building this website, I never tried to copy a single specific design. What I studied instead was the underlying reason why each decision was made, why a certain typography felt powerful, why a layout was easy to understand, or why a visual identity could be remembered even before the product was used.",
        "Ultimately, this website is not about merely combining streetwear, editorial, engineering, or branding into one. It is an effort to translate those lessons into a cohesive system that feels consistent and has its own distinct identity.",
      ],
      philosophyQuote:
        "Good design isn't about originality.\nIt's about making good decisions consistently.",
      philosophySign: "— Aditya Fajar",

      // Section 2 — Creative Foundations
      foundationsLabel: "Foundations",
      foundationsTitle: "Creative Foundations",
      foundations: [
        {
          icon: "problem",
          title: "Problem Solving",
          desc: "Everything begins with identifying real user problems instead of choosing technologies first.",
        },
        {
          icon: "research",
          title: "Research",
          desc: "Every visual decision is backed by observation, inspiration, and benchmarking from multiple industries.",
        },
        {
          icon: "design",
          title: "Design Language",
          desc: "A consistent visual identity built from typography, colors, symbols, handwritten elements, and motion.",
        },
        {
          icon: "code",
          title: "Engineering",
          desc: "Transforming design systems into responsive, scalable, and production-ready frontend architecture.",
        },
      ],

      // Section 3 — Inspiration Journey
      journeyLabel: "Journey",
      journeyTitle: "Inspiration Journey",
      journey: [
        {
          era: "Russian Literature",
          desc: "Learning storytelling, structure, and how ideas are communicated across different cultural contexts.",
        },
        {
          era: "Graphic Design",
          desc: "Understanding composition, typography, hierarchy, and the grammar of visual communication.",
        },
        {
          era: "Creative Media Org",
          desc: "Learning branding systems, social media consistency, creative direction, and team collaboration.",
        },
        {
          era: "Crypto & Web3",
          desc: "Inspired by BLUM's graffiti symbols, dripping aesthetics, hacker visuals, and experimental digital identity.",
        },
        {
          era: "Valorant Esports",
          desc: "Inspired by 100 Thieves branding, handwritten typography, bold layouts, and premium competitive identity.",
        },
        {
          era: "Frontend Engineering",
          desc: "Combining all previous disciplines into one interactive, reactive digital experience.",
        },
      ],

      // Section 4 — Visual Language
      visualLabel: "Design System",
      visualTitle: "Visual Language",
      visual: [
        {
          key: "typography",
          title: "Typography",
          detail: "Inter + Nothing You Could Do",
          desc: "Inter provides technical clarity and professional precision. Nothing You Could Do adds human imperfection, warmth, and personality. The contrast between the two is intentional.",
        },
        {
          key: "color",
          title: "Color System",
          detail: "Blue #3B82F6",
          desc: "Blue represents clarity, technology, trust, and focus. It is the color of systems thinking, creative precision, and forward momentum.",
        },
        {
          key: "handwriting",
          title: "Handwritten Typography",
          detail: "Personal contrast",
          desc: "Handwritten elements create contrast against clean technical layouts. They make the interface feel more personal, less corporate, and more human.",
        },
        {
          key: "graffiti",
          title: "Graffiti Symbols",
          detail: "Street identity",
          desc: "Graffiti represents experimentation, creativity, and imperfect human expression. It adds a layer of subcultural identity to an otherwise technical portfolio.",
        },
        {
          key: "editorial",
          title: "Editorial Layout",
          detail: "Magazine hierarchy",
          desc: "Large typography, strong whitespace, asymmetric grids. Inspired by editorial design content presented with confidence and craft.",
        },
        {
          key: "motion",
          title: "Motion",
          detail: "Restrained & intentional",
          desc: "Animations are smooth but restrained. Every motion has a purpose. Interactions should feel intentional, not decorative.",
        },
      ],

      // Section 5 — Design References
      refsLabel: "References",
      refsTitle: "Design References",
      refsNote:
        "Not a moodboard. Each reference taught me something specific about identity, hierarchy, and craft.",
      refs: [
        {
          name: "100 Thieves",
          tag: "Esports Brand",
          lesson:
            "Bold handwritten typography, confident visual hierarchy, and premium brand identity built around exclusivity and cultural relevance.",
        },
        {
          name: "BLUM",
          tag: "Crypto / Web3",
          lesson:
            "Graffiti symbols, dripping aesthetics, hacker culture visuals, and expressive experimental digital identity that breaks conventional UI rules.",
        },
        {
          name: "Editorial Websites",
          tag: "Digital Publishing",
          lesson:
            "Large dominant typography, clean structured layouts, asymmetric grids, and storytelling through deliberate spacing and content hierarchy.",
        },
        {
          name: "Luxury Branding",
          tag: "Minimalism",
          lesson:
            "Confidence through restraint. Premium spacing. Timeless visual systems that age well because they eliminate the unnecessary.",
        },
        {
          name: "Apple",
          tag: "Product Design",
          lesson:
            "Clarity over cleverness. Simplicity as a design decision. Product-first presentation and interaction consistency across every touchpoint.",
        },
      ],

      // Section 6 — Design Process
      processLabel: "Process",
      processTitle: "Design Process",
      process: [
        {
          phase: "Research",
          desc: "Collecting references from branding, technology, editorial design, gaming, crypto, and fashion industries.",
        },
        {
          phase: "Strategy",
          desc: "Defining the personality, identity system, and emotional direction of the digital presence.",
        },
        {
          phase: "Wireframe",
          desc: "Creating information hierarchy, content structure, and layout architecture before visual design.",
        },
        {
          phase: "Visual Design",
          desc: "Developing the complete design language typography, color, spacing, motion, and components.",
        },
        {
          phase: "Prototype",
          desc: "Testing interactions, transitions, and animations to ensure intentional, non-decorative motion.",
        },
        {
          phase: "Development",
          desc: "Implementing using React, Vite, Tailwind CSS, Framer Motion, and responsive component architecture.",
        },
        {
          phase: "Iteration",
          desc: "Continuous refinement based on usability testing, visual consistency reviews, and personal feedback.",
        },
      ],

      // Section 7 — Engineering
      engLabel: "Engineering",
      engTitle: "Engineering Decisions",
      engFrontend: "Frontend",
      engAnimation: "Animation",
      engDeployment: "Deployment",
      engPerformance: "Performance",
      engFrontendItems: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      engAnimationItems: ["Framer Motion"],
      engDeploymentItems: ["Vercel"],
      engPerformanceItems: [
        "Image Optimization",
        "Code Splitting",
        "Lazy Loading",
        "SEO Optimization",
        "Accessibility",
        "Responsive Design",
      ],
      engFrontendNote:
        "React + Vite provides a fast development experience and production-grade build pipeline. Tailwind enforces design consistency through a utility-first constraint system.",
      engAnimationNote:
        "Framer Motion enables physics-based, declarative animations that feel natural and intentional not CSS transitions bolted on as an afterthought.",
      engDeploymentNote:
        "Vercel's edge network provides globally distributed delivery with zero-config CI/CD, enabling instant rollbacks and preview deployments.",

      // Section 8 — Gallery
      galleryLabel: "Gallery",
      galleryTitle: "Interface Gallery",
      galleryNote:
        "Selected screenshots across different sections of the portfolio, showing the visual language in context.",
      galleryGroups: [
        "Landing Page",
        "Articles",
        "Projects",
        "Project Detail",
        "About",
        "Mobile",
      ],

      // Section 9 — Outcomes
      outcomesLabel: "Results",
      outcomesTitle: "Project Outcomes",
      outcomes: [
        {
          title: "Unified Digital Identity",
          desc: "A consistent visual language across every page and interaction.",
        },
        {
          title: "Story-driven Portfolio",
          desc: "Communicates process and thinking instead of only showcasing finished results.",
        },
        {
          title: "Fully Responsive",
          desc: "Optimized layout and interaction for desktop, tablet, and mobile screens.",
        },
        {
          title: "Performance Focused",
          desc: "Fast loading, optimized assets, and minimal bundle overhead.",
        },
        {
          title: "Expandable Architecture",
          desc: "Designed to grow alongside future products, articles, and case studies.",
        },
      ],

      // Section 10 — Repository
      repoLabel: "Source Code",
      repoTitle: "Repository",
      repoPublic: "Public",
      repoDesc:
        "Full source code available on GitHub. Includes documentation and component structure.",
      repoBtn: "View on GitHub",
    },
    thumoraDetail: {
      sec1Label: "01 / THE PRODUCT",
      sec1Title: "AI Thumbnail Generator for Creators",
      sec1Desc:
        "Thumora helps creators turn simple ideas into ready-to-use thumbnails — or explore existing creations as references for their next one.",

      sec2Label: "02 / THE EXPERIENCE",
      sec2Title: "From Idea to Thumbnail",
      sec2Desc:
        "A simple workflow built around the way creators make thumbnails: define an idea, shape the visual direction, generate, and save the result.",

      sec3Label: "03 / SEE IT IN ACTION",
      sec3Title: "See Thumora in Action",
      sec3Desc:
        "From exploring the product to generating a thumbnail, these walkthroughs show the experience in practice.",

      sec4Label: "04 / COMMUNITY",
      sec4Title: "More Than a Generator",
      sec4Desc:
        "Thumora also gives creators a place to discover thumbnail ideas, inspect how they were made, and use them as references for their own work.",

      sec5Label: "05 / PRODUCT DETAILS",
      sec5Title: "Designed for the Web",
      sec5Desc:
        "Thumora is built as a responsive web application, with authentication, thumbnail generation, personal generation history, and interfaces designed for both desktop and mobile.",

      sec6Label: "FINAL SHOWCASE",
      sec6Title: "Built to Turn Ideas Into Thumbnails.",
      sec6Desc:
        "Thumora combines AI generation, creative controls, and community inspiration in one simple workflow for creators.",
    },
    saldoDetail: {
      heroMeta: "CASE STUDY · 2026 · SOLO BUILD",
      heroTitle: "SALDO — Efficient Money Tracker",
      heroDesc:
        "Managing money shouldn't feel like doing accounting. SALDO turns everyday money tracking into a simple conversation.",

      sec1Label: "01 — THE IDEA",
      sec1Title: "Money tracking should take seconds, not forms.",
      sec1Desc:
        "SALDO started from a simple observation: recording a small expense shouldn't require navigating through multiple fields, categories, accounts, and dates.",

      sec2Label: "02 — THE EXPERIENCE",
      sec2Title: "Tell SALDO what happened.",
      sec2Desc:
        "Type the way you normally speak. SALDO interprets the transaction and prepares it for confirmation.",

      sec3Label: "03 — THE PRODUCT",
      sec3Title: "A calm interface for everyday money.",
      sec3Desc:
        "A serene financial experience designed with subtle mint tones, deep forest surfaces, and generous breathing room.",

      sec4Label: "04 — THE APP",
      sec4Title: "The same idea, once you're inside.",
      sec4Desc:
        "SALDO keeps the interface quiet so the important information stays visible: what you have, what you've spent, and what's likely next.",

      sec5Label: "05 — THE VISUAL LANGUAGE",
      sec5Title: "Calm, expressive, and intentionally simple.",
      sec5Desc:
        "Soft mint surfaces, deep forest tones, expressive typography, and organic motion give SALDO a visual language that feels closer to a product than a spreadsheet.",

      sec6Label: "06 — THE OUTCOME",
      sec6Title: "Money tracking that feels like a conversation.",
      sec6Desc:
        "SALDO turns the small, repetitive task of recording money into a faster, calmer experience — while keeping the bigger picture visible.",
    },
    education: {
      label: "Education",
      slogan: "education is key",
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
          logo: "/assets/logo-unpad1.webp",
          responsibilities: [
            "Actively participated in various campus organizations, including the Russian Studies Student Association and the Student Executive Board (BEM).",
            "Engaged in self-development through seminars and workshops on Graphic Design, Video Editing, AI, Programming, Finance, and Investment.",
            "Contributed directly to the Russian Studies Department by assisting in visual design and video editing for academic and promotional purposes.",
          ],
        },
      ],
    },
    about: {
      expLabel: "Experience",
      expSlogan: "professional journey",
      expTitle: "Career Journey",
      toolsLabel: "Tools",
      toolsSlogan: "my daily arsenal",
      toolsTitle: "Tech Stack & Workspace",
      toolsDesc:
        "The software, frameworks, languages, and design applications that I leverage daily.",
      showMore: "Read more",
      showLess: "Show less",
      listTools: listToolsStaticEn,
      experiences: [
        {
          role: "Web Designer & Frontend Developer",
          company: "Kementerian PANRB",
          period: "Nov 2025 - May 2026",
          location: "Jakarta, Indonesia",
          color: "bg-[#1E293B] border border-slate-700/50",
          desc: "Directed the complete UI/UX design, user flows, and agile/scrum planning for two portal web applications (PPID & SIPIPI). Collaborated in a two-person team via Git, building the frontend using Next.js, TypeScript, and Tailwind.",
          descMobile:
            "Directed UI/UX design, user flows, and agile planning for two web portals (PPID & SIPIPI). Collaborated via Git to build the Next.js and TypeScript frontend.",
        },
        {
          role: "Career Break",
          company: "Independent Learning",
          period: "Jan 2025 - Nov 2025",
          location: "Remote",
          color: "bg-[#312E81] border border-indigo-700/50",
          desc: "Built a diverse profile by researching cross-disciplinary skills, including AI workflows, product marketing, and advanced frontend paradigms, followed by intensive self-study in production-grade software engineering.",
          descMobile:
            "Researched cross-disciplinary skills including AI workflows, product marketing, and advanced frontend paradigms to build a diverse profile.",
        },
        {
          role: "ReactJS for Frontend Developer Bootcamp",
          company: "Hacktiv8 Indonesia",
          period: "Aug 2024 - Dec 2024",
          location: "Jakarta, Indonesia",
          color: "bg-[#450A0A] border border-red-900/40",
          desc: "Transitioned from a creative/multimedia background to specialized frontend engineering, mastering modern React.js, modular component architectures, state management, and Git workflows.",
          descMobile:
            "Mastered frontend engineering principles, modern React.js workflows, component-driven architectures, state management, and collaborative Git practices.",
        },
        {
          role: "Creative Lead",
          company: "Universitas Padjadjaran",
          period: "2021 - 2025",
          location: "Sumedang, Indonesia",
          color: "bg-[#451A03] border border-amber-900/40",
          desc: "Led visual design and multimedia production for various campus organizations and events, establishing strong foundational skills in UI/UX layout, graphic assets, and user workflows.",
          descMobile:
            "Directed visual asset design and multimedia production for campus groups, establishing core skills in UI/UX layout and user flow architecture.",
        },
      ],
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
          gambar: "/assets/article1.webp",
          kategori: "UI/UX & AI",
          tanggal: "June 27, 2026",
          baca: "5 min read",
          nama: "AI Can Create Beautiful Websites. But It Still Can't Understand Users.",
          desk: "AI can generate modern, automated landing pages instantly. But visual beauty doesn't guarantee a successful product that truly solves human problems.",
          isi: `
A few years ago, building a website took weeks. Today, with just a few prompt lines, AI can generate a modern looking landing page, complete with animations, dark mode, and professional looking components.
At first glance, it all looks impressive.
But there is one question that is rarely asked.
If the website looks good, does that mean it actually succeeds?
Not necessarily.
Because in the end, users don't come to admire our design. They come to get something done.

## Websites Are Tools, Not Paintings

Advances in AI have changed how we build applications. Now, almost anyone can create a website or mobile app without having to write thousands of lines of code from scratch.
This is an amazing development.
However, this ease also gives birth to a new misunderstanding: many people begin to assume that an attractive design is the ultimate goal of a digital product.
In fact, design is only a medium.
The real goal is to help users achieve what they want with minimal effort.
A beautiful website is indeed pleasant to look at. But if users struggle to find the buttons they need, get confused at checkout, or have to wait too long for heavy animations, then the design has failed to perform its function.

## Users Come with a Goal, Not to Admire the UI

Think about how we use an e-commerce platform.
When opening the app, we are not looking for design inspiration.
We don't think, "Wow, the button color combination is cool."
What we think is much simpler.
"I want to find a product."
"I want to buy it."
"I want the payment process to be fast."
Done.
The fewer obstacles to that goal, the better the user experience.
This is why many of the best digital products actually feel simple. Not because they can't make complex layouts, but because they understand that every extra element comes with a cost.
The cost of attention.
The cost of time.
And sometimes, the cost of performance.

## Aesthetics Still Matter. As Long as They Help the User.

Many people misinterpret this discussion as if beautiful design isn't important.
That is not the case.
Aesthetics still play a huge role. Good design builds trust, creates a professional impression, and makes products feel more comfortable to use.
However, aesthetics should support the user experience, not steal the spotlight.
Take animations, for example.
Good animation can help users understand that a button is processing a request, provide smoother transitions when changing pages, or show that an action was successful.
All of this makes the interaction feel more natural.
On the contrary, animations that are too long just keep users waiting for something that could actually be completed in seconds.
Another example is microinteractions.
A small effect when a button is touched, a clear loading indicator, or a progress bar when filling out a form are not just visual candy. They provide feedback that makes users feel confident that the system is working.
This is where aesthetics truly deliver value.
Not because it looks cool, but because it helps users move faster and with more confidence.

## AI Can Create Interfaces. But It Cannot Understand Humans Yet.

AI is great at generating layouts.
AI can mimic design styles.
AI can make consistent components.
AI can even produce websites that visually look like products built by tech giants.
However, there is one thing that still requires humans.
Understanding humans.
AI doesn't really know why users abandon a checkout page.
AI can't feel the frustration of someone who has to fill out an excessively long form.
AI also doesn't understand the business context, user behavior, or specific needs of the target audience without clear data and guidance.
All of these decisions still require the thinking process of a product designer, UX designer, engineer, or product manager.
Because building a digital product is not just about making something look good.
It's about understanding what problems users are experiencing, and then finding the simplest way to solve them.

## The Best Design is the One You Don't Feel

The rapid growth of AI will make the website building process faster and faster.
Most likely, in the next few years, creating an application will be much easier than it is today.
Because of that, the skill that will become increasingly valuable is not just making beautiful layouts.
But the ability to understand humans.
Understanding how they think.
How they make decisions.
How they get confused.
And how to help them reach their goals without having to think too hard.
Because in the end, users won't remember how cool our animations were.
They will remember one thing that is far more important.
*The website helped me finish what I needed.*
          `,
        },
        {
          id: 2,
          gambar: "/assets/article2.webp",
          kategori: "UI/UX Design",
          tanggal: "June 29, 2026",
          baca: "4 min read",
          nama: "Stop Designing Websites 'Generic'",
          desk: "So many website designs look exactly the same these days.",
          isi: `
I can usually tell within a few seconds if a website was built using AI. It is not because I am against AI in fact, I use it almost every day to help with design and development. What makes a website easily recognizable is not the AI itself, but because all the design decisions feel identical. The hero section is the same, the layout is the same, cards have the same shadows, the same purple-blue gradients are used, animations are identical, and even the content order rarely changes. The result looks modern, but it feels like the 100th website I have seen that week.

## AI Makes Designing Easy. Too Easy, Actually..
There is no denying that AI has changed how we build digital products. Now, anyone can create a landing page with just a few prompts, and the result is often neat enough to publish immediately. This is an amazing step forward.
The problem starts when AI is used to replace thinking. Many people simply type "create a modern SaaS landing page" and accept the first result without asking: Does this design actually fit my product? Do my users really need this look? Does this website have its own identity? 
## If everyone uses the same prompts, it is no surprise the results look identical.

## Good Design Always Starts with References, Not Generation
Whenever I build a new website, I almost never open AI right away. Instead, I start with research finding other websites with similar functions and gathering references that successfully solve real user problems.
Only then do I break them down: why the navigation feels comfortable, why the product page is easy to understand, why the animations are subtle and not distracting, and why the checkout process is so fast.
I do not copy the entire design. I only take small ideas that work, combine them with other references, and adapt them to the needs of the product I am building. Once the vision is clear, I use AI to speed up execution, not to replace the thinking process.

## AI Should Be an Assistant, Not the Lead Designer
Many people treat AI like a "Generate Website" button. In reality, it is much more effective to treat it like an assistant. The more specific your directions, the better the output. Instead of writing "make a modern landing page," it is much better if you already have a vision, such as a hero with an editorial layout like Website A, minimalist navigation like Website B, button microinteractions like Website C, smooth scroll animations without lagging, and a primary focus on checkout speed.
AI works much better when we already know what we want to make, rather than leaving all design decisions to it.

## Taste Cannot Be Generated
There is one thing often forgotten when discussing AI: taste. The ability to distinguish between what is average and what is truly high quality. Taste does not develop overnight. It is built by looking at hundreds of good designs, using dozens of products, reading, discussing, receiving criticism, and constantly evaluating your own work. The broader your references, the better decisions you make. That decision-making is something automation cannot replace.

## AI Does Not Replace Design Fundamentals
In fact, the easier AI is to use, the more important it is to understand design fundamentals from visual hierarchy, typography, whitespace, composition, contrast, and grids, to user flow. These principles do not disappear just because we can build a UI in minutes. Instead, these fundamentals help us judge whether the AI output is actually good to use or needs to be improved. Without this understanding, we are just people accepting outputs, not real designers.

## Memorable Websites Are Not Born from Short Prompts
AI will continue to evolve. In a few years, making a website might take only a few seconds. But one thing remains hard to replace: the human ability to observe, select, combine, and make the right design decisions.
Because a good website is not the one that looks like an AI output, but the one that has character, understands its users, and feels thoughtfully crafted. 
AI can speed up the interface building, but the feel, identity, and quality of a design still depend on the person using it.
          `,
        },
        {
          id: 3,
          gambar: "/assets/article3.webp",
          kategori: "Technology & Skills",
          tanggal: "July 01, 2026",
          baca: "5 min read",
          nama: "In the AI Era, the Most Valuable Skill is Not Coding or Design",
          desk: "As AI tools make software building incredibly easy, the human value shifts away from technical execution to experience, perspective, and taste.",
          isi: `
A few years ago, building a website required a whole team, time, and serious technical skills. 
Today, a single prompt can generate an entire application. UIs are created in seconds, code runs instantly, illustrations are generated on the fly, videos are starting to be automated, and AI agents are beginning to manage schedules and tasks. This is just a few years into generative AI, making it hard to imagine what will be possible in five or ten years.
## This leads to a question I often hear: if AI is getting so smart, what skills are still worth learning?
In my opinion, the answer is not a specific technical skill. 
The things that will become most valuable are those that cannot be downloaded into an AI model.
## Experience Shapes Perspective
I work across several creative fields, from graphic design and web development to video editing. All the tools I use are now assisted by AI, but the final output still depends on one thing: my own experience.
Take video editing, for example. I do not just cut clips or add transitions. I choose the exact moment to make the audience laugh, set the visual rhythm, and build emotion through storytelling. These decisions do not come from software. They are shaped by past projects, videos I have watched, mistakes I have made, and my interactions with people. 
AI can assist the process, but experience remains the source of that creative decision.
## Creativity is More Than Generating New Things
Many people think AI is creative because it can generate beautiful posters, illustrations, or videos. I agree that AI is excellent at producing variations. But human creativity works a bit differently.
We connect experiences that seem completely unrelated conversations with friends, jokes heard while hanging out, films we have watched, books we have read, and personal problems we have faced. All these references blend into a unique perspective. 
Two people can use the exact same AI tool and prompts, but produce completely different works because they bring different life experiences to the table. AI helps build the piece, but humans give it character.
## References Build Taste
One of the hardest things to learn is taste the ability to distinguish between what is average and what is truly exceptional. Taste does not come from a single prompt. It is built by regularly observing good design, trying different products, reading, discussing, receiving feedback, and constantly evaluating one's own work. 
The broader your references, the better decisions you make. That decision-making is something automation cannot replace.
## AI is a Tool, Not a Replacement for Perspective
I believe AI will continue to take over repetitive and technical tasks. This is not something to fear. Instead, it gives us more time to focus on what is truly valuable: thinking, understanding people, building concepts, and making better decisions.
Since in the end, AI can generate thousands of possibilities, but humans must decide which possibility is worth bringing to life. 
As AI evolves, it becomes clear that human value lies not just in what we can build, but in the experience, perspective, creativity, and judgment we bring to every creation.
          `,
        },
        {
          id: 4,
          gambar: "/assets/article4.webp",
          kategori: "Personal & Mindset",
          tanggal: "July 03, 2026",
          baca: "7 min read",
          nama: "My Journey to Building a Builder's Mindset",
          desk: "Transitioning from Russian Literature to software engineering, I realized that the most crucial asset isn't just coding it's the relentless mindset of a builder.",
          isi: `
# My Journey to Building a Builder's Mindset
Back then, if anyone had asked, "Why study Russian Literature if you ultimately want to work in IT?", I probably would have struggled to answer. At first glance, there really is no connection.
## One is about language and culture, while the other is about building applications.
But after spending several years navigating both, I have realized that every phase is interconnected. Nothing was truly in vain. What I have been building all this time is not just a collection of skills. I have been building something far more crucial: **the mindset of a builder.**
## In the Beginning, I Just Wanted Time
My reason for choosing a literature major was actually quite simple. My mindset at the time was, "as long as my college schedule isn't too demanding, I can still learn other skills outside of campus." It might sound odd, but that decision turned out to be the starting point of everything.
From my very first semester, I threw myself into various student organizations and committees. Almost all of my roles revolved around publications, graphic design, multimedia, and documentation. Back then, I was frequently working on motion graphics, video editing, aftermovies, and even 3D visuals. Over time, the creative world became the space where I truly grew.
## Organizations Taught Me More Than Just Design
In these student organizations, my job wasn't just to make posters. I designed logos, created visual identities for student bodies, curated Instagram grids, built banners, animated event bumpers, handled event documentation, and edited aftermovies. Everything shared one common trait: they had to be executed with high standards, because every piece of work I put out carried my own name, the organization's reputation, and even the department's brand.
Whenever there were inter-department competitions or events, I always wanted our team's visual assets to look highly polished. I loved it when my department could come up with fresh creative ideas before anyone else did. Without realizing it, those experiences shaped my way of thinking not just about design, but about quality standards, ownership, and the habit of continuous improvement. The more projects I handled, the more refined my creativity, visual taste, and ability to read shifting trends became.
## When the Programming World Began to Call
As I entered my sixth and seventh semesters, my organizational activities began to wind down. For the first time in a while, finally had a lot of time for self-reflection. That was when I remembered a goal that had been in my mind since before college: stepping into the world of IT.
One of the defining moments was watching Timothy Ronald's podcast with Deddy Corbuzier in early 2023. Around the same time, the first generation of ChatGPT was gaining public attention. Seeing technology accelerate so rapidly, I felt drawn to it. Not because of the hype, but because I realized this field forces you to learn continuously. And I genuinely love the learning process.
## Why Web development and Frontend?
People ask why I chose frontend development first. The answer is simple: because I wanted my creations to be immediately visible to the user.
My background in graphic design made the transition to frontend feel very natural. I already understood layouts, colors, typography, and visual hierarchy, so the only missing puzzle was translating those concepts into code. The opportunity to join the ReactJS Bootcamp for Frontend Developers at Hacktiv8 solidified my path. From that point on, I began building various applications using the MERN Stack, complete with my own branding and visual identities. I wasn't just learning how to build websites; I was learning how to build digital products.
## The Design Foundation I am Now Grateful For
Looking back, I am incredibly grateful for the time I spent mastering graphic design. It became a foundational skill that heavily supports me now, especially when leveraging AI. If I hadn't learned design fundamentals first and jumped straight into writing AI design prompts, the outputs would never look as polished as they do now.
AI is merely a tool that executes our direction. If we lack the understanding of layout, composition, visual hierarchy, or color theory, we will struggle to evaluate whether an AI output is truly high-quality or still needs refinement. I experience this difference firsthand. When prompting AI to generate a layout, I don't just accept the first result.
## I can identify these details because I was trained to design things from scratch.
For me, graphic design is not a skill made obsolete by AI. Instead, it is the exact leverage that allows me to utilize AI to its fullest potential.
## Trying Many Things Doesn't Mean Losing Direction
To an outsider, it might look like I was jumping between unrelated fields. But the deeper I got, the more I realized they all complement one another.
## Design teaches creativity and visual communication. Literature teaches us to understand humans, culture, and diverse perspectives. Programming trains systematic and logical thinking. AI opens new ways to work efficiently through automation. None of these skills exist in a vacuum; they all form the exact same foundation.
## What I Am Truly Trying to Build
Today, my roadmap is clear: mastering my foundation as a web developer, expanding into mobile development, and eventually diving deeper into AI integrations and blockchain.
But as I move forward, I realize the ultimate goal is not just about mastering a set of technologies. What I am truly trying to build is a way of thinking. The mindset of a builder. A mindset that looks at every problem as something solvable, and a drive to create things, no matter how small they are.
At the end of the day, my journey is not about transitioning from Russian Literature to IT. It is about gathering pieces of experience that shape my identity today. A builder who believes that technology is just a tool. The mindsets that truly matter are the ones that drive us to keep learning, keep building, and keep creating things that deliver real value.
`,
        },
      ],
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
    },
  },
  id: {
    preloader: {
      tagline: "Welcome to Aditya's",
    },
    sidebar: {
      role: "he/him",
      aboutTitle: "ABOUT",
      aboutText:
        "Product Designer dan Web Developer yang berdomisili di Jakarta, saat ini fokus pada Frontend / Fullstack MERN dengan pengalaman lebih dari 1 tahun dalam membangun aplikasi web.",
      contactTitle: "CONTACT",
      techTitle: "TECH STACK",
      githubTitle: "AKTIVITAS GITHUB",
      githubContributions: "kontribusi",
      githubInLast6Months: "dalam 6 bulan terakhir",
      githubLess: "Sedikit",
      githubMore: "Banyak",
      langTitle: "LANGUAGES",
      langList: [
        { name: "Indonesia", flag: "🇮🇩" },
        { name: "Inggris", flag: "🇬🇧" },
        { name: "Rusia", flag: "🇷🇺" },
      ],
    },
    home: {
      intro: "Intro",
      quote: "I start with real problems...",
      title: "Hi, I'm Aditya Fajar SY",
      bio: "Membangun aplikasi digital dengan menerjemahkan masalah nyata menjadi solusi yang bermakna. Kombinasi latar belakang Bahasa, Desain Grafis, dan Software Engineering, saya percaya produk yang baik lahir ketika riset, experience pengguna, dan teknologi bekerja sebagai satu kesatuan. Teknologi bukan titik awal, memahami masalah adalah langkah pertama dalam membangun produk yang bernilai.",
      downloadCv: "Download CV",
      connectMe: "Connect with me",
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
          id: 3,
          gambar: "/assets/project3/cover-thumora.webp",
          nama: "Thumora AI",
          desk: "Platform kreasi thumbnail berbasis AI yang dirancang untuk mengubah konsep konten sederhana menjadi thumbnail siap pakai dengan usaha minimal.",
          subtitle:
            "Platform Generator Thumbnail Berbasis AI yang dirancang untuk alur kerja kreator nyata, arsitektur streaming SSE yang andal, dan ekosistem inspirasi komunitas.",
          about:
            "Thumora AI adalah workspace pembuatan thumbnail bertenaga AI yang dirancang khusus untuk alur kerja kreator konten. Lebih dari sekadar pemanggil API biasa, platform ini mengintegrasikan prompt enhancer cerdas, sistem gaya visual modular, arsitektur generasi ganda (streaming SSE & non-streaming reference fallback), proteksi kuota, dan platform inspirasi komunitas.",
          category: "AI Product Engineering",
          facts: [
            "Produk AI",
            "Solo Build",
            "2026",
            "React + TypeScript",
            "Express + MongoDB",
            "OpenRouter + Cloudinary",
          ],
          tools: [
            "React",
            "TypeScript",
            "Express",
            "MongoDB",
            "OpenRouter",
            "Cloudinary",
            "Tailwind CSS",
            "SSE",
          ],
          images: [],
          link: "https://thumoraai.vercel.app",
          meta: {
            date: "2026",
            role: "Product / UI/UX / Fullstack",
            category: "AI Product Engineering",
            team: "Solo",
            status: "Live",
          },
        },
        {
          id: 4,
          gambar: "/assets/project4/cover-icon.webp",
          nama: "SALDO",
          desk: "Aplikasi pelacak keuangan efisien bertenaga natural language capture, mengubah pencatatan keuangan harian dari rutinitas membosankan menjadi percakapan alami.",
          subtitle:
            "Efficient Money Tracker — Natural language financial capture, pace-aware forecasting, dan desain editorial yang menenangkan.",
          about:
            "Mengelola uang tidak seharusnya terasa seperti akuntansi. SALDO adalah aplikasi pelacak keuangan efisien yang dibangun dari premis sederhana: mencatat pengeluaran seharusnya semudah menceritakan apa yang terjadi. Dilengkapi interpretasi natural language multi-item, analisis perbandingan periode, forecasting belanja, dan sistem visual yang tenang.",
          category: "Financial Technology",
          facts: [
            "Aplikasi Fintech",
            "Solo Build",
            "2026",
            "React + Node.js",
            "MongoDB + Express",
            "OpenRouter AI",
          ],
          tools: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "OpenRouter",
            "Tailwind CSS",
            "Vercel",
          ],
          images: [],
          link: "https://usesaldo.vercel.app",
          meta: {
            date: "2026",
            role: "Product / UI/UX / Fullstack",
            category: "Financial Technology",
            team: "Solo",
            status: "Live",
          },
        },
        {
          id: 1,
          gambar: "/assets/project1/banner_utama.webp",
          video: "/assets/project1/demo_homePage.webm",
          nama: "PPID Digital Ecosystem",
          desk: "Ekosistem digital pemerintah yang lengkap, dikembangkan selama magang di Kementerian PANRB, terdiri dari portal informasi publik, sistem manajemen permohonan informasi, dan CMS.",
          subtitle:
            "Ekosistem digital modern untuk pengelolaan informasi dan dokumentasi publik Indonesia, terdiri dari portal informasi publik, platform manajemen permohonan informasi, dan sistem manajemen konten.",
          about:
            "PPID Digital Ecosystem adalah ekosistem digital yang dikembangkan selama saya magang di Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi (Kementerian PANRB). Ekosistem ini memodernisasi layanan PPID yang ada dengan mendesain ulang user experience, redesign frontend, mengefisienkan alur kerja internal, dan memperbaiki proses manajemen konten yang sudah usang. Proyek ini terdiri dari tiga modul yang terintegrasi : Portal PPID (Website Publik), SIPIPI (Sistem Manajemen Permintaan Informasi PPID), dan CMS (Sistem Manajemen Konten), semuanya merupakan satu ekosistem yang terintegrasi.",
          facts: [
            "Proyek Pemerintah",
            "Proyek Magang",
            "6 Bulan",
            "Tim 2 Developer",
            "Production Ready",
            "Menunggu Penetration Testing",
          ],
          modules: [
            {
              name: "Portal PPID",
              label: "Website Publik",
              type: "public",
              icon: "globe",
              desc: "Website publik sebagai sarana masyarakat dapat mengakses informasi publik, membaca berita terkait, mengunduh dokumen publik seperti laporan keuangan ataupun LHKPN p, mengakses FAQ, mengajukan permohonan informasi, dan melacak statusnya secara real time.",
              features: [
                "Akses informasi publik",
                "Baca artikel berita",
                "Unduh dokumen publik",
                "Mengakses FAQ",
                "Mengajukan permohonan informasi",
                "Melacak status permohonan informasi secara real time",
              ],
            },
            {
              name: "SIPIPI",
              label: "Manajemen Permintaan Internal",
              type: "internal",
              icon: "server",
              desc: "Platform internal bagi pejabat PPID untuk mengelola alur penuh permohonan informasi publik dari penerimaan hingga respons.",
              features: [
                "Terima permohonan baru",
                "Verifikasi pengajuan",
                "Proses dan tinjau permohonan",
                "Unggah dokumen yang diminta",
                "Kirim respons ke pemohon",
                "Perbarui status permohonan",
                "Notifikasi email otomatis",
              ],
            },
            {
              name: "CMS",
              label: "Sistem Manajemen Konten",
              type: "internal",
              icon: "edit",
              desc: "Sistem manajemen konten yang terintegrasi dalam aplikasi yang sama, menggantikan alur kerja WordPress sebelumnya dan memungkinkan administrator mengelola seluruh konten Portal PPID.",
              features: [
                "Manajemen banner",
                "Artikel berita",
                "Manajemen FAQ",
                "Dokumen publik",
                "Konten video",
                "Data informasi publik",
                "Konten portal lainnya",
              ],
            },
          ],
          responsibilities: [
            {
              category: "Riset UX & Strategi",
              items: [
                "Riset UX",
                "Benchmarking Kompetitor",
                "Arsitektur Informasi",
              ],
            },
            {
              category: "Desain",
              items: [
                "Desain UI",
                "Desain UX",
                "Wireframing",
                "Prototipe High-Fidelity",
              ],
            },
            {
              category: "Pengembangan Frontend",
              items: [
                "Pengembangan Frontend",
                "Pengembangan Responsif",
                "Desain Komponen",
                "Integrasi Frontend-Backend",
              ],
            },
            {
              category: "Deployment & Media",
              items: [
                "Demo Produk via Vercel",
                "Kolaborasi Deployment",
                "Desain Multimedia",
                "Konten Kreatif",
              ],
            },
          ],
          timeline: [
            {
              phase: "Riset",
              desc: "Riset UX, benchmarking kompetitor, dan analisis flow pengguna",
            },
            {
              phase: "Desain UI & UX",
              desc: "Wireframing, prototipe high-fidelity, dan pembuatan sistem desain",
            },
            {
              phase: "Prototipe",
              desc: "Tinjauan prototipe interaktif dan sesi umpan balik pemangku kepentingan",
            },
            {
              phase: "Pengembangan Frontend",
              desc: "Pengembangan komponen, layout responsif, dan implementasi UI lengkap",
            },
            {
              phase: "Integrasi Backend",
              desc: "Integrasi API, pengambilan data, dan koneksi sistem frontend-backend",
            },
            {
              phase: "Deployment",
              desc: "Containerisasi Docker dan deployment produksi ke server Ubuntu",
            },
          ],
          techStack: {
            frontend: [
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "TanStack",
              "Radix UI",
            ],
            backend: ["Prisma", "MariaDB", "MinIO"],
            deployment: ["Docker", "Ubuntu Server", "SSH"],
          },
          results: [
            "Desain ulang website portal ppid yang usang menjadi ekosistem digital modern yang aksesibel",
            "Membangun sistem desain UI/UX lengkap dengan identitas visual yang konsisten di ketiga platform",
            "Mempersingkat alur permohonan informasi publik menjadi satu platform yang terintegrasi",
            "Menggantikan CMS lama dengan sistem manajemen konten yang dibangun khusus",
            "Meningkatkan responsivitas mobile dan aksesibilitas sesuai standar digital pemerintah",
            "Mengintegrasikan pelacakan permohonan informasi secara real time dan notifikasi email otomatis untuk masyarakat",
            "Disetujui oleh pemangku kepentingan proyek setelah tinjauan menyeluruh",
          ],

          tools: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "TanStack",
            "Radix UI",
            "Prisma",
            "MariaDB",
            "MinIO",
            "Docker",
            "Ubuntu",
          ],
          images: [
            "/assets/project1/demo_homePage.webm",
            "/assets/project1/DIP_Grid.webp",
            "/assets/project1/Laporan-statistika_grid.webp",
            "/assets/project1/berita-grid.webp",
            "/assets/project1/faq-grid.webp",
            "/assets/project1/lacak-permohonan_grid.webp",
            "/assets/project1/laporan_evaluasi_grid.webp",
            "/assets/project1/permohonan-informasi-grid.webp",
            "/assets/project1/statistiklaporan_grid.webp",
          ],
          link: "",
          meta: {
            date: "2026",
            role: "Frontend Dev & UI/UX Designer",
            category: "Platform Digital Pemerintah",
            team: "2 Developer",
            duration: "6 Bulan",
            client: "Kementerian PANRB",
            status: "Production Ready",
          },
        },
        {
          id: 2,
          gambar: "/assets/project2/banner_cover.webp",
          nama: "Builder's Archive",
          desk: "Sistem identitas digital pribadi yang dirancang untuk mengomunikasikan cara berpikir, filosofi desain, dan proses engineering, bukan sekadar menampilkan proyek.",
          subtitle:
            "Identitas digital pribadi yang dirancang untuk mengomunikasikan cara berpikir, meneliti, mendesain, dan mengerjakan produk digital, bukan sekadar website portfolio biasa.",
          about:
            "Builder's Archive adalah website portfolio saya. Tapi ini bukan sekadar portfolio. Ini adalah sistem identitas digital yang dibangun untuk mengomunikasikan filosofi desain, proses kreatif, dan kemampuan engineering saya. Setiap keputusan visual, setiap interaksi, dan setiap kata di website ini ada untuk menceritakan bagaimana saya mendekati masalah dan membangun produk.",
          category: "Creative Engineering",
          facts: [
            "Proyek Pribadi",
            "Solo Build",
            "2026",
            "React + Vite",
            "Framer Motion",
            "Bilingual (EN/ID)",
          ],
          tools: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "JavaScript",
            "Vercel",
          ],
          images: [],
          link: "",
          meta: {
            date: "2026",
            role: "Product Designer & Frontend Engineer",
            category: "Creative Engineering",
            team: "Solo",
            status: "Live",
          },
        },
      ],
    },
    builderDetail: {
      heroLabel: "Studi Kasus",
      heroSubtitle:
        "Identitas digital pribadi yang dirancang untuk mengomunikasikan cara berpikir, meneliti, mendesain, dan mengerjakan produk digital, bukan sekadar portfolio biasa.",
      metaRole: "Peran",
      metaTeam: "Tim",
      metaYear: "Tahun",
      metaCategory: "Kategori",
      metaStack: "Stack",
      techLabel: "Teknologi",

      whyLabel: "Origin",
      whyTitle: "Mengapa Ini Dibuat",
      whyBody: [
        "Branding bukan sekadar visual. Branding adalah cara sebuah produk dikenali sebelum dijelaskan.",
        "Selama bertahun-tahun saya menggeluti berbagai referensi dari berbagai disiplin: desain, branding, software engineering, esports, streetwear, crypto, investasi, editorial, publikasi, media sosial dan teknologi. Bukan untuk menirunya, tetapi untuk memahami bagaimana sebuah karya mampu membangun identitas yang kuat dan memberikan kesan.",
        "Website ini adalah hasil dari proses tersebut. Tempat di mana semua pengalaman, referensi, dan cara berpikir diterjemahkan menjadi bahasa visual yang utuh.",
      ],
      influencesLabel: "INFLUENCES",
      influencesTitle: "Every Reference Left a Mark",
      influencesCaption: [
        "Tidak hanya satu referensi yang membentuk website ini.",
        "Identitas visual dari website ini merupakan hasil akumulasi dari berbagai dunia yang saya amati mulai dari branding esports, budaya streetwear, bahasa & budaya, organisasi kreatif, hingga software engineering.",
        "Setiap referensi mengajarkan prinsip yang berbeda. Website ini adalah hasil seluruh prinsip tersebut bertemu dalam satu bahasa visual.",
      ],
      influencesStoryTitle: "Short Story",
      influencesStory: [
        "Selama kuliah, saya menempuh pendidikan di bidang Sastra Rusia. Di luar kelas, saya menghabiskan waktu di dunia desain, publikasi, media kreatif, copywriting, dan organisasi. Saya menyadari bahwa membangun produk bukan hanya soal visual, tetapi juga tentang bagaimana sebuah pesan dapat dikomunikasikan dengan baik.",
        "Rasa ingin tahu membawa saya ke berbagai dunia yang tampaknya tidak saling berhubungan. Saya mulai mempelajari branding, software engineering, Web3, crypto, hingga budaya streetwear. Bukan untuk mengikuti tren, melainkan untuk memahami mengapa sebuah karya mampu dikenali, diingat, dan memiliki identitas yang kuat.",
        "Salah satu referensi yang paling membekas adalah identitas visual 100 Thieves dan The Final Tribe (Dota2). Saya tertarik melihat bagaimana mereka membangun karakter melalui tipografi handwriting, layout editorial, dan konsistensi di setiap media. Di sisi lain, kolaborasi BLUM × Pokras Lampas memperkenalkan saya pada bahasa visual yang lebih eksperimental yakni graffiti, simbol, dripping elements, dan nuansa hacker yang kemudian banyak memengaruhi eksplorasi visual saya.",
      ],
      intentionLabel: "BUILT WITH INTENTION",
      intentionTitle: "Every visual decision exists for a reason.",
      intentionCaption:
        "Di balik setiap elemen visual terdapat alasan yang dapat dijelaskan. Tidak ada keputusan yang dibuat hanya karena terlihat bagus.",
      intentionCards: [
        {
          num: "01",
          title: "Problem Before Pixels",
          desc: "Sebelum menentukan warna, animasi, atau layout, saya selalu memulai dengan memahami apa yang ingin dikomunikasikan. Visual digunakan sebagai jawaban, bukan sebagai titik awal.",
          shortDesc:
            "Visual digunakan sebagai jawaban atas masalah, bukan sekadar titik awal.",
        },
        {
          num: "02",
          title: "Identity Before Decoration",
          desc: "Handwriting, dripping graffiti, typography, dan simbol bukan sekadar dekorasi. Semuanya dipilih untuk membangun karakter visual yang mudah dikenali.",
          shortDesc:
            "Elemen dipilih untuk membangun karakter visual yang kuat & konsisten.",
        },
        {
          num: "03",
          title: "Motion With Purpose",
          desc: "Animasi digunakan untuk mengarahkan perhatian, memperjelas transisi, dan menciptakan ritme membaca. Motion mendukung experience.",
          shortDesc:
            "Motion digunakan untuk memperjelas transisi & ritme membaca.",
        },
        {
          num: "04",
          title: "Consistency Creates Trust",
          desc: "Warna, tipografi, spacing, komponen, dan interaksi dalam satu sistem. Konsistensi menciptakan experience sekaligus membangun identitas.",
          shortDesc:
            "Konsistensi menciptakan pengalaman & memperkuat identitas.",
        },
        {
          num: "05",
          title: "Research Shapes Design",
          desc: "Setiap referensi yang saya kumpulkan bukan untuk ditiru, tetapi untuk dipahami. Saya mengamati alasan di balik setiap keputusan desain, lalu menerjemahkannya menjadi bahasa visual yang selaras dengan identitas saya.",
          shortDesc:
            "Referensi dipahami alasannya, lalu diterjemahkan ke bahasa visual.",
        },
        {
          num: "06",
          title: "Engineering Shapes Identity",
          desc: "Implementasi frontend, performa, dan animasi menjadi bagian penting agar experience dapat dirasakan sebagaimana direncanakan.",
          shortDesc:
            "Frontend & optimasi performa agar visual berjalan sesuai rencana.",
        },
      ],
      detailsLabel: "Small Decisions, Big Difference.",
      detailsTitle: "Things You Probably Didn't Notice",
      detailsCaption:
        "Art tidak dibentuk oleh satu ide besar, melainkan oleh puluhan keputusan kecil yang bekerja bersama.",
      detailsQuote:
        "Identitas tidak dibangun oleh satu ide besar.\n\nIa dibentuk oleh ratusan keputusan yang disengaja.",
      philosophyLabel: "BUILDING PHILOSOPHY",
      philosophyTitle: "I don't collect references. I collect principles.",
      philosophyBody: [
        "Selama proses membangun website ini, saya tidak pernah mencoba meniru hanya satu desain tertentu. Yang saya pelajari adalah alasan mengapa setiap keputusan dibuat, mengapa tipografi tertentu yang digunakan, mengapa sebuah layout mudah dipahami, atau mengapa sebuah identitas visual bisa diingat bahkan sebelum produknya digunakan.",
        "Pada akhirnya, website ini bukan hanya tentang streetwear, editorial, engineering, atau branding. Ini adalah usaha menerjemahkan berbagai pelajaran tersebut menjadi sebuah sistem yang terasa konsisten dan memiliki identitasnya sendiri.",
      ],
      philosophyQuote:
        "Good design isn't about originality.\nIt's about making good decisions consistently.",
      philosophySign: "— Aditya Fajar",

      foundationsLabel: "Fondasi",
      foundationsTitle: "Fondasi Kreatif",
      foundations: [
        {
          icon: "problem",
          title: "Problem Solving",
          desc: "Segalanya dimulai dari mengidentifikasi masalah nyata pengguna, bukan dari memilih teknologi terlebih dahulu.",
        },
        {
          icon: "research",
          title: "Research",
          desc: "Setiap keputusan visual didukung oleh observasi, inspirasi, dan benchmarking dari berbagai industri.",
        },
        {
          icon: "design",
          title: "Design Language",
          desc: "Identitas visual yang konsisten dibangun dari tipografi, warna, simbol, elemen tulisan tangan, dan motion.",
        },
        {
          icon: "code",
          title: "Engineering",
          desc: "Menerjemahkan design system menjadi arsitektur frontend yang responsif, scalable, dan siap produksi.",
        },
      ],

      journeyLabel: "Perjalanan",
      journeyTitle: "Perjalanan Inspirasi",
      journey: [
        {
          era: "Sastra Rusia",
          desc: "Belajar storytelling, struktur narasi, dan cara ide dikomunikasikan dalam konteks budaya yang berbeda.",
        },
        {
          era: "Desain Grafis",
          desc: "Memahami komposisi, tipografi, hierarki visual, dan tata bahasa komunikasi visual.",
        },
        {
          era: "Organisasi Media Kreatif",
          desc: "Belajar branding system, konsistensi media sosial, creative direction, dan kolaborasi tim.",
        },
        {
          era: "Crypto & Web3",
          desc: "Terinspirasi dari simbol graffiti BLUM, estetika dripping, visual hacker, dan identitas digital eksperimental.",
        },
        {
          era: "Valorant Esports",
          desc: "Terinspirasi dari branding 100 Thieves, tipografi tulisan tangan, layout bold, dan identitas kompetitif premium.",
        },
        {
          era: "Frontend Engineering",
          desc: "Menggabungkan semua disiplin sebelumnya menjadi satu pengalaman digital yang interaktif dan reaktif.",
        },
      ],

      visualLabel: "Design System",
      visualTitle: "Visual Language",
      visual: [
        {
          key: "typography",
          title: "Tipografi",
          detail: "Inter + Nothing You Could Do",
          desc: "Inter memberikan kejelasan teknis dan presisi profesional. Nothing You Could Do menambahkan ketidaksempurnaan manusiawi, kehangatan, dan kepribadian. Kontras antara keduanya adalah hal yang disengaja.",
        },
        {
          key: "color",
          title: "Sistem Warna",
          detail: "Blue #3B82F6",
          desc: "Biru merepresentasikan kejernihan, teknologi, kepercayaan, dan fokus. Ini adalah warna dari systems thinking, presisi kreatif, dan momentum ke depan.",
        },
        {
          key: "handwriting",
          title: "Tipografi Tulisan Tangan",
          detail: "Kontras personal",
          desc: "Elemen tulisan tangan menciptakan kontras terhadap layout teknis yang bersih. Mereka membuat antarmuka terasa lebih personal, kurang korporat, dan lebih manusiawi.",
        },
        {
          key: "graffiti",
          title: "Simbol Graffiti",
          detail: "Identitas jalanan",
          desc: "Graffiti merepresentasikan eksperimentasi, kreativitas, dan ekspresi manusia yang tidak sempurna. Ini menambahkan lapisan identitas subkultural pada portfolio yang secara teknis.",
        },
        {
          key: "editorial",
          title: "Layout Editorial",
          detail: "Hierarki majalah",
          desc: "Tipografi besar, whitespace yang kuat, grid asimetris. Terinspirasi dari desain editorial — konten disajikan dengan percaya diri dan keahlian.",
        },
        {
          key: "motion",
          title: "Motion",
          detail: "Terarah & intentional",
          desc: "Animasi halus tapi terkontrol. Setiap gerakan memiliki tujuan. Interaksi harus terasa intentional, bukan dekoratif.",
        },
      ],

      refsLabel: "Referensi",
      refsTitle: "Referensi Desain",
      refsNote:
        "Bukan moodboard. Setiap referensi mengajarkan sesuatu yang spesifik tentang identitas, hierarki, dan keahlian.",
      refs: [
        {
          name: "100 Thieves",
          tag: "Esports Brand",
          lesson:
            "Tipografi tulisan tangan yang bold, hierarki visual yang percaya diri, dan identitas brand premium yang dibangun di sekitar eksklusivitas dan relevansi budaya.",
        },
        {
          name: "BLUM",
          tag: "Crypto / Web3",
          lesson:
            "Simbol graffiti, estetika dripping, visual budaya hacker, dan identitas digital eksperimental yang melanggar aturan UI konvensional.",
        },
        {
          name: "Editorial Websites",
          tag: "Digital Publishing",
          lesson:
            "Tipografi dominan yang besar, layout terstruktur bersih, grid asimetris, dan storytelling melalui spacing dan hierarki konten yang disengaja.",
        },
        {
          name: "Luxury Branding",
          tag: "Minimalism",
          lesson:
            "Kepercayaan diri melalui pengendalian diri. Spacing premium. Sistem visual abadi yang bertahan lama karena menghilangkan yang tidak perlu.",
        },
        {
          name: "Apple",
          tag: "Product Design",
          lesson:
            "Kejelasan lebih penting dari kecerdikan. Kesederhanaan sebagai keputusan desain. Presentasi product-first dan konsistensi interaksi di setiap touchpoint.",
        },
      ],

      processLabel: "Proses",
      processTitle: "Proses Desain",
      process: [
        {
          phase: "Research",
          desc: "Mengumpulkan referensi dari branding, teknologi, editorial design, gaming, crypto, dan industri fashion.",
        },
        {
          phase: "Strategy",
          desc: "Mendefinisikan kepribadian, sistem identitas, dan arah emosional dari kehadiran digital.",
        },
        {
          phase: "Wireframe",
          desc: "Membuat hierarki informasi, struktur konten, dan arsitektur layout sebelum desain visual.",
        },
        {
          phase: "Visual Design",
          desc: "Mengembangkan design language lengkap — tipografi, warna, spacing, motion, dan komponen.",
        },
        {
          phase: "Prototype",
          desc: "Menguji interaksi, transisi, dan animasi untuk memastikan motion yang intentional, bukan dekoratif.",
        },
        {
          phase: "Development",
          desc: "Implementasi menggunakan React, Vite, Tailwind CSS, Framer Motion, dan arsitektur komponen responsif.",
        },
        {
          phase: "Iteration",
          desc: "Perbaikan berkelanjutan berdasarkan usability testing, review konsistensi visual, dan feedback pribadi.",
        },
      ],

      engLabel: "Engineering",
      engTitle: "Keputusan Engineering",
      engFrontend: "Frontend",
      engAnimation: "Animasi",
      engDeployment: "Deployment",
      engPerformance: "Performa",
      engFrontendItems: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      engAnimationItems: ["Framer Motion"],
      engDeploymentItems: ["Vercel"],
      engPerformanceItems: [
        "Optimasi Gambar",
        "Code Splitting",
        "Lazy Loading",
        "Optimasi SEO",
        "Aksesibilitas",
        "Responsive Design",
      ],
      engFrontendNote:
        "React + Vite memberikan pengalaman development yang cepat dan pipeline build production-grade. Tailwind memaksakan konsistensi desain melalui sistem utility-first.",
      engAnimationNote:
        "Framer Motion memungkinkan animasi berbasis fisika yang deklaratif, terasa natural dan intentional — bukan transisi CSS yang ditempel belakangan.",
      engDeploymentNote:
        "Edge network Vercel menyediakan pengiriman terdistribusi secara global dengan CI/CD tanpa konfigurasi, memungkinkan rollback instan dan preview deployments.",

      galleryLabel: "Galeri",
      galleryTitle: "Galeri Interface",
      galleryNote:
        "Screenshot terpilih dari berbagai section portfolio, menampilkan visual language dalam konteks nyata.",
      galleryGroups: [
        "Halaman Utama",
        "Artikel",
        "Proyek",
        "Detail Proyek",
        "Tentang",
        "Mobile",
      ],

      outcomesLabel: "Hasil",
      outcomesTitle: "Hasil Proyek",
      outcomes: [
        {
          title: "Identitas Digital Terpadu",
          desc: "Visual language yang konsisten di setiap halaman dan interaksi.",
        },
        {
          title: "Portfolio Berbasis Cerita",
          desc: "Mengomunikasikan proses dan cara berpikir, bukan hanya menampilkan hasil akhir.",
        },
        {
          title: "Sepenuhnya Responsif",
          desc: "Layout dan interaksi yang dioptimalkan untuk desktop, tablet, dan layar mobile.",
        },
        {
          title: "Fokus Performa",
          desc: "Loading cepat, aset yang dioptimalkan, dan overhead bundle minimal.",
        },
        {
          title: "Arsitektur yang Dapat Diperluas",
          desc: "Dirancang untuk berkembang bersama produk, artikel, dan case study di masa depan.",
        },
      ],

      repoLabel: "Source Code",
      repoTitle: "Repository",
      repoPublic: "Publik",
      repoDesc:
        "Source code lengkap tersedia di GitHub. Termasuk dokumentasi dan struktur komponen.",
      repoBtn: "Lihat di GitHub",
    },
    thumoraDetail: {
      sec1Label: "01 / THE PRODUCT",
      sec1Title: "AI Thumbnail Generator untuk Kreator",
      sec1Desc:
        "Thumora membantu kreator mengubah ide sederhana menjadi thumbnail ready to use menjelajahi karya yang sudah ada sebagai referensi untuk karya berikutnya.",

      sec2Label: "02 / THE EXPERIENCE",
      sec2Title: "Dari Ide Menjadi Thumbnail",
      sec2Desc:
        "Alur kerja sederhana yang dirancang mengikuti cara kreator membuat thumbnail: tentukan ide, atur arah visual, generate, dan simpan hasilnya.",

      sec3Label: "03 / SEE IT IN ACTION",
      sec3Title: "In Action",
      sec3Desc:
        "Mulai dari eksplorasi produk hingga proses generasi thumbnail, walkthrough ini memperlihatkan alur kerja nyata aplikasi.",

      sec4Label: "04 / COMMUNITY",
      sec4Title: "Lebih dari Sekadar AI Gen",
      sec4Desc:
        "Thumora juga menyediakan ruang bagi kreator untuk menemukan inspirasi thumbnail, membedah bagaimana thumbnail tersebut dibuat, dan menjadikannya referensi untuk karya sendiri.",

      sec5Label: "05 / PRODUCT DETAILS",
      sec5Title: "Support Responsif all Device",
      sec5Desc:
        "Thumora dibangun sebagai web app responsif, lengkap dengan autentikasi, generasi thumbnail, riwayat generasi pribadi, serta antarmuka yang dioptimalkan untuk desktop dan mobile.",

      sec6Label: "FINAL SHOWCASE",
      sec6Title: "Dibangun untuk Mengubah Ide Menjadi Thumbnail.",
      sec6Desc:
        "Thumora memadukan generasi AI, kontrol visual kreatif, dan inspirasi komunitas dalam satu alur kerja sederhana untuk para kreator.",
    },
    saldoDetail: {
      heroMeta: "STUDI KASUS · 2026 · SOLO BUILD",
      heroTitle: "SALDO — Efficient Money Tracker",
      heroDesc:
        "Mengelola uang tidak seharusnya terasa seperti akuntansi. SALDO mengubah pencatatan keuangan sehari-hari menjadi sebuah percakapan sederhana.",

      sec1Label: "01 — GAGASAN",
      sec1Title: "Mencatat uang butuh hitungan detik, ga pake ribet.",
      sec1Desc:
        "SALDO berawal dari observasi sederhana: mencatat pengeluaran kecil seharusnya tidak memaksa pengguna mengisi berbagai formulir, kategori, akun, dan tanggal secara manual.",

      sec2Label: "02 — PENGALAMAN",
      sec2Title: "Kasihi tau pada SALDO apa yang habis kamu beli.",
      sec2Desc:
        "Ketik sesuai gaya bicara sehari-hari. SALDO menginterpretasikan transaksi dan menyiapkannya untuk konfirmasi.",

      sec3Label: "03 — PRODUK",
      sec3Title: "Interface nyaman untuk keuangan harian.",
      sec3Desc:
        "Pengalaman finansial yang tenang dirancang dengan sentuhan mint halus, permukaan deep forest, dan ruang bernapas yang lega.",

      sec4Label: "04 — APLIKASI",
      sec4Title: "Prinsip yang sama, saat kamu berada di dalam aplikasi.",
      sec4Desc:
        "SALDO menjaga antarmuka tetap tenang agar informasi penting selalu terlihat: apa yang dimiliki, apa yang telah dibelanjakan, dan perkiraan ke depan.",

      sec5Label: "05 — BAHASA VISUAL",
      sec5Title: "Tenang, ekspresif, dan sederhana.",
      sec5Desc:
        "Permukaan soft mint, nuansa deep forest, tipografi ekspresif, dan gerakan organik memberikan bahasa visual yang terasa seperti produk modern, bukan lembar kerja spreadsheet.",

      sec6Label: "06 — HASIL AKHIR",
      sec6Title: "Pelacak uang yang terasa seperti teman ngobrol.",
      sec6Desc:
        "SALDO mengubah rutinitas kecil mencatat uang menjadi pengalaman yang lebih cepat dan menenangkan - tetap menjaga gambaran besar keuangan.",
    },
    ppidDetail: {
      overviewLabel: "Ikhtisar",
      overviewTitle: "Tiga Sistem Terintegrasi",
      archLabel: "Arsitektur Sistem",
      archTitle: "Alur Ekosistem",
      contribLabel: "Kontribusi",
      contribTitle: "Tanggung Jawab Saya",
      contribNote:
        "Saya berfokus pada pengembangan frontend dan desain UI/UX, berkolaborasi erat dengan backend engineer yang bertanggung jawab atas arsitektur backend dan implementasi API.",
      processLabel: "Proses",
      processTitle: "Timeline Pengembangan",
      techLabel: "Teknologi",
      techTitle: "Tech Stack",
      galleryLabel: "Galeri",
      galleryTitle: "Screenshot Portal PPID",
      galleryNote:
        "Interface UI Portal PPID yang bersifat publik. Screenshot sistem internal (SIPIPI & CMS) tidak ditampilkan karena alasan confidential.",
      internalLabel: "Sistem Internal",
      internalTitle: "Platform SIPIPI & CMS",
      internalConfidential: "Rahasia, Tidak Dapat Ditampilkan Publik",
      internalNote:
        "Karena alasan kerahasiaan dan keamanan, platform manajemen internal (SIPIPI & CMS), source code, dan antarmuka administratif tidak dapat dipublikasikan.",
      internalContribNote: "Kontribusi saya pada platform internal meliputi:",
      resultsLabel: "Hasil",
      resultsTitle: "Hasil Proyek",
      repoLabel: "Source Code",
      repoTitle: "Repository",
      repoPrivate: "Privat / Rahasia",
      repoNote: "Proyek ini dikembangkan untuk institusi pemerintah.",
      repoUnavailable: "Source code tidak tersedia",
      publicFlow: "Alur Publik",
      contentFlow: "Alur Konten",
      publicBadge: "Publik",
      internalBadge: "Internal",
      systemNote:
        "CMS & SIPIPI berjalan dalam satu aplikasi internal — tidak perlu sistem terpisah.",
      heroPreview: "Portal PPID — Pratinjau Antarmuka Publik",
      demoVideoLabel: "Portal PPID — Pratinjau Demo Video",
      metaRole: "Peran",
      metaTeam: "Tim",
      flowCitizen: "Masyarakat",
      flowPortal: "Portal PPID",
      flowSipipi: "SIPIPI",
      flowAdmin: "Tinjauan Admin",
      flowEmail: "Notifikasi Email",
      flowResponse: "Masyarakat Menerima Respons",
      flowCms: "Modul CMS",
      flowPublished: "Portal PPID",
      flowNote: "CMS & SIPIPI berjalan dalam satu aplikasi.",
      techFrontend: "Frontend",
      techBackend: "Backend",
      techDeployment: "Deployment",
      internalContributions: [
        "Redesain UX",
        "Pengembangan Frontend",
        "Optimasi Alur Kerja",
        "Integrasi Frontend-Backend",
        "Kolaborasi Deployment",
        "Desain Multimedia",
      ],
      galleryLabels: {
        homepage: "Halaman Utama",
        pubInfo: "Informasi Publik",
        news: "Berita",
        docs: "Dokumen",
        faq: "FAQ",
        req: "Permohonan Informasi",
      },
    },

    education: {
      label: "Education",
      slogan: "education is key",
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
          logo: "/assets/logo-unpad1.webp",
          responsibilities: [
            "Berpartisipasi aktif dalam berbagai organisasi kampus, termasuk Himpunan Mahasiswa Studi Rusia dan Badan Eksekutif Mahasiswa (BEM).",
            "Terlibat dalam pengembangan diri melalui seminar dan lokakarya tentang Desain Grafis, Pengeditan Video, AI, Pemrograman, Keuangan, dan Investasi.",
            "Berkontribusi langsung ke Program Studi Rusia dengan kontribusi dalam desain visual dan pengeditan video untuk kebutuhan akademis dan promosi.",
          ],
        },
      ],
    },
    about: {
      expLabel: "Experience",
      expSlogan: "professional journey",
      expTitle: "Career Journey",
      toolsLabel: "Tools",
      toolsSlogan: "my daily arsenal",
      toolsTitle: "Tech Stack & Workspace",
      toolsDesc:
        "Software, framework, library, bahasa pemrograman, dan aplikasi design yang saya gunakan sehari-hari.",
      showMore: "Selengkapnya",
      showLess: "Sembunyikan",
      listTools: listToolsStaticEn,
      experiences: [
        {
          role: "Web Designer & Frontend Developer",
          company: "Kementerian PANRB",
          period: "Nov 2025 - May 2026",
          location: "Jakarta, Indonesia",
          color: "bg-[#1E293B] border border-slate-700/50",
          desc: "Membuat desain UI/UX lengkap, alur user, pengunjung website, dan perencanaan (agile/scrum) untuk dua aplikasi web portal (PPID & SIPIPI). Berkolaborasi dalam tim dua orang melalui Git, membangun Frontend menggunakan Next.js, TypeScript, Tailwind dan Shadcn UI.",
          descMobile:
            "Membuat desain UI/UX, alur user, pengunjung website, dan perencanaan (agile/scrum) untuk dua aplikasi web portal (PPID & SIPIPI). Berkolaborasi melalui Git untuk membangun frontend Next.js, TypeScript, Tailwind dan Shadcn UI.",
        },
        {
          role: "Career Break",
          company: "Independent Learning",
          period: "Jan 2025 - Nov 2025",
          location: "Remote",
          color: "bg-[#312E81] border border-indigo-700/50",
          desc: "Mengasah keterampilan lintas disiplin ilmu, termasuk automasi AI, product led growth, dan frontend lanjutan, diikuti oleh studi mandiri intensif dalam software development.",
          descMobile:
            "Mengasah keterampilan lintas disiplin ilmu, termasuk automasi AI, product led growth, dan frontend lanjutan, lalu melanjutkan studi mandiri intensif dalam software development.",
        },
        {
          role: "ReactJS for Frontend Developer Bootcamp",
          company: "Hacktiv8 Indonesia",
          period: "Aug 2024 - Dec 2024",
          location: "Jakarta, Indonesia",
          color: "bg-[#450A0A] border border-red-900/40",
          desc: "Transisi dari latar belakang kreatif/multimedia ke web development, membangun keahlian dalam React Frontend, arsitektur komponen, manajemen state, dan alur kerja kolaboratif Git/GitHub.",
          descMobile:
            "Transisi dari latar belakang kreatif/multimedia ke web dev, membangun keahlian dalam React Frontend, arsitektur komponen, manajemen state, dan alur kerja kolaboratif Git/GitHub.",
        },
        {
          role: "Creative Design & Multimedia Lead",
          company: "Universitas Padjadjaran",
          period: "2021 - 2025",
          location: "Sumedang, Indonesia",
          color: "bg-[#451A03] border border-amber-900/40",
          desc: "Memimpin perencanaan desain visual dan produksi multimedia untuk berbagai organisasi dan acara kampus, membangun keterampilan dasar yang kuat dalam tata letak UI/UX, aset grafis, dan alur kerja pengguna.",
          descMobile:
            "Mengarahkan desain aset visual dan produksi multimedia untuk kelompok kampus, membangun keterampilan inti dalam tata letak UI/UX dan arsitektur alur pengguna.",
        },
      ],
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
          gambar: "/assets/article1.webp",
          kategori: "UI/UX & AI",
          tanggal: "27 Juni 2026",
          baca: "5 menit baca",
          nama: "AI Bisa Membuat Web Cantik, Tapi tetep Belum Paham Pengguna.",
          desk: "AI bisa menghasilkan landing page otomatis yang modern dengan instan. Namun, keindahan visual tidak menjamin produk yang sukses memecahkan masalah manusia.",
          isi: `
"Website yang bagus bukanlah website yang paling cantik. Website yang bagus adalah website yang membuat orang cepat menyelesaikan apa yang mereka datang untuk lakukan."
## Beberapa tahun lalu, bikin website itu butuh waktu berminggu-minggu. Sekarang, cukup dengan beberapa kalimat prompt, AI bisa menghasilkan landing page modern, lengkap dengan animasi, dark mode, dan komponen yang kelihatan profesional. 
Sekilas semuanya terlihat mengesankan, tapi ada satu pertanyaan yang jarang ditanyakan: kalau website itu kelihatan bagus, apakah itu berarti website tersebut benar-benar berhasil? Belum tentu. 
Karena pada akhirnya, pengguna nggak datang untuk mengagumi desain kita, mereka datang untuk menyelesaikan sesuatu.
## Website Bukan Lukisan, Tapi Alat
Kemajuan AI sudah mengubah cara kita membangun aplikasi. Sekarang hampir siapa aja bisa bikin website atau mobile app tanpa harus menulis ribuan baris kode dari nol, dan ini perkembangan yang luar biasa. 
Tapi kemudahan itu juga melahirkan kesalahpahaman baru, banyak orang mulai menganggap desain yang menarik adalah tujuan utama dari sebuah produk digital. Padahal desain cuma media. 
## Tujuan sebenarnya adalah membantu user mencapai apa yang mereka inginkan dengan usaha seminimal mungkin.
Website yang indah memang enak dilihat, tapi kalau user kesulitan menemukan tombol yang mereka butuhkan, bingung saat checkout, atau harus nunggu animasi yang kelamaan, ya desain itu udah gagal menjalankan fungsinya.
## Pengguna Datang untuk Tujuan, Bukan untuk Mengagumi UI
Coba pikirkan gimana kita pakai e-commerce. Saat buka aplikasi, kita nggak sedang cari inspirasi desain. Kita nggak mikir "wah, kombinasi warna tombolnya keren ya." Yang kita pikirkan justru jauh lebih sederhana: saya ingin mencari produk, saya ingin membelinya, saya ingin proses pembayarannya cepat. Selesai.
Makin sedikit hambatan menuju tujuan itu, makin baik experience yang dirasakan user. Ini juga alasan kenapa banyak produk digital terbaik justru terlihat sederhana, contohnya Amazon. Bukan karena mereka nggak mampu bikin tampilan yang rumit, tapi karena mereka paham bahwa setiap elemen tambahan punya biaya: biaya perhatian, biaya waktu, dan kadang biaya performa.
## Estetika Tetap Penting, Asalkan Membantu User
Banyak orang salah mengartikan pembahasan ini seolah-olah desain yang indah itu nggak penting. Padahal bukan itu maksudnya. Estetika tetap punya peran yang sangat besar, desain yang baik mampu membangun kepercayaan, menciptakan kesan profesional, dan bikin produk terasa lebih nyaman dipakai. Cuma, estetika seharusnya jadi pendukung experience user, bukan pusat perhatian.
Ambil contoh animasi. Animasi yang baik bisa bantu user paham bahwa sebuah tombol sedang memproses permintaan, kasih transisi yang lebih halus saat pindah halaman, atau nunjukin bahwa sebuah aksi berhasil dilakukan. Semua itu bikin interaksi terasa lebih natural. 
## Sebaliknya, animasi yang kepanjangan cuma bikin user nunggu lebih lama untuk hal yang sebenarnya bisa selesai dalam hitungan detik.
Contoh lainnya microinteraction. Efek kecil saat tombol disentuh, indikator loading yang jelas, atau progress bar ketika mengisi formulir, itu bukan sekadar pemanis visual. Semuanya kasih umpan balik yang bikin user yakin bahwa sistem sedang bekerja. 
Di sinilah estetika benar-benar kasih nilai, bukan karena tampilannya keren, tapi karena membantu pengguna menyelesaikan pekerjaan lebih cepat dan lebih yakin.
## AI Bisa Membuat Interface, Tapi Belum Bisa Memahami Manusia
AI memang jago bikin layout, bisa meniru gaya desain, bisa bikin komponen yang konsisten, bahkan bisa menghasilkan website yang secara visual kelihatan seperti produk buatan perusahaan besar. 
Tapi ada satu hal yang masih butuh manusia, yaitu memahami manusia itu sendiri.
## AI nggak benar-benar tahu kenapa pengguna meninggalkan halaman checkout.
AI nggak bisa merasakan frustrasi seseorang yang harus ngisi formulir kepanjangan. AI juga nggak paham konteks bisnis, perilaku user, atau kebutuhan spesifik dari target audiens tanpa data dan arahan yang jelas. 
Semua keputusan itu tetap butuh cara berpikir seorang product designer, UX designer, engineer, atau product manager. Karena membangun produk digital bukan cuma soal bikin sesuatu yang kelihatan bagus, melainkan memahami masalah apa yang sedang dialami user, lalu mencari cara paling sederhana untuk menyelesaikannya.
## Desain Terbaik Adalah Desain yang Smooth
Semakin berkembangnya AI, proses bikin website juga bakal makin cepat. Kemungkinan besar, beberapa tahun ke depan, bikin aplikasi bakal jauh lebih gampang dibanding hari ini. Justru karena itu, kemampuan fundamental bakal makin bernilai, bukan sekadar bikin tampilan yang indah, melainkan kemampuan memahami manusia: bagaimana mereka berpikir, bagaimana mereka mengambil keputusan, bagaimana mereka merasa bingung, dan bagaimana membantu mereka mencapai tujuan tanpa harus mikir terlalu keras.
Karena pada akhirnya, pengguna nggak akan ingat seberapa keren animasi yang kita buat. 

Mereka akan ingat satu hal yang jauh lebih penting: *website itu membantu saya menyelesaikan pekerjaan dengan mudah.*
          `,
        },
        {
          id: 2,
          gambar: "/assets/article2.webp",
          kategori: "UI/UX Design",
          tanggal: "29 Juni 2026",
          baca: "4 menit baca",
          nama: "Jangan Bikin Desain Website yang Generik",
          desk: "Banyak banget Design website yang mirip semua akhir akhir ini.",
          isi: `
Saya biasanya cuma butuh beberapa detik untuk menebak apakah sebuah website dibuat pakai AI atau tidak. Bukan karena saya anti-AI, justru sebaliknya, saya pakai AI hampir tiap hari untuk bantu proses desain dan development. 
Yang bikin sebuah website gampang dikenali itu bukan karena AI-nya, tapi karena semua keputusan desainnya kok rasanya mirip semua. Hero section sama, layout sama, card dengan bayangan yang itu-itu lagi, gradien ungu-biru yang sama, animasi yang identik, bahkan urutan kontennya pun nyaris nggak pernah berubah. 
Hasilnya sih emang kelihatan modern, tapi juga rasanya kayak website ke-100 yang saya lihat minggu itu.
## AI Bikin Mendesain Jadi Gampang. Terlalu Gampang, Malah..
Nggak bisa dipungkiri, AI sudah mengubah cara kita bikin produk digital. Sekarang, siapa aja bisa bikin landing page cuma dengan beberapa kalimat prompt, dan seringnya hasilnya udah cukup rapi buat langsung dipublikasikan. Ini kemajuan yang luar biasa.
Masalahnya baru muncul ketika AI dipakai sebagai pengganti proses berpikir. Banyak orang cuma ngetik "buatkan landing page SaaS yang modern", lalu langsung menerima hasil pertama tanpa bertanya lebih jauh: apakah desain ini benar-benar cocok dengan produk saya? Apakah pengguna saya memang butuh tampilan seperti ini? Apakah website ini punya identitas sendiri? 
## Kalau semua orang pakai prompt yang sama, ya jangan heran kalau hasilnya juga kelihatan sama.
## Desain yang Bagus Selalu Dimulai dari Referensi, Bukan Generasi
Setiap kali mau bikin website baru, saya hampir nggak pernah langsung buka AI. Saya justru mulai dari riset dulu, cari website lain yang punya fungsi serupa, kumpulkan referensi yang menurut saya berhasil menyelesaikan masalah penggunanya.
 Baru setelah itu saya bedah satu-satu: kenapa navigasinya terasa nyaman, kenapa halaman produknya gampang dipahami, kenapa animasinya pas dan nggak berlebihan, kenapa proses checkout-nya bisa secepat itu.
Saya nggak menyalin seluruh desainnya. Saya cuma ambil ide-ide kecil yang menurut saya berhasil, lalu gabungkan dengan referensi lain dan sesuaikan dengan kebutuhan produk yang lagi saya bangun. 
Barulah setelah gambarannya jelas, AI saya pakai untuk mempercepat eksekusinya, bukan untuk menggantikan proses berpikirnya.
## AI Seharusnya Jadi Asisten, Bukan Desainer Utama
Banyak orang memperlakukan AI kayak tombol "Generate Website". Padahal yang jauh lebih efektif itu memperlakukannya kayak asisten. Makin spesifik arahan yang kita kasih, makin bagus hasil yang keluar. 
Daripada cuma nulis "buat landing page modern", jauh lebih baik kalau kita udah punya gambaran seperti hero dengan layout editorial ala website A, navigasi minimalis ala website B, microinteraction tombol ala website C, animasi scroll yang halus tanpa ganggu performa, dan fokus utama di kecepatan checkout.
AI bekerja jauh lebih baik kalau kita sudah tahu apa yang mau dibuat, bukan ketika kita menyerahkan semua keputusan desain ke dia.
## Taste Itu Nggak Bisa Digenerate
Ada satu hal yang sering dilupakan kalau lagi bahas AI: taste. Kemampuan buat bedain mana desain yang benar-benar bagus dan mana yang cuma kelihatan menarik. Taste itu nggak muncul dalam semalam, dia dibangun dari ratusan website yang pernah kita lihat, puluhan produk yang pernah kita pakai, dan ratusan keputusan desain yang pernah kita evaluasi. 
Makin banyak referensi yang kita pelajari, makin gampang kita mengenali pola desain yang efektif, bukan cuma yang indah, tapi juga yang fungsional.
Ini juga alasan kenapa dua orang bisa pakai AI yang sama, prompt yang nyaris identik, tapi hasilnya beda jauh kualitasnya. Bedanya bukan di tools yang dipakai, tapi di pengalaman dan cara mereka mengambil keputusan.
## AI Tidak Menggantikan Fundamental Desain
Justru makin gampang AI dipakai, makin penting juga kita paham fundamental desain, mulai dari hierarki visual, tipografi, whitespace, komposisi, kontras, grid, sampai user flow. Prinsip-prinsip itu nggak hilang cuma karena sekarang kita bisa bikin UI dalam hitungan menit. 
Sebaliknya, fundamental inilah yang bantu kita menilai apakah hasil dari AI memang layak dipakai atau justru perlu diperbaiki. Tanpa pemahaman itu, kita cuma jadi orang yang menerima hasil, bukan orang yang benar-benar mendesain.
## Website yang Berkesan Nggak Lahir dari Prompt yang Pendek
AI bakal terus berkembang. Mungkin beberapa tahun lagi, bikin website cuma butuh beberapa detik. Tapi ada satu hal yang susah digantikan, yaitu kemampuan manusia untuk mengamati, memilih, menggabungkan, dan mengambil keputusan desain yang tepat.
Karena website yang bagus itu bukan yang kelihatan seperti hasil AI, melainkan yang punya karakter, paham penggunanya, dan terasa dibuat dengan penuh pertimbangan. 

AI memang bisa mempercepat proses bikin antarmuka, tapi rasa, identitas, dan kualitas sebuah desain tetap bergantung pada orang yang menggunakannya.
          `,
        },
        {
          id: 3,
          gambar: "/assets/article3.webp",
          kategori: "Kreativitas & AI",
          tanggal: "01 Juli 2026",
          baca: "5 menit baca",
          nama: "Di Era AI, Skill Paling Berharga Justru Bukan Coding atau Desain",
          desk: "Makin pintarnya AI membuat kemudahan teknis melonjak. Skill yang akan terus bernilai tinggi di masa depan justru hal-hal non-teknis yang tidak bisa diunduh ke model AI.",
          isi: `
Beberapa tahun lalu, bikin sebuah website butuh tim, waktu, dan keahlian teknis yang ngga sedikit. 
Sekarang, satu prompt bisa menghasilkan aplikasi lengkap. UI dibuat dalam hitungan detik, kode langsung jalan, ilustrasi bisa digenerate, video mulai bisa dibuat otomatis, bahkan AI agent udah mulai bantu ngatur jadwal dan ngerjain tugas-tugas sehari-hari. Dan ini baru beberapa tahun sejak AI generatif mulai dikenal luas, jadi susah membayangkan seperti apa kemampuannya lima atau sepuluh tahun ke depan.
## Lalu muncul pertanyaan yang sering saya dengar: kalau AI makin pintar, skill apa yang masih layak dipelajari manusia? 
Menurut saya, jawabannya bukan skill teknis tertentu. 
Yang bakal makin bernilai justru hal-hal yang nggak bisa diunduh ke dalam sebuah model AI.
## Pengalaman Menciptakan Cara Pandang
Saya kerja di beberapa bidang sekaligus, mulai dari desain grafis, web development, sampai editing video. Semua tools yang saya pakai sekarang udah dibantu AI, tapi hasil akhirnya tetap bergantung pada satu hal: pengalaman saya sendiri.
Misalnya saat mengedit video. Saya nggak cuma motong klip atau nambahin transisi, saya milih momen yang tepat buat bikin penonton tertawa, nentuin ritme video, dan bangun emosi lewat cara penyampaiannya. Keputusan-keputusan kayak gini nggak muncul dari software, mereka terbentuk dari proyek yang pernah saya kerjakan, video yang pernah saya tonton, kesalahan yang pernah saya bikin, dan interaksi saya dengan banyak orang. 
AI bisa bantu prosesnya, tapi pengalaman tetap jadi sumber dari keputusan kreatif itu.
## Kreativitas Bukan Sekadar Menghasilkan Sesuatu yang Baru
Banyak orang menganggap AI udah kreatif karena mampu menghasilkan poster, ilustrasi, atau video yang menarik. Saya setuju, AI memang jago banget dalam menghasilkan variasi. Tapi kreativitas manusia bekerja dengan cara yang agak beda.
Kita menghubungkan pengalaman yang kelihatannya nggak berkaitan, percakapan dengan teman, humor yang kita dengar saat nongkrong, film yang pernah ditonton, buku yang pernah dibaca, masalah yang pernah dialami. Semua referensi itu bercampur jadi perspektif yang unik. 
Dua orang bisa pakai AI yang sama, tapi menghasilkan karya yang sangat berbeda karena mereka membawa pengalaman hidup yang berbeda juga. AI membantu membuat karya, manusia yang memberi karya itu karakter.
## Referensi Membentuk Taste
Salah satu hal yang paling susah dipelajari adalah taste, kemampuan untuk membedakan mana yang biasa aja dan mana yang benar-benar berkualitas. Taste nggak muncul dari satu prompt. Ia dibangun dari kebiasaan melihat desain yang baik, mencoba berbagai produk, membaca, berdiskusi, menerima kritik, dan terus mengevaluasi hasil sendiri. 
Makin luas referensi seseorang, makin baik pula keputusan yang ia ambil, dan keputusan itulah yang nggak bisa digantikan cuma dengan otomatisasi.
## AI Akan Menjadi Alat, Bukan Pengganti Perspektif
Saya percaya AI bakal terus mengambil alih banyak pekerjaan yang sifatnya berulang dan teknis. Itu bukan sesuatu yang perlu ditakuti, justru itu ngasih kita lebih banyak waktu untuk melakukan hal yang lebih bernilai: berpikir, memahami manusia, membangun ide, dan mengambil keputusan yang lebih baik.
Karena pada akhirnya, AI bisa menghasilkan ribuan kemungkinan, tapi manusialah yang memutuskan kemungkinan mana yang layak diwujudkan. 
Semakin berkembang AI, semakin jelas bahwa nilai manusia bukan cuma pada apa yang bisa kita buat, melainkan pada pengalaman, perspektif, kreativitas, dan penilaian yang kita bawa ke dalam setiap karya.
          `,
        },
        {
          id: 4,
          gambar: "/assets/article4.webp",
          kategori: "Personal & Mentalitas",
          tanggal: "02 Juli 2026",
          baca: "7 menit baca",
          nama: "Dari Sastra ke Pemrograman : Perjalanan Membentuk Mental Builder",
          desk: "Dulu kuliah Sastra Rusia, sekarang kerja di bidang IT. Ternyata, yang gue bangun selama ini bukan sekadar skill pemrograman, melainkan mental seorang builder.",
          isi: `
## Perjalanan Gue Membangun Mental Builder
Dulu, kalau ada yang nanya, "Kenapa kuliah Sastra Rusia kalau akhirnya mau kerja di bidang IT?", mungkin gua juga bakal bingung jawabnya. Soalnya kalau dilihat sekilas, memang nggak ada hubungannya. 
## Satu belajar bahasa dan budaya, satu lagi bikin aplikasi.
Tapi setelah beberapa tahun menjalani semuanya, gue justru sadar bahwa setiap fase itu saling terhubung. Ngga ada yang benar-benar sia-sia. Yang gua bangun selama ini ternyata bukan sekadar kumpulan skill. Gua sedang membangun sesuatu yang lebih penting: **mental seorang builder.**
## Awalnya Cuma Ingin Punya Waktu 
Alasan gue milih jurusan Sastra sebenarnya cukup sederhana. Mindset gue waktu itu adalah, "yang penting kuliahnya nggak terlalu menyita waktu, supaya gue masih bisa belajar skill lain di luar kampus." Mungkin terdengar aneh, tapi ternyata keputusan itu jadi titik awal dari banyak hal.
Sejak semester pertama, gue aktif di berbagai organisasi dan kepanitiaan. Hampir semuanya berkaitan dengan publikasi, desain grafis, multimedia, dan dokumentasi. Waktu itu gue udah cukup sering ngerjain motion graphic, video editing, aftermovie, sampai visual 3D. Lama-kelamaan, dunia kreatif jadi tempat gue berkembang.
## Organisasi Mengajarkan Lebih dari Sekadar Desain
Di organisasi, tugas gue bukan cuma bikin poster. Gue pernah ngerjain logo, identitas visual organisasi, feed Instagram, banner, twibbon, bumper animasi, dokumentasi, sampai aftermovie sebuah acara. Semuanya punya satu kesamaan: harus dikerjakan dengan serius, karena setiap karya yang gue buat membawa nama gua sendiri, membawa nama organisasi, bahkan membawa nama jurusan.
Saat ada lomba atau kegiatan antarjurusan, gue selalu pengen hasil karya kita kelihatan lebih matang. Gue senang kalau ada ide yang lahir dari jurusan kami sebelum dipikirkan orang lain. Tanpa sadar, pengalaman itu membentuk cara berpikir gue, bukan cuma soal desain, tapi soal standar kualitas, soal tanggung jawab, soal kebiasaan untuk terus memperbaiki sesuatu. Makin sering ngerjain proyek, makin terasah pula kreativitas, taste, dan kemampuan gue baca tren yang terus berubah.
## Ketika Dunia Programming Mulai Memanggil
Masuk semester enam dan tujuh, aktivitas organisasi mulai berkurang. Untuk pertama kalinya setelah cukup lama, akhirnya punya banyak waktu buat refleksi. Di situlah gue kembali inget sesuatu yang sebenarnya udah ada sejak sebelum kuliah: keinginan untuk terjun ke dunia IT.
Salah satu momen yang cukup membekas adalah waktu gue nonton podcast Timothy Ronald bareng Deddy Corbuzier di awal 2023. Di waktu yang hampir bersamaan, ChatGPT generasi awal baru mulai dikenal. Gue lihat gimana teknologi berkembang dengan sangat cepat, dan jujur aja, gue merasa tertarik. Bukan karena hype-nya, tapi karena gue sadar bidang ini memaksa seseorang untuk terus belajar. Dan gue memang suka proses itu.
## Kenapa Web development dan Frontend?
Orang nanya kenapa gue milih frontend lebih dulu. Jawabannya sederhana: karena gue pengen hasil karya gue bisa langsung dilihat orang.
Background desain grafis bikin transisi ke frontend terasa cukup mudah. Gue udah paham layout, warna, tipografi, dan  visual brand, jadi yang perlu gue pelajari tinggal gimana menerjemahkan semuanya jadi kode. Kesempatan ikut Bootcamp ReactJS untuk Frontend Developer dari Hacktiv8 makin menguatkan keyakinan gue. Sejak saat itu, gue mulai membangun berbagai aplikasi pakai MERN Stack dengan identitas dan branding yang gue rancang sendiri. Bukan cuma belajar bikin website, tapi belajar membangun sebuah produk.
## Fondasi Desain yang Sekarang Gue Syukuri
Sekarang gue bersyukur karena dulu pernah belajar banyak hal kayak graphic design. Itu jadi skill fundamental yang justru mendukung banget waktu gue mulai pakai AI. Beda ceritanya kalau dulu gue nggak belajar fundamental desain dan langsung ngeprompt AI buat bikin desain, hasilnya pasti nggak bakal sebagus sekarang.
Karena AI itu cuma alat yang menjalankan apa yang kita arahkan. Kalau kita nggak punya bekal soal layout, komposisi, hierarki visual, atau rasa warna yang oke, kita juga bakal kesulitan menilai apakah hasil dari AI itu udah bagus atau masih perlu diperbaiki. Gue ngerasain sendiri bedanya. Waktu gue prompt AI buat bikin sesuatu, gue nggak cuma nerima hasil pertama yang keluar, gue bisa langsung tahu bagian mana yang komposisinya kurang pas, warnanya kurang match, atau layoutnya masih berantakan. 
## Itu semua bisa gue lihat karena dulu gue udah terbiasa ngerjain desain dari nol, bukan dari hasil generate doang.
Jadi buat gue, pengalaman desain grafis itu bukan skill yang ketinggalan zaman gara-gara ada AI. Justru itu jadi modal yang bikin gue bisa memanfaatkan AI dengan lebih maksimal.
## Mencoba Banyak Hal Bukan Berarti Kehilangan Arah
Di tengah perjalanan belajar frontend, gue juga sempat mendalami AI automation pakai n8n dan membangun beberapa workflow sederhana. Di sisi lain, gue juga jalanin aktivitas sebagai video editor dan content clipper.
Sekilas mungkin kelihatan kayak berpindah-pindah bidang. Tapi makin gue jalanin, makin gue sadar bahwa semuanya saling melengkapi. 
## Desain mengajarkan kreativitas. Sastra mengajarkan cara memahami manusia, budaya, dan perspektif yang berbeda. Programming melatih cara berpikir yang sistematis dan terstruktur. AI membuka cara baru buat kerja lebih efektif lewat otomatisasi. Nggak ada yang berdiri sendiri, semuanya jadi bagian dari fondasi yang sama.
## Yang Sebenarnya Ingin Gue Bangun
Hari ini target gue cukup jelas: menyelesaikan fondasi sebagai web developer, lalu lanjut ke mobile development, setelah itu mendalami AI dan blockchain.
Tapi makin ke sini, gue sadar bahwa tujuan akhirnya bukan sekadar menguasai banyak teknologi. Yang benar-benar ingin gue bangun adalah cara berpikir. Mental seorang builder. Mental yang selalu melihat masalah sebagai sesuatu yang bisa dipecahkan, mental yang terdorong untuk menciptakan sesuatu, sekecil apa pun itu.
Karena pada akhirnya, semua perjalanan yang gue lalui bukan tentang berpindah dari Sastra ke IT, melainkan tentang mengumpulkan potongan-potongan pengalaman yang membentuk identitas gue hari ini. Seorang builder yang percaya bahwa teknologi hanyalah alat. Yang benar-benar menentukan adalah pola pikir untuk terus belajar, terus membangun, dan terus menciptakan sesuatu yang bermanfaat.
`,
        },
      ],
    },
    contact: {
      label: "Contact",
      slogan: "let's build together!",
      title: "Get in Touch",
      desc: "Memiliki visi untuk membuat projek? Mari terhubung dan bangun sesuatu bersama.",
      channels: "Contact Channels",
      availableText: "Tersedia untuk kesempatan freelance & peran remote.",
      sendWa: "Kirim Pesan WhatsApp",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      sendBtn: "Kirim Pesan",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderMsg: "Saya ingin hire anda...",
    },
  },
};
