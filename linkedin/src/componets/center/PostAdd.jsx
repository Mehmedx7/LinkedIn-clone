import React from 'react'
import Profile from '../Profile'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import CalendarMonth from '@mui/icons-material/CalendarMonth';

const PostAdd = () => {
    return (
        <>
            <div className='bg-white p-4 rounded-xl flex flex-col gap-y-6 font-semibold'>
                <div className='flex items-center gap-3 text-gray-800'>
                    <div className='w-[55px]'><Profile /></div>
                    <span className='w-full rounded-full ring-1 ring-gray-700 bg-gray-100 p-3'>Start a post</span>
                </div>
                <div className='flex gap-2 justify-evenly items-center'>
                    <div className='flex gap-2 items-center'>
                        <InsertPhotoIcon style={{ fontSize:30 ,color: "blue" }} />
                        <span>Photo</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <YouTubeIcon style={{ fontSize:30 ,color: "green" }} />
                        <span>Video</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <CalendarMonth style={{ fontSize:30 ,color: "orange" }} />
                        <span>Event</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FormatIndentIncreaseIcon style={{ fontSize:30 ,color: "red" }} />
                        <span>Write Article</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PostAdd