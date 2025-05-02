import { motion } from "framer-motion";

const ForBusinessContent = () => {
  const ChevronRightIcon = () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="size-6"
      whileHover={{ x: 20 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </motion.svg>
  );

  const images = [
    {
      src: "https://upscale.id/template/upscale/media/music/image-1.jpg",
      style: "top-0 left-0 w-40 z-10",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-13.jpg",
      style: "top-10 left-24 w-48 z-20",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-3.jpg",
      style: "top-16 left-48 w-44 z-30",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-15.jpg",
      style: "top-0 left-72 w-52 z-40",
    },
  ];

  const partnerImages = [
    "https://upscale.id/template/upscale/media/logos/logo-6.png",
    "https://upscale.id/template/upscale/media/logos/logo-4.png",
    "https://upscale.id/template/upscale/media/logos/logo-1.png",
    "https://upscale.id/template/upscale/media/logos/logo-5.png",
    "https://upscale.id/template/upscale/media/logos/logo-3.png",
  ];

  return (
    <>
      {/* ! konten 1 mini hero */}
      <section className="bg-[url('https://upscale.id/template/upscale/media/video-poster-2.jpg')] bg-cover">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 py-[200px]">
          <div className="text-white w-1/2 flex flex-col gap-[30px] text-[24px]">
            <h1 className="font-medium text-[48px]">
              Scaling Up Your Business
            </h1>
            <h2 className="font-normal">
              Service kami cocok untuk membantu berbagai skala perusahaan
            </h2>
            <ul>
              <li>Enterprise Corporation</li>
              <li>Startup Company</li>
              <li>E-commerce</li>
              <li>Small-business</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[rgb(241,245,247)]">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 py-[100px]">
          <div className="space-y-[100px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row w-1/2 gap-[30px] font-jost">
                <p className="font-light font-jost">
                  Dapatkan akses database talent kami untuk membantu scaling up
                  perusaahaan anda dengan cara yang flexible. Hal ini sangat
                  krusial bagi bisnis yang ingin berinovasi dengan cepat dan
                  tepat. Terlebih apabila anda memiliki roadmap project yang
                  baik dan strategi yang tepat
                </p>
                <p className="font-light font-jost">
                  Sejak tahun 2009, telah membantu banyak perusahaan untuk
                  mewujudkan harapan dengan mencarikan talent atau vendor yang
                  tepat. Dengan database talent pool kami yang jumlahnya lebih
                  dari 5000 talent, kami dapat membantu anda mewujudkan visi
                  anda
                </p>
              </div>
              <div className="relative w-1/2 mx-auto">
                {images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image.src}
                    className={`absolute rounded-lg cursor-pointer shadow-lg ${image.style}`}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-row justify-between items-center">
              {partnerImages.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  whileHover={{ scale: 1.2 }}
                  className="max-h-[50px] w-auto object-contain"
                ></motion.img>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 py-[100px]">
          <div className="flex flex-row gap-[20px] justify-between">
            <div className="forBusiness-card">
              <img
                src="https://upscale.id/template/upscale/media/music/image-16.jpg"
                alt=""
              />
              <h3>Malaysia Startup, Dedicated Team</h3>
              <p>
                2020 kami membantu salah satu startup malaysia yang melayani
                perusahaan oil & gas untuk entry & extraction data untuk AI
                Learning
              </p>
              <a href="">
                Data Entry Dedicated Team
                <ChevronRightIcon />
              </a>
            </div>

            <div className="forBusiness-card">
              <img
                src="https://upscale.id/template/upscale/media/photo/image-10.jpg"
                alt=""
              />
              <h3>Cakap, Dedicated Office & Team</h3>
              <p>
                Sejak tahun 2015 s/d 2020 membantu Cakap mendapatkan belasan
                programer & mengelola development office di jogja.
              </p>
              <a href="">
                Dodi Prakoso Wibowo
                <ChevronRightIcon />
              </a>
            </div>

            <div className="forBusiness-card">
              <img
                src="https://upscale.id/template/upscale/media/photo/image-9.jpg"
                alt=""
              />
              <h3>Krafthaus, Corporate Management</h3>
              <p>
                Sejak tahun 2012 telah dipercaya oleh perusahaan Australia
                sebagai Managing Director untuk mengelola cabang di Indonesia
              </p>
              <a href="">
                Arief Widyananda
                <ChevronRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ! ingin konsultasi kebutuhan anda? form */}
      <section className="bg-[rgb(241,245,247)]">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 py-[100px]">
          <div className="flex flex-col gap-[70px] font-jost">
            <div className="space-y-5 text-center">
              <h1 className="font-medium">
                Simple & an affordable price plans for everyone
              </h1>
              <p className="font-light opacity-80 w-1/2 mx-auto">
                Paket harga dengan konsep yang sederhana & terjangkau untuk
                semua orang. Baik skala Coorporate, startup sampai dengan UKM
              </p>
            </div>

            <div className="w-full rounded-lg bg-white shadow-lg flex flex-row gap-[30px] p-10 font-jost">
              <div className="w-1/3 space-y-5 font-light opacity-80">
                <h1 className="font-medium">
                  Ingin Konsultasi Kebutuhan Anda?
                </h1>
                <p className="font-light opacity-80">
                  Bisnis analis kami akan membantu Anda dalam menentukan
                  kualifikasi talent.
                </p>

                <div>
                  <a className="flex flex-row gap-5">
                    <img
                      src="https://upscale.id/template/upscale/media/id.png"
                      alt=""
                      className="object-contain my-auto"
                    />
                    +62 87 888 666 531
                  </a>
                  <a className="flex flex-row gap-5">
                    <img
                      src="https://upscale.id/template/upscale/media/en.png"
                      alt=""
                      className="object-contain my-auto"
                    />
                    +61 3 9010 6067
                  </a>
                </div>
              </div>

              {/* kanan */}
              <form action={"#"} className="w-2/3 flex flex-col gap-8">
                <input
                  type="text"
                  className="border rounded-md p-2"
                  placeholder="Name"
                  required
                />
                <div className="flex flex-row gap-5">
                  <input
                    type="number"
                    className="border rounded-md p-2 w-full"
                    placeholder="Phone"
                    required
                  />
                  <input
                    type="email"
                    className="border rounded-md p-2 w-full"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="text"
                  className="border rounded-md p-2"
                  placeholder="Write Something ..."
                  required
                />

                <input
                  type="submit"
                  className="text-center bg-[rgb(71,178,228)] rounded-full text-white hover:text-black w-1/4 p-2 transition-all duration-700 font-medium"
                  value="Send inquiry"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForBusinessContent;
