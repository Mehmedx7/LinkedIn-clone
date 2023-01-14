import React from 'react'

const Card = () => {
    return (
        <>
            <div className='w-full rounded-xl overflow-hidden ring-2 ring-gray-200 bg-white'>
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.9l35MWUN6WpUbxyP3GM-cgHaCd&pid=Api&P=0" alt="profileBg" className='h-[60px] w-full' />
                </div>
                <div className=' relative p-4 pt-10 text-gray-400'>
                    <div className='ring-2 ring-white w-[65px] absolute -top-8 rounded-full'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" className='rounded-full ' />
                    </div>
                    <h1 className=' text-gray-800 font-semibold hover:underline'>Rahul Khandke</h1>
                    <p className='text-sx'>your description</p>
                </div>
                <div className='p-4 flex flex-col gap-y-1'>
                    <p className='text-sm text-gray-400'>600 followers</p>
                    <button className='py-2 px-4 w-full ring-1 ring-blue-600 text-blue-600 rounded-full'>Follow</button>
                </div>
            </div>
        </>
    )
}

export default Card