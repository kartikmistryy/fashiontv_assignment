import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-full bg-black py-14'>
        <div className='w-full h-full max-w-[1400px] mx-auto flex md:flex-row flex-col justify-between items-start gap-10'>
            <div className='w-full h-full flex flex-col gap-10 text-white justify-start md:items-start items-center'>
                <img src="./footer/logo.webp" alt="footerLogo" className='md:w-[170px] md:h-[50px] w-fit h-fit max-w-[170px]'/>
                <span className='w-full h-full flex flex-row md:justify-start justify-center items-center gap-10'>
                    <a className='flex w-fit items-center gap-3 text-sm' href="#">
                        <img src="./footer/icons/phone.webp" alt="phoneIcon" className='w-[20px] h-[15px]'/>
                        7873566666
                    </a>
                    <a className='flex w-fit items-center gap-3 text-sm' href="#">
                        <img src="./footer/icons/mail.webp" alt="mailIcon" className='w-[20px] h-[15px]'/>
                        enquiry@ftv.ind.in
                    </a>
                </span>
            </div>
            <div className='w-full h-full flex flex-col md:gap-10 gap-5 text-white justify-start md:items-end items-center'>
                <span className='w-full h-full flex flex-row gap-5 items-center md:justify-end justify-center'>
                    <img src="./footer/icons/facebook.webp" alt="facebookIcon" className='w-fit h-fit max-w-[40px]'/>
                    <img src="./footer/icons/instagram.webp" alt="instagramIcon" className='w-fit h-fit max-w-[40px]'/>
                    <img src="./footer/icons/twitter.webp" alt="twitterIcon" className='w-fit h-fit max-w-[40px]'/>
                    <img src="./footer/icons/linkedin.webp" alt="linkedinIcon" className='w-fit h-fit max-w-[40px]'/>
                    <img src="./footer/icons/youtube.webp" alt="youtubeIcon" className='w-fit h-fit max-w-[40px]'/>
                </span>
                <p className='text-[#414141] text-sm'>Copyrights © 2025 FTV License all right reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer