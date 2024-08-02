import React, { useEffect, useState } from "react";
import project4 from "../../../src/assets/Project-images-4.jpg";
import project5 from "../../../src/assets/Project-images-05.jpg";
import project6 from "../../../src/assets/Project-images-06.jpg";
import cyberstash from '../../../src/assets/CyberstashImage.png';
import Certocean from '../../../src/assets/CertOceanImage.png';
import HappyHarda from '../../../src/assets/HappyHardaImage.png';
import Avinyaa from '../../../src/assets/Avinyaa.png';
import Bubblin from '../../../src/assets/Bubblin.png';
import CertOceanLogo from '../../../src/assets/CertOcean.png';

import { useGetLogosQuery } from "../../Api/portFolioApi";
import { BASE_URL } from "../../Api/Config";

const OurTeamProjects = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  const [brandingImages, setBrandingImages] = useState([]);

  const {
    data: logoData,
    error: logoError,
    isLoading: logoLoading,
  } = useGetLogosQuery({ populate: "populate=*" });

  useEffect(() => {
    if (logoError) {
      console.log(logoError);
    } else if (logoData) {
      const imgUrls = logoData.data.slice(5, 8).map((logoItem) => `${BASE_URL}${logoItem.attributes.img_url}`);
      setBrandingImages(imgUrls);
    }
  }, [logoData]);

  const projectImages = {
    Applications: [project4, project5, project6],
    Branding: brandingImages,
    "Web Applications": [cyberstash, Certocean, HappyHarda],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
    <div className="main-div">
    <div className="text-center">
      <span className="px-10 py-2 shadow rounded-full  ">OUR PROJECTS</span>
      <p className="font-bold text-cyan-500 text-5xl mt-5">Gallery</p>

      <div className="flex justify-center items-center mt-5 text-center mb-5">
        <div className="tab-container bg-slate-50 w-1/3 rounded-lg font-semibold py-2">
          <div className=" ">
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "Applications"
                  ? " text-primary-500"
                  : "hover:text-blue-700"
              } rounded`}
              onClick={() => handleTabClick("Applications")}
            >
              Applications
            </button>
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "Branding"
                  ? " text-primary-500"
                  : "hover:text-blue-700"
              } rounded`}
              onClick={() => handleTabClick("Branding")}
            >
              Branding
            </button>
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === "Web Applications"
                  ? " text-primary-500"
                  : "hover:text-blue-700"
              } rounded`}
              onClick={() => handleTabClick("Web Applications")}
            >
              Web Applications
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className=" justify-center px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {projectImages[activeTab].map((image, index) => (
        <div className="first-project mx-2" key={index}>
          <img
            src={image}
            alt={`Project ${index + 1}`}
            className=" object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default OurTeamProjects;