import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CiEdit,
  CiLock,
  CiMail,
  CiSettings,
  CiUser,
} from "react-icons/ci";
import { PiUsersThreeLight } from "react-icons/pi";
import { BiUserPlus } from "react-icons/bi";

export const LeftSidebar = () => {
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="md:fixed z-[999] left-0 py-10 mt-10 md:top-20 md:mt-5 md:w-[100px] bg-white h-screen bottom-0 flex flex-col items-center">
      <Link
        to="/"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Chats")}
        onMouseLeave={handleMouseLeave}
      >
        <CiMail
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/"
              ? "bg-blue-500 hover:text-gray-50  rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Chats" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Chats
          </p>
        )}
      </Link>
      <Link
        to="/create_group"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Groups")}
        onMouseLeave={handleMouseLeave}
      >
        <CiEdit
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/create_group"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Groups" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Groups
          </p>
        )}
      </Link>
      <Link
        to="/contacts"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Contacts")}
        onMouseLeave={handleMouseLeave}
      >
        <PiUsersThreeLight
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/contacts"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Contacts" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Contacts
          </p>
        )}
      </Link>
      <Link
        to="/profile"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Profile")}
        onMouseLeave={handleMouseLeave}
      >
        <CiUser
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/profile"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Profile" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Profile
          </p>
        )}
      </Link>
      <Link
        to="/login"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Login")}
        onMouseLeave={handleMouseLeave}
      >
        <CiLock
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/login"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Login" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Login
          </p>
        )}
      </Link>
      <Link
        to="/signUp"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Sign Up")}
        onMouseLeave={handleMouseLeave}
      >
        <BiUserPlus
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/signUp"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Sign Up" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Sign Up
          </p>
        )}
      </Link>
      <Link
        to="/setting"
        className="text-gray-500 flex items-center relative mt-5"
        onMouseEnter={() => handleMouseEnter("Setting")}
        onMouseLeave={handleMouseLeave}
      >
        <CiSettings
          className={`hover:text-blue-500 text-5xl p-2 ${
            location.pathname === "/setting"
              ? "bg-blue-500 hover:text-gray-50 rounded-full text-white"
              : ""
          } transition-all duration-800 ease-in-out`}
        />
        {hoveredIcon === "Setting" && (
          <p className="bg-gray-800 px-2 text-gray-300 absolute bottom-0 left-[95px] transform -translate-x-1/2 p-1 rounded-md transition-all duration-800 ease-in-out w-[80px]">
            Setting
          </p>
        )}
      </Link>
    </div>
  );
};
