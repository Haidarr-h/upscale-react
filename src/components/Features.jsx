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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Freelance Team",
      desc: "Hire talent freelance berbasis man-hour.",
      detail:
        "Freelance team cocok untuk project jangka pendek yang membutuhkan fleksibilitas waktu dan biaya.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Head Hunter",
      desc: "Hire talent sebagai karyawan internal anda.",
      detail:
        "Kami membantu mencari dan merekrut kandidat terbaik untuk menjadi bagian tetap di perusahaan Anda.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Project Based",
      desc: "Hire vendor / freelance berbasis project.",
      detail:
        "Model ini cocok untuk kebutuhan berbasis proyek, dari awal hingga selesai dengan deadline spesifik.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative z-30 w-full">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ ease: "backOut", duration: 0.5  }}
          viewport={{ once: false }}
          className="container-main mx-auto relative py-[50px] lg:py-0 lg:-top-[80px]"
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-1 xl:gap-[25px]">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="features-box cursor-pointer"
                onClick={() => setActiveFeature(feature)}
              >
                {/* <div className="bg-[rgb(206,216,233)] p-2 rounded-full">{feature.icon}</div> */}
                <h4 className="text-left">{feature.title}</h4>
                <p>{feature.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Modal */}
        {activeFeature && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white rounded-xl p-8 max-w-sm lg:max-w-md mx-auto relative">
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
