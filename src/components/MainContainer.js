import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'


const MainContainer = () => {
  return (
    <main className='col-span-8 '>
        <ButtonList/>
        <VideoContainer/>
    </main>
  )
}

export default MainContainer