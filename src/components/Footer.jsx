const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#37517E]">
        <div className="max-w-[1200px] mx-auto pt-[70px] pb-[50px] px-[4%] xl:px-0">
          <div className=" flex flex-col xl:flex-row gap-[50px] justify-between text-white">
            {/* !left */}
            <div className="left-box-footer space-y-[35px]">
              <img src="logofooter.png" alt="" className="w-[190px] h-[44px]" />
              <div>
                <img src="location_on.png" alt="" />
                <p className="font-light">
                  Jln. Ringroad Utara No 34 Maguwoharjo Yogyakarta, Indonesia
                </p>
              </div>
              <div>
                <img src="call.png" alt="" />
                <p>+62 87 888 666 531 / +61 3 9010 6067 </p>
              </div>
              <div>
                <img src="email.png" alt="" />
                <p>dodi@upscale.id</p>
              </div>
            </div>
            {/* right */}
            <div className="space-y-5">
              <h1 className="font-jost font-normal">For Talent</h1>
              <div className="space-y-[10px]">
                <p className="font-jost font-medium opacity-50">Why Join as Talent?</p>
                <p className="font-jost font-medium opacity-50">Job Opportunities</p>
                <p className="font-jost font-medium opacity-50">Register as Talent</p>
              </div>
            </div>
          </div>
          <hr className="mt-20"/>
          <p className="text-white text-[12px] font-jost mt-3 opacity-70">© Upscale 2020. Member of PT Talenta SInergi Group </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
