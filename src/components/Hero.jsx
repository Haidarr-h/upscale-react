// src/components/Hero.jsx
import React from "react";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      {/* All areas */}
      <section className="relative w-full h-auto overflow-hidden pb-[250px]">
        <video
          src="https://upscale.id/template/upscale/media/repeat-medium.mp4?v=1"
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
            <h1>Hire Talent On-Demand</h1>
            <h1>
              Kami membantu meng-handle semua urusan "talent", agar anda dapat
              fokus pada pengembangan bisnis
            </h1>
            <p className="">
              Hire software developers, designers, product manager, finance,
              atau administratif team dari eksklusif network kami. Talent kami
              bisa bekerja secara remote maupun on-site.
              <br></br><br />
              Kontrak fulltime maupun freelance yang disesuaikan dengan
              kebutuhan bisnis Anda.
            </p>

            <div className="flex flex-row gap-[40px]">
              <button className=" bg-[rgb(71,178,228)] rounded-full px-4 py-2 hover:bg-[rgb(48,121,155)]">
                Request Quotation
              </button>
              <button className="border bg-transparent rounded-full px-4 py-2 hover:bg-[rgb(71,178,228)]">
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
