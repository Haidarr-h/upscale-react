const Features = () => {
  return (
    <>
      <section className="relative z-30 w-full">
        <div className="max-w-[1200px] mx-auto relative -top-[80px]">
          <ul className="flex flex-col xl:flex-row gap-[25px]">
            <li className="features-box">
              <img src="carbon.png" alt="" />
              <div>
                <h4>Dedicated Team</h4>
                <p className="">Hire talent sebagai karyawan outsource.</p>
              </div>
            </li>
            <li className="features-box">
              <img src="simple-icons_freelancer.png" alt="" />
              <div>
                <h4>Freelance Team</h4>
                <p>Hire talent freelance berbasis man-hour.</p>
              </div>
            </li>
            <li className="features-box">
              <img src="employee.png" alt="" />
              <div>
                <h4>Head Hunter</h4>
                <p>Hire talent sebagai karyawan internal anda.</p>
              </div>
            </li>
            <li className="features-box">
              <img src="projection.png" alt="" />
              <div>
                <h4>Project Based</h4>
                <p>Hire vendor / freelance berbasis project.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
