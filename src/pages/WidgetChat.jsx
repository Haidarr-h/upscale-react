import React from "react";

const WidgetChat = () => {
  return (
    <>
      <section className="fixed bottom-[90px] right-4 rounded-2xl py-[40px] w-[350px] bg-[#37517e] px-5 z-[900]">
        <div className="container-main space-y-4">
          <p className="text-center text-white text-base">
            For Fast Response please contact us from Whatsapp 087-888-666-531{" "}
            <span className="underline">Click Here</span>
          </p>
          <form className="flex flex-col gap-3 rounded-md py-4 bg-white mx-auto items-center justify-center inputWidget w-full">
              <input type="text" placeholder="Name" required />
              <input type="number" placeholder="Phone" required />
              <input type="email" placeholder="Email" required />
              <input
                className="py-4 h-[90px]"
                type="text"
                placeholder="Message"
                required
              />
              <input
                type="submit"
                value="Submit"
                className="bg-[#37517e] text-white w-2/3 cursor-pointer"
              />
          </form>
        </div>
      </section>
    </>
  );
};

export default WidgetChat;
