const Features = () => {
  return (
    <>
      <section className="relative z-10 w-full bg-white h-[200px]">
        <div className="max-w-[1200px] mx-auto relative top-[50px] z-20">
          <ul className="flex flex-row gap-[40px]">
            <li className="features-box">
              <img src="carbon.png" alt="" />
              <h4>Dedicated Team</h4>
              <p className="">Hire talent sebagai karyawan outsource.</p>
            </li>
            <li className="features-box">
              <img src="simple-icons_freelancer.png" alt="" />
              <h4>Dedicated Team</h4>
              <p>Hire talent sebagai karyawan outsource.</p>
            </li>
            <li className="features-box">
              <img src="employee.png" alt="" />
              <h4>Dedicated Team</h4>
              <p>Hire talent sebagai karyawan outsource.</p>
            </li>
            <li className="features-box">
              <img src="projection.png" alt="" />
              <h4>Dedicated Team</h4>
              <p>Hire talent sebagai karyawan outsource.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
