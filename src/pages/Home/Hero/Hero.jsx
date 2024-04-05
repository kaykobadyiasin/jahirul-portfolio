import React, { Suspense } from "react";
import heroBg from '../../../assets/Hero/heroBg.png'
import hero from '../../../assets/Hero/main.png'
import Navbar from "../../../Components/Navbar/Navbar";

const Button = React.lazy(() => import("../../../Components/Button/Button"));

const Hero = () => {
    return (
        <div>
            <div className="relative xl:min-h-[100vh] sm:min-h-[80.6vh] min-h-[100vh] bg-primaryColor-300 bg-opacity-95 bg-no-repeat bg-cover bg-current" style={{ backgroundImage: `url(${heroBg})` }}>
                <Navbar />
                <div className="absolute w-full 2xl:h-[90.4vh] xl:h-[90.4vh] lg:h-[70.9vh] sm:h-[72.2vh] h-[107vh] bg-no-repeat right-0 lg:bg-right-bottom bg-center flex flex-col justify-center items-center text-center " style={{ backgroundImage: `url(${hero})` }}>
                    <div className="text-secondaryColor-200 mt-5 lg:bg-transparent bg-primaryColor-300 rounded-md lg:p-0 p-5 bg-opacity-60 lg:shadow-[0px] shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold tracking-wider">Welcome</h3>
                        <h1 className="lg:text-8xl text-5xl font-bold my-5">
                            Muhammad <br />
                            <span className="text-primaryColor-200">Jahirul Islam</span>
                        </h1>
                        <h5>Entrepreneur | Teacher | Author</h5>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-14">
                        <Button btnValue={'Achievements'} link={'#achievement'} color={'text-white lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100'} />
                        <Button btnValue={'My Books'} link={'#books'} color={'text-primaryColor-100 lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100'} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;