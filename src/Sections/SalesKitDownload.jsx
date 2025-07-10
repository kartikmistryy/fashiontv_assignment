import React, { useState } from "react";

const SalesKitDownload = () => {

  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = (e) => {
    //dummy working so not applying validation
    e.preventDefault()
    setTimeout(() => setSubmitted(true), 300)
  }

  return (
    <div className="w-full h-full md:min-h-[780px] md:max-h-[780px] min-h-[500px] max-h-[500px] flex justify-center items-center relative p-5">
      <img
        src="./saleskitdownload/bgHeader.webp"
        alt="saleskitdownloadHeader"
        className="absolute filter grayscale h-fit top-0 left-0 w-full md:min-h-[780px] md:max-h-[780px] min-h-[500px] max-h-[500px] object-cover object-[center_100%] z-[1]"
      />

      <div
        
        className="h-full bg-gradient-to-br from-[#C8995F] to-[#9C7443] text-[#0A0602] z-[2] w-[730px] px-10 py-12 rounded-md shadow-[0px_4px_36px_0px_rgba(0,0,0,0.25)]"
      >
        <h3 className="md:text-4xl text-3xl font-subheadingSerif">Download the Sales Kit Now</h3>
        <p className="text-base my-3">
          Get instant access to our Sales Kit and grab the benefits of
          partnering with our franchises. Download now and start your
          entrepreneurial journey.
        </p>

        <form action="" onSubmit={handleFormSubmit} className="w-full h-full flex flex-row mt-10">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full md:h-[60px] h-[40px] bg-[#FBF0DA] placeholder:text-[#9A703C6E] rounded-tl-md rounded-bl-md px-5 md:placeholder:text-lg placeholder:text-xs"
          />
          <button type="submit" className="bg-black md:text-base text-xs text-white md:w-[200px] w-[140px] rounded-tr-md rounded-br-md opacity-85 hover:opacity-100 border-y-[1px] border-black border-r-[1px]">
            {submitted ? "DOWNLOADED": "DOWNLOAD"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalesKitDownload;
