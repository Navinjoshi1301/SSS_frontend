import React from 'react';

const ServiceCard = ({ serviceImg, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl p-6 m-4 flex flex-col items-center border-2 border-gray-300">
            <div className='my-5 min-h-16'>
                <img src={serviceImg} className="text-6xl mb-3 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-gray-600 text-center pb-5">{description}</p>
        </div>
    );
};

export default ServiceCard;