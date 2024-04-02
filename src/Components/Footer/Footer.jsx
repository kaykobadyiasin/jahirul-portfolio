import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const locationPath = useLocation()


    return (
        <div className="bg-primaryColor-300">
            <div className={`container mx-auto ${locationPath.pathname === '/' ? 'border-t-2' : 'border-none'} border-primaryColor-200 py-5`}>
                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 text-secondaryColor-200 py-5">
                    <div>
                        <a href="/#" className="block w-full font-bold text-2xl text-secondaryColor-200">
                            Jahirul
                            <sup className="text-3xl font-bold text-primaryColor-200">.</sup>
                        </a>
                    </div>
                    <p>&#169; Muhammad Jahirul Islam 2024 | All Right Reserved</p>
                    <div className="flex items-center gap-5 text-primaryColor-100">

                        <Link to={'https://www.facebook.com/Jahir.Ignite/'} target="_blank" className="bg-primaryColor-200 p-2 rounded-full">
                            <span >
                                <Icon icon='ri:facebook-fill' className="text-lg" />
                            </span>
                        </Link>
                        <Link to={'https://www.instagram.com/muhammadjahirulislam99/'} target="_blank" className="bg-primaryColor-200 p-2 rounded-full">
                            <span >
                                <Icon icon='ri:instagram-fill' className="text-lg" />
                            </span>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/muhammad-jahirul-islam/'} target="_blank" className="bg-primaryColor-200 p-2 rounded-full">
                            <span >
                                <Icon icon='ri:linkedin-fill' className="text-lg" />
                            </span>
                        </Link>
                        <Link to={'https://twitter.com/jahirrayhan80'} target="_blank" className="bg-primaryColor-200 p-2 rounded-full">
                            <span>
                                <Icon icon='mdi:twitter' className="text-lg" />
                            </span>
                        </Link>
                        <Link to={'https://www.youtube.com/channel/UCB_tJEyTocrkY2zfQ7dFm7w'} target="_blank" className="bg-primaryColor-200 p-2 rounded-full">
                            <span>
                                <Icon icon='mdi:youtube' className="text-lg" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;