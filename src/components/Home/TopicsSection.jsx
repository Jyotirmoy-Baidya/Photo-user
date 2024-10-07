import React, { useState, useEffect } from "react";

const TopicsSection = () => {
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

    // Function to load topics after a delay (simulating async fetch)
    const gettingTopics = async () => {
        setTimeout(() => {
            setShowTopics(tags.length >= 4 ? 4 : tags.length);
            setTopicsLoading(false);
        }, 2000);
    };

    // Run when component mounts
    useEffect(() => {
        gettingTopics();
    }, []); // empty dependency array ensures this runs once after initial render

    return (
        <div className="p-4 rounded-lg bg-primary-gray">
            <div className="text-xl font-medium tracking-wider text-white mb-2">
                Topics
            </div>
            {topicsLoading ? (
                <div className="text-white text-sm">Loading...</div>
            ) : (
                <div className="flex items-center justify-center">
                    <div className="flex flex-wrap gap-2">
                        {tags
                            .filter((_, index) => index < showTopics)
                            .map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-700 text-primary-white text-xs tracking-wider rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                    </div>
                </div>
            )}
            <div
                className="text-primary-blue underline text-xs mt-2 cursor-pointer"
                onClick={() =>
                    setShowTopics(showTopics <= 4 ? tags.length : 4)
                }
            >
                Show {showTopics <= 4 ? "more" : "less"} topics
            </div>
        </div>
    );
};

export default TopicsSection;
