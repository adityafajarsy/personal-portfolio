import React from "react";
import DataImage from "../data";

const Home = () => {
  return (
    <div>
      <div
        className="hero grid md:grid-cols-2 grid-cols-1 pt-10 items-center xl:gap-0 gap-6 mt-18"
        id="beranda"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl text-sm sm:text-lg">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>I Agree to myself to keep always improving.🚀</q>
          </div>
          <h1 className="text-4xl/tight sm:text-5xl/tight font-black mb-6">
            Hi, Saya Aditya Fajar Satya Yudha
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            maxime dolorem ex sed at similique architecto maiores laboriosam
            illum, minima et labore ratione nihil odit provident debitis facilis
            iste excepturi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adityafajarsy/"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors"
              target="_blank"
            >
              Connect with me! <i class="ri-linkedin-box-fill ri-xl"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          loading="lazy"
          alt="Hero Img"
          className="w-[500px] md:ml-auto rounded-2xl shadow-lg
          transition-transform duration-500 ease-in-out
          hover:scale-105 hover:-rotate-2 hover:-translate-y-2  animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>
    </div>
  );
};

export default Home;
