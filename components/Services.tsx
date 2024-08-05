import React from 'react'
import InfoCard from './InfoCard'
import Image from 'next/image'
import { FaHeart, FaGlassCheers, FaComments, FaClipboardList } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='my-16 flex flex-col justify-center items-center w-full'>
        <div className='px-8 py-24 flex flex-col gap-4 justify-center items-center w-full'>
            <span className='text-[#F88109] text-4xl font-bold'>Our Services</span>
            <span className='text-gray-700 text-3xl mb-8 font-semibold'>We Offer The Best Services In The Country</span>
            <div className='flex flex-col gap-16 w-full px-24 '>
                <div className='w-full px-8'>
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        <div>
                            <Image
                                className='rounded-md h-126 w-126 object-cover'
                                src={'/assets/img1.jpeg'}
                                width={384}
                                height={584}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col gap-2 px-4 pt-6 bg-[#f8f8f6] rounded-md w-[470px]'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p className='max-w-md'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full px-8'>
                    <div className='grid grid-cols-2 gap-16 w-full'>
                    <div className='flex flex-col gap-2 px-4 pt-6 bg-[#f8f8f6] rounded-md w-[470px]'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p className='max-w-md'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
                            </p>
                        </div>
                        <div>
                            <Image
                                className='rounded-md h-126 w-126 object-cover'
                                src={'/assets/img1.jpeg'}
                                width={384}
                                height={584}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full px-8'>
                    <div className='grid grid-cols-2 gap-16 w-full'>
                        <div>
                            <Image
                                className='rounded-md h-126 w-126 object-cover'
                                src={'/assets/img1.jpeg'}
                                width={384}
                                height={584}
                                alt=''
                            />
                        </div>
                        <div className='flex flex-col gap-2 px-4 pt-6 bg-[#f8f8f6] rounded-md w-[470px]'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p className='max-w-md'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates corrupti blanditiis. Distinctio perspiciatis culpa iure mollitia. Labore rem esse, iure minus at qui optio, id laudantium hic officiis, incidunt sapiente earum a molestiae maiores quis delectus est alias quas natus perferendis? Nemo, laboriosam in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-12 py-8 pl-24 w-full' id='services'>
            <div className='px-16'>
                <div className='w-full h-[550px] rounded-md overflow-hidden relative'>
                    <Image
                        src={'/assets/img7.jpeg'}
                        layout='fill'
                        objectFit='cover'
                        alt=''
                    />
                </div>
            </div>
            <div className='flex justify-center w-[450px] h-[550px]'>
                <div className='flex flex-col gap-4'>
                    <span className='text-[#F88109] text-3xl font-bold'>How It Works</span>
                    <span className='text-gray-700 text-3xl font-semibold'>We Make Sure Planning & Decorations Simple</span>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-4 text-[#F88109]'>
                                <FaGlassCheers size={34} />
                                <span className='text-3xl font-semibold'>Wedding Party</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quo quasi ea facere itaque nemo repudiandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-4 justify-center w-full mt-8 px-8'>
            <Image
                src={'/assets/lighthouse.jpeg'}
                width={284}
                height={84}
                alt=''
            />
            <Image
                src={'/assets/photoshoper.jpeg'}
                width={284}
                height={84}
                alt=''
            />
            <Image
                src={'/assets/astorry.jpeg'}
                width={284}
                height={84}
                alt=''
            />
            <Image
                src={'/assets/mirolly.jpeg'}
                width={284}
                height={84}
                alt=''
            />
        </div>
    </section>
  )
}

export default Services