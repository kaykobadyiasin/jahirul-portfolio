import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import news1 from '../../../assets/Featrues/news1.png'
import news2 from '../../../assets/Featrues/news2.png'
import news3 from '../../../assets/Featrues/news3.png'
import news4 from '../../../assets/Featrues/news4.png'
import news5 from '../../../assets/Featrues/news5.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { features } from "../../../../public/data";

const news = [
    {
        id: 1,
        image: news1,
        url: 'https://www.prothomalo.com/lifestyle/'
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
        id: 5,
        image: news5,
        url: 'https://www.thedailystar.net/star-youth/news/six-changemakers-bangladesh-honoured-diana-award-2020-1924217'
    }
];

const feature = features;

const Features = () => {
    return (
        <div id="feature" className="bg-primaryColor-100 py-32">
            <div className="flex flex-col justify-center text-center items-center gap-5">
                <SectionTitle titleP={'My'} title={'Features'} des={'Throughout my entire life I have been recognized by different organization for my relentless contribution to different sectors of our community.'} />
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
                        {feature.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link to={item?.url} target="_blank">
                                    <div className="relative bg-primaryColor-500 hover:bg-primaryColor-400 duration-300 translate-y-28 hover:translate-y-5 rounded-md">
                                        <div className="rounded-t-md">
                                            <img src={item.image} className="w-full" alt="" />
                                        </div>
                                        <div className="p-5 absolute top-0 bg-gradient-to-t from-secondaryColor-100 w-full h-full ">
                                            <div className="flex flex-col justify-end -translate-y-[150px] h-[500px] sticky bottom-0">
                                                <h3 className="text-primaryColor-100 text-xl font-semibold mb-2">{item.title}</h3>
                                                <h6 className="text-primaryColor-300 text-sm font-semibold">{item.date}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className=" bg-primaryColor-400 py-20 mt-28">
                <div className="xl:mx-0 mx-5">
                    <div className="container mx-auto flex flex-wrap justify-between items-center gap-10">
                        {news?.map((item, index) => (
                            <div key={index}>
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
