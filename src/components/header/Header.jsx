import { useState } from 'react';
import { BiMenuAltLeft, BiSolidUserPlus, BiX } from "react-icons/bi";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineNotifications } from "react-icons/md";
import { CiEdit, CiLock, CiUser } from "react-icons/ci";
import logo from '../../assets/Images/messemger-logo/messenger-logo.png'
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  // modal
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(!isModal);
  };

  const closeModal = () => {
    setIsModal(false);
  };
  const navigate = useNavigate();

  // Log out
  const { user, logOut } = useAuth();
  const logoutHandler = () => {
    logOut()
      .then(result => {
        const signInUser = result.user;
        if (signInUser) {
          toast.dismiss()
          toast.success('successfully log out your account!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          navigate('/login')
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const toggleDrop = () => {
    setNotification(!notification);
  };
  const closeDrop = () => {
    setNotification(false);
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <BiMenuAltLeft className='text-gray-500 block md:hidden' />
          <div className="flex items-center justify-between">
            <div className='hidden md:block'>
              <div className='flex flex-row  items-center gap-3'>
                <img
                  className="w-auto h-6 sm:h-7 "
                  src={logo}
                  alt=""
                />
                <div className='text[18px] text-gray-500 font-medium'>Messenger</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-10 mt-4 lg:mt-0">

            {/* add friend button */}
            <button
              onClick={openModal}
              size='sm' className='text-[10px] md:text-sm bg-blue-500 rounded-md hover:bg-blue-400 font-medium text-white px-3 py-1 md:px-5 flex items-center gap-1'><span className='text-lg mb-1 '>+</span> Add Friends</button>

            {isModal && (
              <div
                className="fixed inset-0 z-10 overflow-y-auto w-full bg-black bg-opacity-50 transition-all duration-2000 ease-in-out"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className='h-screen flex justify-center items-center'>
                  <div className='md:w-1/3 w-full mx-3 bg-[#F1F6FB] p-5 rounded'>
                    <div className=' flex items-center justify-between'>
                      <h3 className='text-sm text-gray-500 font-medium text-start my-5 '>+ Add Friend</h3>
                      <span onClick={closeModal}> <BiX /></span>
                    </div>
                    <div className="">
                      <Link
                        to="/profile"
                        className="flex items-center py-3  gap-3 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 bg-white rounded p-2"
                      >
                        <div className='relative mt-5'>
                          <img
                            className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            alt="avatar"
                          />
                          <div className='w-5 h-5'>
                            <span className="absolute right-[1px] top-[25px] rounded-full bg-green-500 w-2 h-2"> </span>
                          </div>
                        </div>
                        <div className='flex items-center justify-between text-sm text-gray-600 w-full'>
                          <div className='flex flex-col w-full text-start'>
                            <div className='font-semibold'>Md Maira Akter</div>
                            <p className='text-xs text-gray-400'>{'Technical requiter'}</p>
                          </div>
                          <button className='text-[10px] bg-blue-500 rounded hover:bg-blue-400 font-medium text-white px-3 py-1 block'>+Add</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification */}
            <button
              onClick={toggleDrop}
              className="mx-4 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
              aria-label="show notifications"
            >
              <div className='relative'>
                <MdOutlineNotifications className='text-2xl md:text-3xl' />
                <div className='w-5 h-5'>
                  <span className="absolute right-1 top-[2px] rounded-full bg-blue-500 w-2 h-2"> </span>
                </div>
              </div>
              {
                notification && (
                  <div
                    onClick={closeDrop}
                    className="absolute -right-[110px] md:right-0 top-[70px] z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded shadow-md sm:w-80 dark:bg-gray-800 px-4"
                  >
                    <h3 className='text-sm text-gray-500 font-medium text-start my-5 '>Notifications</h3>
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center py-3  gap-3 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                      >
                        <div className='relative'>
                          <img
                            className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            alt="avatar"
                          />
                          <div className='w-5 h-5'>
                            <span className="absolute right-1 top-6 rounded-full bg-blue-500 w-2 h-2"> </span>
                          </div>
                        </div>
                        <div className='flex flex-col w-full text-start'>
                          <div className='flex items-center justify-between text-sm text-gray-600 w-full'>
                            <div className='font-semibold'>Md Maira Akter</div>
                            <div className='font-normal'>05:54 PM</div>
                          </div>
                          <p className='text-xs text-gray-400'>{'Hello Rijwan How are you?'}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
            </button>

            {/* Profile */}
            <button
              onClick={toggleMenu}
              type="button"
              className="flex items-center focus:outline-none"
              aria-label="toggle profile dropdown"
            >
              <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                {
                  user ? <img
                    src={user?.photoUrl}
                    className="object-cover w-full h-full"
                    alt="avatar"
                  /> : <BiSolidUserPlus className='w-8 h-8 p-1 text-blue-500' />
                }
              </div>

              <div className='text-gray-500 font-medium flex flex-col '>
                <h3 className="mx-2 text-sm dark:text-gray-200 mb-2">
                  Md Rijwan Jannat
                </h3>
                <p className='text-[10px]'>MERN Stack Developer</p>
              </div>
              {isOpen && (
                <div
                  onClick={closeMenu}
                  className="absolute right-0 top-[124px] md:top-[106px] z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded shadow-md dark:bg-gray-800"
                >
                  <Link
                    to="#"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <CiUser className='text-lg' /> <span className='text-sm'>Profile</span>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <CiEdit className='text-lg' /> <span className='text-sm'>Add Account</span>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <CiLock className='text-lg' /> <span className='text-sm'>Reset password</span>
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <TfiHelpAlt className='text-lg' /> <span className='text-sm'>Help</span>
                  </Link>
                  <hr className='border border-gray-300 mx-3 mt-2 mb-5' />
                  {
                    user?.email ? <Link
                      to='/login'
                      onClick={logoutHandler}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <TfiHelpAlt className='text-lg' /> <span className='text-sm'>sign out</span>
                    </Link> : <Link
                      to="/signUp"
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <TfiHelpAlt className='text-lg' /> <span className='text-sm'>signUp</span>
                    </Link>
                  }
                </div>
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
