import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FaqContent = () => {
  const faqPengusaha = [
    {
      pertanyaan: "Siapakah kami ?",
      jawaban:
        "Kami adalah perusahaan yang berfokus pada solusi penyedia talent / tenaga kerja.",
    },
    {
      pertanyaan: "Siapakah yang membutuhkan kami ?",
      jawaban:
        "Semua perusahaan yang membutuhkan talent ( tenaga kerja ), baik sebagai karyawan fulltime, freelance, secara onsite ( dikantor anda ) atau secara remote ( from home / tempat lainya )",
    },
    {
      pertanyaan: "Skala perusahaan yang cocok menggunakan Upscale ?",
      jawaban:
        "Service kami cocok untuk segala level perusahaan, baik UKM, Startup maupun corporate",
    },
    {
      pertanyaan: "Bagaimana cara request talent / tenaga kerja ?",
      jawaban:
        "Silahkan hubungi kami ke nomor 087-888-666-531, baik whatsapp atau telephone",
    },
    {
      pertanyaan:
        "Apakah kelebihan / keunikan Upscale dibanding perusahaan lain",
      jawaban:
        "Perusahaan kami memiliki ecosystem yang berkembang pesat, dengan kerjasama dengan berbagai pihak kami memiliki total database talent pool lebih dari puluhan ribu talent.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-white">
        <div className="container-main py-[100px]">
          <div className="flex flex-row gap-3 font-jost">
            <div className="flex flex-col">
              <h3>Untuk Perusahaan / Pengusaha</h3>
              <div>
                {faqPengusaha.map((question, index) => (
                  <div key={index}>
                    <button
                      className="flex flex-row gap-2"
                      onClick={() => toggleFaq(index)}
                    >
                      {openIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 border"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                          />
                        </svg>
                      ) : (
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
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                          />
                        </svg>
                      )}
                      <h3>{question.pertanyaan}</h3>
                    </button>
                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 text-gray-700"
                        >
                          <p>{question.jawaban}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
