import React from "react";
import MV1 from "../assets/lorission.jpg";
import MV2 from "../assets/annie-project.jpg";
import TEST from "../assets/SSS-Testimonal.jpg";
import quote from "../assets/01.png";

const TestimonialsSection = () => {
  return (
    <>
      <section id="testimonials" className="py-12 px-4">
        <div className="container-fluid mx-auto bg-cover bg-center min-h-screen bg-Testimonial-bg">
          <div className="text-center pt-10">
            <span className="text-sm border rounded-2xl shadow-lg bg-white py-2 px-8">
              TESTIMONIALS
            </span>
            <h1 className="text-3xl md:text-5xl font-bold m-4 mt-10">
              What Client <span className="text-cyan-400">Think</span> About Us?
            </h1>
            <p className="text-gray-600 text-xl">
              Insights into Our Impact and Value.
            </p>
          </div>





          <div className="relative mt-10">
            <div className="flex flex-wrap justify-center items-center">
              {/* Testimonial 1 */}
              <div className=" md:w-2/4  px-4 mb-8">
                <div className="p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                      <img
                        className="w-full md:w-10/12 ml-0 md:ml-3 rounded-lg "
                        //  className="w-10/12 md:size-4/6 sm:size-2/4 ml-3 rounded-lg"
                        src={TEST}
                        alt="testimonial"
                      />
                      <img
                        className="absolute top-12 h-40 w-40 md:h-20 md:w-20 right-2 md:top-10 md:right-1 sm:w-20 lg:h-40 lg:w-40 object-cover rounded-lg"
                        src={MV1}
                        alt="client"
                      />
                    </div>
                    <div className="md:w-1/2 mx-5 ">
                      <div className="flex flex-col justify-center h-full">
                        <img className="w-6 h-6" src={quote} alt="quote" />
                        <span className="text-gray-700 mt-4 md:mt-0 font-medium">
                          Singaji Software Solutions is a highly skilled and
                          professional partner, consistently delivering
                          exceptional results. Their open communication,
                          friendliness, and effectiveness make them a pleasure
                          to work with. I confidently recommend them for any
                          project or partnership.
                        </span>
                        <h6 className="mt-4 font-semibold text-left text-cyan-400">
                          Loris Minnasian
                        </h6>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="md:w-2/4 mb-8">
                <div className="p-6 rounded-lg ">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                      <img
                        className="w-full md:w-10/12 ml-0 md:ml-3 rounded-lg"
                        src={TEST}
                        alt="testimonial"
                      />
                      <img
                       className="absolute top-12 h-40 w-40 md:h-20 md:w-20 right-2 md:top-10 md:right-1 sm:w-20 lg:h-40 lg:w-40 object-cover rounded-lg"
                       src={MV2}
                        alt="client"
                      />
                    </div>
                    <div className="md:w-1/2 mx-5">
                      <div className="flex flex-col justify-center h-full">
                        <img className="w-6 h-6" src={quote} alt="quote" />
                        <span className="text-gray-700 mt-4 md:mt-0 font-medium">
                          SSS is more than an IT service provider, they're
                          strategic partners, revolutionizing our operations
                          with technical expertise and unwavering commitment.
                          Trust them for cutting-edge IT services that transform
                          your business journey.
                        </span>
                        <h6 className="mt-4 font-semibold text-left text-cyan-400">
                          Annie George
                        </h6>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                              />
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
    </>
  );
};

export default TestimonialsSection;
