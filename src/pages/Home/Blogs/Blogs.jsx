import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import blog1 from '../../../assets/blogs/blog1.png'
import blog2 from '../../../assets/blogs/blog2.png'
import blog3 from '../../../assets/blogs/blog3.png'

const blogs = [
    {
        id: 1,
        image: blog1,
        date: 'Aug 23, 2024',
        title: 'Writing Skills',
        details: 'This award I received from the Canadian University of Bangladesh and they give this award for my outstanding contribution in inclusive education for the child.',
    },
    {
        id: 2,
        image: blog2,
        date: 'Aug 23, 2024',
        title: 'Communication Skills',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    },
    {
        id: 3,
        image: blog3,
        date: 'Aug 23, 2024',
        title: 'Skills Development',
        details: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised',
    }
]

const Blogs = () => {
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

                    {blogs?.map((item, index) => (
                        <Link key={index} to={''}>
                            <div className=" bg-primaryColor-500 hover:bg-primaryColor-400 duration-300 cardHover rounded-md">
                                <div className="overflow-hidden rounded-t-md">
                                    <img src={item?.image} className="w-full" alt="" />
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
                    ))

                    }
                </div>
            </div>
        </div >
    );
};

export default Blogs;