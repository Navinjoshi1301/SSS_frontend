import { Element } from 'react-scroll';
import Home from '../home/Home';
import homeimg from '../../assets/hero.png';
import Contact from '../contactUs/Contact';
import Footer from '../footer/Footer';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import ContactCard from '../cards/Cards';
import Companies from '../companies/Companies';
import Services from '../services/Services';
import OurTeam from '../teams/OurTeam';
import Testimonials from '../testImonials/TestImonials';

const data = {
    tagline: 'IT SOLUTIONS FOR THE FUTURE',
    title: 'We Bring Ideas To Life.',
    subtitle: 'Our team of experts are here to help you.',
    contactText: 'Contact Us +',
    imageUrl: homeimg
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
        <Services />
      </Element>
      <Element name="Our Team">
        <OurTeam />
      </Element>
      <Gallery />
      <Element name="Testimonials">
        <Testimonials />
      </Element>
      <Element name="Contact Us +">
        <Contact />
      </Element>
      <ContactCard />
      <Companies />
      <Footer />
    </div>
  );
};

export default Main;
