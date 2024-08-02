// import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useGetLogosQuery } from '../../api/portFolioApi';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/config';

const NavbarService = () => {
    const [logo, setLogo] = useState(null)
    const { data:sss, error} = useGetLogosQuery();
    // console.log('%c [ logo ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', logo);

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        else if (sss) {
            const img_url=(sss.data[0].attributes.img_url)
            setLogo(img_url);
        }
    }, [sss]);

    return (
        <>
            <Navbar contactText={"Contact Us +"} links={[
                { name: 'Home' },
                { name: 'About Us' },
                { name: 'Services' },
                { name: 'Our Team' },
                { name: 'Testimonials' },
            ]} logo={logo} />
        </>
    )
}

export default NavbarService