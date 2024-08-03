import SSSlogo from "../../assets/SSS-Logo-project.png";
import { FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <footer className="pt-4">
        <div className="container-fluid px-4 md:px-28 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10">
            <div className="flex flex-col md:items-start">
              <img
                src={SSSlogo}
                alt="Singaji Software Solutions"
                className="h-15 mb-8"
              />
              <ul className="flex space-x-3 ">
                <li className="bg-slate-200 p-2 rounded-lg ">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </li>
                <li className="bg-slate-200 p-2 rounded-lg">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:items-center">
              <ul className="cursor-pointer">
                <li className="mb-2 text-lg ">
                  <Link to="Home" className="flex" smooth={true} duration={500}>
                    <IoIosArrowForward className="mt-1 hover:text-primary-500" />
                    Home
                  </Link>
                </li>
                <li className="mb-2 text-lg">
                  <Link to="About Us" className="flex" smooth={true} duration={500}>
                    <IoIosArrowForward className="mt-1 hover:text-primary-500" />
                    About Us
                  </Link>
                </li>
                <li className="mb-2 text-lg">
                  <Link to="Services" className="flex" smooth={true} duration={500}>
                    <IoIosArrowForward className="mt-1 hover:text-primary-500" />
                    Services
                  </Link>
                </li>
                <li className="mb-2 text-lg">
                  <Link to="Our Team" className="flex" smooth={true} duration={500}>
                    <IoIosArrowForward className="mt-1 hover:text-primary-500" />
                    Our Team
                  </Link>
                </li>
                <li className="mb-2 text-lg">
                  <Link to="Testimonials" className="flex" smooth={true} duration={500}>
                    <IoIosArrowForward className="mt-1 hover:text-primary-500" />
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:items-start">
              <h4 className="font-bold mb-2 text-2xl">Our Contact</h4>
              <div className="flex">
                <IoCallSharp className="mt-1 me-3 h-5 w-5 hover:text-primary-500" />
                <p className="text-gray-800 font-semibold">9098458119</p>
              </div>
              <div className="flex">
                <MdMailOutline className="mt-1 me-3 h-5 w-5 hover:text-primary-500" />
                <p className="text-gray-800 font-semibold">contact@singaji.in</p>
              </div>
            </div>

            <div className="flex flex-col md:items-start">
              <h4 className="font-bold mb-2 text-2xl">Location</h4>
              <div className="flex">
                <FaLocationArrow className="me-3 h-11 w-11 hover:text-primary-500" />
                <p className="text-gray-800 font-semibold">
                  Sant Singaji Institute of Science and Management, NH-59A,
                  Sandalpur, Madhya Pradesh 455339
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:text-left bg-gray-800 text-white p-6">
          <p>© Singaji Software Solutions 2023 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
