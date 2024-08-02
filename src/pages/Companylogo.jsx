import React from "react";
import tofrum from "../assets/Tofrum-project.jpg";
import Aeromatric from "../assets/Aeromatric-project.jpg";
import cyber from "../assets/Cyberstash-project.jpg";
import zool from "../assets/Zool.jpg";

const Companies = () => {
  return (
    <>
      <div className="px-24 mb-10">
        <div className="flex justify-around">
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