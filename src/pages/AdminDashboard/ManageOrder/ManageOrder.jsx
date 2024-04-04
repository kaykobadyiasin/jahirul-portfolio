
import { Badge, Button, Skeleton, Table } from "keep-react";
import {
    CalendarBlank,
    CurrencyDollar,
    DotsNine,
    Spinner,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { apiURL } from "../../../ApiService/api";
import { Icon } from "@iconify/react";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // get books 
    useEffect(() => {
        fetch(`${apiURL}/order`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [])

    const handleDelete = () => {
        console.log('Delete Hit')
    }

    return (
        <div>
            <Table>
                <Table.Caption>
                    <div className="my-5 flex items-center justify-between px-6">
                        <div className="flex items-center gap-5">
                            <p className="text-body-1 font-semibold text-metal-600">Orders</p>
                        </div>
                    </div>
                </Table.Caption>
                <Table.Head>
                    <Table.HeadCell className="min-w-[302px]">
                        <p className="text-body-5 font-medium text-metal-400">Order ID</p>
                    </Table.HeadCell>
                    <Table.HeadCell
                        className="min-w-[165px]"
                        icon={<CalendarBlank size={14} color="#8897AE" />}
                        iconPosition="left">
                        Date
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
                        Pay Status
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[114px]" icon={<DotsNine size={14} color="#8897AE" />} iconPosition="left">
                        Quant.
                    </Table.HeadCell>
                    <Table.HeadCell
                        className="min-w-[138px]"
                        icon={<CurrencyDollar size={14} color="#8897AE" />}
                        iconPosition="left">
                        Total Price
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[100px]">
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
                    ) : (orders?.map(item => {
                        const { _id, book, paidStatus, data } = item;
                        return (
                            <Table.Row key={_id} className="bg-white">
                                <Table.Cell>
                                    <p className="text-body-4 font-medium text-metal-500">TRN - {data?.tran_id}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{data?.order_date}</p>
                                    <p className="text-body-5 font-normal text-metal-500">{data?.order_time}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p>{data?.product_name}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="inline-block">
                                        <Badge color={paidStatus ? 'primary' : 'secondary'}>{(paidStatus) ? 'Success' : 'Pending'}</Badge>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">1</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">Tk. {data?.total_amount} {data?.currency}</p>
                                </Table.Cell>
                                <Table.Cell className="flex gap-3">
                                    <Button size="sm" shape="icon" className="border bg-primaryColor-200 hover:bg-transparent hover:text-primaryColor-200">
                                        <Icon icon="tabler:edit" className="text-xl" />
                                    </Button>
                                    <Button onClick={() => handleDelete(item?._id)} size="sm" shape="icon" className="bg-red-600 text-white hover:bg-transparent hover:text-red-600 border">
                                        <Icon icon="fluent:delete-12-regular" className="text-xl" />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>

                        );
                    })
                    )}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageOrder;