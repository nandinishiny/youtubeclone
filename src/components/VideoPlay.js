import React from 'react'
import { useParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const VideoPlay = () => {
  const {resId}=useParams();
  return (
    <div className='flex flex-col '>
      <div className='px-5 flex '>
        <div>
          {/* <video src={nandy} controls className='w-4/5 h-80' /> */}
          <iframe width="1000" height="550" src={`https://www.youtube.com/embed/${resId}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat/>

        </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default VideoPlay