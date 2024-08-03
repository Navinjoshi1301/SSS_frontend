import  { useEffect, useState } from 'react';
// import projectimg from '../../assets/projectimg1.jpg';
// import backgroundImage from '../../../src/assets/14-2.png'
import { useGetAboutUsQuery } from '../../api/portFolioApi';
import Innovation from '../Innovation/Innovation';
// import { BASE_URL } from '../../api/config';

export const About = () => {
  const[about,setAbout]=useState([])
  const[aboutImg,setAboutImg]=useState([])
  
  const { data,error} = useGetAboutUsQuery();
  
  useEffect(() => {
    if(error){
      console.log(error)
    }
    else if(data){
      setAbout(data.data[0].attributes);
      setAboutImg(data.data[0].attributes.img_url);
     
    }
  }, [data])
  


  return (
    <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-white rounded-lg shadow-sm mb-12">
      <div className="order-2 md:order-1 relative flex justify-center items-center">
        <img
          src={aboutImg.img1}
          alt="Background"
          className="w-[200px]   h-auto sm:w-[300px] md:w-[350px] lg:w-[450px] rounded-lg object-cover"
        />
        <img
          src={aboutImg.img2}
          alt="Project"
          className="absolute w-44 h-auto sm:w-[240px] md:w-[250px] lg:w-[350px] lg:h-auto rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="order-1 md:order-2 text-center md:text-left md:pt-16">
        <button className="font-normal py-1 px-4 sm:py-1 sm:px-6 rounded-full mb-4 shadow-md">
          ABOUT US
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-4">
         {about.title}
        </h1>
        <p className="text-base sm:text-sm md:text-xl text-gray-500 leading-relaxed font-semibold">
         {about.description}
        </p>
      </div>
    </div>
    <Innovation/>
    </>
  );
};

export default About;