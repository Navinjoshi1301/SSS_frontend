import React, { useEffect, useState } from "react";
import project1 from "../assets/Project-img1.jpg";
import project2 from "../assets/Project-img2.jpg";
import project3 from "../assets/Project-img3.jpg";
import cyberstash from "../assets/CyberStash.jpg";
import Certocean from "../assets/Certocean.jpg";
import HappyHarda from "../assets/HappyHarda.jpg";
import { useGetLogosQuery } from "../APIs/ApiSlices";
import { BASE_URL } from "../APIs/Config";

const Gallery = () => {
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
      const imgUrls = logoData.data
        .slice(5, 8)
        .map((logoItem) => `${BASE_URL}${logoItem.attributes.img_url}`);
      setBrandingImages(imgUrls);
    }
  }, [logoData]);

  const projectImages = {
    Applications: [project1, project2, project3],
    Branding: brandingImages,
    "Web Applications": [cyberstash, Certocean, HappyHarda],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
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
    </>
  );
};

export default Gallery;
