import React from "react";
import SSSlogo from "../../assets/SSS-Logo-project.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className=" container mx-auto pt-4">
        <div className="container-fluid px-4 md:px-28 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={SSSlogo}
                alt="Singaji Software Solutions"
                className="h-15 mb-8"
              />
              <ul className="flex space-x-3">
                <li className="bg-slate-200 p-2 rounded-lg">
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

            <div className="flex flex-col items-center md:items-center">
              <ul>
                <li className="mb-2 text-lg">
                  <a href="/" className="flex">
                    <IoIosArrowForward className="mt-1  hover:text-primary-500" />
                    Home
                  </a>
                </li>
                <li className="mb-2 text-lg">
                  <a href="/about" className="flex ">
                    {" "}
                    <IoIosArrowForward className="mt-1  hover:text-primary-500" />{" "}
                    About Us
                  </a>
                </li>
                <li className="mb-2 text-lg">
                  <a href="/services" className="flex">
                    {" "}
                    <IoIosArrowForward className="mt-1  hover:text-primary-500" />{" "}
                    Services
                  </a>
                </li>
                <li className="mb-2 text-lg">
                  <a href="/team" className="flex">
                    {" "}
                    <IoIosArrowForward className="mt-1  hover:text-primary-500" />
                    Our Team
                  </a>
                </li>
                <li className="mb-2 text-lg">
                  <a href="/testimonials" className="flex">
                    {" "}
                    <IoIosArrowForward className="mt-1  hover:text-primary-500" />
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-2 text-2xl"> Our Contact</h4>
              <div className="flex">
                {" "}
                <IoCallSharp className="mt-1 me-3 h-5 w-5  hover:text-primary-500" />{" "}
                <p className="text-gray-800 font-semibold"> 9098458119</p>
              </div>
              <div className="flex">
                {" "}
                <MdMailOutline className="mt-1 me-3 h-5 w-5  hover:text-primary-500" />{" "}
                <p className="text-gray-800 font-semibold">
                  contact@singaji.in
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-2 text-2xl">Location</h4>
              <div className="flex">
                {" "}
                <FaLocationArrow className="me-3 h-11 w-11 hover:text-primary-500" />{" "}
                <p className="text-gray-800 font-semibold">
                  Sant Singaji Institute of Science and Management, NH-59A,
                  Sandalpur, Madhya Pradesh 455339
                </p>
              </div>
            </div>
          </div>

          {/* <div className="text-center md:text-left bg-gray-800 text-white p-6 mt-4">
          <p>© Singaji Software Solutions 2023 | All Rights Reserved</p>
        </div> */}
        </div>

        <div className=" text-center md:text-left bg-gray-800 text-white p-6  px-28 ">
          <p>© Singaji Software Solutions 2023 | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;