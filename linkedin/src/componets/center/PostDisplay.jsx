import React, { useState } from 'react'
import Profile from '../Profile'

const PostDisplay = () => {
    const data = [
        {
            name: "Abhishek K",
            profile_img:"",
            description: "Student Jaava ",
            time: "12-jan-22",
            likes: 20,
            comment: 2,
            message: "Hi, Good evening....."
        },
        {
            name: "Rahul K",
            profile_img:"",
            description: "Web developer HTML : CSS ",
            time: "12-dec-22",
            likes: 2,
            comment: 0,
            message: "Hi, Good evening....."
        },
    ]
    const [image, SetImage] = useState(false)
    return (
        <>
        {data?.map((d)=>(
            <div className='bg-white rounded-xl divide-y-2 divide-gray-100 py-4 my-4 text-gray-800'>
                <div></div>
                <div>
                    <div className='flex items-center justify-between p-4'>
                        <div className='flex items-center text-xs gap-3'>
                            <div className='w-[50px]'><Profile /></div>
                            <div className=''>
                                <h2 className='font-bold text-sm hover:underline hover:text-blue-600'>{d.name}</h2>
                                <h2 className='text-gray-400'>{d.description}</h2>
                                <h4 className='text-gray-400'>{d.time}</h4>
                            </div>
                        </div>
                        <div className='text-blue-600 font-medium'>Follow</div>
                    </div>
                    <p className='font-medium px-4'>{d.message}</p>
                    {image && <img src="" alt="" className='h-[250px]' />}
                    <div className='px-4 pt-4 pb-1 flex justify-between text-sm text-gray-400'>
                        <span>{d.likes}</span>
                        <span>{d.comment !== 0? `${d.comment} comments`:""}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-4 px-4 font-medium'>
                    <div>
                        <span>Like</span>
                    </div>
                    <div>
                        <span>Comment</span>
                    </div>
                    <div>
                        <span>Repost</span>
                    </div>
                    <div>
                        <span>Send</span>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default PostDisplay