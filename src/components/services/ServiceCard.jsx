/* eslint-disable react/prop-types */

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-3xl p-6 m-4 flex flex-col items-center border-2 border-gray-300">
            <div className='my-5'>
                <Icon className="text-6xl mb-3 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2  text-center">{title}</h3>
            <p className="text-gray-600 text-center pb-5">{description}</p>
        </div>
    );
};

export default ServiceCard;
