/* eslint-disable react/prop-types */
import { useState } from 'react';

const ContactButton = ({ contactText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`relative bg-transparent border-primary-500 border-2 text-black font-bold rounded-full px-6 py-3 text-lg overflow-hidden transition-colors duration-300 ease-in-out ${isHovered ? 'text-white' : ''}`}
        style={{
          zIndex: 1,
        }}
      >
        {contactText}
        <span
          className={`absolute inset-0 bg-primary-500 rounded-full transform transition-transform duration-300 ease-linear ${isHovered ?
             'translate-x-0 translate-y-0' : '-translate-x-full translate-y-full'}`}
          style={{
            zIndex: -1,
          }}
        />
      </button>
    </div>
  );
};

export default ContactButton;
