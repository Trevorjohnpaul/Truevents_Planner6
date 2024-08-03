import Image from 'next/image'
import React from 'react'
import { FaUsers, FaTasks, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
        <section className=' my-16 py-16 min-h-screen' id='about'>
            <div className=''>
                <div className='grid grid-cols-2 mx-8 px-8 gap-8 mb-8'>
                    <div className='relative'>
                        <Image
                            className='rounded-md z-0'
                            src={'/assets/img16.jpeg'}
                            width={684}
                            height={684}
                            alt=''
                        />
                        <Image
                            className='absolute top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-md'
                            src={'/assets/img9.jpeg'}
                            width={442}
                            height={542}
                            alt=''
                        />
                    </div>
                    <div className='px-8 flex flex-col gap-4'>
                        <span className='text-[#FCA61F] text-3xl font-bold'>About TruEvents</span>
                        <div className='flex flex-col text-gray-700 text-3xl font-semibold'>
                            <span>We Are The Best Events Planner</span>
                            <span>And Organizer In The city</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi voluptatem neque expedita minus accusantium sed dicta similique distinctio, libero, nostrum, corporis quibusdam dolorem dolore. Et dolorum qui possimus libero!
                        </p>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='py-0 px-16'>
                                <div className='flex flex-col gap-4 rounded-md items-center bg-[#f8f8f6] px-2 p-8 shadow-lg'>
                                    ICON
                                    <span className='text-3xl font-semibold'>5+</span>
                                    <span className='font-semibold'>Years In Business</span>
                                </div>
                            </div>                            
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-2'>
                                    ICON
                                    <span>Best Quality Service</span>
                                </div>
                                <div className='flex gap-2'>
                                    ICON
                                    <span>Best Quality Service</span>
                                </div>
                                <div className='flex gap-2'>
                                    ICON
                                    <span>Best Quality Service</span>
                                </div>
                                <div className='flex gap-2'>
                                    ICON
                                    <span>Best Quality Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='experience my-16 text-white text-2xl font-semibold justify-center items-center' id='Experience'>
                    <div className="achievement">
                        <FaUsers size={40} className='text-[#FCA61F]' />
                        <div className="circle">10,000+</div>
                        <span>Customers</span>
                        <span>Served</span>
                    </div>
                    <div className="achievement">
                        <FaTasks size={40} className='text-[#FCA61F]' />
                        <div className="circle">80,000+</div>
                        <span>Projects</span>
                        <span>Done</span>
                    </div>
                    <div className="achievement">
                        <FaUserFriends size={40} className='text-[#FCA61F]' />
                        <div className="circle">27</div>
                        <span>Team</span>
                        <span>Size</span>
                    </div>
                    <div className="achievement">
                        <FaMapMarkerAlt size={40} className='text-[#FCA61F]' />
                        <div className="circle">27</div>
                        <span>Locations</span>
                        <span>Serviced</span>
                    </div>
                </div>
                <div className='flex flex-col gap-8 mt-8 px-8'>
                    <div className='flex flex-col gap-4 items-center justify-center m-16'>
                        <span className='text-[#FCA61F] text-3xl font-bold'>Our Team</span>
                        <div></div>
                    </div>
                    <div className='flex gap-24 justify-center'>
                        <div className='relative flex flex-col items-center'>
                            <Image
                            className='rounded-md h-126 w-84 object-cover'
                            src={'/assets/img40.jpeg'}
                            width={484}
                            height={684}
                            alt=''
                            />
                            <div className='absolute bottom-0 transform translate-y-1/2 flex flex-col gap-1 items-center bg-white px-14 py-4 rounded-md'>
                                <span className='text-[#FCA61F] text-2xl font-bold'>Grace Nike</span>
                                <span className='font-semibold'>Manager</span>
                            </div>
                        </div>
                        <div className='relative flex flex-col items-center'>
                            <Image
                            className='rounded-md h-126 w-84 object-cover'
                            src={'/assets/img31.jpeg'}
                            width={484}
                            height={684}
                            alt=''
                            />
                            <div className='absolute bottom-0 transform translate-y-1/2 flex flex-col gap-1 items-center bg-white px-14 py-4 rounded-md'>
                                <span className='text-[#FCA61F] text-2xl font-bold'>Martin Munene</span>
                                <span className='font-semibold'>Manager</span>
                            </div>
                        </div>
                        <div className='relative flex flex-col items-center'>
                            <Image
                            className='rounded-md h-126 w-84 object-cover'
                            src={'/assets/img26.jpeg'}
                            width={484}
                            height={684}
                            alt=''
                            />
                            <div className='absolute bottom-0 transform translate-y-1/2 flex flex-col gap-1 items-center bg-white px-14 py-4 rounded-md'>
                                <span className='text-[#FCA61F] text-2xl font-bold'>Jane Akachi</span>
                                <span className='font-semibold'>Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About