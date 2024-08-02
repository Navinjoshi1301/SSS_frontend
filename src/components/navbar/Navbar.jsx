import React, { useState } from 'react';
import ContactButton from '../contactButton/ContactButton';
import { Link } from 'react-scroll'

const Navbar = ({ links=[], logo, contactText }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // console.log('%c [ url ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', logo.url)
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-5" />
        </div>
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 font-bold">
            {links.map((link, index) => (
              <li key={index} className="text-lg text-black hover:text-primary-500 cursor-pointer">
                <Link
                  activeClass="active"
                  to={link.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className="block lg:hidden px-3 py-1 border rounded text-gray-500 border-gray-500 hover:text-gray-500 hover:border-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="hidden lg:block">
            <Link
             activeClass="active"
             to={contactText}
             spy={true}
             smooth={true}
             offset={-70}
             duration={500}> <ContactButton contactText={contactText} /></Link>
          </div>
        </div>
      </div>
      <div className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out ${isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} bg-white`}>
        <ul className="flex flex-col items-start p-4 space-y-4 transform transition-opacity duration-1000 ease-in-out bg-gray-200 m-6">
          {links.map((link, index) => (
            <li key={index} className="text-lg font-bold text-black hover:text-blue-600 py-2 border-b-2 border-gray-400 w-full">
              <Link
                activeClass="active"
                to={link.name}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
