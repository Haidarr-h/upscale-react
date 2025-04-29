import Features from "./Features";
import React from "react";

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
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#A3B8D6] via-[#4F73A8] to-[#37517E]">
        <Features></Features>
        <div className="max-w-[1200px] mx-auto pt-[10px] pb-[80px]">
          {/* <img src="/partners.png" alt="" /> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] items-center justify-items-center">
            {mediaPartners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="w-[150px] h-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
