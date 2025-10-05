import React from "react";
import { listTools } from "../data";
import ShinyText from "../components/ShinyText/ShinyText";
import Career from "./Career";
import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="tentang mt-26 py-10" id="tentang">
        <div
          className="flex items-center justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-once={true}
        >
          <div
            className="p-2 border-indigo-400/20 
    shadow-[0_0_25px_rgba(93,68,255,0.25)] rounded-lg"
          >
            <Sparkles size={24} className="text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold">The Intersection</h2>
        </div>
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7
          rounded-2xl 
          border border-indigo-400/20 
          shadow-[0_0_25px_rgba(93,68,255,0.25)]"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-once={true}
        >
          <p className="text-base/loose mb-10">
            I started my{" "}
            <span className="text-indigo-300 font-medium">
              journey in the creative field
            </span>{" "}
            during freshyear college, working on{" "}
            <span className="text-indigo-300 font-medium">Graphic Designs</span>
            , logos, banners, ID cards, lanyards, and{" "}
            <span className="text-indigo-300 font-medium">
              video productions
            </span>
            . My path in software development began in{" "}
            <span className="text-indigo-300 font-medium">Sept 2024</span>{" "}
            through a four month bootcamp{" "}
            <span className="text-indigo-300 font-semibold">"Hactiv8"</span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s"
              alt="Hacktiv8 Logo"
              className="inline-block w-5 h-5 rounded-md mx-1 align-top object-cover"
            />
            . After a short break to finish my studies, I've been fully focused
            on self learning since{" "}
            <span className="text-indigo-400 font-medium">August 2025</span>,
            continuously grinding my skills as a{" "}
            <span className="text-indigo-400 font-semibold">developer</span>.
          </p>
          <div className="flex items-center justify-between">
            <div className="sm:block hidden">
              <ShinyText
                text={`Work Hard Grind Hard`}
                disabled={false}
                speed={3}
                className="custom-class mt-5"
                type={"default"}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5
                  <ShinyText
                    text={`+`}
                    disabled={false}
                    speed={3}
                    className="custom-class"
                    type={"purple"}
                  />
                </h1>
                <p>Projects done</p>
              </div>
              <div>
                <div>
                  <h1 className="text-4xl mb-1">
                    7
                    <ShinyText
                      text={`+`}
                      disabled={false}
                      speed={3}
                      className="custom-class"
                      type={"purple"}
                    />
                  </h1>
                  <p>Months of Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career */}
        <Career />
        {/* Career */}

        {/* tools */}
        <div className="tools mt-16 py-10">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            The tools that i usually used to make web app
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
                key={tool.id}
                data-aos-delay={tool.dad}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once={true}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold">
                    <div className="truncate">
                      <ShinyText
                        text={`${tool.nama}`}
                        disabled={false}
                        speed={3}
                        className="custom-class"
                        type={"default"}
                      />
                    </div>
                  </h4>
                  <p className="text-base text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tools */}
      </div>
    </div>
  );
};

export default About;
