import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Gallery = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll(".carousel-image");
    gsap.fromTo(
      images,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const carouselImages = [
    "/Images/gallery1.png",
    "/Images/gallery2.png",
    "/Images/gallery3.png",
    "/Images/gallery4.png",
    "/Images/gallery5.png",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="font-bold text-6xl p-20">Our Joyous Gallery</h2>
      <div
        className="w-full carousel-container flex justify-between overflow-x-scroll [&::-webkit-scrollbar]:hidden space-x-4 px-4 "
        ref={carouselRef}
      >
        
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className="carousel-image snap-center relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 w-86 flex-shrink-0"
          >
            <img
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 left-4 text-white font-medium">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
