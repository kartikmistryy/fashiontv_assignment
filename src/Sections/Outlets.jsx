import React from "react";
import InteractiveOutputGallery from "../components/InteractiveOutputGallery";

const Outlets = () => {
  return (
    <section className="w-full h-full lg:min-h-full relative flex flex-col pb-10 bg-[#FBF0DA]">
      <div className="flex flex-col md:gap-20 gap-10 w-full h-full max-w-[1400px] mx-auto md:pt-20 pt-10">
        <div className="w-full h-full flex md:flex-row flex-col-reverse justify-start items-start gap-5 px-5">
          <span className="w-full h-full md:basis-3/5 basis-full px-5">
            <p className="md:text-sm text-base text-[#54514E]">
              FashionTV FnB franchise outlets are located in top metro cities, tier-two and tier-three cities of the Nation. FTV franchise outlets are known for their intrinsic luxury and aesthetics, impeccable standards of hospitality and an authentic gourmet cuisine along with exquisite beverages.
            </p>
          </span>
          <span className="w-full h-full flex items-center md:justify-end justify-center md:basis-2/5 basis-full px-5">
            <h3 className="md:text-[60px] text-[40px] font-subheadingSerif">Our Outlets</h3>
          </span>
        </div>
        <InteractiveOutputGallery/>
      </div>
    </section>
  );
};

export default Outlets;
