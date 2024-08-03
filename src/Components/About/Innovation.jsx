import { useState } from 'react';
import { useGetInnovationsQuery } from "../../Api/portFolioApi";

const Innovation = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { data, isLoading } = useGetInnovationsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tabs = data?.data.map(item => ({
    name: item.attributes.name,
    title: item.attributes.name,
    content: item.attributes.description,
    image: item.attributes.img_url,
  })) || [];

  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full max-w-5xl shadow-md rounded-md bg-slate-gradient">
          <nav className="flex justify-between border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full py-4 sm:px-6 text-center transition-colors duration-300 font-bold sm:text-xl ${index === selectedTab
                  ? 'text-primary-500 border-b-2 border-blue-500'
                  : 'hover:text-blue-500'
                  }`}
                onClick={() => setSelectedTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="w-full max-w-5xl bg-slate-gradient  rounded-md lg:pe-28 py-24 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 w-full md:w-1/2 flex justify-center">
              {tabs[selectedTab].image ? (
                <img
                  src={tabs[selectedTab].image}
                  alt={tabs[selectedTab].title}
                  className="w-32 h-32 md:w-60 md:h-48 object-cover rounded-full pb-5"
                />
              ) : (
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-full flex items-center justify-center">
                  <span>No Image</span>
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">{tabs[selectedTab].title}</h2>
              <p className="text-gray-700 text-lg">{tabs[selectedTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovation;