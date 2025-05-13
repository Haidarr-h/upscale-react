import Departement from "./Departement";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Konten = () => {
  const dropDownReqType = [
    {
      title: "Dedicated Team / Freelance Team",
      desc: "Pencarian talent terbaik untuk kebutuhan bisnis Anda. Talent bersedia untuk bekerja on-site maupun remote dan full-time maupun part-time.",
    },
    {
      title: "Head Hunter",
      desc: "Menyediakan fasilitas pencarian talent untuk dijadikan karyawan internal.",
    },
    {
      title: "Project-Based",
      desc: "Menyediakan fasilitas pencarian vendor untuk menjadi sub-contractor project Anda.",
    },
  ];

  const [openType, setOpenType] = useState(null);
  const toggleOpenType = (index) => {
    setOpenType(openType === index ? null : index);
  };

  return (
    <>
      {/* ! section 1 : fokuskan perhatian anda */}
      <section className="bg-white w-full ">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 flex flex-col gap-[60px] text-center pt-[85px] pb-[126px]">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h1 className="text-[#293751] opacity-0 animate-slide-up animation-delay-700 font-jost font-semibold">
              Fokuskan perhatian pada strategi pengembangan bisnis Anda.
            </h1>
            <p className="mt-[30px] font-jost w-2/3 animate-slide-up animation-delay-700 text-center mx-auto">
              Kami akan meng-handle urusan perpajakan, legal dan management.
              Kami memiliki framework kerja yang terbukti efektif untuk
              kolaborasi team dan juga terdapat tools memonitor produktivitas
              secara real-time.
            </p>
          </motion.div>

          <motion.img
            src="https://upscale.id/template/upscale/media/devices.png?_r=68107e2b9dd5d"
            alt=""
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col xl:flex-row gap-[30px] detail"
          >
            <div className="">
              <h4>Kecepatan Rekrutmen</h4>
              <p>
                Setelah kami mengetahui kebutuhan bisnis Anda, talent akan ready
                dalam waktu 14 hari.
              </p>
            </div>
            <div className="">
              <h4>Kontrol Penuh</h4>
              <p>
                Anda akan mendapatkan report berkala dan dapat login dalam
                sistem real-time monitoring kami.
              </p>
            </div>
            <div className="">
              <h4>Cost-Efficient</h4>
              <p>
                Tidak perlu mengeluarkan biaya untuk kantor dan team yang tidak
                produktif.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Konten 2 : Departemen apa yang anda butuhkan ? */}
      <Departement></Departement>

      {/* ! Konten 3 : bagaimna prosedur kami ? */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] xl:px-0 mx-auto px-[4%] flex flex-col xl:flex-row gap-[70px] py-[60px]">
          {/* kiri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-[30px] xl:w-1/2"
          >
            <h1 className="font-jost font-medium">
              Bagaimana prosedur kami ? Kami bekerja sesuai dengan kebutuhan
              bisnis Anda
            </h1>
            <p className="font-jost">
              Konsultasi singkat dengan konsultan kami akan membantu kami untuk
              mengetahui kebutuhan bisnis dan talent Anda. Kami pastikan talent
              yang kami tawarkan adalah talent yang memiliki kualifikasi sesuai
              dengan kebutuhan.
            </p>

            <div className="space-y-4">
              <h3 className="font-normal">Perkiraan waktu untuk konsultasi</h3>
              <div className="flex flex-row space-x-3">
                <AnimatedCounter
                  className="font-jost text-5xl font-semibold"
                  from={0}
                  to={30}
                  duration={2}
                ></AnimatedCounter>
                <h3 className="mt-auto text-[rgb(71,178,228)]">Menit</h3>
              </div>
            </div>
          </motion.div>

          {/* kanan */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col  xl:w-1/2"
          >
            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div className="">
                <h1 className="text-left">1</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div className="text-left">
                <h3 className="font-jost">
                  Konsultasikan kebutuhan bisnis Anda
                </h3>
                <p className="font-jost">
                  Bisnis analis kami akan membantu Anda dalam menentukan
                  kualifikasi talent.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>2</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3 className="font-jost">Talent Assessment</h3>
                <p className="font-jost">
                  Kami akan melakukan pencarian talent sesuai dengan kebutuhan,
                  melakukan interview, test psikolog, dan online technical test.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>3</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3 className="font-jost">Pilih Talent Anda</h3>
                <p className="font-jost">
                  Kami akan memberikan list kandidat terbaik, dan Anda dapat
                  melakukan assessment tambahan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Konten 4 : ingin konsultasi ? */}
      <section className="w-full bg-[url('https://upscale.id/template/upscale/media/hd-4.jpg')] bg-center">
        <div className="max-w-[1200px] mx-auto flex xl:flex-row flex-col gap-[50px] px-[4%] xl:px-0 py-[80px] justify-between text-white">
          <div className="space-y-5 text-center xl:text-left">
            <h1 className="font-jost font-medium">
              Ingin Konsultasi Kebutuhan Anda?
            </h1>
            <p className="font-jost">
              Bisnis analis kami selalu siap untuk mendengar kebutuhan bisnis
              Anda, secara GRATIS.
            </p>
          </div>
          <button className="rounded-md bg-[#37517E] py-2 px-10 hover:bg-[#4F73A8]">
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>

      {/* Konten 5 : setelah dapat talent terbaik */}
      <section className="w-full bg-[rgb(241,245,247)]">
        <div className="max-w-[1200px] xl:px-0 mx-auto px-[4%] flex xl:flex-row flex-col gap-[70px] py-[60px]">
          {/* kiri */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-[30px] xl:w-1/2 text-center xl:text-left"
          >
            <h1 className="font-jost font-medium">
              Setelah Anda mendapatkan talent terbaik, Kami tetap mensupport
              kebutuhan bisnis Anda
            </h1>
            <p className="font-jost font-light">
              Setelah Anda mednapatkan talent, kami segera mempersiapkan semua
              dokume HR seperti kontrak dan perpajakan. Kami juga mengelola
              seputar managemen seperti timeline, finance, KPI building, dll.
            </p>
            <h3 className="font-jost font-medium">Estimated Talent Matching</h3>
            <h5 className="font-jost font-medium text-[30px]">
              {" "}
              <AnimatedCounter
                from={0}
                to={14}
                duration={4}
              ></AnimatedCounter>{" "}
              days
            </h5>
          </motion.div>

          {/* kanan */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col xl:w-1/2"
          >
            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>4</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Paperwork</h3>
                <p>
                  Persiapan kontrak, pembuatan akun real-time monitoring agar
                  kedepan anda dapat memastikan produktifitas talent, dll.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>5</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Talent Siap Bekerja</h3>
                <p>Talent siap membantu mengembangkan bisnis Anda.</p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>6</h1>
                <div className="w-px bg-gray-500 flex-1 h-full"></div>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Support</h3>
                <p>
                  Kami juga dapat membantu anda mengelola beberapa hal seperti
                  coworkspace, absensi, perijinan, timeline, task, KPI dll
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Konten 6 : recruitment type */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto py-[100px] px-[4%] xl:px-0 flex flex-col xl:flex-row gap-[50px]">
          {/* left */}
          <div className="space-y-5 xl:w-1/4">
            <h1 className="font-jost font-medium">Recruitment Type</h1>
            <p className="font-jost font-light">
              Tentukan tipe recruitment anda. Pilihan fasilitas tidak bersifat
              wajib, sehingga masih dapat disesuaikan kembali sesuai kebutuhan.
            </p>
            <div className="flex flex-col gap-[20px]">
              {dropDownReqType.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    className="flex flex-row gap-4"
                    onClick={() => toggleOpenType(index)}
                  >
                    <motion.div
                      animate={{ rotate: openType === index ? 90 : 0 }}
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
                    <h3 className="text-left font-medium text-lg">
                      {item.title}
                    </h3>
                  </button>
                  <AnimatePresence initial={true}>
                    {openType === index && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 text-gray-700"
                      >
                        <p className="mt-3 mb-2 font-light">{item.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="overflow-x-scroll xl:w-3/4">
            <table className=" table-auto font-jost overflow-x-scroll">
              <thead>
                <tr className="font-light ">
                  <th className="p-2 text-left border-b border-r">
                    Fasilitas
                  </th>
                  <th className="p-2 text-left border-b border-r">
                    Dedicated Team / Freelance Team
                  </th>
                  <th className="p-2 text-left border-b border-r">
                    Head Hunter
                  </th>
                  <th className="p-2 text-left border-b">
                    Project-Based
                  </th>
                </tr>
              </thead>
              <tbody className="tablez">
                <tr>
                  <td className="px-4 py-2 border-b border-r">Talent Hunt</td>
                  <td className="px-4 py-2 border-b border-r">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    {" "}
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">CoWork Space</td>
                  <td className="px-4 py-2 border-b border-r">
                    {" "}
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">
                    Remote Worker / On-Site Worker
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    {" "}
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">
                    Resource Operational & Management
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">HR Manager</td>
                  <td className="px-4 py-2 border-b border-r">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">IT Consultant</td>
                  <td className="px-4 py-2 border-b border-r">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-r">
                    Resource Tax and Legal
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-r"></td>
                  <td className="px-4 py-2 border-b">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-r">
                    Shared Project Risk & Responsibilty
                  </td>
                  <td className="px-4 py-2 border-r"></td>
                  <td className="px-4 py-2 border-r"></td>
                  <td className="px-4 py-2">
                    <FontAwesomeIcon
                      size="xl"
                      icon={faCheck}
                      style={{ color: "#63E6BE" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Konten;
