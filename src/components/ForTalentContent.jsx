import { motion } from "framer-motion";
import React from "react";

const ForTalentContent = () => {
  return (
    <>
      <section className="bg-[url('https://upscale.id/template/upscale/media/video-poster-2.jpg')] bg-cover">
        <div className="container-main py-[200px]">
          <div className="flex flex-row justify-between text-white">
            <div className="space-y-5 w-1/2">
              <h1 className="text-[52px]">Upgrade kemampuan dan networkmu.</h1>
              <p>Bergabung dan dapatkan beberapa manfaat:</p>
              <ul className="list-disc ml-6">
                <li>Karir di perusahaan idaman</li>
                <li>Project as a freelance</li>
                <li>Pasif Income</li>
                <li>Free Education</li>
                <li>Konsultasi senior programer</li>
                <li>Konsultasi senior programer</li>
              </ul>
            </div>

            <div className="my-auto">
                <button className="bg-transparent rounded-full border border-white text-white p-3 text-[20px] 
                hover:bg-[rgb(71,178,228)] transition-all duration-700">Join Community</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTalentContent;
