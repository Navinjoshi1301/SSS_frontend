import React, { useEffect, useState } from "react";
import tofrum from "../assets/Tofrum-project.jpg";
import Aeromatric from "../assets/Aeromatric-project.jpg";
import cyber from "../assets/Cyberstash-project.jpg";
import zool from "../assets/Zool.jpg";
import { useGetLogosQuery } from "../APIs/ApiSlices";
import { BASE_URL } from "../APIs/Config";

const Companies = () => {
  const [logo, setLogo] = useState([]);
  const {
    data: logoData,
    error: logoError,
    isLoading: logoLoading,
  } = useGetLogosQuery({ populate: "populate=*" }); // Adjust `populate` value accordingly

  useEffect(() => {
    if (logoError) {
      console.log(logoError);
    } else if (logoData) {
      const imgUrl = logoData.data.slice(1, 5).map((logoItem) => `${BASE_URL}${logoItem.attributes.img_url}`);
      setLogo(imgUrl);
    }
  }, [logoData]);

  if (logoLoading) return <p>Loading...</p>;
  if (logoError) return <p>Error loading Logos </p>;

  return (
    <>
      <div className="px-24 mb-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {logo.map((logo, index) => (
            <div key={index}>
              <img src={logo} alt={`Company logo ${index + 1}`} />
            </div>
          ))}
        </div> */}
          <div className="">
            <img src={tofrum} />
          </div>
          <div className="">
            <img src={Aeromatric} />
          </div>
          <div className="">
            <img src={cyber} />
          </div>
          <div className="">
            <img src={zool} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
