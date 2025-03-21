import React, { useEffect, useState } from 'react';
import Solution from './Solution';
import { solutionsDataArray } from '../../constants';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { FaBookmark, FaShare } from 'react-icons/fa';
import axiosHandler from '../../utils/AxiosInstance';


const JobCard = ({ data, tags }) => {
    const [showSolutions, setShowSolutions] = useState(false);
    const [solutionsData, setSolutionsData] = useState(solutionsDataArray);
    const [newSolutionText, setNewSolutionText] = useState('');
    const [showInput, setShowInput] = useState(false);

    const toggleSolutions = () => {
        setShowSolutions(!showSolutions);
    };

    const addNewSolution = (parentSolution, text) => {
        const newSolution = {
            username: 'New User',
            date: new Date().toLocaleDateString(),
            text,
            avatar: './assets/image.png',
            likes: 0,
            dislikes: 0,
            subSolutions: [],
        };

        const addSolutionRecursively = (solutions) => {
            return solutions.map(solution => {
                if (solution === parentSolution) {
                    return { ...solution, subSolutions: [...solution.subSolutions, newSolution] };
                } else {
                    return {
                        ...solution,
                        subSolutions: addSolutionRecursively(solution.subSolutions),
                    };
                }
            });
        };

        setSolutionsData(prevSolutions => addSolutionRecursively(prevSolutions));
    };

    const handleAddTopLevelSolution = () => {
        if (newSolutionText.trim()) {
            const newSolution = {
                username: 'New User',
                date: new Date().toLocaleDateString(),
                text: newSolutionText,
                avatar: './assets/image.png',
                likes: 0,
                dislikes: 0,
                subSolutions: [],
            };
            setSolutionsData([...solutionsData, newSolution]);
            setNewSolutionText('');
            setShowInput(false);
        }
    };

    const [userDetails, setUserDetails] = useState();
    const getUserDetails = async () => {
        try {
            const userData = await axiosHandler("GET", `/user/${data.user_id}`);
            setUserDetails(userData);
            console.log(userData)
        } catch (error) {
            console.log(error)
        }
    }
    const [matchedTags, setMatchedTags] = useState([]);

    useEffect(() => {
        getUserDetails();
        setMatchedTags(tags.filter(tag => data.tags.includes(tag.id)));
    }, [tags])





    return (
        <div className='w-full max-w-full shadow-lg bg-primary-gray rounded-xl'>
            <div className=" text-white p-6 pb-3 bg-primary-gray shadow-lg rounded-xl">
                {/* User Info */}
                <div className="flex items-center mb-4">
                    <img
                        src="./assets/image.png" // Replace with your image
                        alt="User profile"
                        className="rounded-full w-12 h-12"
                    />
                    <div className="ml-3">
                        <h3 className="font-bold">{userDetails?.name}</h3>
                        {/* <p className="text-sm text-gray-400">May 13</p> */}
                    </div>
                </div>

                {/* Post Info */}
                <h4>{data.title}</h4>
                <p className="text-gray-300 text-sm mb-4">
                    {data.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pr-2">
                    <div className="flex items-center">
                        <button className="flex items-center space-x-1 text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span><p className="text-sm mr-2">{data.likes} Likes</p></span>
                        </button>
                        {/* <div className="cursor-pointer flex items-center text-gray-400" onClick={toggleSolutions}>
                            <span>•</span>
                            <p className="mx-1 text-sm">1.3K comments</p>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.45 1.76 6.54 4.5 8.29v3.21L10 20h2c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                        </div> */}
                        <button className="flex items-center space-x-1 text-primary-blue ml-3">
                            <FaShare className='text-lg' />
                        </button>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className='text-primary-blue'>
                            <FaBookmark />
                        </button>

                    </div>
                </div>

                <div className='flex gap-2 mt-2'>
                    {
                        matchedTags.map((ele, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-gray-700 text-primary-white text-xs tracking-wider rounded-full"
                            >
                                {ele.name}
                            </span>
                        ))
                    }
                </div>


                {/* Add Comment Section  */}
                {/* <div className="bg-primary-white rounded-full px-2 flex mt-2">
                    <input
                        type="text"
                        value={newSolutionText}
                        onChange={(e) => setNewSolutionText(e.target.value)}
                        placeholder="Write a solution"
                        className="w-full rounded-full p-2 text-sm bg-transparent text-gray-800 outline-none"
                    />
                    <button onClick={handleAddTopLevelSolution} className="my-1 bg-primary-blue shadow-md rounded-full px-[6px] py-[4px] text-white ">
                        <IoIosSend className='my-auto' />
                    </button>
                </div> */}


            </div>
            {/* {
                showSolutions &&
                <div className=" p-3">
                    <div className='text-primary-white'>Top Comments</div>
                    {solutionsData.map((solution, index) => (
                        <Solution key={index} solution={solution} onAddSolution={addNewSolution} />
                    ))}
                </div>
            } */}
        </div>
    );
};

export default JobCard;
