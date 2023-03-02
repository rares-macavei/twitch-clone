import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const Cards = () => {
  return (
    <div className=''>
      {/* Title */}
        <div className="font-semibold text-[20px] flex items-center pt-[2rem]">
          <p className='pr-4 hover:text-[#5c16c5] cursor-pointer'>Categories</p>
          <p className='hover:text-[#5c16c5] cursor-pointer'>Live Channels</p>
        </div>
      {/* Filter */}
      <div className="font-bold flex items-center justify-between">
        <div className="pt-6">
          <div className="flex items-center">
            <p className='text-[14px]'>Filter by Tag</p>
            <div className="flex items-center ml-3">
              <div className="absolute h-[1.50rem] p-3 w-auto flex rounded-l-md items-center justify-center"><BiSearch className='text-[20px] text-[#53535f]' /></div>
              <input type="search" placeholder='Search Category Tags' className='bg-[#e4e4e5] text-[18px] rounded-md placeholder-gray-600 placeholder-opacity-100  w-[15rem] pl-10 outline-none border-[#f7f7f8] border-[2.5px] hover:border-[#cbcbcb] hover:border-[2.5px] text-[13px] font-normal py-[5px] transition ease-out delay-100 focus:bg-[#f7f7f8] focus:border-[#5c16c5]' />
            </div>
          </div>
        </div>
        <div className="pt-6 flex items-center">
          <p className='text-[14px] mr-3'>Sort by</p>
          <div className="flex items-center justify-center cursor-pointer h-8 w-[12rem] bg-[#e4e4e5] text-[18px] rounded-md border-[2.5px] hover:border-[#cbcbcb] hover:border-[2.5px] text-[13px] font-normal py-[5px] transition ease-out delay-100 focus:bg-[#f7f7f8] focus:border-[#5c16c5]">
            <button className='font-normal flex items-center'>
              Recommended For You
              <BiChevronDown className='text-[24px] ml-1'/>
            </button>
          </div>
        </div>
      </div>
      {/* Cards */}
    </div>
  )
}

export default Cards