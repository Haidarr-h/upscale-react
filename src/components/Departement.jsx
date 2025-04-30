import AnimatedCounter from "./AnimatedCounter";

const Departement = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#A3B8D6] via-[#4F73A8] to-[#37517E]">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 flex flex-col gap-[50px] text-center py-[50px] text-white">
          <h1 className="font-jost font-medium">
            Departemen apa yang Anda butuhkan saat ini?
          </h1>
          <p className="font-jost xl:w-1/2 mx-auto opacity-80">
            Talent kami mencakup, namun tidak terbatas pada Software Developer,
            Quality Assurance, Graphic Designer, UX Designer, Product Manager,
            Keuangan, Data Entry, dll. Talent kami sangat disiplin dan memiliki
            passion terhadap produktifitas dan teknologi.
          </p>

          <div className="konten2-box flex flex-col xl:flex-row gap-[40px] text-center">
            <div className="">
              <h5 className="">Talent Pool</h5>
              <h5 className=""><AnimatedCounter from={0} to={100000} duration={3}/>+</h5>
              <p>Talent pool dari partnership, komunitas, dan universitas.</p>
            </div>
            <div>
              <h5>Talent Tersalurkan</h5>
              <h5><AnimatedCounter from={0} to={7000} duration={3}/>+</h5>
              <p>Talent tersalurkan dan bekerja untuk client kami.</p>
            </div>
            <div>
              <h5>Happy Clients</h5>
              <h5><AnimatedCounter from={0} to={100} duration={3}/>+</h5>
              <p>
                Sejak tahun 2009, UpScale telah dipercaya oleh ratusan
                perusahaan
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departement;
