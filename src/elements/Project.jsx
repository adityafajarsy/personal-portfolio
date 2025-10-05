import React from "react";
import { listProyek } from "../data";

const Project = () => {
  
  return (
    <div>
      {/* Project */}
      <div className="project mt-16 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          This Projects i made
        </p>
        <div className="project-box mt-14 flex flex-wrap justify-center gap-6 ">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[45%] lg:w-[30%] p-4 bg-zinc-800 rounded-md border border-indigo-400/20 "
              data-aos-delay={project.dad}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              <img src={project.gambar} alt={project.nama} loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-900/80 p-3 rounded-lg block border border-indigo-900 hover:bg-indigo-600 transition-all duration-300 ease-linear"
                    >
                      Open Website
                    </a>
                  ) : (
                    <button
                      disabled
                      className="bg-zinc-900/30 text-indigo-400 p-3 rounded-lg w-full border border-indigo-800/30 cursor-not-allowed"
                    >
                      Not Deployed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}
    </div>
  );
};

export default Project;
