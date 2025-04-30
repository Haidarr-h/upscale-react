import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Dedicated Team",
      desc: "Hire talent sebagai karyawan outsource.",
      detail:
        "Dedicated team adalah model kerja di mana talent bekerja full untuk perusahaan Anda, tanpa perlu mengurus administrasi HR sendiri.",
      img: "carbon.png",
    },
    {
      id: 2,
      title: "Freelance Team",
      desc: "Hire talent freelance berbasis man-hour.",
      detail:
        "Freelance team cocok untuk project jangka pendek yang membutuhkan fleksibilitas waktu dan biaya.",
      img: "simple-icons_freelancer.png",
    },
    {
      id: 3,
      title: "Head Hunter",
      desc: "Hire talent sebagai karyawan internal anda.",
      detail:
        "Kami membantu mencari dan merekrut kandidat terbaik untuk menjadi bagian tetap di perusahaan Anda.",
      img: "employee.png",
    },
    {
      id: 4,
      title: "Project Based",
      desc: "Hire vendor / freelance berbasis project.",
      detail:
        "Model ini cocok untuk kebutuhan berbasis proyek, dari awal hingga selesai dengan deadline spesifik.",
      img: "projection.png",
    },
  ];

  return (
    <>
      <section className="relative z-30 w-full">
        <motion.div
          initial={{ rotate: 45, scale: 0.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ ease: "backOut", duration: 2 }}
          viewport={{ once:false }}
          className="max-w-[1200px] mx-auto relative -top-[80px]"
        >
          <ul className="flex flex-col xl:flex-row gap-[25px]">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="features-box cursor-pointer"
                onClick={() => setActiveFeature(feature)}
              >
                <img src={feature.img} alt="" />
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Modal */}
        {activeFeature && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setActiveFeature(null)}
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">{activeFeature.title}</h2>
              <p className="text-gray-700">{activeFeature.detail}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Features;
