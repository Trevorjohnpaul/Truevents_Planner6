import React from 'react'
import Image from 'next/image'
import { FaGlassCheers } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='my-8 sm:my-16 flex flex-col justify-center items-center w-full'>
        <div className='px-4 sm:px-8 py-12 sm:py-24 flex flex-col gap-4 justify-center items-center w-full'>
            <span className='text-[#F88109] text-2xl sm:text-4xl font-bold text-center'>Our Services</span>
            <span className='text-gray-700 text-xl sm:text-3xl mb-4 sm:mb-8 font-semibold text-center'>We Offer The Best Services In The Country</span>
            <div className='flex flex-col gap-8 sm:gap-16 w-full px-4 sm:px-24'>
                {[1, 2, 3].map((index) => (
                    <div key={index} className='w-full px-2 sm:px-8'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full'>
                            <div className={index % 2 === 0 ? 'order-2 sm:order-1' : 'order-1'}>
                                <Image
                                    className='rounded-md h-64 sm:h-126 w-full object-cover'
                                    src={'/assets/img1.jpeg'}
                                    width={384}
                                    height={584}
                                    alt=''
                                />
                            </div>
                            <div className={`flex flex-col gap-2 px-4 pt-6 bg-[#f8f8f6] rounded-md w-full sm:w-[470px] ${index % 2 === 0 ? 'order-1 sm:order-2' : 'order-2'}`}>
                                <div className='flex gap-4 text-[#F88109]'>
                                    <FaGlassCheers className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span className='text-xl sm:text-3xl font-semibold'>Wedding Party</span>
                                </div>
                                <p className='text-sm sm:text-base'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 py-8 px-4 sm:pl-24 w-full' id='services'>
            <div className='px-4 sm:px-16'>
                <div className='w-full h-[300px] sm:h-[550px] rounded-md overflow-hidden relative'>
                    <Image
                        src={'/assets/img7.jpeg'}
                        layout='fill'
                        objectFit='cover'
                        alt=''
                    />
                </div>
            </div>
            <div className='flex justify-center w-full sm:w-[450px] h-auto sm:h-[550px]'>
                <div className='flex flex-col gap-4'>
                    <span className='text-[#F88109] text-2xl sm:text-3xl font-bold'>How It Works</span>
                    <span className='text-gray-700 text-xl sm:text-3xl font-semibold'>We Make Sure Planning & Decorations Simple</span>
                    <div className='flex flex-col gap-4 sm:gap-8'>
                        {[1, 2, 3].map((index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <div className='flex gap-4 text-[#F88109]'>
                                    <FaGlassCheers className="w-6 h-6 sm:w-8 sm:h-8" />
                                    <span className='text-xl sm:text-3xl font-semibold'>Wedding Party</span>
                                </div>
                                <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-4 justify-center w-full mt-8 px-4 sm:px-8'>
            {['lighthouse', 'photoshoper', 'astorry', 'mirolly'].map((img) => (
                <Image
                    key={img}
                    src={`/assets/${img}.jpeg`}
                    width={140}
                    height={42}
                    alt=''
                    className='w-[140px] sm:w-[284px]'
                />
            ))}
        </div>
    </section>
  )
}

export default Services