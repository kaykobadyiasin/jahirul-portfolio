import { useForm } from "react-hook-form";
import { apiURL } from "../../../ApiService/api";
import toast, { Toaster } from 'react-hot-toast';
import { Button, Skeleton, Table } from 'keep-react'
import { ArrowsDownUp } from 'phosphor-react'
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ManageBook = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [existingId, setExistingId] = useState(null);
    const [existingData, setExistingData] = useState([]);

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${apiURL}/book`);
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                const data = await response.json();
                setBooks(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);




    const handleUpdate = (existId) => {
        setExistingId(existId)
        console.log('exist id', existingId)

        const silgeExist = books.find(item => item._id == existId)
        setExistingData(silgeExist)
    }

    // get a book
    // useEffect(() => {
    //     fetch(`${apiURL}/book/${existingId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setExistingData(data)
    //             setLoading(false)
    //         })
    // }, [existingId])
    const onSubmit = async (data) => {
        try {
            if (existingId) {
                console.log('updating');
                const response = await fetch(`${apiURL}/book/${existingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);
                if (result?.modifiedCount > 0) {
                    toast.success('Successfully updated book');
                    setExistingId(null);
                    reset();
                } else {
                    toast.error("Oops, something went wrong. The book couldn't be updated.");
                }
            } else {
                console.log('adding');
                const response = await fetch(`${apiURL}/book`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);
                console.log(response);
                
                if (result?.insertedId) {
                    toast.success('Successfully added book');
                    reset();
                } else {
                    toast.error("Oops, something went wrong. The book couldn't be added.");
                }
            }
        } catch (error) {
            console.error('Error submitting book data:', error);
            toast.error('Error submitting book data. Please try again later.');
        }
    };




    const handleDelete = (id) => {
        // Display confirmation dialog
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');

        if (!confirmDelete) return;

        fetch(`${apiURL}/book/${id}`, {
            method: 'DELETE'
        })
            .then(res => {

                if (res.ok) {
                    return res.json();
                }
                throw new Error('Failed to delete book');
            })
            .then(data => {
                console.log(data);
                if (data?.message) {
                    toast.success(data.message);
                } else {
                    toast.error('Failed to delete book. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error deleting book:', error);
                toast.error('Failed to delete book. Please try again later.');
            });
    };



    return (
        <div>
            <div className=''>
                <h3 className='text-lg font-semibold py-2 px-5 bg-primaryColor-300 rounded-md'>{!existingId ? 'Add Book' : 'Update Book'}</h3>
                <p className='my-5 text-gray-600'>*** Please ensure the new book image URL is carefully selected to optimize website performance. ***</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5 flex-col">
                        <div className="flex lg:flex-row flex-col gap-5 w-full">
                            <input
                                {...register('name', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.name}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="text"
                                placeholder="Book Name"
                            />
                            <input
                                {...register('author', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.author}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="text"
                                placeholder="Author Name"
                            />
                            <input
                                {...register('price', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.price}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="number"
                                placeholder=" Price"
                            // ৳
                            />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-5 w-full">
                            <input
                                {...register('image', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.image}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="url"
                                placeholder="Image URL"
                            />
                            {/* <input
                                {...register('reviews')}
                                defaultValue={existingId && existingData?.review}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="text"
                                placeholder="Review (Example: '4.5', '3.5', '5')"
                            /> */}
                        </div>
                        <textarea type="text" id="details" {...register("details", { required: !existingId ? true : false })}
                            defaultValue={existingId && existingData?.details}
                            className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full min-h-40 p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light" placeholder="Description" required />
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                            className="bg-primaryColor-200 hover:bg-transparent border border-transparent hover:border-primaryColor-200 hover:text-primaryColor-200 text-white py-2 px-4 rounded-md hover:bg-primaryColor-300 duration-200"
                            type="submit"
                        >
                            {!existingId ? 'Add Book' : 'Update Book'}
                        </button>
                    </div>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
            <div>
                <Table showCheckbox={false}>
                    <Table.Caption>
                        <div className="my-5 flex items-center justify-between px-6">
                            <div className="flex items-center gap-5">
                                <p className="text-body-1 font-semibold text-metal-600">Manage Books</p>
                            </div>
                        </div>
                    </Table.Caption>
                    <Table.Head>
                        <Table.HeadCell className="min-w-[290px]">
                            <p className="text-body-5 font-medium text-metal-400">Image</p>
                        </Table.HeadCell>
                        <Table.HeadCell className="min-w-[150px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Author
                        </Table.HeadCell>
                        <Table.HeadCell className="min-w-[160px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Price
                        </Table.HeadCell>
                        <Table.HeadCell className="min-w-[100px]" />
                        <Table.HeadCell className="min-w-[183px]" icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Action
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-gray-25 divide-y">
                        {loading ? (
                            <Skeleton className="max-w-xl space-y-2.5 mt-5">
                                <Skeleton.Line className="h-4 w-full rounded-md" />
                                <Skeleton.Line className="h-4 w-full rounded-md" />
                                <Skeleton.Line className="h-4 w-3/5 rounded-md" />
                                <Skeleton.Line className="h-4 w-4/5 rounded-md" />
                                <Skeleton.Line className="h-10 w-2/5 rounded-md" />
                            </Skeleton>
                        ) : (books?.map(item => (

                            <Table.Row key={item?._id} className="bg-white">
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-5">
                                                <img src={item?.image} alt="" className="w-10" />
                                                <div>
                                                    <h3 className="-mb-0.5 text-body-4 font-semibold text-metal-600">{item?.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p>{item?.author}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">TK. {item?.price}</p>
                                </Table.Cell>
                                <Table.Cell>
                                </Table.Cell>
                                <Table.Cell className="flex gap-3">
                                    <Button onClick={() => handleUpdate(item?._id)} size="sm" shape="icon" className="border bg-primaryColor-200 hover:bg-transparent hover:text-primaryColor-200">
                                        <Icon icon="tabler:edit" className="text-xl" />
                                    </Button>
                                    <Button onClick={() => handleDelete(item?._id)} size="sm" shape="icon" className="bg-red-600 text-white hover:bg-transparent hover:text-red-600 border">
                                        <Icon icon="fluent:delete-12-regular" className="text-xl" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>

                        ))
                        )}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageBook;