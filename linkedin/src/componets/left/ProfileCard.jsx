import React from 'react'
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import AdjustIcon from '@mui/icons-material/Adjust';
import Profile from '../Profile';

const ProfileCard = () => {
    return (
        <>
            <div className='rounded-xl overflow-hidden text divide-y-2 divide-gray-100 bg-white'>
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.9l35MWUN6WpUbxyP3GM-cgHaCd&pid=Api&P=0" alt="profileBg" className='h-[60px] w-full' />
                </div>
                <div className=' relative p-4 pt-16 text-gray-400'>
                    <div className='ring-2 ring-white w-[65px] absolute -top-8 left-[37%] rounded-full'><Profile/></div>
                    <h1 className='text-center text-gray-800 font-semibold hover:underline'>Rahul Khandke</h1>
                    <p className='text-sx text-center'>your description</p>
                </div>
                <div className='px-4 py-5  text-sm font-semibold text-gray-400'>
                    <div className='flex items-center justify-between'>
                        <h3>Who's viewed your profile</h3>
                        <p className='text-blue-600'>28</p>
                    </div>
                    <div className='pt-2'>
                        <div className='flex items-center justify-between'>
                            <h3>Connections</h3>
                            <p className='text-blue-600'>200</p>
                        </div>
                        <p className='text-gray-500'>Grow your network</p>
                    </div>
                </div>
                <div className='p-4 '>
                    <h3 className='font-thin text-sm'>Access exclusive tools & insights</h3>
                    <h3 className='underline hover:text-blue-600 flex gap-1'><AdjustIcon style={{color:"gold"}}/><span>Try premium for free</span></h3>
                </div>
                <div className='flex gap-2 p-4 text-gray-600 items-center'>
                    <TurnedInRoundedIcon/>
                    <h3 className='text-sm font-medium'>My items</h3>
                </div>
            </div>
        </>
    )
}

export default ProfileCard