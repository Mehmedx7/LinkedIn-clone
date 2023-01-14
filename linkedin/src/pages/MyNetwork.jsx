import React from 'react'
import ManageCard from '../componets/left/ManageCard'
import NavBar from '../componets/NavBar'
import MyNetworkCard from '../componets/right/MyNetworkCard'

const MyNetwork = () => {
  return (
    <>
    <NavBar/>
    <div className='bg-gray-100 py-4 w-full min-h-screen'>
        <div className=' flex gap-3 max-w-[1180px] mx-auto'>
            <div className='w-[30%]'>
              <ManageCard/>
            </div>
            <div className='w-[70%] gap-y-4'>
                <MyNetworkCard/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyNetwork