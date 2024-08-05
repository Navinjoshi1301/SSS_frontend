import React from 'react';
import ContactCard from '../contact card/ContactCard';

const Contact = () => {
  return (
    <div className="relative z-10 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full lg:w-auto">
        <div className="w-full lg:w-full lg:h-full mt-6 lg:mt-20 ml-2 lg:ml-4">
          <span className='text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider md:ms-24'>GET IN TOUCH</span>
          <div className="flex flex-col items-center">
            <h1 className='font-bold text-left mt-2 text-5xl lg:ms-16 xl:ms-2' style={{ color: '#101a29', lineHeight: '1.2em' }}>
              Your Business To<span className='text-cyan-400'> Growth</span>&nbsp;<br /> Please Touch?
            </h1>
          </div>
        <ContactCard/>
        </div>

        <div className="mt-0 lg:mt-24 relative flex justify-center items-center lg:mx-14">
          <img src='../../../src/assets/14-2.png' alt='background-img' className="h-auto" />
          <img src='../../../src/assets/projectimg3.jpg' alt='foreground-img' className="absolute w-auto h-4/6" />
        </div>
      </div>
    </div>
  );
};

export default Contact;