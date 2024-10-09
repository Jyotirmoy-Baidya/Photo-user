import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go"
import { NavLink } from "react-router-dom"
import MessageSection from "../components/Home/MessageSection";
import TopicsSection from "../components/Home/TopicsSection";
import JobCard from "../components/Home/JobCard";

const Home = () => {

    const tags = [
        "Technology",
        "Photography",
        "Job",
        "ui/ux",
        "Economics",
        "Freelancing",
        "Business",
        "Entrepreneurship",
        "Management",
    ];

    const [showTopics, setShowTopics] = useState(0);
    const [topicsLoading, setTopicsLoading] = useState(true);

    const gettingTopics = async () => {
        setTimeout(() => {
            setShowTopics(tags.length >= 4 ? 4 : tags.length)
            setTopicsLoading(false);
        }, 2000);
    }

    gettingTopics();



    return (
        <div className="h-screen bg-primary-bg flex flex-col">
            {/* header start */}
            <div className="block md:hidden md:h-20 h-10 bg-red-600 header">Hie</div>
            {/* header end  */}
            <div className="h-full flex flex-grow">
                {/* Left Section Start */}
                <div className="mt-8 mb-4 hidden md:block p-3 w-2/12">
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
                <div className="flex mt-8 p-3 max-w-full w-7/12">
                    <div className="flex flex-col flex-grow gap-3 max-w-full w-full overflow-y-scroll hide-scrollbar">
                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />
                    </div>
                </div>
                {/* Middle Section End */}

                {/* Right Section Start  */}
                <div className="hidden md:block mt-8 p-3 overflow-scroll hide-scrollbar w-3/12">
                    <div className="flex flex-col gap-4">
                        {/* Topics */}
                        <TopicsSection />

                        {/* Messages  */}
                        <MessageSection />

                    </div>
                </div>
                {/* Right Section End */}
            </div>
        </div>
    )
}

export default Home