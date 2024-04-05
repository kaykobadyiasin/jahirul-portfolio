import { Icon } from "@iconify/react";
import { Button, Card } from "keep-react";
import { useEffect, useState } from "react";
import { apiURL } from "../../../ApiService/api";

const ManageMessage = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);


    // get contacts 
    useEffect(() => {
        fetch(`${apiURL}/contact`)
            .then(res => res.json())
            .then(data => {
                setContacts(data)
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <h3 className='text-lg font-semibold py-2 px-5 bg-primaryColor-300 rounded-md'>Manage Message</h3>
            <div className="mt-5 grid grid-cols-4 gap-5">
                {contacts?.map(item => (
                    <Card key={item?._id}>
                        <Card.Content className="space-y-3">
                            <Card.Title className="text-primaryColor-200">{item?.subject}</Card.Title>
                            <hr />
                            <div className="mt-10 text-secondaryColor-200">
                                <p className="text-sm mb-2"><span className="font-semibold">Name:</span> {item?.name}</p>
                                <p className="text-sm"><span className="font-semibold">Email:</span> {item?.email}</p>
                            </div>
                            <Card.Description className="whitespace-pre-line">
                                {item?.message}
                            </Card.Description>
                            <hr />
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-body-5 font-medium text-metal-500">{item?.up_date}, {item?.up_time}</p>
                                </div>
                                <div className="flex gap-3">
                                    {/* <Button onClick={() => handleUpdate(item?._id)} size="sm" shape="icon" className="border bg-primaryColor-200 hover:bg-transparent hover:text-primaryColor-200">
                                    <Icon icon="tabler:edit" className="text-xl" />
                                </Button> */}
                                    <Button onClick={() => handleDelete(item?._id)} size="sm" shape="icon" className="bg-red-600 text-white hover:bg-transparent hover:text-red-600 border">
                                        <Icon icon="fluent:delete-12-regular" className="text-xl" />
                                    </Button>
                                </div>

                            </div>
                        </Card.Content>
                    </Card>
                ))
                }
            </div>
        </div>
    );
};

export default ManageMessage;