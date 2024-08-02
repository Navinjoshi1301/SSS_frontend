import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/Config';
import { useGetLogosQuery } from '../../api/PortFolioApi';

const NavbarSlice = () => {
    const [logo, setLogo] = useState([])
    const { data:sss, error, isLoading} = useGetLogosQuery();

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        else if (sss) {
            const img_url=`${BASE_URL}${sss.data[0].attributes.logo.data.attributes.url}`
            setLogo(img_url);
            console.log('%c [ url ]-17', 'font-size:13px; background:pink; color:#bf2c9f;',img_url )
        }
    }, [error, sss]);

    if (isLoading) return <div>Loading...</div>;
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

export default NavbarSlice