import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className='h-full text-white mt-16 py-16' id="testimonials">
      <div className='testimonial1 flex flex-col items-center justify-center py-8 px-8 mb-16'>
        <div className='flex flex-col gap-4 items-center justify-center mb-16'>
            <span className='text-[#FCA61F] text-4xl font-bold'>Testimonials</span>
            <span className='text-3xl font-semibold'>What Our Clients Say About Us</span>
            <div></div>
        </div>
        <div className='relative gap-8 flex justify-center items-center'>
            <div className='relative flex flex-col items-center'>
              <Image
                className='rounded-full z-10'
                src={'/assets/img40.jpeg'}
                width={84}
                height={84}
                alt=''
                style={{ marginBottom: '-65px' }}
              />
              <div className='flex flex-col p-2 text-gray-600 bg-white rounded-md -mb-24 shadow-md'>
                <span className='text-6xl'>“</span>
                <p className='max-w-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius explicabo necessitatibus aliquam culpa dolore tempora ipsa asperiores nesciunt fugiat, excepturi nihil quibusdam doloremque, provident modi nulla nam, fugit quis.
                </p>
                <span className='self-end text-[#FCA61F] text-2xl mt-6'>David Rhymes</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials