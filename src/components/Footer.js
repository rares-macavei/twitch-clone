import React from 'react'
import poney from '../assets/poney.png'

const Footer = () => {
  return (
    <div className="flex items-center pl-5 sticky h-[61px] w-auto bottom-0 bg-[#5c16c5] rounded-t-lg justify-between">
      <div className='flex items-center'>
        <img src={poney} alt="" className='h-[40px] w-auto' />
        <p className='ml-2 text-white text-[18px] font-semibold'>Join the Twitch community! <span className='font-normal ml-2'>Discover the best live streams anywhere.</span></p>
      </div>
      <div className="flex items-center justify-center w-auto h-[1.8rem]  mr-10 bg-white cursor-pointer rounded mr-4 text-black hover:bg-[#f3f3f3]">
          <p className="font-semibold text-[14px] pb-[0.2rem] px-[0.6rem]">Sign Up</p>
        </div>
    </div>
  )
}

export default Footer