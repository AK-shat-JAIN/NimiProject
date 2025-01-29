import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectPlanView from "./ProjectPlanView";
import * as THREE from "three";

const Highlight = () => {
  const [selectedPlan, setSelectedPlan] = useState("masterplan");
  const [image, setImage] = useState("/Images/masterplan.png");

  const sizes = [
    { label: "Master Plan", value: "masterplan", src: "/Images/masterplan.png" },
    { label: "Tower 1", value: "tower1", src: "/Images/tower1.png" },
    { label: "Tower 2", value: "tower2", src: "/Images/tower2.png" },
    { label: "Tower 3", value: "tower3", src: "/Images/tower3.png" },
    { label: "Tower 4", value: "tower4", src: "/Images/tower4.png" },
  ];

  const masterplan = useRef(new THREE.Group());
  const highlightRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const highlightSection = highlightRef.current;
    const heading = headingRef.current;
    const buttons = buttonRef.current;
    const image = imageRef.current;
    gsap.fromTo(
      heading,
      { y: "-50%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: highlightSection,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Buttons Animation
    gsap.fromTo(
      buttons,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: highlightSection,
          start: "top 75%",
          end: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image Animation
    gsap.fromTo(
      image,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: highlightSection,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  const handleSizeChange = (value) => {
    setSelectedPlan(value);
    const selectedSize = sizes.find((size) => size.value === value);
    if (selectedSize) {
      setImage(selectedSize.src); // Update image source dynamically
    }
  };

  return (
    <section
      ref={highlightRef}
      id="highlights"
      className="w-full px-10 md:px-20 overflow-hidden h-[70vh] md:h-[100vh] bg-{#f9f9f9}"
    >
      <div className="screen-max-width">
        <h1 ref={headingRef}  id="heading" className="section-heading flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
          Project Plans
        </h1>

        {/* Buttons Section */}
        <div ref={buttonRef} className="mx-auto w-full flex justify-center mt-5">
            <div className="flex flex-wrap gap-0 bg-[#EEEEEE] p-1 px-1.5 rounded-full">
              {sizes.map(({ label, value }) => (
                <span
                  key={label}
                  className={`size-btn rounded-full px-6 py-1 cursor-pointer text-[11px] md:text-base transition-all duration-300 ${
                    selectedPlan === value
                      ? "bg-white text-[#1E1E1E] shadow-lg transform scale-105"
                      : "bg-transparent text-[#1E1E1E]"
                  }`}
                  onClick={() => handleSizeChange(value)}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

        <div className="flex flex-col items-center mt-3">
          <div ref={imageRef} className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative">
            <ProjectPlanView
              index={1}
              groupRef={masterplan}
              controlRef={null}
              item={image}
              size={selectedPlan}
            />
          </div>

          
        </div>


      </div>
    </section>
  );
};

export default Highlight;
