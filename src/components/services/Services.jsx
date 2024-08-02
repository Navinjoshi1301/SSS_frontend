
import ServiceCard from './ServiceCard';

import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
const services = [
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building responsive and modern web applications Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
  {
    icon: FaPaintBrush,
    title: 'Graphic Design',
    description: 'Creating visually appealing designs and graphicsLorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Developing mobile applications for Android and iOS Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Building responsive and modern web applications Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
  {
    icon: FaPaintBrush,
    title: 'Graphic Design',
    description: 'Creating visually appealing designs and graphicsLorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Developing mobile applications for Android and iOS Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque delectus consequuntur maiores veritatis dignissimos ipsum rerum perferendis illum earum.',
  },
];

const Services = () => {
  return (
    <div className='bg-Service-bg bg-cover bg-center h-auto'>
         <div className="container mx-auto py-12 px-4 md:px-12 lg:px-40">
      <div className="text-center mb-12">
        <h2 className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider">Services</h2>
        <h1 className="text-4xl font-bold text-primary-500">What We Offer</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default Services;

