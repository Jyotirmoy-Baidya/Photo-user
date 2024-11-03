import React, { useState } from 'react';
import RightSection from '../components/Home/RightSection';

const Leaderboard = () => {
    const [activeTab, setActiveTab] = useState('Friends');

    // Sample data
    const friendsLeaderboard = [
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
        { name: 'Rana #1', likes: 1233652 },
    ];

    const globalLeaderboard = [
        { name: 'Global User #1', likes: 5432123 },
        { name: 'Global User #2', likes: 4321234 },
        { name: 'Global User #3', likes: 3212345 },
        { name: 'Global User #4', likes: 1234567 },
    ];

    const leaderboardData = activeTab === 'Friends' ? friendsLeaderboard : globalLeaderboard;

    return (

        <>
            <div className="bg-primary-bg text-white p-4 rounded-lg w-full md:w-7/12 mx-auto h-screen overflow-scroll hide-scrollbar">
                <h2 className="text-lg font-semibold mb-4">Leaderboard</h2>
                {/* Toggle Buttons */}
                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={() => setActiveTab('Friends')}
                        className={`px-3 py-1 rounded ${activeTab === 'Friends' ? 'bg-gray-700' : 'bg-gray-600'}`}
                    >
                        Friends
                    </button>
                    <button
                        onClick={() => setActiveTab('Global')}
                        className={`px-3 py-1 rounded ${activeTab === 'Global' ? 'bg-gray-700' : 'bg-gray-600'}`}
                    >
                        Global
                    </button>
                </div>

                {/* Your Rank Section */}
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded mb-4">
                    <div className="flex items-center space-x-3">
                        <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 rounded-full" />
                        <div>
                            <p>Your Rank #2125</p>
                            <p className="text-xs text-gray-400">Top 1%</p>
                        </div>
                    </div>
                    <p className="text-gray-400">1,233,652 Likes</p>
                </div>

                {/* Leaderboard Entries */}
                {leaderboardData.map((user, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border-t border-gray-700">
                        <div className="flex items-center space-x-3">
                            <img src="https://via.placeholder.com/40" alt="Profile" className="w-8 h-8 rounded-full" />
                            <p>{user.name}</p>
                        </div>
                        <p className="text-gray-400">{user.likes.toLocaleString()} Likes</p>
                    </div>
                ))}
            </div>
            <RightSection />
        </>
    );
};

export default Leaderboard;
