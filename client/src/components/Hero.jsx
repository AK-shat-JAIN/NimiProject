import React from 'react'

const Hero = ({formVis}) => {
  return (
    <div className='p-0 m-0 w-full h-[100vh] overflow-hidden'> 
      <div className="wrapper bg-[url(/Images/Bg.png)] h-[100vh] w-[100vw] bg-center bg-cover flex flex-col items-center text-white text-center justify-between overflow-hidden">
        <div className="logo flex flex-row justify-between w-full p-10">
            <img src="/Images/crc logo.png " className='sm:w-1/12 w-1/6 h-auto' alt="logo" />
            <button onClick={()=> formVis()} className='py-0 sm:px-12 p-6 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px] sm:text-[14px]'>get free consultation</button>
        </div>
        <div className="hero-content flex flex-col items-center justify-center gap-4 pb-40">
            <h1 className="title text-3xl md:text-5xl lg:text-6xl font-bold font-poppins">Welcome to CRC Group</h1>
            <h4 className="sub-heading text-sm md:text-md lg:text-lg font-semibold">MAKING YOU CONQUER YOUR BIGGEST DREAM
            </h4>
            <button onClick={()=> formVis()} className='py-2 px-10 md:px-16 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold md:text-[14px] text-[12px]'>enquire now</button>
        </div>
        
      </div>      
    </div>
  )
}

export default Hero
