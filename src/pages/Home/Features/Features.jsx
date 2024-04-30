
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import React, { Suspense, useEffect, useState } from "react";
import { apiURL } from "../../../ApiService/api";
import { Skeleton } from "keep-react";

import { Link } from "react-router-dom";
const SectionTitle = React.lazy(() => import("../../../Components/SectionTitle/SectionTitle"));
import news1 from '../../../assets/Featrues/news1.png'
import news2 from '../../../assets/Featrues/news2.png'
import news3 from '../../../assets/Featrues/news3.png'
import news4 from '../../../assets/Featrues/news4.png'
import news5 from '../../../assets/Featrues/news5.png'
import news6 from '../../../assets/Featrues/news6.png'
import news7 from '../../../assets/Featrues/news7.png'
import news8 from '../../../assets/Featrues/news8.png'
import news9 from '../../../assets/Featrues/news9.png'
import news10 from '../../../assets/Featrues/news10.png'

const news = [
    {
        id: 1,
        image: news1,
        url: 'https://www.prothomalo.com/lifestyle/%E0%A6%A1%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A1-%E0%A6%AA%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%A4%E0%A6%B0%E0%A7%81%E0%A6%A3-%E0%A6%B6%E0%A6%BE%E0%A6%B9-%E0%A6%B0%E0%A6%BE%E0%A6%AB%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%A4'
    },
    {
        id: 2,
        image: news2,
        url: 'https://samakal.com/todays-print-edition/tp-sahos/article/200745389/'
    },
    {
        id: 3,
        image: news3,
        url: 'https://www.deshrupantor.com/252788/'
    },
    {
        id: 4,
        image: news4,
        url: ''
    },
    {
        id: 10,
        image: news10,
        url: 'https://whatson.guide/meet-the-diana-award-2020-recipients-from-bangladesh/'
    },
    {
        id: 5,
        image: news5,
        url: 'https://www.thedailystar.net/star-youth/news/six-changemakers-bangladesh-honoured-diana-award-2020-1924217'
    },
    {
        id: 6,
        image: news6,
        url: 'https://thefinancialexpress.com.bd/education/they-are-the-change-makers-1594831110'
    },
    {
        id: 7,
        image: news7,
        url: 'https://www.voabangla.com/a/bd-award/5518210.html?fbclid=IwAR1W5nh0nZkNiGfDXHSualxjJuBH7_tXSTjZ01fjvPYKkZC7S_aP3HdCEqc'
    },
    {
        id: 8,
        image: news8,
        url: 'https://www.tbsnews.net/feature/pursuit/how-six-bangladeshi-youngsters-are-transforming-society-103912'
    },
    {
        id: 9,
        image: news9,
        url: 'https://whatson.guide/meet-the-diana-award-2020-recipients-from-bangladesh/'
    },

];

const Features = () => {

    const [features, setBooks] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${apiURL}/feature`)
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setBooks(data)
                setLoading(false)
            })
    }, [])


    return (
        <div id="feature" className="bg-primaryColor-100 py-32">
            <div className="flex flex-col justify-center text-center items-center gap-5 xl:mx-0 mx-5">
                <Suspense fallback={'loading...'}>
                    <SectionTitle titleP={''} title={'Features'} des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'} />
                </Suspense>
            </div>
            <div className="container mx-auto py-8">
                <div className="xl:mx-0 mx-5">
                    {loading ?
                        <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-5 xl:grid-cols-3">
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
                        <Swiper
                            slidesPerView={1} // For mobile view
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteration: false }}
                            centeredSlides={true}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                // For tablets
                                768: {
                                    slidesPerView: 2,
                                },
                                // For laptops
                                1024: {
                                    slidesPerView: 3,
                                },
                                // For desktops and larger screens
                                1280: {
                                    slidesPerView: 3,
                                },
                            }}
                        >

                            {features?.map((item, index) => (
                                <SwiperSlide key={index}>

                                    <Link to={item?.url} target="_blank">
                                        <div className="relative bg-primaryColor-500 hover:bg-primaryColor-400 duration-300 translate-y-28 hover:translate-y-5 rounded-md">
                                            <div className="rounded-t-md">
                                                <img src={item?.image} className="w-full" alt="" />
                                            </div>
                                            <div className="p-5 absolute top-0 bg-gradient-to-t from-secondaryColor-100 w-full h-full ">
                                                <div className="flex flex-col justify-end -translate-y-[150px] h-[500px] sticky bottom-0">
                                                    <h3 className="text-primaryColor-100 text-xl font-semibold mb-2">{item?.title}</h3>
                                                    <h6 className="text-primaryColor-300 text-sm font-semibold">{item?.up_date}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    }
                </div>
            </div>
            <div className="py-20 mt-28">
                <div className="xl:mx-0 mx-5">
                    <div className="container mx-auto grid xl:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:justify-between justify-center items-center gap-20">
                        {news?.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <Link to={item?.url} target="_blank">
                                    <img src={item?.image} alt="" />
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
