import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Button/Button";

const Hero = () => {
    return (
        <div>
            {/* Video container */}
            <div className="relative bg-primaryColor-300 bg-opacity-95">
                <Navbar />
                <div className="w-full bg-no-repeat right-0 lg:bg-right-bottom bg-center flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* YouTube embed iframe */}
                    <div className="absolute inset-0 top-0 z-0">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dlgB6updOh8?autoplay=1&loop=1&controls=0&mute=1&playlist=dlgB6updOh8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="object-cover bg-cover w-full h-full"
                        ></iframe>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black w-full opacity-80 z-10"></div>
                    {/* Text content */}
                    <div className="relative z-20 text-primaryColor-300 2xl:my-96 xl:my-[282px] lg:my-[176px] sm:mt-32 sm:mb-14 mt-20 mb-5 rounded-md lg:p-0 p-5 bg-opacity-60 lg:shadow-[0px] shadow-md">
                        <h3 className="xl:text-2xl lg:text-xl sm:text-lg font-semibold tracking-wider">Welcome</h3>
                        <h1 className="xl:text-7xl lg:text-5xl sm:text-4xl text-2xl font-bold sm:my-5 my-3">
                            Muhammad
                            <span className="text-primaryColor-200"> Jahirul Islam</span>
                        </h1>
                        <h5>Entrepreneur | Teacher | Author</h5>
                        {/* Buttons */}
                        <div className="sm:block hidden">
                        <div className="flex items-center justify-center gap-5 mt-14">
                            <Button btnValue={'Achievements'} link={'#achievement'} color={'text-white lg:hover:text-white hover:text-white hover:border-primaryColor-100'} />
                            <Button btnValue={'My Books'} link={'#books'} color={'text-primaryColor-100 lg:hover:text-white hover:text-white hover:border-primaryColor-100'} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
