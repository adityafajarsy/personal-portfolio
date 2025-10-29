import About from "./elements/About";
import Contact from "./elements/Contact";
import Home from "./elements/Home";
import Project from "./elements/Project";

function App() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Bola ungu kebiruan (kiri atas) */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-blue-400/20 blur-3xl animate-pulse"
          style={{
            background:
              "conic-gradient(from 0deg, #60a5fa66, #8b5cf666, #2563eb66, #60a5fa66)",
            animation: "rotateGradient 20s linear infinite",
          }}
        ></div>

        {/* Bola biru keungu (kanan bawah agak ke tengah) */}
        <div
          className="absolute bottom-[120px] sm:bottom-[130px] right-[60px] sm:right-[-50px] sm:ww-[450px] sm:h-[450px] w-[600px] h-[200px] rounded-full bg-gradient-to-tl from-blue-600/40 via-sky-500/30 to-purple-500/20 blur-3xl animate-pulse delay-700"
          style={{
            background:
              "linear-gradient(to top left, #2563eb66, #0ea5e966, #a855f766)",
            backgroundSize: "200% 200%",
            animation: "gradientMove 10s ease infinite",
          }}
        ></div>

        {/* Bola kecil agak ke tengah */}
        <div
          className="absolute top-[350px] sm:top-[200px] left-[40%] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-violet-400/30 via-fuchsia-400/20 to-sky-300/10 blur-2xl animate-pulse delay-1000 opacity-30"
          style={{
            animation: "colorShift 8s ease-in-out infinite alternate",
          }}
        ></div>
      </div>

      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
