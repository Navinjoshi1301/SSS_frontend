import React from 'react'
import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";


const ContactCard = () => {
  return (
   <>
    <div className="grid grid-cols-1 p-4 my-20 lg:mb-20 px-4 my-10 md:mx-10 lg:mx-1  w-full">
        <div className="w-full md:w-4/5 bg-white rounded-lg shadow-md overflow-hidden md:ms-10 mb-10 ">
          <div className="flex flex-row sm:flex-row ">
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

        <div className="w-full md:w-4/5 bg-white rounded-lg shadow-md overflow-hidden md:ms-10 ">
          <div className="flex flex-row sm:flex-row">
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

export default ContactCard;