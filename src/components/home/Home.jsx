import React from 'react';
import ContactButton from '../contactButton/ContactButton';
import {Link} from "react-scroll"
const Home = ({ tagline, title, subtitle,contactText, imageUrl }) => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-10">
        <div className="bg-white p-2 inline-block rounded-2xl shadow-md mb-4 gap-10">
          <span className="text-base text-gray-700 p-4">{tagline}</span>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <Link
        className='inline-block'
             activeClass="active"
             to={contactText}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}> <ContactButton contactText={contactText} /></Link>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img src={imageUrl} alt="Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
