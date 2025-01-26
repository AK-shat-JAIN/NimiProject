import React from 'react'

const Hero = () => {
  return (
    <div className='p-0 m-0 w-[100vw] h-[100vh]'> 
      <div className="wrapper bg-[url(/Images/Bg.png)] h-[100vh] w-[100vw] bg-center bg-cover flex flex-col items-center text-white text-center justify-between">
        <div className="logo flex flex-row justify-between w-full p-10">
            <img src="/Images/crc logo.png" alt="logo" />
            <button className='py-0 px-12 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold text-[14px]'>get free consultation</button>
        </div>
        <div className="hero-content flex flex-col items-center justify-center gap-4 pb-40">
            <h1 className="title text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">Welcome to CRC Group</h1>
            <h4 className="sub-heading text-sm md:text-md lg:text-lg font-semibold">MAKING YOU CONQUER YOUR BIGGEST DREAM
            </h4>
            <button className='py-2 px-16 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold text-[14px]'>enquire now</button>
        </div>
        
      </div>      
    </div>
  )
}

export default Hero
