import React from 'react'

const Provide = () => {
  return (
    <section className='w-full h-[80vh] flex md:flex-row flex-col gap-16 mt-20'> 
    <div className='flex justify-center items-center'>
        <img src="/Images/park.png"  alt="park" />
    </div>
    <div className="flex flex-col justify-center gap-4 items-left w-1/2">
    <h3 className='text-[#E58411] uppercase font-medium'>WE PROvIDE</h3>
    <h4 className='text-4xl font-bold'>Best Amenities</h4>
    <ul className='list-disc list-inside line-height-[33px] font-medium text-[#1E1E1E] opacity-80'>
        <li >Vaastu-Friendly apartents facing either green areas or road-facing</li>
        <li>Fenestrated with windows and premium doors</li>
        <li>Oriented for natural daylighting and proper cross-ventilation</li>
        <li>Spacious apartments with wider balconies and seating area</li>
        <li>Lage Wardrobe spaces</li>
        <li>Individual Drop-Off Zone</li>
    </ul>
    </div>
    </section>
  )
}

export default Provide
