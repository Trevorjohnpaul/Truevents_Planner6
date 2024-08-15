'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: string[] = ['home', 'about', 'services', 'gallery', 'testimonials'];

  const handleLinkClick = (section: string) => {
  const element = document.getElementById(section);
    if (element) {
      const navbarHeight = document.querySelector('section.fixed')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight - 380;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(section);
    }
  };

  const handleScroll = () => {
    let currentSection = null;
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Desktop Navigation */}
      <section className='w-full bg-white bg-cover bg-center fixed hidden md:flex z-50'>
        <div className='flex justify-between items-center w-full pr-8 py-4'>
          <div className='flex items-center gap-2'>
            <Link href='#home' className='flex cursor-pointer items-center gap-2'>
              <Image
                src='/assets/logo.jpeg'
                width={250}
                height={84}
                alt='TruEvents logo'
                // className='size-[100px] max-xl:size-24'
              />
            </Link>
          </div>
          <nav className='flex gap-4 font-semibold'>
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`navbar-link hover:text-[#FCA61F]${activeSection === section ? 'text-[#FCA61F]' : ''}`}
                onClick={() => handleLinkClick(section)}
              >
                {section.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className='w-full md:hidden fixed bg-white bg-cover bg-center z-50'>
        <div className='flex justify-between items-center pr-4 py-4'>
          <Link href='#home' className='flex cursor-pointer items-center py-0'>
            <Image src='/assets/logo.jpeg' width={164} height={34} alt='TruEvents logo' />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
            <Image src='/icons/hamburger.svg' width={30} height={30} alt='menu' />
          </button>
        </div>
        {isOpen && (
          <nav className='fixed top-0 left-0 max-w-md h-[50vh] rounded-3xl bg-white shadow-lg px-4 py-8'>
            <div className='flex flex-col gap-6'>
              <Link href='#home' className='flex cursor-pointer items-center gap-1'>
                <Image src='/assets/logo.jpeg' width={164} height={34} alt='TruEvents logo' />
              </Link>
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-16 font-semibold text-black-2 hover:text-[#FCA61F] ${activeSection === section ? 'text-[#FCA61F]' : ''}`}
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
