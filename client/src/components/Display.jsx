import React from 'react'

const Display = () => {
  return (
    <section className=' h-auto flex md:flex-row flex-col items-center justify-center gap-16 pl-10 md:pl-20 mt-2 md:mt-4 overflow-hidden'> 
    <div className="flex flex-col justify-center gap-4 items-left  ">
    <h4 className='text-4xl font-bold'>Indoor Amenities</h4>
    <ul className='list-disc list-inside line-height-[33px] font-medium text-[#1E1E1E] opacity-80'>
        <li >Cafe Lounge and Library</li>
        <li>Multi-purpose hall</li>
        <li>Spa</li>
        <li>Billiards Room</li>
        <li>Kids Play Area</li>
        <li>Chess and carrom room</li>
        <li>Karaoke room</li>
        <li>Squash Court</li>
        <li>Table Tennis Room</li>
        <li>Swimming pool with health Spa</li>
        <li>Private Family Lounge Area</li>
        <li>Yoga Center</li>
        <li>State-of-the-art Gym</li>
    </ul>
    </div>
    
<div className="grid grid-cols-8 grid-rows-6 gap-4 w-full md:w-1/2">
    <div className="col-span-2 row-span-3"><img src="/Images/img3.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-2 row-span-3 col-start-1 row-start-4"><img src="/Images/img2.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-6 row-span-5 col-start-3 row-start-2"><img src="/Images/img1.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
</div>
    
    
    </section>
  )
}

export default Display
