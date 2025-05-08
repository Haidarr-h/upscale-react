import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

const ForTalentContent = () => {
  const images = [
    {
      src: "https://upscale.id/template/upscale/media/music/image-15.jpg?v=2",
      style: "lg:top-0 lg:left-0 lg:w-[247px] lg:h-auto lg:z-10",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-1.jpg?v=2",
      style: "lg:top-10 lg:left-24 lg:w-48 lg:z-20",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-11.jpg?v=2",
      style: "lg:top-16 lg:left-48 lg:w-44 lg:z-30",
    },
    {
      src: "https://upscale.id/template/upscale/media/music/image-5.jpg?v=2",
      style: "lg:top-0 lg:left-72 lg:w-52 lg:z-40",
    },
  ];

  const jobs = [
    {
      title: "Web Developer",
      description:
        "2 years work experience, 1 year development experience with Javascript, 1 year development experience with PHP, Good English communication skills and client servicing experiences, Work well under pressure and tight deadlines",
      type: "Fulltime Jobs",
      location: "Remote/onsite",
      contract: "Contract 6 month",
      availability: "2 people",
      experience: "Min 2 years",
      education: "none",
    },
    {
      title: "UI/UX Designer",
      description:
        "3+ years working as a UI/UX designer, Good knowledge and ability to implement the vision using HTML, CSS, Javascript, Experienced at driving a user experience from start-to-finish that delivers results, connects emotionally., Obsessed with good user-centered design practices and have an eye for detail.",
      type: "Fulltime Jobs",
      location: "Remote/onsite",
      contract: "Contract 6 month",
      availability: "2 people",
      experience: "Min 3 years",
      education: "none",
    },
    {
      title: "Quality Assurance (Manual)",
      description:
        "2+ years experience as a Quality Assurance, Experience in testing web-based projects, Strong interest and experience in playing video games, Experience in designing test plan and test cases documentation, Good English communication skills both written and verbal, able to explain defects and provide steps to reproduce clearly, Experience in testing APIs (REST API preferred), Ability to work with clients on tight deadlines and fluid requirements",
      type: "Fulltime Jobs",
      location: "Remote/onsite",
      contract: "Contract 6 month",
      availability: "2 people",
      experience: "Min 2 years",
      education: "none",
    },
  ];

  return (
    <>
      <section className="bg-[url('https://upscale.id/template/upscale/media/video-poster-2.jpg')] bg-center bg-cover">
        <div className="container-main lg:py-[200px] py-[100px]">
          <div className="flex flex-col text-left lg:flex-row gap-10 lg:gap-0 justify-between text-white">
            <div className="space-y-5 lg:w-1/2">
              <h1 className="text-[30px] font-medium lg:text-[52px]">
                Upgrade kemampuan dan networkmu.
              </h1>
              <p>Bergabung dan dapatkan beberapa manfaat:</p>
              <ul className="list-disc ml-8 text-left">
                <li>Karir di perusahaan idaman</li>
                <li>Project as a freelance</li>
                <li>Pasif Income</li>
                <li>Free Education</li>
                <li>Konsultasi senior programer</li>
                <li>Konsultasi senior programer</li>
              </ul>
            </div>

            <div className="my-auto">
              <button
                className="w-full bg-transparent rounded-full border border-white text-white p-1 text-[16px] lg:text-[20px] 
                hover:bg-[rgb(71,178,228)] transition-all duration-700"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#37517e] bg-cover">
        <div className="container-main py-[100px]">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 justify-between">
            <div className="content-talent-poin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <div>
                <h3>Get the Dream Jobs</h3>
                <p>Helps talent to get the best-matched company and career.</p>
              </div>
            </div>

            <div className="content-talent-poin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <div>
                <h3>Skill Improvement</h3>
                <p>FREE access to our educational classes.</p>
              </div>
            </div>

            <div className="content-talent-poin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <div>
                <h3>Know your Rights</h3>
                <p>
                  Helps talent to get their rights based on company rules and
                  regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ! join our community section */}
      <section className="bg-[rgb(241,245,247)]">
        <div className="container-main py-[100px]">
          <div className="flex flex-col gap-[100px] font-jost">
            <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row ">
              <div className="lg:w-1/2 space-y-8">
                <h1 className="font-semibold text-5xl">Join Our Community</h1>
                <p className="font-light">
                  Visi kami adalah membangun ecosystem yang dapat mendukung
                  semua pelaku industri, baik talent, perusahaan, universitas,
                  komunitas dan semua pihak lain yang dapat mendukung visi kami.
                  Ayo bergabung untuk meningkatkan kualitas industri indonesia
                </p>
                <button className="border lg:px-5 lg:py-3 p-1 rounded-full border-[rgb(71,178,228)] text-[rgb(71,178,228)] hover:scale-105 hover:bg-[rgb(71,178,228)] hover:text-white transition-all duration-500 w-full lg:w-auto">
                  Join Community
                </button>
              </div>

              <div className="lg:w-1/2 mx-auto">
                <div className="lg:relative lg:w-[500px] lg:h-auto mx-auto grid grid-cols-2 gap-5">
                  {images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image.src}
                      className={`lg:absolute rounded-lg w-[150px] h-auto object-contain cursor-pointer shadow-lg ${image.style}`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 talent-community-content">
              <div>
                <h2>Share & Learn</h2>
                <p>
                  Dengan bergabung dengan upscale, talent mendapatkan akses
                  platform edukasi yang kami kembangkan, baik sebagai mentor
                  maupun sebagai siswa.
                </p>
              </div>
              <div>
                <h2>Expand Your Network</h2>
                <p>
                  Perluas pertemananmu diberbagai bidang kemampuan dan
                  diberbagai regional. Ikuti event-event khusus upscale yang
                  akan dilakukan berkala.
                </p>
              </div>
              <div>
                <h2>Get Hired & Make Money</h2>
                <p>
                  Mulai bangun pipeline karirmu dengan Upscale. Daftarkan diri
                  anda, lengkapi profile, ikuti assessment & dapatkan karir /
                  pekerjaan yang sesuai harapan anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-main py-[100px]">
          <div className="font-jost space-y-10">
            <div className="text-center space-y-8">
              <h1 className="font-medium">Our Partnership in many regional</h1>
              <p className="font-light w-2/3 mx-auto">
                Kami secara aktif akan terus mengembangkan komunitas dan network
                kami dengan berbagai pihak. Nantikan kami hadir di kota anda.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between px-2">
              <img
                src="https://upscale.id/template/upscale/media/map.jpg"
                alt=""
                className="max-w-[802px] h-auto object-contain"
              />
              <ul className="my-auto font-jost font-light space-y-2 konten-regional">
                <li>
                  Yogyakarta, Indonesia <span className="blue-dot"></span>
                </li>
                <li>
                  Jakarta, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Bandung, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Malang, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Bali, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Surabaya, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Tangerang, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Semarang, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Solo, soon <span className="blue-dot"></span>
                </li>
                <li>
                  Bogor, soon <span className="blue-dot"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-main py-[25px] lg:py-[100px]">
          <div className="font-jost">
            <div>
              <h1 className="text-center font-medium mb-10">
                Currently open roles urgently.
              </h1>
            </div>
            <div>
              {jobs.map((jobs, index) => (
                <div key={index} className="p-6">
                  <h2 className="font-medium mb-3">{jobs.title}</h2>
                  <div className="flex flex-col lg:flex-row gap-10 justify-between">
                    {/* kiri */}
                    <div className="flex flex-col gap-5">
                      {/* atas */}
                      <div className="flex flex-col lg:flex-row gap-3">
                        <p className="font-light lg:w-[600px]">
                          {jobs.description}
                        </p>
                        <ul className="font-light ">
                          <li>
                            <span className="blue-dot mr-2"></span>
                            {jobs.type}
                          </li>
                          <li>
                            <span className="blue-dot mr-2"></span>
                            {jobs.location}
                          </li>
                          <li>
                            <span className="blue-dot mr-2"></span>
                            {jobs.contract}
                          </li>
                        </ul>
                      </div>
                      {/* bawah */}
                      <div className="for-talent-job-box">
                        <div className="">
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
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                            />
                          </svg>
                          <div>
                            <h3>Availability</h3>
                            <p>{jobs.availability}</p>
                          </div>
                        </div>
                        <hr />
                        

                        <div className="">
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
                              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            />
                          </svg>

                          <div className="flex flex-col">
                            <h3>Experience</h3>
                            <p>{jobs.experience}</p>
                          </div>
                        </div>

                        <hr />

                        <div className="">
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
                              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                            />
                          </svg>

                          <div className="flex flex-col">
                            <h3>Min. Graduation</h3>
                            <p>{jobs.education}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* kanan */}
                    <div className="lg:w-1/4 w-full space-y-4">
                      <button className="border bg-[rgb(71,178,228)] text-white p-1 lg:p-3 rounded-full w-full">
                        Apply Now
                      </button>
                      <p className="font-light text-sm">
                        Make sure to have all the requirements before contacting
                        us!
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTalentContent;
