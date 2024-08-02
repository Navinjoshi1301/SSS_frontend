// import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import { useGetLogosQuery } from "../../APIs/ApiSlices";

import { useEffect, useState } from "react";
import { BASE_URL } from "../../APIs/Config";

const NavbarService = () => {
  const [logo, setLogo] = useState(null);
  const {
    data: sss,
    error,
    isLoading,
  } = useGetLogosQuery({ populate: "populate=*" });
  // console.log('%c [ logo ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', logo);

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (sss) {
      const img_url = `${BASE_URL}${sss.data[0].attributes.img_url}`;
      setLogo(img_url);
      console.log(
        "%c [ url ]-17",
        "font-size:13px; background:pink; color:#bf2c9f;",
        img_url
      );
    }
  }, [sss]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Navbar
        contactText={"Contact Us +"}
        links={[
          { name: "Home" },
          { name: "About Us" },
          { name: "Services" },
          { name: "Our Team" },
          { name: "Testimonials" },
        ]}
        logo={logo}
      />
    </>
  );
};

export default NavbarService;
