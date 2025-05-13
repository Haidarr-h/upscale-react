import React, { useState, useEffect, use } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHideNavbar = () => setIsOpen(!isOpen);

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
          scrolled ||
          location.pathname === "/jobs" ||
          location.pathname === "/faq" ||
          isOpen
            ? "bg-[#37517E]"
            : "bg-transparent backdrop-blur-sm"
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
          <ul className="menus">
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
              <Link to="/faq">F.A.Q</Link>
            </li>
            <div className="relative group cursor-pointer items-center align-middle">
              <div className="flex flex-row gap-[15px]">
                <img
                  src="https://upscale.id/template/upscale/media/id.png"
                  alt="indonesia"
                  className="w-[18px] h-[12px] my-auto"
                />
                ID
              </div>

              {/* drop down */}
              <div className="absolute rounded-md mt-3  bg-white text-black shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 transition-all duration-500 z-30 space-y-3 w-[90px] h-[100px] items-center flex flex-col justify-center">
                <a className="flex hover:text-[rgb(71,178,228)]">
                  <img
                    src="https://upscale.id/template/upscale/media/id.png"
                    className="object-contain"
                    alt=""
                  />{" "}
                  ID
                </a>
                <a className="flex hover:text-[rgb(71,178,228)]">
                  <img
                    src="https://upscale.id/template/upscale/media/en.png"
                    className="object-contain"
                    alt=""
                  />{" "}
                  EN
                </a>
              </div>
            </div>
            <div className="space-x-8">
              <button className="pl-6 border-l">Login</button>
              <button className="border backdrop-blur-lg border-white text-white bg-transparent rounded-full px-3 py-1 hover:bg-[rgb(71,178,228)]  hover:transition-all hover:duration-700">
                Live Chat
              </button>
            </div>
          </ul>

          {/* Mobile menu button (hamburger icon) */}
          <div className="lg:hidden">
            <button onClick={toggleHideNavbar}>
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

          {/* if is open */}
          {isOpen && (
            <div className="absolute top-full left-0 bg-[#37517E] w-full text-center text-white flex flex-col gap-4 p-4 lg:hidden">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/for-business" onClick={() => setIsOpen(false)}>
                For Business
              </Link>
              <Link to="/for-talent" onClick={() => setIsOpen(false)}>
                For Talent
              </Link>
              <Link to="/jobs" onClick={() => setIsOpen(false)}>
                Jobs
              </Link>
              <Link to="/faq" onClick={() => setIsOpen(false)}>
                F.A.Q
              </Link>
              <div className="flex flex-row mx-auto gap-3">
                <img
                  src="https://upscale.id/template/upscale/media/id.png"
                  alt="indonesia"
                  className="w-[18px] h-[12px] my-auto mx-auto"
                />
                Indonesia
              </div>

              <button>Login</button>
              <button className="border border-white rounded-full px-3 py-1">
                Live Chat
              </button>
            </div>
          )}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
