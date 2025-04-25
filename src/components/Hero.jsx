// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/Mask-group.png')] bg-cover">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center text-white gap-[48px] px-[4%] lg:px-0 pt-[63px] pb-[102px]">
          <h1 className="">Hire Talent On-Demand</h1>
          <h1 className="text-[36px]">
            Kami membantu meng-handle semua urusan "talent", agar anda dapat
            fokus pada pengembangan bisnis
          </h1>
          <p className="text-lg">
            Hire software developers, designers, product manager, finance, atau
            administratif team dari eksklusif network kami. Talent kami bisa
            bekerja secara remote maupun on-site.
            <br></br>
            Kontrak fulltime maupun freelance yang disesuaikan dengan kebutuhan
            bisnis Anda.
          </p>

          <div className="flex flex-row gap-[40px]">
            <button className="border bg-[#7191BF] rounded-full px-4 py-2">
              Request Quotation
            </button>
            <button className="border bg-transparent rounded-full px-4 py-2 hover:bg-[#7191BF]">
              Join As Talent
            </button>
          </div>
        </div>
      </section>
    </>
    // <section className="bg-gray-100 py-20 px-6">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    //     {/* Left content */}
    //     <div className="flex-1 text-center md:text-left">
    //       <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
    //         Welcome to Upscale
    //       </h1>
    //       <p className="mt-4 text-lg text-gray-600">
    //         Elevate your skills, connect with professionals, and grow your career.
    //       </p>
    //       <button className="mt-6 border border-black bg-transparent text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
    //         Get Started
    //       </button>
    //     </div>

    //     {/* Right content - Image */}
    //     <div className="flex-1">
    //       <img
    //         src={heroImage}
    //         alt="Upscale Hero"
    //         className="w-full max-w-md mx-auto"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
