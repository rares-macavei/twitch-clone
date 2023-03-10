import React from 'react'

const Category = ({ title, icon }) => {
  return (
    <div className='relative mt-[1.8rem]'>
      <div className="bg-[#772ce8] rounded-lg w-[18rem] h-[3rem] cursor-pointer hover:bg-[#8640f1]">
        <p className='text-white font-semibold text-[28px] pl-4'>{title}</p>
      <div className="w-[5rem] h-auto absolute top-[-0.5rem] left-[13rem]">
        <img src={icon} alt="joystick" />
      </div>
      </div>
      
    </div>
  )
}

export default Category