import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import React from 'react'

const Home = () => {

  return (
    <div>
       <Hero />
       <About />
       <Services />
       <Testimonials />
       <Gallery />

    </div>
  )
}

export default Home