import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEO_API } from '../utils/constant';


const VideoContainer = () => {
  const arr = new Array(20).fill("");
  const [videoList,setVideoList]= useState([]);

  useEffect(()=>{
    getMyVideos();
  },[]);
  const getMyVideos =async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideoList(json.items);
    
  }
  if (!videoList){
    return null;
  }
  
  return (
    <section className='flex flex-wrap'>
      {
        videoList.map((item,index)=>{
  
          return(
            <VideoCard key={index} {...item} />
          );
        })
      }
    </section>
  )
}

export default VideoContainer