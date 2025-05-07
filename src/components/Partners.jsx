import Features from "./Features";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mediaPartners = [
  "https://upscale.id/template/upscale/media/logos/white/logo-1.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-2.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-3.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-4.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-5.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-6.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-6.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-5.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-4.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-3.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-1.png",
  "https://upscale.id/template/upscale/media/logos/white/logo-2.png",
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <section className="w-full bg-[rgb(55,81,126)]">
        <Features></Features>
        <div className="max-w-[1200px] mx-auto pt-[10px] pb-[80px]">
          {/* <img src="/partners.png" alt="" /> */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] items-center justify-items-center"
          >
            {mediaPartners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="w-[150px] h-auto object-contain"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partners;
