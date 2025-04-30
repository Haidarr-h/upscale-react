// src/components/Hero.jsx
import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* All areas */}
      <section className="relative w-full h-auto overflow-hidden pb-[250px]">
        {/* {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: `-${25 * (i + 1)}vw` }}
            transition={{
              duration: 1.2,
              ease: "backInOut",
            }}
            className="fixed top-0 bottom-0 w-1/4 bg-white z-[999]"
            style={{ left: `${i * 25}%` }}
          />
        ))} */}

        <motion.div
          initial={{ width: "50%", left: "50%" }}
          animate={{ width: 0, left: "0%" }}
          transition={{ duration: 1.5, ease: "anticipate" }}
          className="fixed top-0 bottom-0 bg-white z-[500]"
        />
        
        <motion.div
          initial={{ width: "50%", right: "50%" }}
          animate={{ width: 0, right: "0%" }}
          transition={{ duration: 1.5, ease: "anticipate" }}
          className="fixed top-0 bottom-0 bg-white z-[500]"
        />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-4/5 mx-auto flex flex-col items-center text-center text-white gap-[48px]"
            >
              {/* your content here */}
              <h1 className="">
                <span className="highlighted-text">Hire Talent On-Demand</span>
              </h1>
              <h1 className="">
                <span className="highlighted-text">
                  Kami membantu meng-handle semua urusan "talent", agar anda
                  dapat fokus pada pengembangan bisnis
                </span>
              </h1>
              <p className="">
                <span className="highlighted-text">
                  Hire software developers, designers, product manager, finance,
                  atau administratif team dari eksklusif network kami. Talent
                  kami bisa bekerja secara remote maupun on-site.
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
