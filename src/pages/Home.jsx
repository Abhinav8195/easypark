import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Work from '../components/Work'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navigation/>
        <Hero/>
        <ChooseUs/>
        <Work/>
        <Pricing/>
        <Testimonials/>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Home