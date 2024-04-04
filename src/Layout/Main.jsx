
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner'
import 'animate.css';

const Main = () => {



    const [loading, setLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 0)
    }, [])

    return (
        <div>
            {loading ?
                <></>

                :
                <div className='relative'>
                    <Outlet />
                    <Footer />
                    <div onClick={() => window.scrollTo(0, 0)} className='duration-200 fixed bottom-10 right-10 cursor-pointer rounded-full p-1 border bg-primaryColor-100'>
                        <Icon icon='mingcute:arrows-up-line' className="text-3xl text-primaryColor-200" />
                    </div>
                </div>
            }
        </div>
    );
};

export default Main;