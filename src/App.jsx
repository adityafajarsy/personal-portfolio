import React, { useState, lazy, Suspense } from "react";
import Sidebar from "./components/Sidebar";
import MobileProfile from "./components/MobileProfile";
import FloatingNav from "./components/FloatingNav";
import Home from "./elements/Home";
import Project from "./elements/Project";
import Career from "./elements/Career";
import About from "./elements/About";
import Article from "./elements/Article";
import Contact from "./elements/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomCursor from "./components/CustomCursor";

// Lazy-loaded detail views (reduces initial JS bundle size dramatically)
const ArticleDetail = lazy(() => import("./components/ArticleDetail"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

// Premium inline dynamic loading placeholder
const LoadingPlaceholder = () => (
  <div className="w-full min-h-[40vh] flex flex-col items-center justify-center gap-3 animate-pulse">
    <div className="w-8 h-8 rounded-full border-2 border-white/5 border-t-[#3B82F6] animate-spin" />
    <span className="text-[12px] font-bold tracking-widest text-[#8A8A8A] uppercase">Loading...</span>
  </div>
);

function App() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="bg-[#050505] text-white relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-[10%] left-[20%] ambient-glow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] ambient-glow pointer-events-none" style={{ animationDelay: "-5s" }} />

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Sidebar - Desktop Only */}
      <div className="hidden lg:block lg:w-[35%] lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Column */}
      <main className="flex-1 min-w-0 h-auto lg:h-screen overflow-y-auto px-5 pt-10 pb-28 lg:px-[72px] lg:py-[72px] flex flex-col gap-12 lg:gap-24 relative z-10 scrollbar-none">
        {/* Mobile Profile Card - Mobile Only */}
        <div className="block lg:hidden">
          <MobileProfile />
        </div>

        {/* Content Sections */}
        <Suspense fallback={<LoadingPlaceholder />}>
          {activeArticle ? (
            <ArticleDetail article={activeArticle} onClose={() => setActiveArticle(null)} />
          ) : activeProject ? (
            <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
          ) : (
            <>
              <Home />
              <Project onSelectProject={setActiveProject} />
              <Career />
              <About />
              <Article onSelectArticle={setActiveArticle} />
              <Contact />
            </>
          )}
        </Suspense>
      </main>

      {/* Bottom Floating Nav — mobile only */}
      {!activeArticle && !activeProject && <FloatingNav />}

      {/* Custom Desktop Cursor */}
      <CustomCursor />
    </div>
  );
}

export default App;
