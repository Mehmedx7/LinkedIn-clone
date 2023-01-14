import React from 'react'
import PostAdd from '../componets/center/PostAdd'
import PostDisplay from '../componets/center/PostDisplay'
import ProfileCard from '../componets/left/ProfileCard'
import NavBar from '../componets/NavBar'
import News from '../componets/right/News'

const Body = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-100 py-4 w-full h-screen'>
        <div className=' flex gap-3 max-w-[1180px] mx-auto'>
            <div className='w-[28%]'>
              <ProfileCard/>
            </div>
            <div className='w-[50%] gap-y-4'>
              <PostAdd/>
              <PostDisplay/>
            </div>
            <div className='w-[30%]'>
              <News/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body