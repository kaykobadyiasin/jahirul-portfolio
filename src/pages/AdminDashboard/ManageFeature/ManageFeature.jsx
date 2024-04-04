import { useForm } from "react-hook-form";
import { apiURL } from "../../../ApiService/api";
import toast, { Toaster } from 'react-hot-toast';
import { Button, Skeleton, Table } from 'keep-react'
import { ArrowsDownUp, CalendarBlank } from 'phosphor-react'
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ManageFeature = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [existingId, setExistingId] = useState(null);
    const [existingData, setExistingData] = useState([]);

    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);

    // get features 
    useEffect(() => {
        fetch(`${apiURL}/feature`)
            .then(res => res.json())
            .then(data => {
                setFeatures(data)
                setLoading(false)
            })
    }, [])


    const handleUpdate = (existId) => {
        setExistingId(existId)
        console.log('exist id', existingId)

        const silgeExist = features.find(item => item._id == existId)
        setExistingData(silgeExist)
    }


    const onSubmit = (data) => {

        // add 
        if (existingId) {
            fetch(`${apiURL}/feature/${existingId}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result?.modifiedCount > 0) {
                        setExistingId(null)
                        reset()
                        toast.success('Successfully Updated Blog');

                        // acknowledged:true
                        // matchedCount:1
                        // modifiedCount:1
                        // upsertedCount:0
                        // upsertedId:null

                    }
                    else {
                        toast.error("!Oops something wrong. Blog is't Update");
                    }
                })
        }
        else {
            fetch(`${apiURL}/feature`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {

                    if (result?.insertedId) {
                        toast.success('Successfully added Blog');
                        reset()
                    }
                    else {
                        toast.error("!Oops something wrong. Blog is't Add");
                    }
                })
        }
    };


    const handleDelete = (id) => {
        // Display confirmation dialog
        if (window.confirm('Are you sure you want to delete this Blog?')) {
            fetch(`${apiURL}/feature/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        toast.success('Successfully deleted this Blog');
                    }
                    else {
                        toast.error("Oops something wrong. Blog isn't deleted");
                    }
                })
                .catch(error => {
                    console.error('Error deleting blog:', error);
                    toast.error('Error deleting blog. Please try again later.');
                });
        }
    };


    return (
        <div>
            <div className=''>
                <h3 className='text-lg font-semibold py-2 px-5 bg-primaryColor-300 rounded-md'>{!existingId ? 'Add Feature' : 'Update Feature'}</h3>
                <p className='my-5 text-gray-600'>*** Please ensure the new book image URL is carefully selected to optimize website performance. ***</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5 flex-col">
                        <div className="flex lg:flex-row flex-col gap-5 w-full">
                            <input
                                {...register('title', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.title}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="text"
                                placeholder="Feature Title"
                            />
                            <input
                                {...register('url', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.url}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="text"
                                placeholder="Feature URL"
                            />
                            <input
                                {...register('image', { required: !existingId ? true : false })}
                                defaultValue={existingId && existingData?.image}
                                className="shadow-sm bg-primaryColor-100 border border-gray-300 text-secondaryColor-200 placeholder-secondaryColor-300 text-sm rounded-md focus:ring-primaryColor-200 focus:border-primaryColor-200 block w-full p-4 dark:bg-primaryColor-100 dark:border-secondaryColor-400 dark:placeholder-secondaryColor-300 dark:text-secondaryColor-200 dark:focus:ring-primaryColor-200 dark:focus:border-primaryColor-200 dark:shadow-sm-light"
                                type="url"
                                placeholder="Image URL"
                            />
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
                            {!existingId ? 'Add Feature' : 'Update Feature'}
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
                                <p className="text-body-1 font-semibold text-metal-600">Manage features</p>
                            </div>
                        </div>
                    </Table.Caption>
                    <Table.Head>
                        <Table.HeadCell className="min-w-[290px]">
                            <p className="text-body-5 font-medium text-metal-400">Image</p>
                        </Table.HeadCell>
                        <Table.HeadCell className="min-w-[290px]">
                            <p className="text-body-5 font-medium text-metal-400">Feature URL</p>
                        </Table.HeadCell>
                        <Table.HeadCell
                            className="min-w-[165px]"
                            icon={<CalendarBlank size={14} color="#8897AE" />}
                            iconPosition="left">
                            Date
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
                        ) : (features?.map(item => (

                            <Table.Row key={item?._id} className="bg-white">
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-5">
                                                <img src={item?.image} alt="" className="w-10" />
                                                <div>
                                                    <h3 className="-mb-0.5 text-body-4 font-semibold text-metal-600">{item?.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="text-primaryColor-200">
                                        <a href={item?.url} target="_blank">Feature Link</a>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{item?.up_time}</p>
                                    <p className="text-body-5 font-normal text-metal-500">{item?.up_date}</p>
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
        </div >
    );
};

export default ManageFeature;