
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ formVis }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subHeadingRef = useRef(null);
  const btnRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subHeading = subHeadingRef.current;
    const btn = btnRef.current;
    const logo = logoRef.current;

    gsap.fromTo(
      logo,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(
      title,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      subHeading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.4 }
    );

    gsap.fromTo(
      btn,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.8 }
    );

    // Scroll-triggered parallax effect
    gsap.fromTo(
      hero,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 20%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={heroRef} className='p-0 m-0 w-full h-[100vh] overflow-hidden'> 
      <div className="wrapper bg-[url(/Images/Bg.png)] h-[100vh] w-[100vw] bg-center bg-cover flex flex-col items-center text-white text-center justify-between overflow-hidden">
        <div ref={logoRef} className="logo flex flex-row justify-between w-full p-10">
            <img src="/Images/crc logo.png " className='sm:w-1/12 w-1/6 h-auto' alt="logo" />
            <button onClick={()=> formVis()} className='py-0 sm:px-12 p-6 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold text-[8px] sm:text-[14px]'>get free consultation</button>
        </div>
        <div className="hero-content flex flex-col items-center justify-center gap-4 pb-40">
            <h1 ref={titleRef} className="title text-3xl md:text-5xl lg:text-6xl font-bold font-poppins">Welcome to CRC Group</h1>
            <h4 ref={subHeadingRef} className="sub-heading text-sm md:text-md lg:text-lg font-semibold">MAKING YOU CONQUER YOUR BIGGEST DREAM
            </h4>
            <button ref={btnRef} onClick={()=> formVis()} className='py-2 px-10 md:px-16 bg-transparent backdrop-blur border text-white rounded-full cursor-pointer text-transform uppercase font-semibold md:text-[14px] text-[12px]'>enquire now</button>
        </div>
        
      </div>      
    </div>
  )
}

export default Hero
