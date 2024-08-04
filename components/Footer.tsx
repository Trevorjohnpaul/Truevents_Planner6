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
                    <div className='flex flex-col gap-4 px-8'>
                        <div className='grid grid-cols-2 gap-8 items-center w-full'>
                            <div className='flex flex-col gap-4'>
                            <span className='title text-[#F88109] text-3xl font-bold'>Get In Touch</span>
                                <span className='max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia quae. Optio nisi est cum voluptatum nesciunt, magni asperiores accusamus</span>
                                <div className='flex gap-2'>
                                    <Link href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                        <Image src={'/assets/instagram1.png'} width={34} height={34} alt='Instagram'/>
                                    </Link>
                                    <Link href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                        <Image src={'/assets/facebook1.png'} width={34} height={34} alt='Facebook'/>
                                    </Link>
                                    <Link href='https://www.tiktok.com' target='_blank' rel='noopener noreferrer'>
                                        <Image src={'/assets/tiktok1.png'} width={34} height={34} alt='TikTok'/>
                                    </Link>
                                    <Link href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                        <Image src={'/assets/linkedIn1.png'} width={34} height={34} alt='LinkedIn'/>
                                    </Link>
                                    <Link href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                                        <Image src={'/assets/youtube1.png'} width={34} height={34} alt='YouTube'/>
                                    </Link>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-16 px-4'>
                                <div className='flex flex-col text-[#F88109] p-16 bg-[#080b14fa] rounded-md shadow-2xl items-center'>
                                    <FaPhone size={34} />
                                    Phone: +254742256396
                                </div>
                                <div className='flex flex-col text-[#F88109] p-16 bg-[#080b14fa] rounded-md items-center'>
                                    <FaEnvelope size={34} />
                                    Email: dokeyo390@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-0 mt-16'>
                        <span className='font-semibold bg-[#2a345340] m-0 block text-center py-4'>Copyright 2024 TruEvents. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer