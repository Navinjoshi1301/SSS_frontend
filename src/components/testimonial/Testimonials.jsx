import React, { useEffect, useState } from 'react';
import quoteIcon from '../../assets/01.png';
import TestimonialIcon from '../../assets/SSS-Testimonal.jpg';
import { useGetTestimonialsQuery } from '../../api/portFolioApi';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  

  const { data, error } = useGetTestimonialsQuery();

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (data) {
      setTestimonials(data.data);
    }
  }, [data, error]);


  return (
    <div className="relative bg-gray-50 py-16 bg-Testimonial-bg bg-cover bg-center">
      <div className="absolute inset-0 bg-white opacity-80"></div> {/* Overlay for background */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider">TESTIMONIALS</h2>
        <h3 className="text-4xl font-bold mb-8">
          What Client <span className="text-primary-500">Think</span> About Us?
        </h3>
        <p className="text-gray-600 mb-12">Insights into Our Impact and Value.</p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {testimonials.map((testimonial,index) =>(
             <div key={index} className="bg-white p-6 m-4 rounded-lg shadow-lg flex flex-col items-center text-left max-w-md relative">
             <img src={quoteIcon} className="absolute -top-8 left-4 w-8 h-8" alt="quote icon" />
             <div className=" w-40 h-40 mb-4">
               <img
                 className="absolute top-0 left-0 w-64 h-64"
                 src={TestimonialIcon}
                 alt="testimonial icon"
                 style={{ opacity: 1 }}
               />
               <img
                 className="relative w-44 h-40 rounded-lg"
                 src={testimonial.attributes.img_url}
                 alt="client"
               />
             </div>
             <p className="relative italic text-gray-700">
               {testimonial.attributes.description}
             </p>
             <p className="mt-4 font-bold text-primary-500">{testimonial.attributes.name}</p>
             <div className="flex mt-2">
               <span className="text-yellow-400">★★★★★</span>
             </div>
           </div>
          ))}

          {/* <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-left max-w-md relative">
            <img src={quoteIcon} className="absolute -top-8 left-4 w-8 h-8" alt="quote icon" />
            <div className="w-40 h-40 mb-4">
              <img
                className="absolute top-0 left-0 w-64 h-64"
                src={TestimonialIcon}
                alt="testimonial icon"
                style={{ opacity: 1 }}
              />
              <img
                className="relative w-44 h-40 rounded-lg"
                src={MV2}
                alt="client"
              />
            </div>
            <p className="relative italic text-gray-700">
              "SSS is more than an IT service provider, they're strategic partners, revolutionizing our operations with technical expertise and unwavering commitment. Trust them for cutting-edge IT services that transform your business journey."
            </p>
            <p className="mt-4 font-bold text-primary-500">Annie George</p>
            <div className="flex mt-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
