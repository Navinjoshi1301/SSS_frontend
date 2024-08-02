import React from 'react';
import Homelogo from '../assets/Homeimg.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      <main className="container mx-auto  flex flex-col md:flex-row items-center">
        <div className="text-left md:w-1/2">
          <span className="mb-6 border-2  px-10 rounded-full  bg-white">IT SOLUTIONS FOR THE FUTURE</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">
            We Bring <br />
            Ideas To <br />
            Life.
          </h1>
          <button className="border-2 border-cyan-500 font-bold text-black px-7 py-4 rounded-full hover:bg-cyan-500 hover:text-white">
            Contact Us +
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-20">
          <img src={Homelogo} alt="Illustration" className="w-full h-full object-cover rounded-lg bg-transparent "/>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
