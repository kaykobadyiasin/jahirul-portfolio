import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import news1 from '../../../assets/Featrues/news1.png'
import news2 from '../../../assets/Featrues/news2.png'
import news3 from '../../../assets/Featrues/news3.png'
import news4 from '../../../assets/Featrues/news4.png'
import news5 from '../../../assets/Featrues/news5.png'

import feature1 from '../../../assets/Featrues/feature/fature1.png'
import feature2 from '../../../assets/Featrues/feature/fature2.png'
// import feature3 from '../../../assets/Featrues/feature/fature3.png'
// import feature4 from '../../../assets/Featrues/feature/fature4.jpg'
import feature from '../../../assets/Featrues/feature/fature.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const features = [
    {
        id: 1,
        image: feature1,
        date: 'Aug 23, 2024',
        title: 'Writing Skills',
        details: 'This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.',
    },
    {
        id: 2,
        image: feature2,
        date: 'Aug 23, 2024',
        title: 'Communication Skills',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 3,
        image: feature,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 4,
        image: feature1,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 5,
        image: feature2,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 6,
        image: feature,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 7,
        image: feature1,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
];

const Features = () => {
    return (
        <div id="feature" className="bg-secondaryColor-100 py-20">
            <div className="flex flex-col justify-center text-center items-center gap-5">
                <SectionTitle title={'Features'} des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'} />
            </div>
            <div className="container mx-auto py-8">
                <div className="xl:mx-0 mx-5">
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
                        {features.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={''}>
                                    <div className="relative bg-primaryColor-500 hover:bg-primaryColor-400 duration-300 translate-y-28 hover:translate-y-5 rounded-md">
                                        <div className="rounded-t-md">
                                            <img src={item.image} className="w-full" alt="" />
                                        </div>
                                        <div className="p-5 absolute top-0 bg-gradient-to-t from-secondaryColor-100 w-full h-full flex flex-col justify-end">
                                            <h3 className="text-primaryColor-100 text-xl font-semibold mb-2">{item.title}</h3>
                                            <h6 className="text-primaryColor-300 text-sm font-semibold">{item.date}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="py-8 border-y border-secondaryColor-200 my-32">
                <div className="xl:mx-0 mx-5">
                    <div className="container mx-auto flex flex-wrap justify-between items-center gap-10">
                        <div>
                            <Link to={''}>
                                <img src={news1} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to={''}>
                                <img src={news2} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to={''}>
                                <img src={news3} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to={''}>
                                <img src={news4} alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to={''}>
                                <img src={news5} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
