import React from 'react';
import img1 from '../assets/14-2.png'
import img2 from '../assets/projectimg3.jpg'

  const Contact = () => {
  return (
    <div className="relative z-10 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full lg:w-auto">
        <div className="w-full lg:w-[630px] lg:h-[535px] mt-6 lg:mt-[150px] lg:ml-4">
          <div className="flex flex-col items-start">
            <span className='shadow bg-white rounded-full px-5 py-1'>GET IN TOUCH</span>
            <h1 className='font-bold text-left mt-2 text-5xl' style={{ color: '#101a29', lineHeight: '1.2em' }}>
              Your Business To<span className='text-cyan-400'> Growth</span>&nbsp;<br /> Please Touch?
            </h1>
          </div>
          <form className="mt-10 text-left">
            <div className="flex space-x-2 mb-6">
              <input type="text" placeholder="Enter Name" className="w-1/2 p-4 border border-gray-300 rounded" />
              <input type="text" placeholder="Enter Contact" className="w-1/2 p-4 border border-gray-300 rounded" />
            </div>
            <div className="mb-6">
              <input type="email" placeholder="Enter Email" className="w-full p-4 border border-gray-300 rounded" />
            </div>
            <div className="mb-6">
              <textarea placeholder="Enter Message" className="w-full p-8 border border-gray-300 rounded h-24"></textarea>
            </div>
            <button type="submit" className="px-8 py-3 text-black border border-cyan-500 rounded-full">Contact Us</button>
          </form>
        </div>
        <div className="mt-0 lg:mt-24 relative flex justify-center items-center lg:ml-4">
          <img src={img1} alt='background-img' className="h-auto" />
          <img src={img2} alt='foreground-img' className="absolute w-auto h-4/6" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
