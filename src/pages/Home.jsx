import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go"
import { BrowserRouter, NavLink, Route, Routes, useParams } from "react-router-dom"
import MessageSection from "../components/Home/MessageSection";
import TopicsSection from "../components/Home/TopicsSection";
import JobCard from "../components/Home/JobCard";
import LeftSection from "../components/Home/LeftSection";
import RightSection from "../components/Home/RightSection";
import axiosHandler from "../utils/AxiosInstance";

const Home = ({ tags }) => {
    const [ideas, setIdeas] = useState([]);
    const params = useParams();

    const tag = params.TagId;

    const getIdeas = async () => {
        try {
            if (tag) {
                const ideaList = await axiosHandler(
                    "GET",
                    `/tags/${tag}`,
                )
                setIdeas(ideaList)
            }
            else {
                const ideaList = await axiosHandler(
                    "GET",
                    "/ideas",
                )
                setIdeas(ideaList)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getIdeas();
    }, [tag])



    return (
        <div className="h-full flex flex-grow">
            <LeftSection />
            <div className="flex mt-2 md:mt-8 p-3 max-w-full md:w-7/12">
                <div className="flex flex-col flex-grow gap-3 max-w-full w-full overflow-y-scroll hide-scrollbar">
                    {
                        ideas.map((ele, i) => {
                            return (
                                <JobCard data={ele} key={i} tags={tags} />
                            )
                        })
                    }

                </div>
            </div>
            <RightSection tags={tags} />

        </div>
    )
}

export default Home