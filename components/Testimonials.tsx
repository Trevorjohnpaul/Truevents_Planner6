'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const testimonialsData = [
  {
    image: '/assets/img40.jpeg',
    quote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius explicabo necessitatibus aliquam culpa dolore tempora ipsa asperiores nesciunt fugiat, excepturi nihil quibusdam doloremque, provident modi nulla nam, fugit quis.',
    name: 'David Rhymes'
  },
  {
    image: '/assets/img26.jpeg',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    name: 'Sarah Connor'
  },
  {
    image: '/assets/img26.jpeg',
    quote: 'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.',
    name: 'John Doe'
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
    <section className='h-[750px] text-white mt-16 py-16' id="testimonials">
      <div className='testimonial1 flex flex-col items-center justify-center py-8 px-8 mb-16'>
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
            <div className='flex flex-col items-center justify-center -mb-24 p-4 text-gray-600 bg-white rounded-md shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg h-80 transition-all duration-3000 ease-in-out relative'>
              <span className='absolute top-4 left-4 text-6xl'>“</span>
              <p className='max-w-sm text-center'>
                {quote}
              </p>
              <span className='absolute bottom-4 right-4 text-[#F88109] text-2xl'>{name}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
