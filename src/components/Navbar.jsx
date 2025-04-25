const Navbar = () => {
  return (
    <>
      <section className="w-full bg-[#37517E] ">
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
          <ul className="hidden lg:flex space-x-8 text-white font-normal ">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                For Talent
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 flex flex-row gap-[15px]"
              >
                <img
                  src="https://upscale.id/template/upscale/media/id.png"
                  alt="indonesia"
                  className="min-w-[25px] h-auto"
                />
                ID
              </a>
            </li>
          </ul>

          {/* right side menus */}
          <div className="hidden lg:flex flexrow gap-[30px] text-white font-normal">
            <button>Login</button>
            <button className="border border-white text-white bg-transparent rounded-full px-3 py-1">Live Chat</button>
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
