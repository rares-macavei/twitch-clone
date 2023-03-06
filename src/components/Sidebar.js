import React from 'react'
import Channel from './Channel';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.jpeg';
import profile4 from '../assets/profile4.png';
import profile5 from '../assets/profile5.jpeg';
import profile6 from '../assets/profile6.png';
import profile7 from '../assets/profile7.png';
import profile8 from '../assets/profile8.png';
import profile9 from '../assets/profile9.png';
import profile10 from '../assets/profile10.png';

const Sidebar = () => {
  const channels = [
    {profile: profile1, name:"EpulzeGaming", game: "Dota 2", viewers: "1K"},
    {profile: profile2, name:"Quin69", game: "Diablo III", viewers: "6.7K"},
    {profile: profile3, name:"Gorgc", game: "Dota 2", viewers: "6.5K"},
    {profile: profile4, name:"CohhCarnage", game: "Like a Dragon: Ishin!", viewers: "9.2K"},
    {profile: profile5, name:"ESL_CSGO", game: "CS:GO", viewers: "1.8K"},
    {profile: profile6, name:"Doctorul_", game: "Just Chatting", viewers: "689"},
    {profile: profile7, name:"skill4ltu", game: "World of Thanks", viewers: "6.2K"},
    {profile: profile8, name:"RduLIVE", game: "Hearthstone", viewers: "4.6K"},
    {profile: profile9, name:"mira", game: "Just Chatting", viewers: "2.8K"},
    {profile: profile10, name:"ELMUROROSA", game: "League of Legends", viewers: "3.3K"},
  ];
  return (
    <div className='p-2 mt-1 bg-[#efeff1] xl:w-[17rem] w-[4rem]'>
      {/* Title */}
      <div className="m-1 whitespace-nowrap">
        <p className='font-semibold text-[13px] xl:flex hidden'>RECOMMENDED CHANNELS</p>
      </div>
      <div className="xl:hidden flex justify-center">
        <VscDeviceCameraVideo />
      </div>
      {/* Channels */}
      <div className="flex flex-col gap-2 pt-2">
        {channels.map((channel) => (
        <Channel 
        profile={channel.profile} 
        name={channel.name} 
        game={channel.game} 
        viewers={channel.viewers} /> 
        ))}
      </div>
    </div>
  )
}

export default Sidebar