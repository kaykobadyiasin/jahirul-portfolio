
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
        }, 1000)
    }, [])

    return (
        <div>
            {loading ?
                <div className="flex flex-col justify-center items-center h-screen bg-secondaryColor-100 text-white">
                    <div className="animate__animated animate__heartBeat  animate__slower 3s">
                        <BallTriangle
                            height={100}
                            width={100}
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
                    <div onClick={() => window.scrollTo(0, 0)} className='duration-200 fixed bottom-10 right-10 cursor-pointer rounded-full p-1 border bg-primaryColor-100'>
                        <Icon icon='mingcute:arrows-up-line' className="text-3xl text-primaryColor-200" />
                    </div>
                </div>
            }
        </div>
    );
};

export default Main;