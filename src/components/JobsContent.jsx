import { div } from "framer-motion/client";

const JobContent = () => {
  const jobs_posted = [
    {
      title: "3. Backend Engineer (GO)",
      description: "Min 1 Year - Fulltime/Partime, Remote/Onsite",
      condition: "urgent",
    },
    {
      title: "Fullstack Programmer",
      description: "Yogyakarta - Min 2 Years - Fulltime/Partime, Remote/Onsite",
      condition: "urgent",
    },
    {
      title: "IT Product Manager",
      description: "Yogyakarta - Min 2 Years - Fulltime/Partime, Remote/Onsite",
      condition: "urgent",
    },
    {
      title: "QA Engineer",
      description: "Yogyakarta - Min 2 Years - Fulltime/Partime, Remote/Onsite",
      condition: "urgent",
    },
    {
      title: "UI/UX Designer",
      description: "Yogyakarta - Min 2 Years - Fulltime/Partime, Remote/Onsite",
      condition: "urgent",
    },
  ];

  return (
    <>
      <section className="bg-white min-h-[500px]">
        <div className="container-main py-[200px]">
          <div className="flex flex-col gap-10 font-jost">
            <div className="text-center space-y-10">
              <h1 className="font-medium">
                Join Now , choose your Expertise !
              </h1>
              <p className="font-light w-2/3 mx-auto">
                Bergabung dengan eksklusif network kami. Kembangkan Karir, Skill
                & Network kamu bersama Upscale. Kami secara aktif akan
                mencarikan kamu peluang yang lebih baik
              </p>
            </div>
            <div className="job-box">
              {jobs_posted.map((job, index) => (
                <div>
                  <div>
                    <h3>{job.title}</h3>
                    <div>
                      <p>
                        {job.description}{" "}
                        <button className="cursor-default">
                          {job.condition}
                        </button>
                      </p>
                    </div>
                  </div>
                  <button>Join</button>
                  <hr className="sm:hidden"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobContent;
