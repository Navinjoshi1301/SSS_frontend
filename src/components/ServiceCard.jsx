//here is individual card that is being mapped to the ServiceSection
import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className=" shadow-lg   rounded-3xl px-10 py-2 m-4 flex flex-col items-center border-4 bg-white ">
            <div className='my-5'>
                 
                <Icon className="text-6xl mb-4 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-center pb-10">{description}</p>
        </div>
    );
};

export default ServiceCard;