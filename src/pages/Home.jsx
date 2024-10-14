import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import MessageSection from "../components/Home/MessageSection";
import TopicsSection from "../components/Home/TopicsSection";
import JobCard from "../components/Home/JobCard";
import LeftSection from "../components/Home/LeftSection";
import RightSection from "../components/Home/RightSection";

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
        <div className="flex mt-2 md:mt-8 p-3 max-w-full md:w-7/12">
            <div className="flex flex-col flex-grow gap-3 max-w-full w-full overflow-y-scroll hide-scrollbar">
                <JobCard />

                <JobCard />

                <JobCard />

                <JobCard />

                <JobCard />

                <JobCard />
            </div>
        </div>
    )
}

export default Home