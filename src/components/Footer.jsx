import React from "react";
import ShinyText from "./ShinyText/ShinyText";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-black">
        <ShinyText
          text={`Portfolio`}
          disabled={false}
          speed={3}
          className="custom-class text-4xl/snug"
          type={"default"}
        />
      </h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#project">Project</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/adityafajarsy"
          className="transition-transform duration-300 hover:-translate-y-2"
          target="_blank"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a
          href="https://instagram.com/adityafajarsyy"
          className="transition-transform duration-300 hover:-translate-y-2"
          target="_blank"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adityafajarsy/"
          className="transition-transform duration-300 hover:-translate-y-2"
          target="_blank"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
