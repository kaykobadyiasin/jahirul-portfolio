import Button from "../../../Components/Button/Button";
import aviation from '../../../assets/books/AviationCareer.png'
import waytosuccess from '../../../assets/books/AviationCareer.png'

const Books = () => {
    return (
        <div id="books" className="bg-black text-white py-20">
            <div className="container mx-auto">
                <div className=" flex items-center sm:flex-row flex-col sm:divide-x-4 sm:divide-y-0 divide-y-4 divide-primaryColor-200 sm:gap-14 gap-5 sm:px-0 px-5">
                    <h2 className="text-5xl font-semibold">My Books</h2>
                    <p className="sm:w-[60%] sm:text-left text-center sm:pl-14 lg:pt-0 pt-5 text-primaryColor-300">
                        This is Muhammad Jahirul Islam the Founder and Chairman of Ignite Global Foundation and Director of Matribhumi Group. I have pursued my undergrad degree in Aeronautical Engineering from the United College of Aviation.
                    </p>
                </div>

                <div className=" grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 sm:px-0 px-5 mt-20">
                    
                    <div className="w-full cursor-pointer flex items-center gap-5 bg-primaryColor-500 border border-transparent hover:border-primaryColor-200 duration-200 rounded-md p-5 relative ">
                        <div>
                            <img src={aviation} alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">এভিয়েশন ক্যারিয়ার</h3>
                            <h6 className="my-3 text-primaryColor-200">মোহাম্মদ জহিরুল ইসলাম</h6>
                            <h4 className="text-2xl font-bold">TK. 275</h4>
                        </div>
                        <div className="absolute bottom-8 right-5">
                            <Button btnValue={'Order Now'} />

                        </div>
                    </div>
                    <div className="w-full cursor-pointer flex items-center gap-5 bg-primaryColor-500 border border-transparent hover:border-primaryColor-200 duration-200 rounded-md p-5 relative ">
                        <div>
                            <img src={aviation} alt="" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">এভিয়েশন ক্যারিয়ার</h3>
                            <h6 className="my-3 text-primaryColor-200">মোহাম্মদ জহিরুল ইসলাম</h6>
                            <h4 className="text-2xl font-bold">TK. 275</h4>
                        </div>
                        <div className="absolute bottom-8 right-5">
                            <Button btnValue={'Order Now'} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Books;