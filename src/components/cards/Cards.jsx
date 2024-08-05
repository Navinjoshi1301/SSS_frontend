import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";


const Cards = () => {
  return (
   <>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-7 mb-10">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="bg-blue-500 p-6 rounded-lg shadow-md m-4 mx-auto lg:mx-0">
        <GrUserWorker className="h-12 w-12 text-white mx-auto" />
      </div>
      <div className="p-6 text-center lg:text-start">
        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-800 font-semibold">Ankit Jain</p>
        <p className="text-gray-800 font-semibold">0987654321</p>
      </div>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-md overflow-hidden ">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      <div className="bg-blue-500 p-6 rounded-lg shadow-md m-4 mx-auto lg:mx-0">
        <TfiEmail className="h-12 w-12 text-white mx-auto" />
      </div>
      <div className="p-6 text-center lg:text-start">
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