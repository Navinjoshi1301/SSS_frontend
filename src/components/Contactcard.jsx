import React from 'react'
import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";


const Cards = () => {
  return (
   <>
     <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-4 mb-20 px-4 md:px-32 mt-10">
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-blue-500 p-4 rounded-lg shadow-md m-4">
              <GrUserWorker className="h-12 w-12 text-white" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-800 font-semibold">Ankit Jain</p>
              <p className="text-gray-800 font-semibold">0987654321</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="bg-blue-500 p-4 rounded-lg shadow-md m-4">
              <TfiEmail className="h-12 w-12 text-white" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <p className="text-gray-800 font-semibold">contact@singaji.in</p>
            </div>
          </div>
        </div>
      </div>
    
   </>
  )
}
    
 export default Cards;
