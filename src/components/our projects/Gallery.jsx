import React, { useEffect, useState } from "react";
import project1 from "../../assets/kriida.jpg";
import project2 from "../../assets/pos.jpg";
import project3 from "../../assets/trukkin.jpg";
import cyberstash from '../../assets/Cyberstash.jpg';
import Certocean from '../../assets/certocean.jpg';
import HappyHarda from '../../assets/happyharda.jpg';
import { useGetLogosQuery, useGetProjectsQuery } from "../../api/portFolioApi";
import { BASE_URL } from "../../api/config";


const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Applications");

  const [brandingImages, setBrandingImages] = useState([]);
  const [applicationImages, setApplicationImages] = useState([]);
  const [webApplicationImages, setWebApplicationImages] = useState([]);

  const {
    data: logoData,
    error: logoError,
    isLoading: logoIsLoading,
    isFetching: logoIsFetching, 
  } = useGetLogosQuery();
  const {
    data: projectsData,
    error: projectsError,
    isLoading: projectsIsLoading,
    isFetching: projectsIsFetching,
  } = useGetProjectsQuery();

  useEffect(() => {
    if (logoError, projectsError) {
      console.log(logoError);
      console.log(projectsError);
    } else if (logoData && projectsData) {
      //logos data
      const logoUrls = logoData.data.slice(4, 8).map((logoItem) => (logoItem.attributes.img_url));
      //setting data to state for logo images
      setBrandingImages(logoUrls);
      //application data
      const applicationUrls = projectsData.data.slice(0, 3).map((projectItem) => (projectItem.attributes.img_url));
       //setting data to state for application images
      setApplicationImages(applicationUrls);
      //web applications data
      const webApplicationUrls = projectsData.data.slice(3, 6).map((projectItem) => (projectItem.attributes.img_url));
       //setting data to state for webapplication images
      setWebApplicationImages(webApplicationUrls);

    }
  }, [logoData,projectsData]);

  const projectImages = {
    Applications: applicationImages,
    Branding: brandingImages,
    WebApplications:webApplicationImages,
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="main-div">
        <nav className="text-center">
          <span className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider mt-4">OUR PROJECTS</span>
          <p className="font-bold text-cyan-500 text-5xl mt-5">Gallery</p>

          <div className="flex justify-center items-center mt-5 text-center mb-5">
            <div className="tab-container bg-slate-50 w-1/3 rounded-lg font-semibold py-2">
              <div className=" ">
                <button
                  className={`px-2 py-2 mx-0 ${activeTab === "Applications"
                    ? " text-primary-500"
                    : "hover:text-blue-700"
                    } rounded`}
                  onClick={() => handleTabClick("Applications")}
                >
                  Applications
                </button>
                <button
                  className={`px-2 py-2 mx-0 ${activeTab === "Branding"
                    ? " text-primary-500"
                    : "hover:text-primary-500"
                    } rounded`}
                  onClick={() => handleTabClick("Branding")}
                >
                  Branding
                </button>
                <button
                  className={`px-2 py-2 mx-0 ${activeTab === "WebApplications"
                    ? " text-primary-500"
                    : "hover:text-primary-500"
                    } rounded`}
                  onClick={() => handleTabClick("WebApplications")}
                >
                  Web Applications
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className=" justify-center px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {logoIsLoading || projectsIsLoading ||logoIsFetching||logoIsFetching?
          <div>Loading...</div>
          :
          projectImages[activeTab].map((image, index) => (
            <div className="first-project mx-1 mb-2 " key={index}>
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className=" object-cover"
              />
            </div>
          ))
          }
          
        </div>
      </div>
    </>
  );
};

export default Gallery;