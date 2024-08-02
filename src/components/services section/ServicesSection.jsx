import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { useGetServicesQuery } from '../../api/portFolioApi';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  const { data, error } = useGetServicesQuery();

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (data) {
      setServices(data.data); // Update to set the `data` array from the response
    }
  }, [data, error]);

  return (
    <div className='bg-Service-bg bg-cover bg-center h-auto'>
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-40">
        <div className="text-center mb-12">
          <h2 className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider">Services</h2>
          <h1 className="text-4xl font-bold text-primary-500">What We Offer</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {Array.isArray(services) && services.map((service) => (
            <ServiceCard
              key={service.id}
              serviceImg={service.attributes.img_url}
              title={service.attributes.title}
              description={service.attributes.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
