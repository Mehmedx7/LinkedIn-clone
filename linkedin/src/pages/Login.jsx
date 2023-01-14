import React, { useState } from 'react'
import NavBar from '../componets/NavBar'

const Login = () => {
    const [show, setShow] = useState(false)
    const [focus, setFocus] = useState(false)
    const [passFocus, setPassFocus] = useState(false)
    return (
        <>
            <main>
                <NavBar />
                <div className='flex justify-between items-center gap-20 w-full text-gray-700 max-h-[100vh]'>
                    <div className='flex flex-col items-center justify-start w-[50%] gap-10 pl-56'>
                        <h1 className='text-6xl font-thin text-amber-900'>Millions of jobs and people hiring</h1>
                        <div className='flex flex-col gap-4 w-full text-xl'>
                            <div className='relative w-[80%] flex flex-col gap-2'>
                                <input type="text" name="email" value="" className='border-2 pt-5 pv-2 px-2 w-full hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' onFocus={() => setFocus(!focus)} onBlur={() => setFocus(!focus)} />
                                <span className={`absolute left-3 py-2 ${focus ? " text-xs" : " text-xl"}`}>Email</span>
                            </div>
                            <div className='relative w-[80%]'>
                                <input type={show ? "password" : `text`} name="password" value="" className='border-2 pt-5 pv-2 px-2 w-full hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' onFocus={() => setPassFocus(!passFocus)} onBlur={() => setPassFocus(!passFocus)} />
                                <span className={`absolute left-3 ${passFocus ? " text-xs" : " text-xl"} py-2 transition delay-75`}>Password</span>
                                <button className='absolute right-3 top-[20%] items-center cursor-pointer' onClick={() => setShow(!show)}>{show ? "Show" : "Hide"}</button>
                            </div>
                            <button className='hover:underline hover:text-blue-900 text-left my-2'>Forgot password?</button>
                            <button className='text-white bg-blue-500 py-4 w-[80%] rounded-full'>Sign in</button>
                            <div className='relative'>
                                <hr className='w-[80%] my-4'/>
                                <h3 className='font-thin absolute left-[35%] rounded-full bg-white py-2 px-4 -top-2 text-gray-600'>or</h3>
                            </div>
                            <button className='w-[80%] py-3 ring-[1px] hover:bg-amber-100/50 rounded-full ring-gray-800'>Sign in with Google</button>
                            <button className='w-[80%] py-3 ring-[1px] hover:bg-amber-100/50 rounded-full ring-gray-800'>New to LinkedIn? Join now</button>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <img src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" className='pt-24 pl-16' />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login