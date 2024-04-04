import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../../Components/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { apiURL } from "../../../ApiService/api";
import { Skeleton } from "keep-react";

const BlogDetails = () => {

    const [blogs, setBlogs] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const singleBlog = blogs?.find(item => item?._id == id);
    const recentBlogs = blogs?.filter(recentBlog => String(recentBlog._id) !== String(id));

    useEffect(() => {
        fetch(`${apiURL}/blog`)
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setBlogs(data)
                setLoading(false)
            })
    }, [])


    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Blogs', url: '/#blogs' },
        { text: 'Blogs Details', url: `/${singleBlog?._id}` },
    ];

    return (
        <div className="min-h-screen animate__animated animate__fadeIn">
            {loading ?
                <Skeleton className="max-w-xl space-y-2.5 p-10">
                    <Skeleton.Line className="h-4 w-full rounded-md" />
                    <Skeleton.Line className="h-4 w-full rounded-md" />
                    <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                    <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                    <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                </Skeleton>
                :
                <div>
                    <img src={singleBlog?.image} className="w-full h-[600px] object-cover" alt="" />
                </div>
            }

            <div className="container mx-auto py-20">
                <div className='mb-10 xl:mx-0 mx-5'>
                    <Breadcrumb items={breadcrumbItems} ></Breadcrumb>
                </div>
                <div>
                    <div className='flex lg:flex-row flex-col gap-8 xl:mx-0 mx-5'>

                        <div className='w-full'>
                            {loading ?
                                <Skeleton className="max-w-xl space-y-2.5 p-10">
                                    <Skeleton.Line className="h-4 w-full rounded-md" />
                                    <Skeleton.Line className="h-4 w-full rounded-md" />
                                    <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                                    <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                                    <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                                </Skeleton>
                                :
                                <div>
                                    <img src={singleBlog?.image} className='w-full h-[500px] object-cover object-bottom rounded-md' alt="" />
                                    <div className="mt-10">
                                        <h2 className="text-xl font-semibold mb-5">{singleBlog?.title}</h2>
                                        <p className="text-justify whitespace-pre-line">{singleBlog?.details}</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={`lg:w-3/12 flex flex-col gap-5 bg-primaryColor-300 rounded-md p-5
                        ${(recentBlogs?.length <= 6) ? "" : "lg:h-[600px] lg:overflow-y-scroll"}`}
                        >
                            <h3 className='text-center font-semibold text-primaryColor-200 rounded-md'>More Blogs</h3>
                            <hr />
                            {loading ?
                                <Skeleton className="max-w-xl space-y-2.5 p-10">
                                    <Skeleton.Line className="h-4 w-full rounded-md" />
                                    <Skeleton.Line className="h-4 w-full rounded-md" />
                                    <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                                    <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                                    <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                                </Skeleton>
                                :
                                <div className='grid lg:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-5'>
                                    {recentBlogs
                                        ?.reverse()
                                        .slice(0, 3)
                                        .map((recentBook) => (
                                            <div key={recentBook._id} className="border rounded-md">
                                                <Link to={`/blog/${recentBook?._id}`} className=''>
                                                    <div
                                                        className=" h-full"
                                                    >
                                                        <img
                                                            src={recentBook?.image}
                                                            alt="Matribhumi City"
                                                            className="w-full h-full rounded-md object-contain"
                                                        />
                                                    </div>
                                                    <div className="">
                                                        {/* <h6 className="text-lg font-medium">{recentBook?.title}</h6> */}
                                                        <p className="text-sm text-gray-600">
                                                            {recentBook?.description &&
                                                                recentBook?.description.length > 80
                                                                ? `${recentBook?.description.substring(0, 80)}...`
                                                                : recentBook?.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;