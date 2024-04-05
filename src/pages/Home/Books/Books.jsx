import { Link } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { Skeleton } from "keep-react";
const Button = React.lazy(() => import("../../../Components/Button/Button"));
import { apiURL } from "../../../ApiService/api";
import Rating from 'react-rating';
import { Icon } from '@iconify/react';


const Books = () => {

    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${apiURL}/book`)
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setBooks(data)
                setLoading(false)
            })
    }, [])


    return (
        <div id="books" className="bg-primaryColor-300 py-32">
            <div className="container mx-auto">
                <div className="mb-20 flex items-center lg:flex-row flex-col lg:divide-x-4 lg:divide-y-0 divide-y-4 divide-primaryColor-200 lg:gap-14 gap-5 lg:px-0 px-5">
                    <h2 className="text-5xl font-semibold text-primaryColor-200"> <span className="text-[#151515]">My</span> Books</h2>
                    <p className="lg:w-[60%] lg:text-left text-center lg:pl-14 lg:pt-0 pt-5 text-secondaryColor-300">
                        This is Muhammad Jahirul Islam the Founder and Chairman of Ignite Global Foundation and Director of Matribhumi Group. I have pursued my undergrad degree in Aeronautical Engineering from the United College of Aviation.
                    </p>
                </div>

                <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-0 px-5">
                    {loading ?
                        <>
                            <div className="p-5 bg-primaryColor-100">
                                <Skeleton animation={false} className="w-full space-y-2.5 mt-5 flex items-center gap-3">
                                    <Skeleton.Line className="h-60 w-52 rounded-md" />
                                    <div className='w-full space-y-4'>
                                        <Skeleton.Line className="h-4 w-1/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-2/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-1/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-3/6 rounded-md" />
                                    </div>
                                </Skeleton>
                            </div>
                            <div className="p-5 bg-primaryColor-100">
                                <Skeleton animation={false} className="w-full space-y-2.5 mt-5 flex items-center gap-3">
                                    <Skeleton.Line className="h-60 w-52 rounded-md" />
                                    <div className='w-full space-y-4'>
                                        <Skeleton.Line className="h-4 w-1/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-2/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-1/6 rounded-md" />
                                        <Skeleton.Line className="h-4 w-3/6 rounded-md" />
                                    </div>
                                </Skeleton>
                            </div>
                        </>
                        :
                        <>
                            {books?.map((item, index) => (
                                <Link key={index} to={`book/${item?._id}`}>
                                    <div className="w-full cursor-pointer flex sm:flex-row flex-col items-center gap-5 bg-primaryColor-100 border border-transparent hover:border-primaryColor-200 duration-200 rounded-md p-5 shadow-md relative">
                                        <div className="w-48">
                                            {loading ?
                                                <Skeleton animation={false} className="w-full space-y-2.5 mt-5 flex items-center gap-3">
                                                    <Skeleton.Line className="h-60 w-52 rounded-md" />
                                                </Skeleton>
                                                :
                                                <img src={item?.image} alt="" className="w-full rounded-md" />
                                            }
                                        </div>
                                        <div className="w-full">
                                            <h3 className="sm:text-2xl font-bold text-[#151515]">{item?.name}</h3>
                                            <h6 className="my-3 text-primaryColor-200 xl:text-lg lg:text-md text-sm">{item?.author}</h6>
                                            <div className='flex items-start gap-2'>
                                                <Rating
                                                    readonly
                                                    className='text-xl'
                                                    placeholderRating={(item?.reviews) ? 4.5 : 0}
                                                    emptySymbol={<Icon icon="mdi:star-outline" className='text-orange-400' />}
                                                    placeholderSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                                    fullSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}

                                                />
                                                <span>({(item?.reviews) ? item?.reviews?.length : '0'}) Reviews</span>
                                            </div>
                                            <h4 className="sm:text-2xl text-xl font-bold text-[#151515] mt-2">TK. {item?.price}</h4>
                                            <div className="flex sm:justify-end justify-start mt-8 mb-3">
                                                <Suspense fallback={'loading...'}>
                                                    <Button btnValue={'Buy Now'} link={`book/${item?._id}`} color={'text-primaryColor-100'} />
                                                </Suspense>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Books;