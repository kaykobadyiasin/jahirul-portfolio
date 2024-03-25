
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Icon } from '@iconify/react';

const Main = () => {
    return (
        <div>
            <div className='relative'>
                <Navbar />
                <Outlet />
                <Footer />
                <div className='absolute bottom-5 right-10 animate__animated animate__bounce animate__infinite rounded-md p-1'>
                    <Icon icon='solar:arrow-up-broken' className="text-3xl text-white" />
                </div>
            </div>
        </div>
    );
};

export default Main;