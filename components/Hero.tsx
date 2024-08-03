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
    }, 6000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      className="start flex flex-col h-[750px] items-center text-white px-8 mb-16"
      id="home"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out' // Smooth transition
      }}
    >
      <div className="w-full flex flex-col gap-8">
        <div className="max-w-md flex flex-col gap-12 text-white">
          <div className="flex flex-col font-semibold text-3xl">
            <span style={{ height: '50px', display: 'inline-block' }} className="">Hello Fam Lets Celebrate</span>
            <span className="">Your Events With True Vibes</span>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates, modi, illum accusantium quis voluptas eum ad inventore aliquam, vel quos vitae. Ullam itaque ex officiis dicta modi expedita quam?
          </p>

          <a href='#about'>
            <button className="button self-start text-xl rounded-md py-4 px-8 bg-[#FCA61F]">
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
