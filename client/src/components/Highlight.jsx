import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const tower1 = useRef(new THREE.Group());
  const tower2 = useRef(new THREE.Group());
  const tower3 = useRef(new THREE.Group());
  const tower4 = useRef(new THREE.Group());

  // GSAP heading animation
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5 }
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
      id="highlights"
      className="w-full px-10 md:px-20 overflow-hidden h-[70vh] md:h-[100vh] bg-{#f9f9f9}"
    >
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
          Project Plans
        </h1>

        {/* Buttons Section */}
        <div className="mx-auto w-full flex justify-center mt-5">
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
          <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative">
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
