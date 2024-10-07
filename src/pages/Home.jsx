import { GoHomeFill } from "react-icons/go"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="h-screen bg-primary-bg flex flex-col">
            {/* header start */}
            <div className="block md:hidden md:h-20 h-10 bg-red-600 header">Hie</div>
            {/* header end  */}
            <div className="h-full flex flex-grow">
                {/* Left Section Start */}
                <div className="w-64 flex-grow-1 mt-8 mb-4 hidden md:block p-3">
                    <div className="flex h-full flex-col justify-between">
                        <div className="w-full flex gap-2 items-center bg-primary-darkgray rounded-lg py-3 px-3 mb-4 profile">
                            <div className="h-12 w-12">
                                <img src="./assets/image.png" className="w-full h-full" alt="profile pic" />
                            </div>
                            <div className="flex flex-col nametext">
                                <div className="text-sm font-medium tracking-wide text-primary-white">Gabimaru</div>
                                <div className="text-xs tracking-wide text-primary-white">@gabimaru</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <NavLink className="h-10 w-full rounded-md flex items-center px-4 bg-primary-bg hover:bg-primary-white text-primary-white hover:text-primary-bg gap-2 transition-all">
                                <div className=""><GoHomeFill /></div>
                                <div className="font-medium">Home</div>
                            </NavLink>

                            <NavLink className="h-10 w-full rounded-md flex items-center px-4 bg-primary-bg hover:bg-primary-white text-primary-white hover:text-primary-bg gap-2 transition-all">
                                <div className=""><GoHomeFill /></div>
                                <div className="font-medium">Home</div>
                            </NavLink>

                            <NavLink className="h-10 w-full rounded-md flex items-center px-4 bg-primary-bg hover:bg-primary-white text-primary-white hover:text-primary-bg gap-2 transition-all">
                                <div className=""><GoHomeFill /></div>
                                <div className="font-medium">Home</div>
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
                </div>
                {/* Left Section End */}

                {/* Middle Section Start */}
                <div className="flex flex-grow">
                    <div className="flex flex-col w-full gap-20 overflow-y-scroll">

                    </div>
                </div>
                {/* Middle Section End */}

                {/* Right Section Start  */}
                <div className="w-80 hidden md:block p-3">
                    <div className="flex flex-col gap-2">
                    </div>
                </div>
                {/* Right Section End */}
            </div>
        </div>
    )
}

export default Home