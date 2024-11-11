import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { NavLink, useLocation } from 'react-router-dom'

const LeftSection = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className="mt-8 mb-4 hidden md:block p-3 w-2/12">
            <div className="flex h-full flex-col justify-between">
                <NavLink to='/profile' className="w-full flex gap-2 items-center bg-primary-darkgray rounded-lg py-3 px-3 mb-4 profile">
                    <div className="h-12 w-12">
                        <img src="./assets/image.png" className="w-full h-full" alt="profile pic" />
                    </div>
                    <div className="flex flex-col nametext">
                        <div className="text-sm font-medium tracking-wide text-primary-white">Gabimaru</div>
                        <div className="text-xs tracking-wide text-primary-white">@gabimaru</div>
                    </div>
                </NavLink>
                <div className="flex flex-col gap-2">
                    <NavLink to='/' className={`h-10 w-full rounded-md flex items-center px-4 ${path == '/' ? 'bg-primary-white text-primary-bg' : 'bg-primary-bg text-primary-white'} hover:bg-primary-white  hover:text-primary-bg gap-2 transition-all`}>
                        <div className=""><GoHomeFill /></div>
                        <div className="font-medium">Home</div>
                    </NavLink>

                    <NavLink to='/notifications' className={`h-10 w-full rounded-md flex items-center px-4 ${path == '/notifications' ? 'bg-primary-white text-primary-bg' : 'bg-primary-bg text-primary-white'} hover:bg-primary-white hover:text-primary-bg gap-2 transition-all`}>
                        <div className=""><GoHomeFill /></div>
                        <div className="font-medium">Notifications</div>
                    </NavLink>

                    <NavLink to='/messages' className={`h-10 w-full rounded-md flex items-center px-4 ${path == '/messages' ? 'bg-primary-white text-primary-bg' : 'bg-primary-bg text-primary-white'} hover:bg-primary-white hover:text-primary-bg gap-2 transition-all`}>
                        <div className=""><GoHomeFill /></div>
                        <div className="font-medium">Messages</div>
                    </NavLink>
                    <NavLink to='/leaderboard' className={`h-10 w-full rounded-md flex items-center px-4 ${path == '/notifications' ? 'bg-primary-white text-primary-bg' : 'bg-primary-bg text-primary-white'} hover:bg-primary-white hover:text-primary-bg gap-2 transition-all`}>
                        <div className=""><GoHomeFill /></div>
                        <div className="font-medium">Leaderboard</div>
                    </NavLink>

                    <NavLink className="h-10 w-full rounded-md flex items-center px-4 bg-primary-blue hover:bg-blue-400 text-primary-white mt-4 gap-2 transition-all">
                        <div className="text-xl">+</div>
                        <div className="font-medium">New Problem</div>
                    </NavLink>

                </div>
                <div className="h-10 flex flex-col text-primary-white mt-auto">
                    <div className="text-lg font-bold tracking-wider">Logo</div>
                    <div className="flex gap-2">
                        <div className="text-sm">About Us</div>
                        <div className="text-sm">Contact</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LeftSection