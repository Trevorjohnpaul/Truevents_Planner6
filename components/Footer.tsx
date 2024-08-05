import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <section className='footer text-white mt-24'>
            <div className='justify-center'>
                <div className='flex flex-col gap-8 items-center justify-between'>
                    <div className='flex flex-col gap-4 px-4 sm:px-8 w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center w-full'>
                            <div className='flex flex-col gap-4'>
                                <span className='title text-[#F88109] text-2xl sm:text-3xl font-bold'>Get In Touch</span>
                                <span className='max-w-sm text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia quae. Optio nisi est cum voluptatum nesciunt, magni asperiores accusamus</span>
                                <div className='flex gap-2 justify-center sm:justify-start'>
                                    {['instagram', 'facebook', 'tiktok', 'linkedIn', 'youtube'].map((social) => (
                                        <Link key={social} href={`https://www.${social}.com`} target='_blank' rel='noopener noreferrer'>
                                            <Image src={`/assets/${social}1.png`} width={30} height={30} alt={social} className='w-6 h-6 sm:w-8 sm:h-8'/>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-16 px-0 sm:px-4 mt-4 sm:mt-0'>
                                {[
                                    { icon: FaPhone, text: 'Phone: +254742256396' },
                                    { icon: FaEnvelope, text: 'Email: dokeyo390@gmail.com' }
                                ].map(({ icon: Icon, text }, index) => (
                                    <div key={index} className='flex flex-col text-[#F88109] p-4 sm:p-16 bg-[#080b14fa] rounded-md shadow-2xl items-center text-center'>
                                        <Icon size={24} className='mb-2' />
                                        <span className='text-xs sm:text-sm'>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-0 mt-8 sm:mt-16'>
                        <span className='font-semibold bg-[#2a345340] m-0 block text-center py-4 text-xs sm:text-sm'>Copyright 2024 TruEvents. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer