import { Link, useParams } from 'react-router-dom';
// import Button from '../../../../Components/Button/Button';
import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Icon } from '@iconify/react';
import { apiURL } from '../../../../ApiService/api';
import Breadcrumb from '../../../../Components/Breadcrumb/Breadcrumb';
import { Skeleton } from 'keep-react';

const BookDetails = () => {
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
    const { id } = useParams();
    const singlebook = books?.find(item => item?._id == id);
    const recentBooks = books?.filter(recentBook => String(recentBook._id) !== String(id));

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Books', url: '/#books' },
        { text: 'Books Details', url: `/${singlebook?._id}` },
    ];


    const initialReviews = [
        {
            clientName: 'John Doe',
            clientEmail: 'jhon@gmail.com',
            rating: 4.5,
            comment: 'Great Book! Highly recommended.'
        },
        {
            clientName: 'Jane Smith',
            clientEmail: 'jane@gmail.com',
            rating: 5,
            comment: 'I love their book. Excellent quality.'
        },
    ];

    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ clientName: '', clientEmail: '', rating: 0, comment: '' });

    const addReview = () => {
        if (newReview.clientName && newReview.comment) {
            setReviews([...reviews, { ...newReview }]);
            setNewReview({ clientName: '', clientEmail: '', rating: 0, comment: '' });
        }
    };

    return (
        <div className="min-h-screen py-20 animate__animated animate__fadeIn">
            <div className="container mx-auto p-3">
                <div className='mb-10'>
                    <Breadcrumb items={breadcrumbItems} ></Breadcrumb>
                </div>
                {loading ?
                    <Skeleton className="max-w-xl space-y-2.5 mt-5">
                        <Skeleton.Line className="h-4 w-full rounded-md" />
                        <Skeleton.Line className="h-4 w-full rounded-md" />
                        <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                        <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                        <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                    </Skeleton>
                    :
                    <div className='flex lg:flex-row flex-col justify-between items-start gap-5 '>
                        <div className='flex sm:flex-row flex-col items-center gap-5 w-full'>
                            <div className='lg:w-3/12 sm:w-6/12 w-full'>
                                <img src={singlebook?.image} className='w-full border p-3 rounded-md' alt="" />
                            </div>
                            <div className='w-full lg:p-5 my-5'>
                                <h2 className='lg:text-3xl text-2xl font-semibold'>{singlebook?.name}</h2>
                                <h4 className='my-3'>By (Author): <Link to={'/'} className='text-primaryColor-200'>{singlebook?.author}</Link></h4>
                                <div className='flex items-start gap-2'>
                                    <Rating
                                        readonly
                                        className='text-xl'
                                        placeholderRating={5}
                                        emptySymbol={<Icon icon="mdi:star-outline" className='text-orange-400' />}
                                        placeholderSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                        fullSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                        onChange={(value) => setNewReview({ ...newReview, rating: value })}
                                    />
                                    <span>({reviews?.length}) Reviews</span>
                                </div>
                                <h4 className='my-5 text-xl font-semibold'>TK. {singlebook?.price}</h4>

                                <div className='mt-8'>
                                    <Link to={`order`} className='rounded px-7 py-3 text-white font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5 border border-transparent hover:border-primaryColor-200 duration-200'>
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={`lg:w-2/12 w-full flex flex-col gap-5 bg-primaryColor-300 rounded-md p-5 lg:h-96 ${(recentBooks?.length == 1) ? "" : "lg:overflow-y-scroll"}`}>
                            <h3 className='text-center font-semibold text-primaryColor-200 rounded-md'>More Books</h3>
                            <div className='grid lg:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-5'>
                                {recentBooks
                                    ?.reverse()
                                    .slice(0, 3)
                                    .map((recentBook) => (
                                        <div key={recentBook._id} className="border p-3 rounded-md">
                                            <Link to={`/book/${recentBook?._id}`} className=''>
                                                <div
                                                    className=" h-full"
                                                >
                                                    {loading ?
                                                        <Skeleton className="max-w-xl space-y-2.5 mt-5">
                                                            <Skeleton.Line className="h-4 w-full rounded-md" />
                                                            <Skeleton.Line className="h-4 w-full rounded-md" />
                                                            <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                                                            <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                                                            <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                                                        </Skeleton>
                                                        :
                                                        <img
                                                            src={recentBook?.image}
                                                            alt="Matribhumi City"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    }
                                                </div>
                                                <div className="">
                                                    <h6 className="text-lg font-medium">{recentBook?.title}</h6>
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
                        </div>
                    </div>}
                <div className='flex sm:flex-row flex-col sm:gap-8 gap-5 mt-8'>
                    <div className='w-full rounded-md'>
                        <div>
                            <h3 className=' py-2.5 px-2.5 font-semibold border rounded-md bg-primaryColor-300'>Description:</h3>
                            <div className='my-5'>
                                <p className='p-3 rounded-md border leading-[32px]'>
                                    আমাদের তরুণ প্রজন্ম কিংবা বায়োজ্যেষ্ঠর মাঝে একটা বড় অংশ উড়োজাহাজ কিংবা এভিয়েশন ইন্ডাস্ট্রি নিয়ে তেমন সঠিক কোন ধরনা নেই কিন্তু আছে জানার অতি আগ্রহ, প্রবল ইচ্ছা এবং কৌতুহল। এভিয়েশন সম্পর্কে সঠিক গাইডলাইন আর শত অজানা তথ্য দিবে এভিয়েশন ক্যারিয়ার বইটি। যার ফলে এভিয়েশনের প্রতি তৈরি হবে আগ্রহ, উদ্দীপনা এবং জানার প্রবল ইচ্ছে।
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='w-full rounded-md'>
                        <h3 className=' py-2.5 px-2.5 font-semibold border rounded-md bg-primaryColor-300'>Reviews:</h3>
                        <div className='my-5 px-1'>
                            <div className='rounded-md'>
                                {reviews.map((review, index) => (
                                    <div key={index} className="rounded-lg">
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Icon icon="solar:user-circle-bold" className='text-2xl' />
                                            <h4 className="text-md font-semibold">{review.clientName}</h4>
                                        </div>
                                        <Rating
                                            readonly
                                            className='text-xl'
                                            placeholderRating={review.rating}
                                            emptySymbol={<Icon icon="mdi:star-outline" className='text-orange-400' />}
                                            placeholderSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                            fullSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                            onChange={(value) => setNewReview({ ...newReview, rating: value })}
                                        />
                                        <p className="">{review.comment}</p>
                                        {index !== reviews.length - 1 && <hr className='my-3' />}
                                    </div>
                                ))}

                            </div>
                            <div className="flex flex-col mt-5">
                                <h3 className=' py-2.5 px-2.5 font-semibold border rounded-md bg-primaryColor-300'>Rate this book</h3>
                                <Rating
                                    className='my-3 text-2xl'
                                    fractions={2}
                                    placeholderRating={newReview.rating}
                                    emptySymbol={<Icon icon="mdi:star-outline" className='text-orange-400' />}
                                    placeholderSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                    fullSymbol={<Icon icon="material-symbols:star" className='text-orange-400' />}
                                    onChange={(value) => setNewReview({ ...newReview, rating: value })}
                                />
                            </div>
                            <form>
                                <div className="flex gap-5 flex-col">
                                    <div className="flex lg:flex-row flex-col gap-5 w-full" >
                                        <input
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            type="text"
                                            required
                                            placeholder="Your Name"
                                            value={newReview.clientName}
                                            onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                                        />
                                        <input
                                            className="w-full border border-gray-300 rounded-md p-2"
                                            type="email"
                                            required
                                            placeholder="Your Email"
                                            value={newReview.clientEmail}
                                            onChange={(e) => setNewReview({ ...newReview, clientEmail: e.target.value })}
                                        />
                                    </div>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                        rows="4"
                                        required
                                        placeholder="Your Review"
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-end mt-5">
                                    <button className="bg-primaryColor-200 hover:bg-transparent border border-transparent hover:border-primaryColor-200 hover:text-primaryColor-200 text-white py-2 px-4 rounded-md hover:bg-primaryColor-300 duration-200" type='submit' onClick={addReview}>
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
