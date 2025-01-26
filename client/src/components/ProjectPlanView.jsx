import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectPlanView = ({ groupRef, controlRef, item, size, index }) => {
  const imageRef = useRef();

  useEffect(() => {
    // GSAP Animation: Fade-in and scale-up effect when the component is mounted
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [size]); // Re-run animation when the size (active plan) changes

  return (
    <div
      ref={imageRef}
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${
        size === `tower${index}` || size === "masterplan" ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      <img
        ref={controlRef}
        src={item}
        alt={size}
        className="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  );
};

export default ProjectPlanView;

