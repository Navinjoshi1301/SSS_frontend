import React from 'react';
import { Element } from 'react-scroll';
import Home from '../pages/Home';
import ServicesSection from '../pages/Servisce';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import ContactCard from '../components/Contactcard';
import Companies from '../pages/Companylogo';
import Testimonials from '../pages/testimonials';
import Ourteam from '../pages/ourteam'


const data = {
    tagline: 'IT SOLUTIONS FOR THE FUTURE',
    title: 'We Bring Ideas To Life.',
    subtitle: 'Our team of experts are here to help you.',
    contactText: 'Contact Us +',
    // imageUrl:homeimg
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
        // imageUrl={data.imageUrl}
      />
      </Element>
      <Element name="About Us">
        <About />
      </Element>
      <Element name="Services">
        <ServicesSection />
      </Element>
      <Element name="Our Team">
      <Ourteam/>
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
