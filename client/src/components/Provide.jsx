import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Provide = () => {

  const provideRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const section = provideRef.current;
    const image = imageRef.current;
    const heading = headingRef.current;
    const listItems = listRef.current.querySelectorAll("li");

    // Image Animation (Fades in & slides up)
    gsap.fromTo(
      image,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Heading Animation (Fades in from left)
    gsap.fromTo(
      heading,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // List Items Animation (Staggered fade-in)
    gsap.fromTo(
      listItems,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={provideRef} className='w-full  flex md:flex-row flex-col gap-8 mt-10 md:mt-20 overflow-hidden'> 
    <div className='flex justify-center items-center w-1/2 '>
        <img ref={imageRef} src="/Images/park.png" alt="park" className=' transform translate-y-4 hover:scale-105 transition-transform duration-500' />
    </div>
    <div  ref={headingRef} className="flex flex-col justify-center gap-4 items-left p-10">
    <h3 className='text-[#E58411] uppercase font-medium'>WE PROvIDE</h3>
    <h4 className='text-4xl font-bold'>Best Amenities</h4>
    <ul ref={listRef} className='list-disc list-inside line-height-[33px] font-medium text-[#1E1E1E] opacity-80'>
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
