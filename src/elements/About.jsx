import React from "react";
import {listTools} from "../data"
import DataImage from "../data"

const About = () => {
  return (
    <div>
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4  w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          <img
            src={DataImage.HeroImage}
            loading="lazy"
            alt="Image"
            className="w-12 rounded-md sm:hidden block mb-2"
          />
          <p className="text-base/loose mb-10">
          I started my <b>journey</b> in the <b>creative field</b> during freshyear college, working on <b>Graphic Designs</b>, logos, banners, ID cards, and <b>video productions</b>. My path in software development began in <b>Sept 2024</b> through a four month bootcamp <b>"Hactiv8"</b>. After a short break to finish my studies, I’ve been fully focused on self learning since <b>August 2025</b>, continuously grinding my skills as a  <b>developer</b>.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zv605IDYRA7f3I0IMFUy4BKP3ETSMleuJA&s'}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-orange-500">+</span>
                </h1>
                <p>Projects done</p>
              </div>
              <div>
                <div>
                  <h1 className="text-4xl mb-1">
                    7<span className="text-orange-500">+</span>
                  </h1>
                  <p>Months of Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools i Use
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            This is the tools that i usually used to make web app
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos-delay={tool.dad}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
