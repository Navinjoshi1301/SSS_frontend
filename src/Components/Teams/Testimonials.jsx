import React from 'react';
import MV1 from '../../../src/assets/Lorris-Minassion-project.jpg';
import MV2 from '../../../src/assets/annie-project.jpg';
import TEST from '../../../src/assets/SSS-Testimonal.jpg';
import quote from '../../../src/assets/01.png';
import BGimg from '../../../src/assets/ServiceBG.png';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-10">
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${BGimg})` }}>
        <div className="text-center pt-10">
          <span className="text-sm font-semibold border rounded-2xl shadow-lg bg-white py-2 px-8">TESTIMONIALS</span>
          <h1 className="text-5xl font-bold mt-10">
            What Client <span className="text-cyan-400">Think</span> About Us?
          </h1>
          <p className="text-gray-600 mt-8">Insights into Our Impact and Value.</p>
        </div>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 pr-4">
                    <div className="relative">
                      <img className="w-10/12 ml-3 rounded-lg" src={TEST} alt="testimonial" />
                      <img className="absolute top-10 right-1 w-1/2 h-4/6 object-cover rounded-lg" src={MV1} alt="client" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <div className="flex flex-col justify-center h-full">
                      <img className="w-6 h-6 mb-4" src={quote} alt="quote" />
                      <span className="text-gray-700 text-left">  
                        Singaji Software Solutions is a highly skilled and professional partner, consistently delivering exceptional results. Their open communication, friendliness, and effectiveness make them a pleasure to work with. I confidently recommend them for any project or partnership.
                      </span>
                      <h6 className="mt-4 font-semibold text-left text-cyan-400">Loris Minnasian</h6>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 pr-4">
                    <div className="relative">
                      <img className="w-10/12 ml-3 rounded-lg" src={TEST} alt="testimonial" />
                      <img className="absolute top-10 right-1 w-1/2 h-4/6 object-cover rounded-lg" src={MV2} alt="client" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <div className="flex flex-col justify-center h-full">
                      <img className="w-6 h-6 mb-4" src={quote} alt="quote" />
                      <span className="text-gray-700 text-left">
                        SSS is more than an IT service provider, they're strategic partners, revolutionizing our operations with technical expertise and unwavering commitment. Trust them for cutting-edge IT services that transform your business journey.
                      </span>
                      <h6 className="mt-4 font-semibold text-left text-cyan-400">Annie George</h6>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
