import React, { useEffect, useState } from "react";
import ServiceCard from "../components/Cards/ServiceCards";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { useGetServicesQuery } from "../APIs/ApiSlices";
import { BASE_URL } from "../APIs/Config";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const {
    data: sss,
    error,
    isLoading,
  } = useGetServicesQuery({ populate: "populate=*" } || {});

  useEffect(() => {
    if (error) {
      console.log("Error fetching services:", error);
    } else if (sss) {
      console.log("Fetched data:", sss);

      const servicesArray = sss?.data || [];

      const mappedServices = servicesArray.map((service) => {
        const { attributes } = service;
        const logoUrl = attributes.img_url
          ? `${BASE_URL}${attributes.img_url}`
          : null;

        return {
          description: attributes.description,
          title: attributes.title,
          logoUrl: logoUrl,
        };
      });

      setServices(mappedServices);
    }
  }, [sss, error]);

  return (
    <div className="bg-cover bg-center h-auto mt-16 bg-Service-bg">
      <div className="container mx-auto py-12 px-4 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-9 py-2 rounded-3xl shadow-md tracking-wider">
            Services
          </h2>
          <h1 className="text-5xl font-bold text-primary-500">What We Offer</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              logoUrl={service.logoUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
