// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* All areas */}
      <section className="relative w-full h-auto overflow-hidden">
        {/* {[3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 100 }}
            animate={{ x: `-${25 * (i + 1)}vw` }}
            transition={{
              duration: 1.2,
              ease: "backInOut",
            }}
            className="fixed top-0 bottom-0 w-1/4 bg-white z-[999]"
            style={{ left: `${i * 25}%` }}
          />
        ))} */}

        {/* <motion.div
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
        /> */}
        <video
          src="https://upscale.id/template/upscale/media/repeat-medium.mp4?v=1"
          // src="https://videos.pexels.com/video-files/4629800/4629800-uhd_2560_1440_25fps.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* hero section (title etc) */}
        <div className="relative z-30 max-w-[1200px] mx-auto px-[4%] xl:px-0 py-[150px] lg:py-[200px]">
          <div className="mx-auto items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex flex-col lg:flex-row items-center  text-white gap-[48px]"
            >
              <div className="lg:w-1/2 space-y-5">
                <h1 className="text-left">
                  <span className="font-semibold text-[30px] lg:text-[45px]">Hire Talent On-Demand</span>
                  <span className="font-semibold text-[rgb(71,178,228)] text-5xl"> .</span>
                </h1>
                <h1 className="">
                  <span className="text-[25px] lg:text-[35px]">
                    Kami membantu meng-handle semua urusan "talent", agar anda
                    dapat fokus pada pengembangan bisnis
                  </span>
                  <span className="text-[rgb(71,178,228)] text-5xl"> .</span>
                </h1>
                <p className="">
                  <span className="text-[20px] lg:text-[25px] font-normal font-jost">
                    Hire software developers, designers, product manager,
                    finance, atau administratif team dari eksklusif network
                    kami. Talent kami bisa bekerja secara remote maupun on-site.
                    <br></br>
                    <br />
                    Kontrak fulltime maupun freelance yang disesuaikan dengan
                    kebutuhan bisnis Anda.
                  </span>
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex ">
                <div className="w-full mx-auto gap-5 text-xl flex flex-col lg:flex-row">
                  <button className=" bg-[rgb(71,178,228)] shadow-2xl rounded-full w-full py-2 lg:py-3 hover:bg-[#6f8db9]">
                    Request Quotation
                  </button>
                  <button className="border bg-transparent shadow-2xl rounded-full w-full py-2 lg:py-3 hover:bg-[rgb(71,178,228)]">
                    Join As Talent
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
