import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { blogs } from "../../../../public/data";

const Blogs = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(3); // State to track the number of visible blogs

    const handleShowMore = () => {
        setVisibleBlogs(prev => prev + 3); // Increase the number of visible blogs by 3
    };

    return (
        <div id="blogs" className="bg-secondaryColor-100 py-20">
            <div className="flex flex-col justify-center text-center items-center gap-5">
                <SectionTitle
                    title={'My Blogs'}
                    des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'}
                />
            </div>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-5 mt-10 xl:mx-0 mx-5">
                    {blogs.slice(0, visibleBlogs).map((item, index) => (
                        <Link key={index} to={`blog/` + item?._id}>
                            <div className=" bg-primaryColor-500 hover:bg-primaryColor-400 duration-300 cardHover rounded-md animate__animated animate__fadeIn">
                                <div className="overflow-hidden rounded-t-md">
                                    <img src={item?.image} className="w-full h-80 object-cover" alt="" />
                                </div>
                                <div className="p-5">
                                    <h6 className="text-primaryColor-300 text-sm font-semibold mb-5">{item?.date}</h6>
                                    <h3 className="text-primaryColor-100 text-xl font-semibold mb-5">{item?.title}</h3>
                                    <p className="text-primaryColor-300">
                                        {item?.details.length > 100 ? item.details.slice(0, 100) + '...' : item.details}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {visibleBlogs < blogs.length && ( // Show the "Show More" button if there are more blogs to show
                    <div className="text-center mt-10">
                        <button className="bg-primaryColor-200 hover:bg-transparent border border-transparent hover:border-primaryColor-200 duration-300 px-5 py-3 rounded-md text-white font-semibold" onClick={handleShowMore}>
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
