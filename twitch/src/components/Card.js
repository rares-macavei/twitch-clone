import React from 'react'

const Card = ({ title, image, viewers, type }) => {
  return (
    <div>
      <div className="h-[250px] w-auto flex mt-6 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-200 cursor-pointer">
        <img src={image} alt="images" className='object-cover' />
      </div>
      <div className="">
      <p className='font-semibold text-[14px] hover:text-[#772ce8] cursor-pointer'>
        {title}
      </p>
      <p className='text-[13px] text-[#686a73] hover:text-[#772ce8] cursor-pointer'>
        {viewers}
      </p>
      <div className="flex items-center h-5 mt-1 ">
        <p className="text-[#464646] text-[13px] cursor-pointer rounded-full font-semibold bg-[#eaeaeb] px-2 hover:bg-[#d7d7d7]">{type}</p>
      </div>
      </div>
    </div>
  )
}

export default Card