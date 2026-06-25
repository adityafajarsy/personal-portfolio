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
    <div className="bg-[#050505] text-white relative min-h-screen overflow-x-hidden">
      {/* Background ambient glow effect */}
      <div className="absolute top-[10%] left-[20%] ambient-glow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] ambient-glow pointer-events-none" style={{ animationDelay: "-5s" }} />

      {/* ── Desktop layout: sidebar + scrollable content side by side ── */}
      <div className="hidden lg:flex lg:h-screen lg:overflow-hidden">
        <Sidebar />
        <main className="flex-1 min-w-0 h-screen overflow-y-auto px-[72px] py-[72px] flex flex-col gap-24 relative z-10 scrollbar-none">
          <Home />
          <Project />
          <Career />
          <About />
          <Contact />
        </main>
      </div>

      {/* ── Mobile layout: single full-width scrollable column ── */}
      <div className="flex flex-col lg:hidden w-full">
        <main className="w-full px-5 pt-10 pb-28 flex flex-col gap-12 relative z-10">
          <MobileProfile />
          <Home />
          <Project />
          <Career />
          <About />
          <Contact />
        </main>
      </div>

      {/* Bottom Floating Nav — mobile only */}
      <FloatingNav />
    </div>
  );
}

export default App;
