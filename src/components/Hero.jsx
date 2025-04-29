// src/components/Hero.jsx
import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      {/* All areas */}
      <section className="relative w-full h-auto overflow-hidden pb-[250px]">
        <video
          // src="https://upscale.id/template/upscale/media/repeat-medium.mp4?v=1"
          src="https://videos.pexels.com/video-files/4629800/4629800-uhd_2560_1440_25fps.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Navbar */}
        <div className="relative z-60">
          <Navbar></Navbar>
        </div>

        {/* hero section (title etc) */}
        <div className="relative z-30 max-w-[1200px] mx-auto px-[4%] xl:px-0 mt-[200px]">
          <div className="w-4/5 mx-auto flex flex-col items-center text-center text-white gap-[48px]">
            <h1 className="">
              <span className="highlighted-text">Hire Talent On-Demand</span>
            </h1>
            <h1 className="">
              <span className="highlighted-text">
                Kami membantu meng-handle semua urusan "talent", agar anda dapat
                fokus pada pengembangan bisnis
              </span>
            </h1>
            <p className="">
              <span className="highlighted-text">
                Hire software developers, designers, product manager, finance,
                atau administratif team dari eksklusif network kami. Talent kami
                bisa bekerja secara remote maupun on-site.
                <br></br>
                <br />
                Kontrak fulltime maupun freelance yang disesuaikan dengan
                kebutuhan bisnis Anda.
              </span>
            </p>

            <div className="flex flex-row gap-[40px]">
              <button className=" bg-[#446496] shadow-2xl rounded-full px-4 py-2 hover:bg-[#6f8db9]">
                Request Quotation
              </button>
              <button className="border bg-transparent shadow-2xl rounded-full px-4 py-2 hover:bg-[#6f8db9]">
                Join As Talent
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
