import HeaderForm from "../components/HeaderForm"

const Header = () => {
  return (
        <main className="w-full h-full lg:min-h-screen relative">
      <div className="md:h-full lg:min-h-full md:w-[20vw] w-full h-[400px] md:bg-gradient-to-l bg-gradient-to-t from-[#D9D9D9]/0 md:to-[#000] to-[#000000ad] absolute z-[1] top-0 left-0"></div>
      <div className="flex w-full h-full min-h-screen bg-[url('/header/headerBg.webp')] bg-cover bg-center absolute z-[0]"></div>
      <div className="flex w-full h-full max-w-[1400px] z-[2] text-white mx-auto min-h-screen relative md:flex-row flex-col justify-between items-center">
        <div className="w-full h-full flex flex-col justify-center md:items-start items-center p-5 mt-[10vw]">
          <h1 className="lg:text-[100px] md:text-[80px] text-[60px] leading-[58px] md:text-right text-center text-[#FBF0DA] font-heading normal-case">
            Redefine <b className="opacity-0 text-[90px]">i</b> <br />{" "}
            <i className="font-headingCursive text-[#FF0000]">The</i> Luxury{" "}
            <br />
            <b className="font-normal leading-tight">Dining</b>
          </h1>

          <p className="md:text-2xl text-xl md:pr-0 pr-14 lg:mt-0 mt-[30px]">
            Step up your Dining concept with{" "}
            <b className="text-[#FF0000] font-normal">F Diner by Fashion TV</b>
          </p>

          <p className="md:mt-[125px] mt-[50px] text-base max-w-[600px]">
            This is your moment to invest in a high-return industry with the
            iconic <b className="text-[#FF0000] font-normal">FashionTV</b>,
            World’s largest fashion & lifestyle media brand legacy.
          </p>
        </div>
        <div className="w-full h-full min-h-full flex md:justify-end justify-center items-start lg:p-10 p-5">
          <HeaderForm/>
        </div>
      </div>
    </main>
  )
}

export default Header