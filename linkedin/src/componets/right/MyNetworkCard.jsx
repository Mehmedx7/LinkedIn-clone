import React from 'react'
import Card from '../Card'

const MyNetworkCard = () => {
    return (
        <>
            <div className='bg-white rounded-xl ring-1 ring-gray-100 flex justify-between p-4 text-gray-500 font-medium'>
                <span>
                    No Pending invitation
                </span>
                <button > Manage</button>
            </div>
            <div className=' p-4 bg-white mt-4 rounded-xl text-gray-600'>
                <div className='flex justify-between'>
                    <span>People who are in the IT Services and IT Consulting industry also follow these people</span>
                    <button className='text-sm font-medium'>See all</button>
                </div>
                <div className='flex justify-between gap-4 py-4'>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='flex justify-between'>
                    <span>People you may know -India</span>
                    <button className='text-sm font-medium'>See all</button>
                </div>
                <div className='flex justify-between gap-4 py-4'>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='flex justify-between'>
                    <span>Top emerging creators to follow</span>
                    <button className='text-sm font-medium'>See all</button>
                </div>
                <div className='flex justify-between gap-4 py-4'>
                    <Card />
                    <Card />
                    <Card />
                </div>
               
            </div>
        </>
    )
}

export default MyNetworkCard