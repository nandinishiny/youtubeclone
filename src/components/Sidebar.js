import React from 'react'
import { useSelector } from 'react-redux';
import {AiFillHome} from 'react-icons/ai';
import {MdSpatialAudio} from 'react-icons/md';
import {AiOutlineShake} from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {ImLibrary} from 'react-icons/im';
import {BsClockHistory} from 'react-icons/bs';
import {MdVideoLibrary} from 'react-icons/md';
import {BsClock} from 'react-icons/bs';
import {MdOutlinePlaylistPlay} from 'react-icons/md';
const Sidebar = () => {
  const arr = new Array(20).fill("");
  const isSidebarOpen = useSelector(store=>store.sidebar.isMenuOpen);
  if(!isSidebarOpen){
    return null;
  }

  return (
    <aside className=' border p-4 col-span-1'>
        <ul className='border-b border-gray-300 flex flex-col gap-2 mb-2 pb-2 '>
          <li className='flex items-center gap-4'><AiFillHome/> <span>Home</span> </li>
          <li className='flex items-center gap-4'><AiOutlineShake/> <span>Shorts</span> </li>
          <li className='flex items-center gap-4'><MdSpatialAudio/> <span>Subscriptions</span> </li>
        </ul>
        <ul className='border-b border-gray-300 flex flex-col gap-2 mb-2 pb-2'>
        <li className='flex items-center gap-4'><ImLibrary/> <span>Library</span> </li>
        <li className='flex items-center gap-4'><BsClockHistory/> <span>History</span> </li>
        <li className='flex items-center gap-4'><MdVideoLibrary/> <span>Your Videos</span> </li>
        <li className='flex items-center gap-4'><BsClock/> <span>Watch Later</span> </li>
        <li className='flex items-center gap-4'><MdOutlinePlaylistPlay/> <span>Playlist Name</span> </li>
        <li className='flex items-center gap-4'><MdKeyboardArrowDown/> <span>ShowMore</span> </li>
          </ul>
          <h1 className='my-2'>Subscriptions</h1>
          <ul className='flex flex-col gap-4 mb-2 pb-2'  >
            {arr.map((item,index)=>{
              return( <li key={index} className='flex'>
              <img src="https://media.licdn.com/dms/image/D5635AQG8gXvU8bqn4Q/profile-framedphoto-shrink_400_400/0/1680792634362?e=1684828800&v=beta&t=YzwCAFplEPkagvT73emDw0rkfduXrzyyrxSHqE59scs" alt=""className="rounded-full w-10 h-fit object-contain cursor-pointer"  />
              <span>Harshit Srivasthava</span>
            </li>)
            })
           }
          </ul>
        
  
    </aside>
  

  )
 
}

export default Sidebar