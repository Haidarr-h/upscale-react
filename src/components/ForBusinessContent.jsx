import { motion } from "framer-motion";

const ForBusinessContent = () => {
  const images = [
    {
      src: "https://upscale.id/template/upscale/media/music/image-1.jpg",
      style: "top-0 left-0 w-40 z-10",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-2.jpg",
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
              <div className="flex flex-row w-1/2 gap-[30px]">
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
                        initial={{ opacity:0 }}
                        animate={{ opacity:1, transition:{duration:1} }}
                        whileHover={{ scale:1.2 }}
                        className="max-h-[50px] w-auto object-contain"
                    >
                    </motion.img>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForBusinessContent;
