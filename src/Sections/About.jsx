import React from "react";
import UspCard from "../components/uspCard";

const About = () => {
  return (
    <section className="w-full h-full lg:min-h-screen relative flex flex-col pb-10">
      <span className="w-full h-4 min-w-full bg-[#FBF0DA]"></span>
      <div className="flex flex-col md:gap-20 gap-10 w-full h-full max-w-[1400px] mx-auto md:pt-20 mt-10">
        <div className="w-full h-full flex md:flex-row flex-col justify-start items-start">
          <span className="w-full h-full md:basis-3/5 md:block flex justify-center md:mb-0 mb-5 basis-full px-5">
            <img
              src="./about/aboutLogo.webp"
              alt="dinerLogo"
              className="w-fit h-fit md:max-w-[300px] md:max-h-[100px] max-w-[200px]" 
            />
          </span>
          <span className="w-full h-full md:basis-2/5 basis-full px-5">
            <p className="md:text-sm text-base md:text-left text-center text-[#54514E] md:w-[420px]">
              F Diner by FashionTV", which is a luxury dining experience
              combining gourmet cuisine with a fashionable ambiance. It's known
              for its upscale dining and is associated with the Fashion TV.
            </p>
          </span>
        </div>
        <div className="w-full h-full flex md:flex-row flex-col md:gap-0 gap-10 justify-start items-start">
          <span className="w-full h-full flex basis-3/5 px-5 md:min-h-[500px] pr-10">
            <img src="./about/aboutHeader.webp" alt="aboutHeaderImg" className="w-full h-full min-h-full"/>
          </span>
          <span className="w-full h-full flex flex-col gap-5 basis-2/5 px-5">
            <h4 className="text-[#9C7443] font-bodyHeading md:text-sm text-xl uppercase md:text-left text-center">Our Unique selling point</h4>
            <div className="grid grid-cols-2 md:gap-x-10 gap-x-5 gap-y-5 md:mt-0 mt-5">
                <UspCard icon="branding" heading="Global Branding" desc="Leverage FTV’s Luxury & Brand Identity gain instant market recognition with FashionTV’s globally renowned brand."/>
                <UspCard icon="luxury" heading="Luxury Experience" desc="Transform your business into a go to destination for luxury nightlife and elite experiences."/>
                <UspCard icon="growth" heading="Growth Potential" desc="Immense business growth potential with a proven franchise model."/>
                <UspCard icon="business" heading="Business Model" desc="Capitalize on a globally recognized brand to attract discerning clientele and drive success."/>
            </div>
            <button className="mt-10 bg-[#9C7443] text-white md:w-[183px] w-full h-[50px] flex justify-center items-center p-3 rounded-md hover:-translate-y-[1px] transition-all duration-150">
                Download Sales Kit
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
