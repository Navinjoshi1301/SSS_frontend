import  { useEffect, useState } from 'react';
import { useGetServicesQuery } from '../../api/PortFolioApi';
import { BASE_URL } from '../../api/Config';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { data: sss, error, isLoading } = useGetServicesQuery({ populate: 'populate=*' } || {});
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (error) {
      console.log('Error fetching services:', error);
    } else if (sss) {
      console.log('Fetched data:', sss);

      const servicesArray = sss?.data || [];

      const mappedServices = servicesArray.map(service => {
        const { attributes } = service;
        const logoUrl = attributes.img_url ? `${BASE_URL}${attributes.img_url}` : null;

        return {
          description: attributes.description,
          title: attributes.title,
          logoUrl: logoUrl
        };
      });

      setServices(mappedServices);
    }
  }, [sss, error]);

  return (
    <div className='bg-Service-bg bg-cover bg-center h-auto'>
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-40">
        <div className="text-center mb-12">
          <h2 className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider">Services</h2>
          <h1 className="text-4xl font-bold text-primary-500">What We Offer</h1>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching services: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                logoUrl={service.logoUrl} // Pass the logo URL
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;