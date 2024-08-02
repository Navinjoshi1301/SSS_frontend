import React from 'react';
import Pranjalsir from '../assets/pranjal_Dubey.jpg';
import Arindom from '../assets/Arindom_Ray.jpg';
import Ajits from '../assets/Ajit_Sharma.jpg';
import Shashank from '../assets/Shashank_B.jpg';

const Ourteam = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8 text-center">
        <span className="text-sm text-black border rounded-2xl shadow py-2 px-4">OUR TEAM</span>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-cyan-400">Meet Our Experts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="bg-white p-4 rounded-lg transition-shadow duration-300 items-center " >
            <img src={Pranjalsir} alt="Pranjal Dubey" className="  w-4/6 md:w-2/4    mx-auto rounded-md transform hover:scale-105 transition-transform duration-300" />
            <h2 className="font-bold text-xl p-2 mt-3">Pranjal Dubey</h2>
            <span className="text-gray-500">Founder of SSISM & Ex-SAP</span>
          </div>
          <div className="bg-white p-4 rounded-lg transition-shadow duration-300">
            <img src={Arindom} alt="Arindam Ray" className="w-4/6  md:w-2/4 mx-auto h-auto rounded-md transform hover:scale-105 transition-transform duration-300" />
            <h2 className="font-bold text-xl p-2 mt-3">Arindam Ray</h2>
            <span className="text-gray-500">Mentor, Expert in Design and Delivery</span>
          </div>
          <div className="bg-white p-4 rounded-lg transition-shadow duration-300">
            <img src={Ajits} alt="Ajit Sharma" className=" w-4/6  md:w-2/4 mx-auto h-auto rounded-md transform hover:scale-105 transition-transform duration-300" />
            <h2 className="font-bold text-xl p-2 mt-3">Ajit Sharma</h2>
            <span className="text-gray-500">Founder & CTO at Tofrum</span>
          </div>
          <div className="bg-white p-4 rounded-lg transition-shadow duration-300">
            <img src={Shashank} alt="Shashank Banerjea" className="w-4/6  md:w-2/4  mx-auto h-auto rounded-md transform hover:scale-105 transition-transform duration-300 " />
            <h2 className="font-bold text-xl p-2 mt-3">Shashank Banerjea</h2>
            <span className="text-gray-500">Mentor, Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
