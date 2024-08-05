import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";


const Cards = () => {
  return (
   <>
    <div className="flex flex-col  mt-7  gap-5  ">
        <div className="w-full  bg-white rounded-lg shadow-md overflow-hidden " >
          <div className="flex">
            <div className="bg-blue-500 p-6 rounded-lg shadow-md m-4">
              <GrUserWorker className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-800 font-semibold">Ankit Jain</p>
              <p className="text-gray-800 font-semibold">0987654321</p>
            </div>
          </div>
        </div>

        <div className="w-full   bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex">
            <div className="bg-blue-500 p-6 rounded-lg shadow-md m-4">
              <TfiEmail className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <p className="text-gray-800 font-semibold">contact@singaji.in</p>
            </div>
          </div>
        </div>
      </div>
    
   </>
  )
}

export default Cards