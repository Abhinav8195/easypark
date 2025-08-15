import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Work from '../components/Work'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Navigation />
      <Hero />
      <ChooseUs />
      <Work />
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home
