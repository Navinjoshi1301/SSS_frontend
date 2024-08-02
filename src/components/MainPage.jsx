import React from "react";
import { Element } from "react-scroll";
import HomeScreen from "../Pages/HomeScreen";
import About from "../Pages/About/AboutUs";
import ServicesSection from "../Pages/ServiceSection";
import Gallery from "../Pages/Gallery";
import TestimonialsSection from "../Pages/Testimonial";
import Contact from "../Pages/Contact";
import Cards from "./Cards/Cards";
import Companies from "../Pages/Companies";
import Footer from "./Footer/Footer";
import OurTeam from "../Pages/OurTeam";
import homeimg from "../assets/hero.png";

const data = {
  tagline: "IT SOLUTIONS FOR THE FUTURE",
  title: "We Bring Ideas To Life.",
  subtitle: "Our team of experts are here to help you.",
  contactText: "Contact Us +",
  imageUrl: homeimg,
};

const MainPage = () => {
  return (
    <>
      <div>
        <Element name="HomeScreen">
          <HomeScreen
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
        <Gallery />
        <Element name="Testimonials">
          <TestimonialsSection />
        </Element>
        <Element name="Contact Us +">
          <Contact />
        </Element>
        <Cards />
        <Companies />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
