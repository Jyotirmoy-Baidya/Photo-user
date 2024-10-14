import { useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { FaRegComment, FaShare } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Solution = ({ solution, onAddSolution }) => {
    const [showSubSolutions, setShowSubSolutions] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [newSolutionText, setNewSolutionText] = useState('');

    const toggleSubSolutions = () => {
        setShowSubSolutions(!showSubSolutions);
    };

    const handleAddSolution = () => {
        if (newSolutionText.trim()) {
            onAddSolution(solution, newSolutionText);
            setNewSolutionText('');
            setShowInput(false);
        }
    };

    return (
        <div className="p-4 mb-2 border-b-2 border-slate-400">
            <div className="flex items-center mb-2">
                <img
                    src={solution.avatar}
                    alt="User profile"
                    className="rounded-full w-8 h-8"
                />
                <div className="ml-2">
                    <h4 className="font-bold text-primary-white text-sm">{solution.username}</h4>
                    <p className="text-gray-400 text-xs">{solution.date}</p>
                </div>
            </div>
            <p className="text-gray-300 text-sm">{solution.text}</p>

            {/* Like/Dislike Button */}
            <div className="flex justify-between items-center pr-2 mt-1">
                <div className="flex items-center">
                    <button className="flex items-center space-x-1 text-blue-500">
                        <AiTwotoneLike className="text-lg" />
                        <span><p className="text-xs mr-2">74.5K Likes</p></span>
                    </button>
                    <button className="flex items-center space-x-1 text-blue-500">
                        <AiTwotoneDislike className="text-lg" />
                    </button>
                    <button className="flex items-center space-x-1 text-blue-500 ml-3">
                        <FaShare className='text-lg' />
                    </button>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="mt-2 text-blue-400 text-sm" onClick={toggleSubSolutions}>
                    {showSubSolutions ? 'Hide comments' : 'View comments'}
                </button>
            </div>



            {showSubSolutions && (
                <div className="flex flex-col">
                    <div className="ml-4 border-l border-gray-600 pl-4">
                        <div className="bg-primary-white rounded-full px-2 flex mt-2">
                            <input
                                type="text"
                                value={newSolutionText}
                                onChange={(e) => setNewSolutionText(e.target.value)}
                                placeholder="Write a solution"
                                className="w-full rounded-full p-2 text-sm bg-transparent text-gray-800 outline-none"
                            />
                            <button onClick={handleAddSolution} className="my-1 bg-primary-blue shadow-md rounded-full px-[6px] py-[4px] text-white ">
                                <IoIosSend className='my-auto' />
                            </button>
                        </div>
                        {
                            solution.subSolutions.length > 0 ?
                                <> {
                                    solution.subSolutions.map((subSolution, index) => (
                                        <Solution key={index} solution={subSolution} onAddSolution={onAddSolution} />
                                    ))
                                }</>
                                :
                                <div className="text-primary-white">No Comments</div>

                        }
                    </div>
                </div>
            )}
        </div>
    );
};
export default Solution