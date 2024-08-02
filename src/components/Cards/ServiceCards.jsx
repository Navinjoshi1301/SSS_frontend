import React from 'react';

const ServiceCard = ({  title, description, logoUrl  }) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl p-6 m-4 flex flex-col items-center border-2 border-gray-300">
            <div className='my-5'>
            {logoUrl && <img src={logoUrl} alt={title} className="w-16 h-16 mb-4" />} {/* Display the logo */}
                <logoUrl className="text-6xl mb-4 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-center pb-10">{description}</p>
        </div>
    );
};

export default ServiceCard;




