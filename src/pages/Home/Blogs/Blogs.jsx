import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiURL } from "../../../ApiService/api";
import { Skeleton } from "keep-react";

const SectionTitle = React.lazy(() => import("../../../Components/SectionTitle/SectionTitle"));

const Blogs = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(3); // State to track the number of visible blogs
    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);


    const handleShowMore = () => {
        setVisibleBlogs(prev => prev + 3); // Increase the number of visible blogs by 3
    };


    useEffect(() => {
        fetch(`${apiURL}/blog`)
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setBlogs(data)
                setLoading(false)
            })
    }, [])


    return (
        <div id="blogs" className="bg-primaryColor-100 pb-32">
            <div className="flex flex-col justify-center text-center items-center gap-5 xl:mx-0 mx-5">
                <Suspense fallback={'loading...'}>
                    <SectionTitle
                        title={'My'}
                        titleC={'Blogs'}
                        des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'}
                    />
                </Suspense>
            </div>
            <div className="container mx-auto">
                {loading ?
                    <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-5 xl:grid-cols-3 mt-12">
                        <Skeleton className="w-full space-y-2.5 xl:max-w-md">
                            <Skeleton.Line className="h-52 w-full" />
                            <Skeleton.Line className="h-4 w-full" />
                            <Skeleton.Line className="h-4 w-3/5" />
                            <Skeleton.Line className="h-4 w-4/5" />
                            <Skeleton.Line className="h-10 w-2/5" />
                        </Skeleton>
                        <Skeleton className="w-full space-y-2.5 xl:max-w-md">
                            <Skeleton.Line className="h-52 w-full" />
                            <Skeleton.Line className="h-4 w-full" />
                            <Skeleton.Line className="h-4 w-3/5" />
                            <Skeleton.Line className="h-4 w-4/5" />
                            <Skeleton.Line className="h-10 w-2/5" />
                        </Skeleton>
                        <Skeleton className="w-full space-y-2.5 xl:max-w-md">
                            <Skeleton.Line className="h-52 w-full" />
                            <Skeleton.Line className="h-4 w-full" />
                            <Skeleton.Line className="h-4 w-3/5" />
                            <Skeleton.Line className="h-4 w-4/5" />
                            <Skeleton.Line className="h-10 w-2/5" />
                        </Skeleton>
                    </div>
                    :
                    <div className="grid xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-5 py-8 xl:mx-0 mx-5">
                        {blogs.slice(0, visibleBlogs).map((item, index) => (
                            <Link key={index} to={`blog/` + item?._id}>
                                <div className="border border-secondaryColor-400 hover:bg-primaryColor-300 duration-300 cardHover rounded-md animate__animated animate__fadeIn">
                                    <div className="overflow-hidden rounded-t-md">
                                        <img src={item?.image} className="w-full h-80 object-cover" alt="Muhammad Jahirul Islam Blog" />
                                    </div>
                                    <div className="p-5">
                                        <h6 className="text-secondaryColor-300 text-sm font-semibold mb-5">{item?.date}</h6>
                                        <h3 className="text-secondaryColor-200 text-xl font-semibold mb-5">{item?.title}</h3>
                                        <p className="text-secondaryColor-300">
                                            {item?.details.length > 100 ? item.details.slice(0, 100) + '...' : item.details}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
                {visibleBlogs < blogs?.length && ( // Show the "Show More" button if there are more blogs to show
                    <div className="text-center">
                        <button className="rounded cursor-pointer px-7 py-3 text-primaryColor-100 font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200" onClick={handleShowMore}>
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
