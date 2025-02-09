import React from 'react';
import Image from 'next/image';
import { FaGlassCheers } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='my-16 py-24 flex flex-col justify-center items-center w-full' id="services">
      <div className='px-8 pt-24 py-24 flex flex-col gap-4 justify-center items-center w-full'>
        <span className='text-[#F88109] text-4xl font-bold'>Our Services</span>
        <span className='text-gray-700 text-3xl mb-8 font-semibold text-center'>We Offer The Best Services In The Country</span>
        <div className='flex flex-col gap-32 w-full px-4 lg:px-24'>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 w-full items-center'>
            <div className='order-1 md:order-none flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Wedding Party</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center'>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Wedding Party</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
              </p>
            </div>
            <div className='flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center'>
            <div className='order-1 md:order-none flex justify-center relative z-10'>
              <Image
                className='rounded-md object-cover h-full w-full'
                src={'/assets/img1.jpeg'}
                width={584}
                height={584}
                alt=''
              />
            </div>
            <div 
              className='flex flex-col gap-2 px-4 pt-4 md:pt-6 bg-[#f8f8f6] rounded-md w-full h-full justify-center'
            >
              <div className='flex gap-4 text-[#F88109] justify-center md:justify-start'>
                <FaGlassCheers size={34} />
                <span className='text-3xl font-semibold'>Wedding Party</span>
              </div>
              <p className='max-w-md text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-14 md:px-8 lg:px-24 items-center">
          <div className="w-full h-[300px] md:h-full rounded-md overflow-hidden relative flex justify-center">
            <Image
              src={'/assets/img7.jpeg'}
              layout='fill'
              objectFit='cover'
              alt=''
            />
          </div>
          <div className="flex flex-col justify-center md:w-full md:h-full gap-4 text-center md:text-left">
            <span className="text-[#F88109] text-2xl md:text-3xl font-bold">
              How It Works
            </span>
            <span className="text-gray-700 text-xl md:text-3xl font-semibold">
              We Make Sure Planning & Decorations Simple
            </span>
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Wedding Party</span>
                </div>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Birthday Celebration</span>
                </div>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 md:gap-4 text-[#F88109] justify-center md:justify-start">
                  <FaGlassCheers size={24} />
                  <span className="text-xl md:text-3xl font-semibold">Corporate Events</span>
                </div>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      <div className='flex flex-wrap gap-4 justify-center w-full mt-8 px-4'>
        <div className='flex justify-center'>
          <Image
            src={'/assets/lighthouse.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/photoshoper.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/astorry.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={'/assets/mirolly.jpeg'}
            width={284}
            height={84}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
