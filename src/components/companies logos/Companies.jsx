import React, { useEffect, useState } from "react";
import tofrum from "../../assets/Tofrum-project.jpg";
import Aeromatric from "../../assets/Aeromatric-project.jpg";
import cyber from "../../assets/Cyberstash-project.jpg";
import zool from "../../assets/Zool.jpg";
import { useGetLogosQuery } from "../../api/portFolioApi";

const Companies = () => {
  const [logos, setLogos] = useState([])
  const { data, error } = useGetLogosQuery();
  useEffect(() => {
    if (error) {
      console.error("Failed to fetch logos", error);
      return;
    }
    else if (data) {
      setLogos(data.data.filter((_, index) => index !== 4 && index > 0 && index < 6));
    }
  }, [data, error]);

  return (
    <>
      <div className=" container mx-auto px-0 md:px-20 lg:px:24 mb-10">
        <div className="block p-1 md:grid grid-cols-2 lg:grid-cols-4 justify-around md:my-10">
          {logos.map((logo,index) => (
            <div key={index} className="m-2 md:m-1">
              <img src={logo.attributes.img_url} />
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Companies;