import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="ABOUT." text="Some of my most resent work" />
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About