import React, { useState } from "react";

const franchiseData = [
  {
    heading: "F Cafe",
    desc: "FashionTV offers a comprehensive branding strategy for expanding your luxury cafe venture.",
    img: "./franchise/photos/fCafe.webp",
  },
  {
    heading: "F Bar",
    desc: "F Bar By FTV is a vision in surrealistic grandeur that offers a premium destination to unwind & relax.",
    img: "./franchise/photos/fBar.webp",
  },
  {
    heading: "F Lounge",
    desc: "FashionTV offers a comprehensive branding strategy for expanding your luxury cafe venture.",
    img: "./franchise/photos/fLounge.webp",
  },
];

const Franchise = () => {
  const [activetab, setActivetab] = useState(0);

  return (
    <section className="w-full h-full lg:min-h-full relative flex flex-col py-20 bg-[#000]">
      <div className="w-full h-full max-w-[1000px] mx-auto flex flex-col justify-center items-start">
        <span className="w-full h-full flex items-center justify-center px-10">
          <h3 className="md:text-[60px] text-[40px] md:text-left text-center font-subheadingSerif text-[#FBF0DA]">Explore More Franchise</h3>
        </span>

        <div className="w-full h-full flex flex-col gap-10 mt-20 px-5">
          {franchiseData.map((franchise, index) => {
            const isActive = index == activetab;

            return (
              <div
                onClick={() => setActivetab(index)}
                onMouseEnter={() => setActivetab(index)}
                className="w-full h-full md:max-h-[140px] max-h-full flex md:flex-row flex-col-reverse p-[1px] bg-gradient-to-r from-[#747474] to-[#24170B]"
                key={franchise.heading + index}
              >
                <span
                  className={`basis-[60%] md:py-7 md:px-10 px-5 py-8 transition-all ease-in-out duration-300 ${
                    isActive ? "bg-[#FBF0DA]" : "bg-black"
                  }`}
                >
                  <h4
                    className={`text-2xl mb-2 ${
                      isActive ? "text-[#0A0602]" : "text-white"
                    }`}
                  >
                    {franchise.heading}
                  </h4>
                  <p
                    className={`text-sm ${
                      isActive ? "text-[#0A0602B2]" : "text-[#CDCDCDB8]"
                    }`}
                  >
                    {franchise.desc}
                  </p>
                </span>
                <span
                  style={{ backgroundImage: `url(${franchise.img})` }}
                  className={`bg-cover bg-center w-full md:min-h-[140px] min-h-[200px] basis-[40%] relative`}
                >
                  <span
                    className={`w-full h-full absolute top-0 left-0 ${
                      isActive ? "filter-none" : "filter backdrop-grayscale"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </div>
            );
          })}
        </div>

        <a href="#" className="bg-[#9C7443] mx-auto mt-14 text-white md:w-[180px] w-4/5 h-[50px] flex justify-center items-center p-3 rounded-md hover:-translate-y-[1px] transition-all duration-150">
          Visit FTV Franchise
        </a>
      </div>
    </section>
  );
};

export default Franchise;
