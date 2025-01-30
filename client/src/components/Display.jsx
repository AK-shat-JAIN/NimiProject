import  { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Display = () => {

  const displayRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const section = displayRef.current;
    const heading = headingRef.current;
    const listItems = listRef.current.querySelectorAll("li");

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
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Images Animation (Fade in & slide up)
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section  ref={displayRef} className=' h-auto flex md:flex-row flex-col items-center justify-center gap-16 pl-10 md:pl-20 mt-2 md:mt-4 overflow-hidden'> 
    <div className="flex flex-col justify-center gap-4 items-left  ">
    <h4 ref={headingRef} className='text-4xl font-bold'>Indoor Amenities</h4>
    <ul ref={listRef} className='list-disc list-inside line-height-[33px] font-medium text-[#1E1E1E] opacity-80'>
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
    <div className="col-span-2 row-span-3"><img ref={(el) => (imagesRef.current[0] = el)} src="/Images/img3.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-2 row-span-3 col-start-1 row-start-4"><img  ref={(el) => (imagesRef.current[1] = el)} src="/Images/img2.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
    <div className="col-span-6 row-span-5 col-start-3 row-start-2"><img  ref={(el) => (imagesRef.current[2] = el)} src="/Images/img1.png" alt="" className='rounded-[10px] object-cover w-[100%] h-[100%] transform translate-y-4 hover:scale-105 transition-transform duration-500'/></div>
</div>
    
    
    </section>
  )
}

export default Display
