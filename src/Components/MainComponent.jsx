import React from 'react';
import { Element } from 'react-scroll';
import Home from '../Components/Home/Home';
import ServicesSection from '../Components/Services/ServicesSection';
import homeimg from '../../src/assets/hero.png';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Gallery from './Teams/TeamProjects';
import Cards from '../Components/Cards';
import Companies from '../Components/Teams/Companies';
import Testimonials from '../Components/Teams/Testimonials';
import Ourteam from './Teams/OurTeam';



const data = {
    tagline: 'IT SOLUTIONS FOR THE FUTURE',
    title: 'We Bring Ideas To Life.',
    subtitle: 'Our team of experts are here to help you.',
    contactText: 'Contact Us +',
    imageUrl:homeimg
  };


const Main = () => {
  return (
    <div>
      <Element name="Home">
      <Home
        tagline={data.tagline}
        title={data.title}
        subtitle={data.subtitle}
        contactText={data.contactText}
        imageUrl={data.imageUrl}
      />
      </Element>
      <Element name="About Us">
        <About />
      </Element>
      <Element name="Services">
        <ServicesSection />
      </Element>
      <Element name="Our Team">
        <Ourteam />
      </Element>
      <Gallery/>
      <Element name="Testimonials">
        <Testimonials />
      </Element> 
      <Element name="Contact Us +">
        <Contact />
      </Element>
      <Cards/>
      <Companies/>
      <Footer/>
    </div>
  );
};

export default Main;