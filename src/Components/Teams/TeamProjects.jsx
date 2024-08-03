import { useState } from "react";
import { useGetProjectsQuery, useGetLogosQuery } from "../../Api/portFolioApi";

const TeamProjects = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();
  const { data: logos, isLoading: isLoadingLogos, error: errorLogos } = useGetLogosQuery({ populate: '*' });
  const [activeTab, setActiveTab] = useState("Applications");

  if (isLoading || isLoadingLogos) {
    return <div>Loading...</div>;
  }

  if (error || errorLogos) {
    return <div>Error loading data</div>;
  }

  const filteredLogos = logos?.data.filter(logo => [8, 7, 6].includes(logo.id));

  // Categorize projects and logos
  const categorizedProjects = {
    Applications: projects?.data.slice(0, 3),  
    Branding: filteredLogos,
    "Web Applications": projects?.data.slice(3, 6),  
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main-div">
      <div className="text-center">
        <span className="px-10 py-2 shadow rounded-full">OUR PROJECTS</span>
        <p className="font-bold text-cyan-500 text-5xl mt-5">Gallery</p>

        <div className="flex justify-center items-center mt-5 text-center mb-5">
          <div className="tab-container bg-slate-50 w-1/3 rounded-lg font-semibold py-2">
            <div>
              <button
                className={`px-4 py-2 mx-2 ${activeTab === "Applications" ? "text-primary-500" : "hover:text-blue-700"} rounded`}
                onClick={() => handleTabClick("Applications")}
              >
                Applications
              </button>
              <button
                className={`px-4 py-2 mx-2 ${activeTab === "Branding" ? "text-primary-500" : "hover:text-blue-700"} rounded`}
                onClick={() => handleTabClick("Branding")}
              >
                Branding
              </button>
              <button
                className={`px-4 py-2 mx-2 ${activeTab === "Web Applications" ? "text-primary-500" : "hover:text-blue-700"} rounded`}
                onClick={() => handleTabClick("Web Applications")}
              >
                Web Applications
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center px-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {categorizedProjects[activeTab]?.map((item) => (
          <div className="first-project mx-2" key={item.id}>
            <img
              src={item.attributes.img_url}
              alt={item.attributes.name}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProjects;