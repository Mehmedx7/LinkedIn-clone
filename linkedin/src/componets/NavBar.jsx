import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    const [user, setUser] = useState(false)
    return (
        <>
            <nav>
                {user ? <div className='h-[90px] max-w-[1270px] mx-auto flex justify-between items-center py-2 font-semibold text text-gray-800'>
                    <div className='w-[40%]'>
                        <img src="logo.png" alt="" className='h-[40px] text-xl' />
                    </div>
                    <div className='flex gap-16'>
                        <ul className='flex gap-10 border-r-0 border-gray-700'>
                            <Link><li className='flex flex-col items-center'><ExploreIcon /> <span>Discover</span></li></Link>
                            <Link><li className='flex flex-col items-center'><PeopleAltIcon /> <span>People</span></li></Link>
                            <Link><li className='flex flex-col items-center'><WorkIcon /> <span>Jobs</span></li></Link>
                            <Link><li className='flex flex-col items-center'><ExploreIcon /> <span>Discover</span></li></Link>
                        </ul>
                        <div className='flex gap-8'>
                            <button>Join Now</button>
                            <button className='px-6 py-3 rounded-full ring-[1px] text-blue-600  ring-blue-600'>Sign in</button>
                        </div>
                    </div>
                </div> :
                    <div className='h-[80px] max-w-[1180px] mx-auto flex justify-between items-center pt-2 font-normal text-sm text-gray-800'>
                        <div className='flex items-center text-xl font-thin gap-2'>
                            <img src="smallLogo.png" alt="" className='h-[50px] text-xl' />
                            <div>
                                <input type="text" name="search" value="" placeholder='search..' className='px-2 py-1 rounded-md bg-slate-50 focus:w-[300px]' />
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <ul className='flex gap-10 border-r-0 border-gray-700'>
                                <Link><li className='flex flex-col items-center gap-y-1'><HomeIcon style={{fontSize:40}}/> <span>Home</span></li></Link>
                                <Link><li className='flex flex-col items-center gap-y-1'><PeopleAltIcon style={{fontSize:40}} /> <span>My Network</span></li></Link>
                                <Link><li className='flex flex-col items-center gap-y-1'><WorkIcon style={{fontSize:40}}/> <span>Jobs</span></li></Link>
                                <Link><li className='flex flex-col items-center gap-y-1'><ExploreIcon style={{fontSize:40}} /> <span>Messaging</span></li></Link>
                                <Link><li className='flex flex-col items-center gap-y-1'><ExploreIcon style={{fontSize:40}} /> <span>Notification</span></li></Link>
                                <Link>
                                    <li className='flex flex-col items-center gap-y-1'><img src="smallLogo.png" alt="profile" className='rounded-full w-[50px] bg-clip-border' />
                                        <span>Me</span>
                                    </li>
                                </Link>
                                <Link>
                                    <li className='flex flex-col items-center gap-y-1'>
                                        <AppsIcon />
                                        <span>work</span>
                                    </li>
                                </Link>
                            </ul>

                        </div>
                    </div>}
            </nav>
        </>
    )
}

export default NavBar