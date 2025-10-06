import React from "react";
import ShinyText from "../components/ShinyText/ShinyText";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const Home = () => {
  return (
    <div>
      <div
        className="hero grid md:grid-cols-2 grid-cols-1 pt-10 items-center xl:gap-0 gap-6 mt-5 sm:mt-18"
        id="beranda"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-4 bg-zinc-800 w-fit p-3 sm:p-4 rounded-2xl text-xs sm:text-lg ">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img
                src="/assets/BRI01432.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover scale-300 translate-x-[15%] object-[70%_70%]"
                loading="lazy"
              />
            </div>
            <q>I Agree to myself to always keep improving.</q>
          </div>
          <h1 className="text-4xl/tight sm:text-4xl/tight md:text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight font-black mb-6">
            <ShinyText
              text={`Hi I'm\nAditya Fajar Satya Y`}
              disabled={false}
              speed={3}
              className="custom-class"
              type={"default"}
            />
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            A motivated web and application developer focused on building
            modern, efficient, and user friendly digital solutions. I enjoy
            working with AI and cloud computing to deliver impactful products
            that combine creativity with technical precision and efficiency.
          </p>
          <div className="flex items-center  sm:gap-4 gap-2">
            <a
              href="/assets/Aditya Fajar Satya Yudha-resume.pdf"
              download="Aditya Fajar Satya Yudha - CV.pdf"
              className="border border-violet-500/40 hover:bg-black/20 p-4 rounded-2xl transition-colors text-xs sm:text-base"
            >
              <ShinyText
                text="Download CV"
                disabled={false}
                speed={3}
                className="custom-class"
                type="default"
              />
              <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adityafajarsy/"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors text-xs sm:text-base "
              target="_blank"
            >
              Connect with me! <i className="ri-linkedin-box-fill ri-xl"></i>
            </a>
          </div>
        </div>
        <div className="w-[300px] mt-5 sm:mt-0 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s mx-auto">
          <ProfileCard
            name="Aditya Fajar SY"
            title="Web Developer"
            handle="adityafajarsyy"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/adityafajarsy.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              window.open("https://wa.me/6287741583948", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
