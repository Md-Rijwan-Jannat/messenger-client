import { BiEdit } from "react-icons/bi";

export const UserProfile = () => {
  return (
    <div>
      <div className="bg-white rounded-md flex flex-col items-center justify-center w-full h-[200px]">
        <div className="relative">
          <img
            className=" flex-shrink-0 object-cover w-20 h-20 mx-1 mt-[17px] rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="avatar"
          />
          <div className='w-6 h-6'>
            <span className="absolute right-3 bottom-7 rounded-full bg-green-500 w-3 h-3"> </span>
          </div>
        <> <BiEdit className='absolute text-gray-500 hover:text-blue-500 -right-[70px] top-0' /></>
        </div>
        <h2 className="text-gray-500 text-lg font-semibold">Mst Habiba</h2>
        <p className="text-gray-500 text-xs font-semibold uppercase">MERN Stack developer</p>
      </div>
    </div>
  )
}
