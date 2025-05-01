import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#37517E]" : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center align-middle text-xs lg:text-base py-[20px] px-[4%] xl:px-0">
          {/* !* Logo */}
          <div className="">
            <img
              src="https://upscale.id/template/upscale/media/logo-transparent.png"
              alt=""
              className="max-h-[35px] w-auto"
            />
          </div>

          {/* !* Menu */}
          <ul className=" menus">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/for-business">For Business</Link>
            </li>
            <li>
              <Link to="/for-talent">For Talent</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/jobs">F.A.Q</Link>
            </li>
            <li className="items-center align-middle">
              <a href="#" className="flex flex-row gap-[15px]">
                <img
                  src="https://upscale.id/template/upscale/media/id.png"
                  alt="indonesia"
                  className="w-[18px] h-[12px] my-auto"
                />
                ID
              </a>
            </li>
          </ul>

          {/* right side menus */}
          <div className="menus gap-[30px]">
            <button>Login</button>
            <button className="border backdrop-blur-lg border-white text-white bg-transparent rounded-full px-3 py-1">
              Live Chat
            </button>
          </div>

          {/* Mobile menu button (hamburger icon) */}
          <div className="lg:hidden">
            <button>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
