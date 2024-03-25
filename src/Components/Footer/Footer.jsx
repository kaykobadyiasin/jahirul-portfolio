import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-secondaryColor-100">
            <div className="container mx-auto border-t border-secondaryColor-200">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 text-white py-5">
                    <div>
                        <a href="/#" className="block w-full font-bold text-2xl text-white">
                            Jahirul
                            <sup className="text-3xl font-bold text-primaryColor-200">.</sup>
                        </a>
                    </div>
                    <p>&#169; Muhammad Jahirul Islam 2024 | All Right Reserved</p>
                    <div className="flex items-center gap-8 text-primaryColor-100">

                        <span className="bg-primaryColor-200 p-2 rounded-full">
                            <Link to={'https://facebook.com'} target="_blank">
                                <Icon icon='ri:facebook-fill' className="text-lg" />
                            </Link>
                        </span>
                        <span className="bg-primaryColor-200 p-2 rounded-full">
                            <Link to={'https://twotter.com'} target="_blank">
                                <Icon icon='mdi:twitter' className="text-lg" />
                            </Link>
                        </span>
                        <span className="bg-primaryColor-200 p-2 rounded-full">
                            <Link to={'https://youtube.com'} target="_blank">
                                <Icon icon='mdi:youtube' className="text-lg" />
                            </Link>
                        </span>
                        <span className="bg-primaryColor-200 p-2 rounded-full">
                            <Link to={'https://instagram.com'} target="_blank">
                                <Icon icon='ri:instagram-fill' className="text-lg" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;