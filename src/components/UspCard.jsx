
const UspCard = ({ icon, heading, desc }) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start md:gap-2 gap-1">
      <img
        src={`/about/icons/${icon}.webp`}
        alt={`${icon}Icon`}
        className="w-[50px] h-[50px]"
      />
      <h3 className="text-[#0C0C0C] font-bodyHeading md:text-2xl text-lg">
        {heading}
      </h3>
      <p className="text-sm text-[#0C0C0C]">
        {desc}
      </p>
    </div>
  );
};

export default UspCard;
