import React from 'react'
import ProfileCard from '../componets/left/ProfileCard'
import NavBar from '../componets/NavBar'

const Body = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-100 py-4 w-full h-screen'>
        <div className='max-w-[1180px] mx-auto'>
            <div>
              <ProfileCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body