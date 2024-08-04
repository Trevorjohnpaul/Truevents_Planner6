'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import InfoCard from './InfoCard';
import Image from 'next/image';

const images = [
  '/assets/img1.jpeg',
  '/assets/img2.jpeg',
  '/assets/img4.jpeg'
  // Add more images as needed
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      className="start flex flex-col h-screen md:h-[750px] items-center text-white px-4 md:px-8 mb-16"
      id="home"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out' // Smooth transition
      }}
    >
      <div className="w-full flex flex-col gap-4 md:gap-8">
        <div className="max-w-xs md:max-w-md flex flex-col gap-4 md:gap-12 text-white">
          <div className="flex flex-col font-semibold text-2xl md:text-3xl">
            <span className="inline-block">Hello Fam Lets Celebrate</span>
            <span>Your Events With True Vibes</span>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates, modi, illum accusantium quis voluptas eum ad inventore aliquam, vel quos vitae. Ullam itaque ex officiis dicta modi expedita quam?
          </p>
          <a href='#about'>
            <button className="button self-start text-sm md:text-xl rounded-md py-2 md:py-4 px-4 md:px-8 bg-[#F88109]">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>

      {/* SOCIALS */}
      <div></div>
    </section>
  );
};

export default Hero;
