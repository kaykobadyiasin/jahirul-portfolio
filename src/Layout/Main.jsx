import { Outlet, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner'
import 'animate.css';
import Footer from '../Components/Footer/Footer';

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
        }, 1000)
    }, [])




    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };





    return (
        <div className='bg-primaryColor-300'>
            {loading ?
                <div className="flex flex-col justify-center items-center h-screen text-white">
                    <div className="animate__animated animate__heartBeat  animate__slower 3s">
                        <BallTriangle
                            height={60}
                            width={60}
                            radius={5}
                            color="#ffffff"
                            ariaLabel="ball-triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    {/* <h2 className="mt-10 font-semibold text-xl animate__animated animate__flipInX infinite slow	800ms">Welcome to Matribhumi Smart City</h2> */}
                </div>

                :
                <div className='relative'>
                    <Outlet />
                    <Footer />
                    {isVisible && (
                        <div onClick={scrollToTop} className='duration-200 fixed bottom-10 right-10 cursor-pointer rounded-full p-1 border bg-primaryColor-100'>
                            <Icon icon='mingcute:arrows-up-line' className="text-3xl text-primaryColor-200" />
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Main;