import React, { Suspense } from "react";
import hero from '../../../assets/Hero/main.png'
import Navbar from "../../../Components/Navbar/Navbar";

const Button = React.lazy(() => import("../../../Components/Button/Button"));

const Hero = () => {


    return (
        <div>
            {/* Video container */}
            <div className="relative xl:min-h-[90vh] sm:min-h-[80.6vh] min-h-[100vh] bg-primaryColor-300 bg-opacity-95 bg-no-repeat bg-cover bg-current">
                <Navbar />
                <div className="absolute w-full 2xl:h-[90.4vh] xl:h-[90.4vh] lg:h-[70.9vh] sm:h-[72.2vh] h-[107vh] bg-no-repeat right-0 lg:bg-right-bottom bg-center flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* YouTube embed iframe */}
                    <div className="absolute inset-0 z-0">
                        {/* <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&controls=0&mute=1&playlist=${youtubeVideoId}`}
                            title="YouTube video player"
                            
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="object-cover w-full h-full"
                        ></iframe> */}
                        <video src="src/assets/Hero/The Diana Award Recipient _ Muhammad Jahirul Islam.mp4" autoPlay muted loop className="w-full h-auto min-h-[100vh]"></video>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
                    {/* Text content */}
                    <div className="relative z-20 text-primaryColor-300 mt-5 lg:bg-transparent bg-primaryColor-300 rounded-md lg:p-0 p-5 bg-opacity-60 lg:shadow-[0px] shadow-md">
                        <h3 className="lg:text-2xl text-xl font-semibold tracking-wider">Welcome</h3>
                        <h1 className="lg:text-7xl text-5xl font-bold my-5">
                            Muhammad
                            <span className="text-primaryColor-200"> Jahirul Islam</span>
                        </h1>
                        <h5>Entrepreneur | Teacher | Author</h5>
                    </div>
                    {/* Buttons */}
                    <div className="relative z-20 flex items-center justify-center gap-5 mt-14">
                        <Button btnValue={'Achievements'} link={'#achievement'} color={'text-white lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100'} />
                        <Button btnValue={'My Books'} link={'#books'} color={'text-primaryColor-100 lg:hover:text-secondaryColor-200 hover:text-white hover:border-primaryColor-100'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
