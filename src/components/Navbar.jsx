import { useEffect, useState } from "react";
import ShinyText from "./ShinyText/ShinyText";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo ">
        <h1 className="text-3xl font-black p-1 bg-transparent md:text-white animate__animated animate__fadeInDown animate__delay-3s animate_slower">
        <ShinyText
              text={`Portfolio`} 
              disabled={false}
              speed={3}
              className="custom-class text-4xl/snug"
              type={'default'}
            />
        </h1>
      </div>
      <ul
        className={`menu flex sm:gap-10 gap-4 items-center md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:top-0 bg-black/70 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 animate__animated animate__fadeInDown animate__delay-3s animate_slow ${active ? "top-0 opacity-100 " : "-top-14 opacity-0 "} ` }
      >
        <li>
          <a href="#beranda" className="sm:text-lg text-gray-300 hover:text-white transition-all text-base font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg text-gray-300 hover:text-white transition-all  text-base font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="sm:text-lg text-gray-300 hover:text-white transition-all  text-base font-medium">
            Project
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-gray-300 hover:text-white transition-all  text-base font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
