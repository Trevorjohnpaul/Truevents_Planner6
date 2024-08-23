'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const testimonialsData = [
  {
    image: '/assets/img40.jpeg',
    quote: 'True Events transformed our wedding into a magical experience. The attention to detail was incredible, and the decor was simply stunning. We couldn’t have asked for a better team!',
    name: 'Company 1'
  },
  {
    image: '/assets/img26.jpeg',
    quote: 'Working with True Events was a breeze. They handled everything with such professionalism and creativity. Our corporate event was a huge success, thanks to their impeccable decor and planning.',
    name: 'Company 2'
  },
  {
    image: '/assets/img26.jpeg',
    quote: 'The team at True Events took our vision and turned it into reality. Every detail was perfect, and our guests were blown away by the decor. Highly recommend!',
    name: 'Company 3'
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { image, quote, name } = testimonialsData[currentTestimonial];

  return (
    <section className='h-auto text-white py-16 md:pt-16 sm:pt-16' id="testimonials">
      <div className='testimonial1 pt-24 flex flex-col items-center justify-center py-8 px-8 mb-16'>
        <div className='flex flex-col gap-4 items-center justify-center mb-16'>
          <span className='text-[#F88109] text-4xl font-bold'>Testimonials</span>
          <span className='text-3xl font-semibold'>What Our Clients Say About Us</span>
          <div></div>
        </div>
        <div className='relative gap-8 flex justify-center items-center transition-all duration-3000 ease-in-out'>
          <div className='relative flex flex-col items-center transition-all duration-3000 ease-in-out'>
            <Image
              className='rounded-full z-10 transition-all duration-3000 ease-in-out'
              src={image}
              width={84}
              height={84}
              alt=''
              style={{ marginBottom: '-65px' }}
            />
            <div className='flex flex-col items-center justify-center md:-mb-24 lg:-mb-24 p-4 text-gray-600 bg-white shadow-md rounded-md w-full min-h-[320px] transition-all duration-3000 ease-in-out relative'>
              <span className='absolute top-4 left-4 text-6xl'>“</span>
              <p className='max-w-sm text-center'>
                {quote}
              </p>
              <span className='absolute md:bottom-4 bottom-2 right-4 text-[#F88109] text-2xl'>{name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
