import React from 'react';
import Aboutlogo from '../assets/projectimg1.jpg'
import Switching from '../components/Switching';
import Ablogo from '../assets/14-2.png'
 const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ">
     
        <div className="w-full md:w-1/2 container mx-auto  bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Ablogo})` }}>
       
         <img src={Aboutlogo} alt="About Us Illustration" className="rounded-lg shadow-lg  w-3/4   ml-16 mt-20"  />
       
        </div>
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <div className="mb-4 text-left">
            <span className="text-sm  text-black  border rounded-2xl shadow py-2 px-4  ">ABOUT US</span>
            <h1 className="text-4xl font-bold text-cyan-400 mt-2 ">Who We Are</h1>
          </div >
          <p className="mb-4  text-left text-slate-500 text-xl  " >
            Singaji Software Solutions (SSS) was established in 2013 with a view to enable and empower youth with intellect and capabilities to develop effective software applications. The focus was to understand the requirements & purpose of companies, provide cost-effective solutions that mobilize technology to meet the specific business needs. Working and employing talented youth of India.
          </p>
          
        </div>
        
      </div>
      
         < Switching/>
    </section>
  );
}

export default AboutUs;
