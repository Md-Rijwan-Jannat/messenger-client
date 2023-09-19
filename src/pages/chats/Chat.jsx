import { BiSearch, BiSolidShareAlt, BiSolidCopy } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import {useState} from 'react';


export const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    // personal info menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <h4 className="text-gray-600 text-xl font-semibold">Chats</h4>
            <div className="mt-5">
                <form className="flex items-center relative">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-white text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search branch name..."
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2.5 text-sm font-medium text-gray-600"
                    >
                        <BiSearch />
                    </button>
                </form>
            </div>
            <div className="mt-5">

            </div>
            <h4 className="text-gray-500 text-lg mt-7 font-semibold">Resent chats</h4>
            <div>
                <div className="py-2 space-y-4">
                    <Link
                        to="/#"
                        className="flex items-center py-2 gap-3 transition-colors duration-300 transform border-b border-gray-100 hover:bg-blue-500 bg-white hover:text-gray-50 text-gray-500 px-3 rounded-md dark:hover:bg-gray-700 dark:border-gray-700"
                    >
                        <div className='relative'>
                            <img
                                className="flex-shrink-0 object-cover w-8 h-8 mx-1 mt-[17px] rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                alt="avatar"
                            />
                            <div className='w-5 h-5'>
                                <span className="absolute right-0 top-[43px] rounded-full bg-green-500 w-2 h-2"> </span>
                            </div>
                        </div>
                        <div className='flex flex-col w-full text-start'>
                            <div className='flex items-center justify-between text-sm w-full'>
                                <div className='font-semibold'>Md Maira Akter</div>
                                <div className='font-normal'>05:54 PM</div>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <p className='text-xs '>{'Hello Rijwan How are you?'}</p>
                                <MdOutlineKeyboardArrowDown onClick={toggleMenu} />
                            </div>
                        </div>
                    </Link>
                    {isOpen && (
                        <div
                            onClick={closeMenu}
                            className="top-[30px]  w-48 py-2 mt-2 origin-top-right bg-white rounded shadow-md dark:bg-gray-800"
                        >
                            <Link
                                to="#"
                                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <BiSolidShareAlt className='text-lg' /> <span className='text-sm'> Share</span>
                            </Link>
                            <Link
                                to="#"
                                className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <BiSolidCopy className='text-lg' /> <span className='text-sm'> Copy Link</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
