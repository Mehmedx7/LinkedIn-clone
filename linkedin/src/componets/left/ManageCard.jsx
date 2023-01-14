import React from 'react'

const ManageCard = () => {
    return (
        <>
            <div className='bg-white rounded-xl flex flex-col gap-4 p-4 text-gray-500 text-lg'>
                <h1 className='font-medium'>Manage my network</h1>
                <div className='flex gap-2 items-center  justify-between'>
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Connection</span>
                    </div>
                    <span>200</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Contacts</span>
                    </div>
                    <span>270</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Following & followers</span>
                    </div>
                    <span>10</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Group</span>
                    </div>
                    <span>1</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Event</span>
                    </div>
                    <span>2</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Newsletters</span>
                    </div>
                    <span>8</span>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span></span>
                        <span>Hashtags</span>
                    </div>
                    <span>3</span>
                </div>
            </div>
        </>
    )
}

export default ManageCard