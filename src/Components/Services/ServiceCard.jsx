import React from 'react';

const ServiceCard = ({ title, description, logoUrl }) => {
  return (
    <div className=" bg-white p-6 m-4   flex flex-col items-center rounded-3xl shadow-lg border-2 border-gray-300">
      {logoUrl && <img src={logoUrl} alt={title} className="w-16 h-16 mb-4 " />} {/* Display the logo */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center ">{description}</p>
    </div>
  );
};

export default ServiceCard;


