// Main Component
import React from 'react';
import { Element } from 'react-scroll';
import Home from '../home/Home';
import homeimg from '../../assets/home.png';
import Contact from '../contact us/Contact';
import Footer from '../footer/Footer';
import About from '../about us/About';
import Gallery from '../our projects/Gallery';
import ContactCard from '../contact card/ContactCard';
import Companies from '../companies logos/Companies';
import Testimonials from '../testimonial/Testimonials';
import OurTeam from '../our team/OurTeam';
import ServicesSection from '../services section/ServicesSection';



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
        <OurTeam />
      </Element>
      <Gallery/>
      <Element name="Testimonials">
        <Testimonials />
      </Element> 
      <Element name="Contact Us +">
        <Contact />
      </Element>
      <ContactCard/>
      <Companies/>
      <Footer/>
    </div>
  );
};

export default Main;
