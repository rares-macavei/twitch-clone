import React from 'react'
import Logo from '../assets/twitchlogo.png'
// import Profile from '../assets/profile.png'
// import Bit from '../assets/bit.png'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CgCrown } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="bg-white py-2 px-4 flex items-start justify-between shadow-md ">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Twitch Logo" className="w-6 h-6 cursor-pointer" />
        <div className="">
          <p className='font-semibold hover:text-[#5c16c5] text-[19px] ml-[10px] cursor-pointer'>Browse</p>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded cursor-pointer bg-[#fff] hover:bg-[#e0e0e0] ml-3"><BiDotsVerticalRounded className="text-[24px]"/></div>
      </div>
      {/* Middle */}
      <div className="hidden md:flex items-center">
        <input type="search" placeholder="Search" className="ml-[2.5rem] pl-[0.75rem] p-[0.3rem] bg-[#ebebeb] mr-[0px] text-[1rem] text-[#666666] placeholder-gray-500 placeholder-opacity-100 outline-[#7559a8] rounded w-[22rem]" />
        <div className="flex items-center cursor-pointer justify-center ml-[0.15rem] border w-8 h-8 bg-[#ebebeb] rounded-r border-[#ebebeb]"><BsSearch /></div>
      </div>
      {/* Right side */}
      <div className="flex items-center mt-[0.2rem]">
        <div className="md:hidden flex items-center justify-center w-8 h-8 rounded cursor-pointer bg-[#fff] hover:bg-[#e0e0e0] mr-3"><BsSearch className="w-4 h-[1.3rem] "/></div>
        <div className="flex items-center justify-center w-8 h-8 rounded cursor-pointer bg-[#fff] hover:bg-[#e0e0e0] mr-3"><CgCrown className="w-auto h-[1.3rem] "/></div>
        <div className="flex items-center justify-center w-auto h-[1.8rem]  mr-3 bg-[#ebebeb] cursor-pointer rounded mr-4 hover:bg-[#e0e0e0]">
          <p className="font-semibold text-[14px] pb-[0.2rem] px-[0.6rem]">Log In</p>
        </div>
        <div className="flex items-center justify-center w-auto h-[1.8rem]  mr-3 bg-[#9147ff] cursor-pointer rounded mr-4 text-white hover:bg-[#7e3ce0]">
          <p className="font-semibold text-[14px] pb-[0.2rem] px-[0.6rem]">Sign Up</p>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded bg-[#fff] hover:bg-[#e0e0e0] cursor-pointer"><FiUser className="w-6 h-6 "/></div>
      </div>
    </div>
  )
}

export default Navbar