import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image,
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  return (
    <div ref={aboutRef} className="bg-gray-100 px-10 md:px-20 w-full overflow-hidden">
      <div className="grid md:grid-cols-2  gap-8 items-center py-20 ">
      <div ref={textRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-poppins text-gray-900">
          CRC JOYOUS: JOY OF <br /> Exemplary living
          </h2>
          <p className="mt-4 text-sm md:text-lg text-gray-700 text-justify">
          <spam className="font-bold">CRC Joyous </spam>is the divine abode where nature and the modern world coexist beautifully. It is an ideal living space that is surprisingly amplified with comfort in mind. This upcoming project has been designed in a sheer space with creativity and comfort in mind.<br />
          Step into paradise and experience the exhilarating feeling of living in CRC Joyous, an ordinary piece of land made special for you with beautiful and cozy homes. Equipped with the best amenities and facilities, it has been designed to leave you spellbound.
          </p>
          
        </div>

        <div className="relative">
        
          <div ref={imageRef} className="relative ">
            
            <img
              src="/Images/Group 48095438.png" 
              alt="CRC Group"
              className="rounded-lg  w-[100%] h-auto mr-2 relative z-[2] transform translate-y-4 hover:scale-105 transition-transform duration-500"
            />
            
            
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default About
