import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Chat from '../assets/chatting.jpg';
import lol from '../assets/lol.jpg';
import valorant from '../assets/valorant.jpg';
import gta from '../assets/gta.jpg';
import csgo from '../assets/csgo.jpg';
import apex from '../assets/apex.jpg';
import fortnite from '../assets/fortnite.jpg';
import dota from '../assets/dota.jpg';
import fifa from '../assets/fifa.jpg';
import codmw from '../assets/codmw.jpg';
import over from '../assets/over.jpg';
import stone from '../assets/stone.jpg';
import dbd from '../assets/dbd.jpg';
import pubg from '../assets/pubg.jpg'; 
import rdr2 from '../assets/rdr2.jpg'; 
import wot from '../assets/wot.jpg'; 
import rust from '../assets/rust.jpg'; 
import dayz from '../assets/dayz.jpg'; 
import among from '../assets/among.jpg'; 
import soft from '../assets/soft.jpg'; 
import Card from './Card';

const Cards = () => {
  const cards = [
    { title: "Just Chatting", image: Chat, viewers: '338K viewers', type: "IRL" },
    { title: "League of Legends", image: lol, viewers: '153K viewers', type: "MOBA" },
    { title: "VALORANT", image: valorant, viewers: '139K viewers', type: "Shooter" },
    { title: "Grand Theft Auto V", image: gta, viewers: '87.2K viewers', type: "FPS" },
    { title: "Counter-Strike: Global...", image: csgo, viewers: '71.5K viewers', type: "Shooter" },
    { title: "Apex Legends", image: apex, viewers: '59.9K viewers', type: "Shooter" },
    { title: "Fortnite", image: fortnite, viewers: '22.4K viewers', type: "Action" },
    { title: "Dota 2", image: dota, viewers: '31.6K viewers', type: "MOBA" },
    { title: "FIFA 23", image: fifa, viewers: '24.7K viewers', type: "Sports Game" },
    { title: "Overwatch 2", image: over, viewers: '23.9K viewers', type: "Shooter" },
    { title: "Hearthstone", image: stone, viewers: '22.3K viewers', type: "Card & Board Game" },
    { title: "Dead by Daylight", image: dbd, viewers: '25K viewers', type: "Horror" },
    { title: "PUBG:BATTLEGROUNDS", image: pubg, viewers: '24.7K viewers', type: "Shooter" },
    { title: "Red Dead Redemption 2", image: rdr2, viewers: '21.1K viewers', type: "Adventure Game" },
    { title: "World of Tanks", image: wot, viewers: '18.9K viewers', type: "Simulation" },
    { title: "Rust", image: rust, viewers: '16.6K viewers', type: "Adventure Game" },
    { title: "DayZ", image: dayz, viewers: '12.4K viewers', type: "Simulation" },
    { title: "Call of Duty: Modern...", image: codmw, viewers: '11.8K viewers', type: "FPS" },
    { title: "Among Us", image: among, viewers: '9K viewers', type: "Survival" },
    { title: "Sons of the Forest", image: soft, viewers: '5.6K viewers', type: "Horror" },
  ];
  return (
    <div className=''>
      {/* Title */} 
        <div className="font-semibold text-[18px] flex items-center pt-[2rem]">
          <p className='pr-4 hover:text-[#5c16c5] cursor-pointer'>Categories</p>
          <p className='hover:text-[#5c16c5] cursor-pointer'>Live Channels</p>
        </div>
      {/* Filter */}
      <div className="font-bold flex items-center justify-between">
        <div className="pt-4">
          <div className="flex items-center">
            <p className='text-[14px]'>Filter by Tag</p>
            <div className="flex items-center ml-3">
              <div className="absolute h-[1.50rem] p-3 w-auto flex rounded-l-md items-center justify-center"><BiSearch className='text-[20px] text-[#53535f]' /></div>
              <input type="search" placeholder='Search Category Tags' className='bg-[#e4e4e5] text-[12px] rounded-md placeholder-gray-600 placeholder-opacity-100  w-[15rem] pl-10 outline-none border-[#f7f7f8] border-[2.5px] hover:border-[#cbcbcb] hover:border-[2.5px] text-[13px] font-normal py-[5px] transition ease-out delay-100 focus:bg-[#f7f7f8] focus:border-[#5c16c5]' />
            </div>
          </div>
        </div>
        <div className="pt-6 flex items-center">
          <p className='text-[14px] mr-3'>Sort by</p>
          <div className="flex items-center justify-center cursor-pointer h-8 w-[12rem] bg-[#e4e4e5] text-[18px] rounded-md border-[2.5px] hover:border-[#cbcbcb] hover:border-[2.5px] text-[13px] font-normal py-[5px] transition ease-out delay-100 focus:bg-[#f7f7f8] focus:border-[#5c16c5]">
            <button className='font-normal text-[12px] flex items-center justify-center'>
              Recommended For You
              <BiChevronDown className='text-[24px] ml-1'/>
            </button>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4">
        {cards.map((card) => <Card title={card.title} image={card.image} viewers={card.viewers} type={card.type} />)}
      </div>
    </div>
  )
}

export default Cards