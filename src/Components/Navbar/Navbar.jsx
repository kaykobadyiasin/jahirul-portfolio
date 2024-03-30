import { useState } from "react";
import Button from "../Button/Button";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center text-white bg-black dark:bg-dark`}>
            <div className="container mx-auto sm:px-0">
                <div className="relative flex items-center justify-between">
                    <div className="flex w-full items-center justify-between lg:px-0 px-4">
                        <div className=" max-w-full lg:px-0 px-4">
                            <a href="/" className="block w-full py-5 font-bold text-2xl">
                                Jahirul
                                <sup className="text-3xl font-bold text-primaryColor-200">.</sup>
                            </a>
                        </div>
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute z-40 right-4 top-full w-full max-w-[250px] rounded-b lg:text-white bg-black px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}>
                                <ul className="block lg:flex dark:text-dark-6 dark:hover:text-white lg:flex-row flex-col gap-10 ">
                                    <ListItem NavLink="/">Home</ListItem>
                                    <ListItem NavLink="#about">About</ListItem>
                                    <ListItem NavLink="#books">Books</ListItem>
                                    <ListItem NavLink="#achievement">Achievement</ListItem>
                                    <ListItem NavLink="#feature">Feature</ListItem>
                                    <ListItem NavLink="#contact">Contact</ListItem>
                                    <ListItem NavLink="#blogs">Blogs</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Button btnValue={'Buy Now'} link={'#books'} color={'hover:text-primaryColor-100'} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li className="hover:text-primaryColor-200 duration-200 py-3">
                <a
                    href={NavLink}
                >
                    {children}
                </a>
            </li>
        </>
    );
};