import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useGetLogosQuery } from '../api/apiSlice';
import { BASE_URL } from '../store/config';

const NavbarService = () => {
    const [logo, setLogo] = useState(null)
    const { data:sss, error, isLoading} = useGetLogosQuery({populate:"populate=*"});

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        else if (sss) {
            const img_url=`${BASE_URL}${sss.data[0].attributes.logo.data.attributes.url}`
            setLogo(img_url);
            console.log('%c [ url ]-17', 'font-size:13px; background:pink; color:#bf2c9f;',img_url )
        }
    }, [sss]);

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Navbar contactText={"Contact Us +"} links={[
                { name: 'Home' },
                { name: 'About Us' },
                { name: 'Services' },
                { name: 'Our Team' },
                { name: 'Testimonials' },
            ]} logo={logo}  />
        </>
    )
}

export default NavbarService