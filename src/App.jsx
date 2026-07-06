import React, { useState, lazy, Suspense, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MobileProfile from "./components/MobileProfile";
import Home from "./elements/Home";
import Project from "./elements/Project";
import Career from "./elements/Career";
import About from "./elements/About";
import Article from "./elements/Article";
import Contact from "./elements/Contact";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Lazy-loaded detail views — reduces initial JS bundle size dramatically
const ArticleDetail = lazy(() => import("./components/ArticleDetail"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

// Non-critical UI — lazy-loaded so they don't block initial paint
// FloatingNav: mobile-only bottom nav, never visible during LCP window
// CustomCursor: desktop-only decorative cursor, zero content value
const FloatingNav = lazy(() => import("./components/FloatingNav"));
const CustomCursor = lazy(() => import("./components/CustomCursor"));

// Inline spinner — no external dep, shown during route transitions only
const LoadingPlaceholder = () => (
  <div className="w-full min-h-[40vh] flex flex-col items-center justify-center gap-3 animate-pulse">
    <div className="w-8 h-8 rounded-full border-2 border-white/5 border-t-[#3B82F6] animate-spin" />
    <span className="text-[12px] font-bold tracking-widest text-[#8A8A8A] uppercase">Loading...</span>
  </div>
);

function App() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Inject remixicon CSS non-blocking after the app mounts and the browser is idle.
  // This prevents the 600KB icon-font CSS from blocking the critical rendering path.
  // Icons use <i class="ri-*"> tags which show as text until the CSS loads — acceptable UX.
  useEffect(() => {
    const id = "remixicon-stylesheet";
    if (document.getElementById(id)) return; // already injected (HMR safety)
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "/assets/remixicon.css";
    // Use requestIdleCallback to defer until browser is idle, or fallback to setTimeout
    const inject = () => document.head.appendChild(link);
    if ("requestIdleCallback" in window) {
      requestIdleCallback(inject, { timeout: 2000 });
    } else {
      setTimeout(inject, 200);
    }
  }, []);

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

      {/* Bottom Floating Nav — mobile only, lazy-loaded (non-critical) */}
      {!activeArticle && !activeProject && (
        <Suspense fallback={null}>
          <FloatingNav />
        </Suspense>
      )}

      {/* Custom Desktop Cursor — lazy-loaded (non-critical) */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
    </div>
  );
}

export default App;

