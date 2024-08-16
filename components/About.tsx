import Image from 'next/image';
import React from 'react';
import { FaUsers, FaTasks, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className='my-16 py-16' id='about'>
      <div className='flex flex-col pt-24 items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-auto mx-4 md:mx-8 px-4 md:px-16 gap-4 md:gap-8 mb-8'>
          <div className='relative h-[50vh] md:h-[95vh] flex justify-center items-center'>
            <Image
              className='rounded-md z-0 h-full object-cover'
              src={'/assets/img16.jpeg'}
              width={684}
              height={684}
              alt=''
            />
            <Image
              className='absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-4 h-[60%] md:h-[70%] object-cover'
              src={'/assets/img9.jpeg'}
              width={442}
              height={542}
              alt=''
            />
          </div>
          <div className='flex flex-col gap-4 h-auto md:h-[95vh] items-center justify-center text-center md:text-left md:items-start md:justify-start'>
            <span className='text-[#F88109] text-3xl font-bold'>About TruEvents</span>
            <div className='flex flex-col text-gray-700 text-2xl md:text-3xl font-semibold'>
              <span>We Are The Best Events Planner</span>
              <span>And Organizer In The City</span>
            </div>
            <p className='text-sm md:text-base mb-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eligendi voluptatem neque expedita minus accusantium sed dicta similique distinctio, libero, nostrum, corporis quibusdam dolorem dolore. Et dolorum qui possimus libero!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='pb-0 pr-16'>
                <div className='flex flex-col h-full gap-8 rounded-md items-center bg-[#f8f8f6] px-16 py-16 shadow-lg'>
                  <FaTasks size={40} className='text-[#F88109]' />
                  <span className='text-4xl font-semibold'>5+</span>
                  <span className='font-semibold'>Years In Business</span>
                </div>
              </div>
              <div className='flex flex-col gap-6 md:gap-16 pl-6 h-full'>
                {['Best Quality Service', 'Innovative Solutions', 'Customer Satisfaction', 'Professional Team'].map((item, index) => (
                  <div key={index} className='flex gap-2'>
                    <FaUserFriends size={24} className='text-[#F88109]' />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='experience-wrapper my-16 h-auto flex'>
          <div className='experience text-white font-semibold text-center'>
            <div className="achievement flex flex-col items-center">
              <FaUsers className='text-[#F88109] w-8 h-8 md:w-6 md:h-6' />
              <div className="circle">10,000+</div>
              <div className='flex flex-col text-[18px] md:text-sm'>
                <span>Customers</span>
                <span>Served</span>
              </div>
            </div>
            <div className="achievement flex flex-col items-center">
              <FaTasks className='text-[#F88109] w-8 h-8 md:w-6 md:h-6' />
              <div className="circle">80,000+</div>
              <div className='flex flex-col text-[18px] md:text-sm'>
                <span>Customers</span>
                <span>Served</span>
              </div>
            </div>
            <div className="achievement flex flex-col items-center">
              <FaUserFriends className='text-[#F88109] w-8 h-8 md:w-6 md:h-6' />
              <div className="circle">27</div>
              <div className='flex flex-col text-[18px] md:text-sm'>
                <span>Customers</span>
                <span>Served</span>
              </div>
            </div>
            <div className="achievement flex flex-col items-center">
              <FaMapMarkerAlt className='text-[#F88109] w-8 h-8 md:w-6 md:h-6' />
              <div className="circle">27</div>
              <div className='flex flex-col text-[18px] md:text-sm'>
                <span>Locations</span>
                <span>Serviced</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-8 mt-8 px-8'>
          <div className='flex flex-col gap-4 items-center justify-center m-16'>
            <span className='text-[#F88109] text-3xl font-bold'>Our Team</span>
            <div></div>
          </div>
          <div className='flex flex-col md:flex-row gap-16 justify-center'>
            {[
              { src: '/assets/img40.jpeg', name: 'Grace Nike', role: 'Manager' },
              { src: '/assets/img31.jpeg', name: 'Martin Munene', role: 'Manager' },
              { src: '/assets/img26.jpeg', name: 'Jane Akachi', role: 'Manager' }
            ].map((member, index) => (
              <div key={index} className='relative flex flex-col items-center'>
                <Image
                  className='rounded-md h-96 w-64 object-cover'
                  src={member.src}
                  width={484}
                  height={684}
                  alt=''
                />
                <div className='absolute bottom-0 transform translate-y-1/2 flex flex-col gap-1 items-center bg-white px-10 py-4 rounded-md w-[200px]'>
                  <span className='text-[#F88109] font-bold'>{member.name}</span>
                  <span className='font-semibold'>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
