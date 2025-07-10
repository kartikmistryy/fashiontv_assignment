import React, { useState } from 'react'

const HeaderForm = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleFormSubmit = (e) => {
    //dummy working so not applying validation
        e.preventDefault()
        setTimeout(() => setFormSubmitted(true), 400)
    }

  return (
     <form onSubmit={handleFormSubmit}
            className="md:max-w-[400px] w-full bg-[#FBF0DA] h-full rounded-md flex flex-col md:p-10 p-8"
            action=""
          >
            <h1 className="md:text-4xl text-3xl font-light text-[#0C0C0C]">LOREM IPSUM</h1>

              <input type="text" placeholder="NAME" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] mt-[30px]"/>
              <input type="text" placeholder="NUMBER" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] mt-[30px]"/>
              <input type="text" placeholder="E-MAIL" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] mt-[30px]"/>
              <input type="text" placeholder="INVESTMENT" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] mt-[30px]"/>
              <span className="flex flex-row w-full h-full md:gap-[20px] gap-[14px] justify-between mt-[30px]">
                <input type="text" placeholder="STATE" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] w-[140px]"/>
                <input type="text" placeholder="CITY" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] w-[140px]"/>
              </span>
              <input type="text" placeholder="MESSAGE" className="placeholder:text-[#0C0C0C]/50 placeholder:text-xs bg-transparent outline-none border-b-[1px] border-[#0C0C0C] pb-1 text-[#0C0C0C] mt-[30px]"/>

            <button type='submit' className="mt-[50px] bg-[#9C7443] w-full p-3 rounded-md hover:-translate-y-[1px] transition-all duration-150">
                <p className="text-base bg-gradient-to-br from-[#D3BDBD] via-[#E6D3D3] via-[#FFFFFF] via-[#E9D4D4] to-[#312F2F] text-transparent bg-clip-text">{formSubmitted ? "CONNECTED": "CONNECT NOW"}</p>
            </button>
          </form>
  )
}

export default HeaderForm