import { motion } from "framer-motion";

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

  return (
    <>
      <section className="bg-white">
        <div className="container-main py-[100px]">
          <div className="flex flex-row gap-3 font-jost">
            <div className="flex flex-col">
              <h3>Untuk Perusahaan / Pengusaha</h3>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;