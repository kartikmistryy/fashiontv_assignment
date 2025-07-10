import { useState } from "react";

const InteractiveOutputGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full h-full flex flex-row  relative md:gap-5 gap-2 md:px-10 px-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveImage(index)}
          style={{backgroundImage: `url(./outlets/gallery/${index}.webp)`}}
          className={`w-full h-full min-h-[500px] hover:cursor-pointer bg-cover bg-center relative ${
            activeImage === index ? "md:basis-[60%] basis-[70%]" : "md:basis-[13%] basis-[10%]"
          } transition-all ease-in-out duration-300`}
        >
          <span
            className={`w-full h-full absolute top-0 left-0 ${
              activeImage === index ? "bg-[#000]/0" : "bg-[#000]/50"
            } transition-all ease-in-out duration-300`}
          />
        </button>
      ))}
    </div>
  );
};

export default InteractiveOutputGallery;
