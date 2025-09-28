import React from "react";
import {listProyek} from "../data"

const Project = () => {
  return (
    <div>
      {/* Project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Berikut ini beberapa project yang telah saya buat
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos-delay={project.dad}
              data-aos="fade-up"
              data-aos-duration="1000"
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
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600 "
                  >
                    Lihat Website
                  </a>
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
