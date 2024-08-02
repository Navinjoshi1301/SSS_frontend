import React from 'react';

const ServiceCard = ({ title, description, logoUrl }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg">
      {logoUrl && <img src={logoUrl} alt={title} className="w-16 h-16 mb-4" />} {/* Display the logo */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
