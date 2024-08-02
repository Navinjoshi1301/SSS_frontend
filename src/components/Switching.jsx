
import React, { useState } from 'react';
import Mission from '../assets/projectimg2.jpg'
import Vision from '../assets/vision.jpg'
import Stack from '../assets/track.jpg'
import Offer from '../assets/offering.jpg'

const Switching = () => {
  const [activeTab, setActiveTab] = useState('Mission');

  const renderContent = () => {
    switch (activeTab) {
      case 'Mission':
        return (
          <div className="flex flex-col md:flex-row top-0 ">
            <div className="w-full md:w-1/2">
              <img src={Mission} alt="Mission" className="mx-auto mb-4" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="mt-4 text-slate-500 text-xl">
              To create solutions that address specific business needs, enhance efficiency, and provide a competitive advantage through the strategic use of technology.
              </p>
            </div>
          </div>
        );
      case 'Vision':
        return (
          <div className="flex flex-col md:flex-row top-0">
            <div className="w-full md:w-1/2">
              <img src={Vision} alt="Vision" className="mx-auto mb-4" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
              <h2 className="text-2xl font-bold">Vision</h2>
              <p className="mt-4 text-slate-500 text-xl">
              To establish a visionary software organization empowering 1000 youth by 2030, fostering innovation, and cultivating a dynamic environment where creativity flourishes, leading to impactful solutions and sustainable growth in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        );
      case 'Tech Stack':
        return (
          <div className="flex flex-col md:flex-row top-0">
            <div className="w-full md:w-1/2">
              <img src={Stack} alt="Tech Stack" className="mx-auto mb-4" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
              <h2 className="text-2xl font-bold">Tech Stack</h2>
              <p className="mt-4 text-slate-500 text-xl">
              Our tech stack powers all-in-one IT services, delivering seamless solutions for various needs. We're dedicated to using technology for efficiency and innovation in everything we do.
              </p>
            </div>
          </div>
        );
      case 'Offerings':
        return (
          <div className="flex flex-col md:flex-row top-0">
            <div className="w-full md:w-1/2">
              <img src={Offer} alt="Offerings" className="mx-auto mb-4" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-8 text-">
              <h2 className="text-2xl font-bold">Offerings</h2>
              <p className="mt-4 text-slate-500 text-xl">
              Founded in 2013, Singaji Software Solutions (SSS) empowers Indian youth to develop impactful software applications, offering cost-effective solutions tailored to businesses' specific needs. The company actively engages and employs talented Indian youth in driving technological innovation.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap justify-around py-4  border-y-2 ">
            <button
              className={`text-lg    ${activeTab === 'Mission' ? 'text-cyan-400' : 'text-black hover:text-blue-600'} font-bold`}
              onClick={() => setActiveTab('Mission')}
            >
              Mission
            </button>
            <button
              className={`text-lg  ${activeTab === 'Vision' ? 'text-cyan-400' : 'text-black hover:text-blue-600'} font-bold`}
              onClick={() => setActiveTab('Vision')}
            >
              Vision
            </button>
            <button
              className={`text-lg  ${activeTab === 'Tech Stack' ? 'text-cyan-400' : 'text-black hover:text-blue-600'} font-bold`}
              onClick={() => setActiveTab('Tech Stack')}
            >
              Tech Stack
            </button>
            <button
              className={`text-lg  ${activeTab === 'Offerings' ? 'text-cyan-400' : 'text-black hover:text-blue-600'} font-bold`}
              onClick={() => setActiveTab('Offerings')}
            >
              Offerings
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Switching;
