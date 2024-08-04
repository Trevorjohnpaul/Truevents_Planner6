'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections: string[] = ['home', 'about', 'services', 'gallery', 'testimonials'];

  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <section className='w-full bg-white bg-cover bg-center fixed hidden md:flex z-50'>
        <div className='flex justify-between items-center w-full px-8 py-4'>
          <div className='flex items-center gap-2'>
            <Link href='#home' className='flex cursor-pointer items-center gap-2'>
              <Image
                src='/assets/logo.jpeg'
                width={54}
                height={54}
                alt='TruEvents logo'
                className='size-[64px] max-xl:size-14'
              />
              <h1 className='navbar-logo'>TRU<span className='text-[#F88109] text-4xl z-15'>E</span>VENTS</h1>
            </Link>
          </div>
          <nav className='flex gap-4 font-semibold'>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className='navbar-link hover:text-[#FCA61F]'
                onClick={() => handleLinkClick(section)}
              >
                {section.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className='w-full md:hidden'>
        <div className='flex justify-between items-center px-4 py-4'>
          <Link href='#home' className='flex cursor-pointer items-center gap-1'>
            <Image src='/assets/logo.jpeg' width={34} height={34} alt='TruEvents logo' />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
            <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu' />
          </button>
        </div>
        {isOpen && (
          <nav className='fixed top-0 left-0 max-w-md h-full bg-[#F88109] px-4 py-8'>
            <div className='flex flex-col gap-6'>
              <Link href='#home' className='flex cursor-pointer items-center gap-1'>
                <Image src='/assets/logo.jpeg' width={34} height={34} alt='TruEvents logo' />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>TruEvents</h1>
              </Link>
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className='text-16 font-semibold text-black-2 hover:text-gray-700'
                  onClick={() => {
                    setIsOpen(false);
                    handleLinkClick(section);
                  }}
                >
                  {section.toUpperCase()}
                </a>
              ))}
            </div>
          </nav>
        )}
      </section>
    </div>
  );
};

export default NavBar;
