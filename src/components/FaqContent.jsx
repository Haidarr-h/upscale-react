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

  const faqTalent = [
    {
      pertanyaan: "Bagaimana cara mendaftar Upscale ?",
      jawaban:
        'Bisa klik tombol login / register di kanan atas website ini , atau klik ke halaman "for talent"',
    },
    {
      pertanyaan: "Apa manfaat bergabung ke upscale?",
      jawaban:
        "Selain mendapatkan tawaran pekerjaan, anda dapat memperluas network kamu agar banyak peluang yang mungkin bisa anda dapatkan.",
    },
    {
      pertanyaan: "Bagaimana status pekerja bagi talent yang mendapatkan pekerjaan?",
      jawaban:
        "Status pekerja ada beberapa macam, ada yang sebagai karyawan upscale, ada yang berstatus sebagai pegawai internal client kami. Tergantung kesepakatan dari client dan talent itu sendiri.",
    },
    {
      pertanyaan: "Apakah saya bisa mendapatkan side project dari Upscale?",
      jawaban:
        "Ya, tentu saja. Meskipun anda saat ini sudah bekerja, namun kami bisa membantu anda mendapatkan pekerjaan sampingan. Namun pastikan tidak mengganggu pekerjaan ya.",
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex2, setOpenIndex2] = useState(null);
  const toggleFaq2 = (index2) => {
    setOpenIndex2(openIndex2 === index2 ? null : index2);
  };

  return (
    <>
      <section className="bg-white">
        <div className="container-main py-[200px]">
          <div className="flex flex-row gap-3 font-jost">
            <div className="flex flex-col flex-1">
              <h3 className="font-medium mb-10 text-2xl">Untuk Perusahaan / Pengusaha</h3>
              <div className="space-y-5">
                {faqPengusaha.map((question, index) => (
                  <div key={index}>
                    <button
                      className="flex flex-row gap-2"
                      onClick={() => toggleFaq(index)}
                    >
                      <motion.div
                        animate={{ rotate: openIndex === index ? 90 : 0 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="size-6 bg-[rgb(18,48,74)] text-white p-1 rounded-md"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-left font-normal text-lg">{question.pertanyaan}</h3>
                    </button>
                    <AnimatePresence initial={true}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 text-gray-700"
                        >
                          <p className="mt-3 mb-2 font-light">{question.jawaban}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-medium mb-10 text-2xl">Untuk Talent</h3>
              <div className="space-y-5">
                {faqTalent.map((question2, index2) => (
                  <div key={index2}>
                    <button
                      className="flex flex-row gap-2"
                      onClick={() => toggleFaq2(index2)}
                    >
                      <motion.div
                        animate={{ rotate: openIndex2 === index2 ? 90 : 0 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          className="size-6 bg-[rgb(18,48,74)] text-white p-1 rounded-md"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-left font-normal text-lg">{question2.pertanyaan}</h3>
                    </button>
                    <AnimatePresence initial={true}>
                      {openIndex2 === index2 && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 text-gray-700"
                        >
                          <p className="mt-3 mb-2 font-light">{question2.jawaban}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
