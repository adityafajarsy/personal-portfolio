import React from "react";
import Sidebar from "./components/Sidebar";
import MobileProfile from "./components/MobileProfile";
import FloatingNav from "./components/FloatingNav";
import Home from "./elements/Home";
import Project from "./elements/Project";
import Career from "./elements/Career";
import About from "./elements/About";
import Contact from "./elements/Contact";

function App() {
  return (
    <div className="bg-[#050505] text-white relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-[10%] left-[20%] ambient-glow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] ambient-glow pointer-events-none" style={{ animationDelay: "-5s" }} />

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
        <Home />
        <Project />
        <Career />
        <About />
        <Contact />
      </main>

      {/* Bottom Floating Nav — mobile only */}
      <FloatingNav />
    </div>
  );
}

export default App;
