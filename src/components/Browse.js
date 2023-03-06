import React from 'react'
import Category from './Category';
import joystick from '../assets/joystick.png'
import micro from '../assets/microphone.png'
import headset from '../assets/headset.png'
import trophy from '../assets/trophy.png'
import paint from '../assets/paint.png'

const Browse = () => {
  const categories = [
    {title: "Games", icon:joystick},
    {title: "IRL", icon:micro},
    {title: "Music", icon:headset},
    {title: "Esports", icon: trophy},
    {title: "Creative", icon: paint}
  ];
  return (
    <div className=''>
      {/* Title */}
      <h1 className='text-[52px] font-bold'>Browse</h1>
      {/* Categories */}
      <div className="flex flex-wrap gap-x-4 gap-y-4">
        {categories.map((category) => ( 
        <Category title={category.title} icon={category.icon}/>
        ))}
      </div>
    </div>
  )
}

export default Browse