import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({id,snippet,statistics}) => {
  const {channelTitle,title,thumbnails,publishedAt } = snippet;
  const {viewCount} = statistics;
  

  return (
   
    <div className='flex flex-col w-1/3 max-w-xl px-10 py-4  cursor-pointer ' >
      <Link to={`/watch/${id}`}>
          <img src={thumbnails.high.url} alt=""
          className='w-fit h-fit object-contain rounded-md' />
          <div className='flex pt-4'>
              <img src="https://i.ytimg.com/vi/azazwMH3fRo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAemNX6fR53U2700A0nfTOxtgBeLA" alt=""
              className='rounded-full w-10 h-10 object-cover cursor-pointer' />
              <div className='flex flex-col justify-start pl-4'>
                <h2 className='font-bold'>{title}</h2>
                <p>{channelTitle}</p>
                <span>{viewCount} views  • {publishedAt}</span>
              </div>
          <div>
          </div>
          
          </div>
          </Link>
      </div> 
    
  )
}

export default VideoCard;

//GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] 

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
{/* <video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" src="blob:https://www.youtube.com/f6595f2f-7590-45e7-a1c6-0f432d0faf5d" style="width: 640px; height: 360px; left: 0px; top: 0px;"></video> */}