const ProjectNetflixImg = "/projects/netflix-clone.webp";
const ProjectEcomImg = "/projects/hamburger.webp";
const ProjectCompanyImg = "/projects/leveldva.webp";

const listToolsStatic = [
  { id: 1, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007ACC'><path d='M23.986 6.892a.573.573 0 0 0-.265-.187L18.423.957a.82.82 0 0 0-.584-.04c-.198.058-.363.18-.464.348l-2.906 4.793-6.536 4.97-5.074-3.83A.574.574 0 0 0 2.5 7.15c-.176.012-.344.085-.47.206L.207 9.179a.573.573 0 0 0-.012.825l3.524 3.524-3.524 3.524a.573.573 0 0 0 .012.825l1.823 1.823c.126.12.294.194.47.206a.57.57 0 0 0 .363-.092l5.074-3.83 6.536 4.97 2.906 4.793a.835.835 0 0 0 .464.348c.199.058.41-.013.584-.04l5.298-5.748a.573.573 0 0 0 .265-.187c.074-.112.115-.246.118-.383V7.275c-.003-.137-.044-.27-.118-.383zm-17.78 8.01l-2.617-2.617 2.617-2.617 3.468 2.617-3.468 2.617zm11.233 4.298l-5.69-4.328 1.942-1.942 3.748 2.828v3.442zm0-5.787l-5.263-3.971 5.263-3.971v7.942zm0-10.303v3.442l-3.748 2.828-1.942-1.942 5.69-4.328z'/></svg>", nama: "Visual Studio Code" },
  { id: 2, gambar: "https://cdn.simpleicons.org/react/61DAFB", nama: "React JS" },
  { id: 3, gambar: "https://cdn.simpleicons.org/nextdotjs/white", nama: "Next JS" },
  { id: 4, gambar: "https://cdn.simpleicons.org/tailwindcss/06B6D4", nama: "Tailwind CSS" },
  { id: 5, gambar: "https://cdn.simpleicons.org/bootstrap/7952B3", nama: "Bootstrap" },
  { id: 6, gambar: "https://cdn.simpleicons.org/javascript/F7DF1E", nama: "Javascript" },
  { id: 7, gambar: "https://cdn.simpleicons.org/nodedotjs/339933", nama: "Node JS" },
  { id: 8, gambar: "https://cdn.simpleicons.org/express/white", nama: "Express JS" },
  { id: 9, gambar: "https://cdn.simpleicons.org/docker/2496ED", nama: "Docker" },
  { id: 10, gambar: "https://cdn.simpleicons.org/ubuntu/E95420", nama: "Ubuntu" },
  { id: 11, gambar: "https://cdn.simpleicons.org/vercel/white", nama: "Vercel" },
  { id: 12, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2310B981' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='9'/><path d='M12 16V8M9 11l3-3 3 3'/></svg>", nama: "Antigravity" },
  { id: 13, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D97706' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 17 10 11 4 5'/><line x1='12' y1='19' x2='20' y2='19'/></svg>", nama: "Claude Code" },
  { id: 15, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EC4899' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M12 3v1M12 20v1M4 12H3M21 12h-1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M5.64 5.64l.7.7M17.66 17.66l.7.7M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z'/></svg>", nama: "AI Tools" },
  { id: 16, gambar: "https://cdn.simpleicons.org/github/white", nama: "Github" },
  { id: 17, gambar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300C4CC'><path d='M11.758 19.349c-3.136 0-5.728-.888-5.728-3.424 0-1.96 1.488-3.328 4.608-3.552l.968-.072c1.784-.136 2.504-.496 2.504-1.224 0-.84-.96-1.248-2.184-1.248-1.632 0-3.032.504-4.248 1.44l-.408-.688c1.392-1.072 3.096-1.56 4.752-1.56 2.376 0 3.84 1.072 3.84 2.808v5.52c0 .864.456 1.296 1.056 1.296.384 0 .768-.192 1.072-.512l.248.512c-.528.592-1.2.904-1.936.904-1.392 0-2.16-.92-2.16-2.224v-.272c-.792 1.544-2.312 2.512-4.448 2.512zm.288-6.192c-1.984.144-3.048.968-3.048 2.32 0 1.296 1.344 1.952 3.048 1.952 2.344 0 3.752-1.4 3.752-3.192v-.936c-.496.128-1.392.208-2.248.256v.001l-.256-.401zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0z'/></svg>", nama: "Canva" },
  { id: 18, gambar: "https://cdn.simpleicons.org/figma/F24E1B", nama: "Figma" },
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
  else if (t.id === 13) ket = "AI Assistant";
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
      bio: "A Fullstack MERN Developer with a background in Language Literature, Graphic Design and Creative Media. I build user pov websites where proper design meets seamless functionality. Balancing technical execution with strategic business goals, my focus is always on engineering web solutions that effectively solve real company problems.",
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
          gambar: "/assets/article1.webp",
          kategori: "UI/UX & AI",
          tanggal: "June 28, 2026",
          baca: "5 min read",
          nama: "AI Can Create Beautiful Websites. But It Still Can't Understand Users.",
          desk: "AI can generate modern, automated landing pages instantly. But visual beauty doesn't guarantee a successful product that truly solves human problems.",
          isi: `
A few years ago, building a website took weeks. Today, with just a few prompt lines, AI can generate a modern-looking landing page, complete with animations, dark mode, and professional-looking components.
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
          `
        },
        {
          id: 2,
          gambar: "/assets/article2.webp",
          kategori: "UI/UX Design",
          tanggal: "May 14, 2026",
          baca: "4 min read",
          nama: "Stop Designing Generic Websites",
          desk: "So many website designs look exactly the same these days.",
          isi: `
I can usually tell within a few seconds if a website was built using AI. It is not because I am against AI—in fact, I use it almost every day to help with design and development. What makes a website easily recognizable is not the AI itself, but because all the design decisions feel identical. The hero section is the same, the layout is the same, cards have the same shadows, the same purple-blue gradients are used, animations are identical, and even the content order rarely changes. The result looks modern, but it feels like the 100th website I have seen that week.

## AI Makes Designing Easy. Too Easy, Actually..
There is no denying that AI has changed how we build digital products. Now, anyone can create a landing page with just a few prompts, and the result is often neat enough to publish immediately. This is an amazing step forward.
The problem starts when AI is used to replace thinking. Many people simply type "create a modern SaaS landing page" and accept the first result without asking: Does this design actually fit my product? Do my users really need this look? Does this website have its own identity? 
## If everyone uses the same prompts, it is no surprise the results look identical.

## Good Design Always Starts with References, Not Generation
Whenever I build a new website, I almost never open AI right away. Instead, I start with research—finding other websites with similar functions and gathering references that successfully solve real user problems.
Only then do I break them down: why the navigation feels comfortable, why the product page is easy to understand, why the animations are subtle and not distracting, and why the checkout process is so fast.
I do not copy the entire design. I only take small ideas that work, combine them with other references, and adapt them to the needs of the product I am building. Once the vision is clear, I use AI to speed up execution, not to replace the thinking process.

## AI Should Be an Assistant, Not the Lead Designer
Many people treat AI like a "Generate Website" button. In reality, it is much more effective to treat it like an assistant. The more specific your directions, the better the output. Instead of writing "make a modern landing page," it is much better if you already have a vision, such as a hero with an editorial layout like Website A, minimalist navigation like Website B, button microinteractions like Website C, smooth scroll animations without lagging, and a primary focus on checkout speed.
AI works much better when we already know what we want to make, rather than leaving all design decisions to it.

## Taste Cannot Be Generated
There is one thing often forgotten when discussing AI: taste. The ability to distinguish between what is average and what is truly high quality. Taste does not develop overnight. It is built by looking at hundreds of good designs, using dozens of products, reading, discussing, receiving criticism, and constantly evaluating your own work. The broader your references, the better decisions you make. That decision-making is something automation cannot replace.

## AI Does Not Replace Design Fundamentals
In fact, the easier AI is to use, the more important it is to understand design fundamentals—from visual hierarchy, typography, whitespace, composition, contrast, and grids, to user flow. These principles do not disappear just because we can build a UI in minutes. Instead, these fundamentals help us judge whether the AI output is actually good to use or needs to be improved. Without this understanding, we are just people accepting outputs, not real designers.

## Memorable Websites Are Not Born from Short Prompts
AI will continue to evolve. In a few years, making a website might take only a few seconds. But one thing remains hard to replace: the human ability to observe, select, combine, and make the right design decisions.
Because a good website is not the one that looks like an AI output, but the one that has character, understands its users, and feels thoughtfully crafted. 
AI can speed up the interface building, but the feel, identity, and quality of a design still depend on the person using it.
          `
        },
        {
          id: 3,
          gambar: "/assets/article3.webp",
          kategori: "Technology & Skills",
          tanggal: "April 02, 2026",
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
We connect experiences that seem completely unrelated—conversations with friends, jokes heard while hanging out, films we have watched, books we have read, and personal problems we have faced. All these references blend into a unique perspective. 
Two people can use the exact same AI tool and prompts, but produce completely different works because they bring different life experiences to the table. AI helps build the piece, but humans give it character.
## References Build Taste
One of the hardest things to learn is taste—the ability to distinguish between what is average and what is truly exceptional. Taste does not come from a single prompt. It is built by regularly observing good design, trying different products, reading, discussing, receiving feedback, and constantly evaluating one's own work. 
The broader your references, the better decisions you make. That decision-making is something automation cannot replace.
## AI is a Tool, Not a Replacement for Perspective
I believe AI will continue to take over repetitive and technical tasks. This is not something to fear. Instead, it gives us more time to focus on what is truly valuable: thinking, understanding people, building concepts, and making better decisions.
Since in the end, AI can generate thousands of possibilities, but humans must decide which possibility is worth bringing to life. 
As AI evolves, it becomes clear that human value lies not just in what we can build, but in the experience, perspective, creativity, and judgment we bring to every creation.
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
      aboutText: "Product Designer dan Web Developer yang berdomisili di Jakarta, saat ini fokus pada Frontend / Fullstack MERN dengan pengalaman lebih dari 1 tahun dalam membangun aplikasi web.",
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
      bio: "Seorang Developer dengan latar belakang Bahasa, Desain Grafis, dan Kreatif Multimedia. Saya membangun situs web dari sudut pandang masalah pengguna di mana desain yang proper berpadu dengan fungsionalitas yang smooth. Menyeimbangkan teknis dengan tujuan bisnis, saya berfokus membuat solusi web yang memecahkan masalah nyata perusahaan secara efektif.",
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
      toolsDesc: "Software, framework, library, bahasa pemrograman, dan aplikasi design yang saya gunakan sehari-hari.",
      listTools: listToolsStaticEn,
      experiences: [
        {
          role: "Web Designer & Frontend Developer",
          company: "Kementerian PANRB",
          period: "Nov 2025 - May 2026",
          location: "Jakarta, Indonesia",
          color: "bg-[#1E293B] border border-slate-700/50",
          desc: "Membuat desain UI/UX lengkap, alur user, pengunjung website, dan perencanaan (agile/scrum) untuk dua aplikasi web portal (PPID & SIPIPI). Berkolaborasi dalam tim dua orang melalui Git, membangun Frontend menggunakan Next.js, TypeScript, Tailwind dan Shadcn UI.",
          descMobile: "Membuat desain UI/UX, alur user, pengunjung website, dan perencanaan (agile/scrum) untuk dua aplikasi web portal (PPID & SIPIPI). Berkolaborasi melalui Git untuk membangun frontend Next.js, TypeScript, Tailwind dan Shadcn UI.",
        },
        {
          role: "Career Break (T-Shaped Upskilling)",
          company: "Independent Learning",
          period: "Jan 2025 - Nov 2025",
          location: "Remote",
          color: "bg-[#312E81] border border-indigo-700/50",
          desc: "Melatih profil T-shaped dengan meneliti keterampilan lintas disiplin ilmu, termasuk automasi AI, product led growth (PLG), dan frontend lanjutan, diikuti oleh studi mandiri intensif dalam software development.",
          descMobile: "Melatih profil T-shaped dengan meneliti keterampilan lintas disiplin ilmu, termasuk automasi AI, product led growth (PLG), dan frontend lanjutan, lalu melanjutkan studi mandiri intensif dalam software development.",
        },
        {
          role: "ReactJS for Frontend Developer Bootcamp",
          company: "Hacktiv8 Indonesia",
          period: "Aug 2024 - Dec 2024",
          location: "Jakarta, Indonesia",
          color: "bg-[#450A0A] border border-red-900/40",
          desc: "Transisi dari latar belakang kreatif/multimedia ke web development, membangun keahlian dalam React Frontend, arsitektur komponen, manajemen state, dan alur kerja kolaboratif Git/GitHub.",
          descMobile: "Transisi dari latar belakang kreatif/multimedia ke web dev, membangun keahlian dalam React Frontend, arsitektur komponen, manajemen state, dan alur kerja kolaboratif Git/GitHub.",
        },
        {
          role: "Creative Design & Multimedia Lead",
          company: "Universitas Padjadjaran",
          period: "2021 - 2025",
          location: "Sumedang, Indonesia",
          color: "bg-[#451A03] border border-amber-900/40",
          desc: "Memimpin perencanaan desain visual dan produksi multimedia untuk berbagai organisasi dan acara kampus, membangun keterampilan dasar yang kuat dalam tata letak UI/UX, aset grafis, dan alur kerja pengguna.",
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
          gambar: "/assets/article1.webp",
          kategori: "UI/UX & AI",
          tanggal: "28 Juni 2026",
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
          `
        },
        {
          id: 2,
          gambar: "/assets/article2.webp",
          kategori: "UI/UX Design",
          tanggal: "14 Mei 2026",
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
          `
        },
        {
          id: 3,
          gambar: "/assets/article3.webp",
          kategori: "Kreativitas & AI",
          tanggal: "02 April 2026",
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
          `
        }
      ]
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
    }
  }
};
