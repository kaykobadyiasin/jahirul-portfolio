import { Icon } from "@iconify/react";
import {
    List
} from 'phosphor-react'
import { Button, Divider, Input, Sidebar, Typography } from 'keep-react'
import { Link, NavLink, Outlet } from 'react-router-dom';

import admin from '../../assets/Hero/Jhir.jpeg'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen">
            <div className='flex'>
                <div>
                    <Sidebar className='h-full min-h-screen rounded-none'>
                        <Sidebar.Header className="space-y-2.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="heading-5" className="font-bold text-primaryColor-200">
                                    <Link className='border border-transparent' to={'/'} target='_blank'>Jahir</Link>
                                </Typography>
                                {/* <Button variant="outline" shape="icon" color="primary" className="border-none">
                                    <List size={24} />
                                </Button> */}
                            </div>
                            <div>
                                <fieldset className="relative max-w-md">
                                    <Input placeholder="" className="ps-11 h-0 border-none cursor-context-menu" />
                                </fieldset>
                            </div>
                        </Sidebar.Header>
                        <Sidebar.Body className="flex flex-col gap-2 admin_Menu">
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'dashboard'} active >
                                <Sidebar.Item className="">
                                    <Icon icon='radix-icons:dashboard' className="text-2xl" />
                                    Dashboard
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'manage-massage'}>
                                <Sidebar.Item className="">
                                    <Icon icon='mdi:message-outline' className="text-2xl" />
                                    Message
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'manage-order'}>
                                <Sidebar.Item className="">
                                    <Icon icon='iconamoon:shopping-card' className="text-2xl" />
                                    Orders
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'manage-book'}>
                                <Sidebar.Item className="">
                                    <Icon icon='game-icons:bookshelf' className="text-2xl" />
                                    Books
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'manage-feature'}>
                                <Sidebar.Item className="">
                                    <Icon icon='cil:featured-playlist' className="text-2xl" />
                                    features
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink className='hover:bg-primaryColor-300 border border-transparent' to={'manage-blog'}>
                                <Sidebar.Item className="">
                                    <Icon icon='carbon:blog' className="text-2xl" />
                                    Blogs
                                </Sidebar.Item>
                            </NavLink>
                            <Sidebar.Item>
                                <Icon icon='ic:round-logout' className="text-2xl" />
                                Log Out
                            </Sidebar.Item>
                        </Sidebar.Body>
                        <Divider className="my-3" />
                        <Sidebar.Footer className="flex items-center gap-3 mt-5">
                            <div className='w-10 h-10' >
                                <img src={admin} className='w-full h-full object-cover object-top rounded-md scale-125' />
                            </div>
                            <div>
                                <Typography variant="p" className="mb-0 text-body-3 font-medium text-metal-600">
                                    Jahirul Islam
                                </Typography>
                                <Typography variant="p" className="text-body-4 font-normal text-metal-400">
                                    Admin
                                </Typography>
                            </div>
                        </Sidebar.Footer>
                    </Sidebar>
                </div>
                <div className='w-full p-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;