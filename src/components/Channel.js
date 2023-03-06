import React from 'react'

const Channel = ({ profile, name, game, viewers }) => {
  return (
    <div className='hover:bg-[#e9e9e9] cursor-pointer py-[2px]'>
      <div className="w-8 h-8 flex">
        <img src={profile} alt="profilepic" className='rounded-full object-cover h-full w-full'/>
      </div>
      <div className="hidden xl:flex">
        <div className="absolute flex ml-10 mt-[-35px]">
          <p className='absolute font-semibold text-[14px]'>{name}</p>
          <p className='mt-[18px] text-[#575364] text-[13px]'>{game}</p>
        </div>
        <div className="absolute mt-[-3.6rem] ml-[11rem] text-[3rem] text-[#ff0000]">·</div>
        <p className='absolute mt-[-1.8rem] ml-[12rem] text-[13px]'>{viewers}</p>
      </div>
      
    </div>
  )
}

export default Channel