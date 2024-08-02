/* eslint-disable react/prop-types */
import { useState ,useEffect} from 'react';
import TabContent from './TabContent '
// import projectimg from '../../assets/projectimg1.jpg';
import missionImage from '../../assets/projectimg2.jpg';
// import backgroundImage from '../../../src/assets/service-bgImage.png'
import {useGetAboutUsQuery} from '../../api/PortFolioApi'
export const About = () => {

  const[about,setAbout]=useState([])
  const[aboutImg,setAboutImg]=useState([])
  
  // const [selectedTab, setSelectedTab] = useState(0);
  const { data,error} = useGetAboutUsQuery({populate:"populate=*"});
  console.log(data)
  
  useEffect(() => {
    if(error){
      console.log(error)
    }
    else if(data){
      setAbout(data.data[0].attributes);
      setAboutImg(data.data[0].attributes.img_url);
     
    }
  }, [data])
  
  const tabs = [
    {
      name: 'Mission',
      title: ' Mission',
      content: 'To create solutions that address specific business needs, enhance efficiency, and provide a competitive advantage through the strategic use of technology.',
      image: missionImage,
    },
    {
      name: 'Vision',
      title: ' Vision',
      content: 'To establish a visionary software organization empowering 1000 youth by 2030, fostering innovation, and cultivating a dynamic environment where creativity flourishes, leading to impactful solutions and sustainable growth in the ever-evolving tech landscape.',
      image: missionImage,
    },
    {
      name: 'Tech Stack',
      title: ' Tech Stack',
      content: 'Our tech stack powers all-in-one IT services, delivering seamless solutions for various needs. Were dedicated to using technology for efficiency and innovation in everything we do',
      image: missionImage,
    },
    {
      name: 'Offerings',
      title: ' Offerings',
      content: 'Founded in 2013, Singaji Software Solutions (SSS) empowers Indian youth to develop impactful software applications, offering cost-effective solutions tailored to businesses specific needs. The company actively engages and employs talented Indian youth in driving technological innovation.',
      image: missionImage,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-white rounded-lg shadow-sm mb-12">
        <div className="order-2 md:order-1 relative flex justify-center items-center">
          <img
             src={aboutImg.img1}
             alt="Background"
             className=" w-48 sm:w-72 md:w-80 lg:w-96   h-auto   rounded-lg object-cover"
          />
          <img
          src={aboutImg.img2}          
          alt="Project"
            className="absolute w-40 sm:w-60  md:w-64 lg:w-80 h-auto   lg:h-auto rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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

      <div className=" flex flex-col items-center mb-16">
        <div className="w-full max-w-5xl  shadow-md rounded-md bg-slate-gradient">
          <nav className="flex justify-between border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full py-4 sm:px-6 text-center transition-colors duration-300 font-bold  sm:text-xl   ${index === selectedTab
                    ? 'text-primary-500  border-b-2 border-blue-500'
                    : ' hover:text-blue-500'
                  }`}
                onClick={() => setSelectedTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
          <TabContent
            title={tabs[selectedTab].title}
            content={tabs[selectedTab].content}
            image={tabs[selectedTab].image}
          />
        </div>
      </div>
    </>
  );
};

export default About;
