import React from "react";
import tofrum from "../../assets/Tofrum-project.jpg";
import Aeromatric from "../../assets/Aeromatric-project.jpg";
import cyber from "../../assets/Cyberstash-project.jpg";
import zool from "../../assets/Zool.jpg";

const Companies = () => {
  return (
    <>
      <div className="px-0 md:px-20 lg:px:24 mb-10">
        <div className="block p-1 md:flex justify-around">
          <div className="m-2 md:m-0">
            <img src={tofrum} />
          </div>
          <div className="m-2 md:m-0">
            <img src={Aeromatric} />
          </div>
          <div className="m-2 md:m-0">
            <img src={cyber} />
          </div>
          <div className="m-2 md:m-0">
            <img src={zool} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;