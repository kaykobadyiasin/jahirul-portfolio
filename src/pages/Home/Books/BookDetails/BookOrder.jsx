
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiURL } from '../../../../ApiService/api';
import Breadcrumb from '../../../../Components/Breadcrumb/Breadcrumb';

function BookOrder() {
    const [books, setBooks] = useState();

    useEffect(() => {
        fetch(`${apiURL}/book`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    const { id } = useParams();
    const orderbook = books?.find(item => item?._id == id);

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Book Details', url: `/book/${orderbook?._id}` },
        { text: 'Order Details', url: `book/${orderbook?._id}/order` },
    ];

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        reset()
        data.bookId = id;
        fetch(`${apiURL}/order`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                window.location.replace(result.url)
                console.log(result)
            })
    };

    return (
        <div className='min-h-screen'>
            <div className='container mx-auto py-20'>
                <div className='mb-10'>
                    <Breadcrumb items={breadcrumbItems} ></Breadcrumb>
                </div>
                <div className='flex sm:flex-row flex-col gap-5 lg:mx-0 mx-5'>
                    <div className='w-full'>
                        <div className='bg-[#F4FBFF] rounded-md w-full flex justify-between mb-5'>
                            <h3 className='text-lg font-semibold py-2 px-5'>Total Price</h3>
                            <span className='text-lg font-semibold py-2 px-5'>TK. {orderbook?.price}</span>
                        </div>
                        <div className='flex items-center gap-5 border p-2'>
                            <div>
                                <img src={orderbook?.image} className='w-20' alt="" />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>{orderbook?.name}</h3>
                                <h4>TK. {orderbook?.price}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-lg font-semibold py-2 px-5 bg-[#F4FBFF] rounded-md'>Order Form </h3>
                        <p className='my-5 text-gray-600'>*** Please fill all the required fields and select your desired book! ***</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-5 flex-col">
                                <div className="flex lg:flex-row flex-col gap-5 w-full">
                                    <input
                                        {...register('name', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <input
                                        {...register('email', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="flex lg:flex-row flex-col gap-5 w-full">
                                    <input
                                        {...register('country', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="text"
                                        placeholder="Country"
                                    />
                                    <input
                                        {...register('phone', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="text"
                                        placeholder="Your Phone"
                                    />
                                </div>
                                <input
                                    {...register('address', { required: true })}
                                    className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                    type="text"
                                    placeholder="Your Address"
                                />
                                <div className="flex lg:flex-row flex-col gap-5 w-full">
                                    <input
                                        {...register('state', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="text"
                                        placeholder="State"
                                    />
                                    <input
                                        {...register('post', { required: true })}
                                        className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                        type="text"
                                        placeholder="Post Code"
                                    />
                                </div>

                            </div>
                            <div className="flex justify-end mt-5">
                                <button
                                    className="bg-primaryColor-200 hover:bg-transparent border border-transparent hover:border-primaryColor-200 hover:text-primaryColor-200 text-white py-2 px-4 rounded-md hover:bg-[#F4FBFF] duration-200"
                                    type="submit"
                                >
                                    Payment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BookOrder;
