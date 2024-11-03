import React from 'react';
import JobCard from '../components/Home/JobCard';

const Profile = () => {
    return (
        <div className="bg-primary-bg w-10/12 flex flex-col max-h-screen h-screen text-white">
            {/* Header Section */}
            <div className="p-4 flex h-56">
                {/* Profile Picture */}
                <img
                    src="./assets/image.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-primary-bg "
                />
                {/* Profile Info */}
                <div className="ml-3">
                    <h2 className="text-xl font-semibold">Gabimaru</h2>
                    <p className="text-gray-400">@gabimaru</p>
                    <p className="text-gray-400">11.9k Followers • 227 Following</p>
                    <p className="mt-2 text-gray-300">
                        Looking For An Experienced YouTube Thumbnail Designer For A DISNEY channel, Looking For An Experienced YouTube Thumbnail Designer For A DISNEY channel,
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-blue-500 px-4 py-1 rounded text-white">Follow</button>
                        <button className="bg-gray-700 px-4 py-1 rounded text-white">Share</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-grow h-4/6'>
                {/* About and Credentials */}
                <div className="p-4 w-5/12">
                    <div className="bg-primary-gray rounded-lg p-4 mb-4">
                        <h3 className="font-semibold text-lg mb-2">About me</h3>
                        <p className="text-gray-300">
                            Looking For An Experienced YouTube Thumbnail Designer For A DISNEY channel, Looking For An Experienced YouTube Thumbnail Designer For A DISNEY channel...
                        </p>
                    </div>
                    <div className="bg-primary-gray rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-2">Credentials</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li><i className="fa-solid fa-mars"></i> Male</li>
                            <li><i className="fa-solid fa-briefcase"></i> Employment credentials</li>
                            <li><i className="fa-solid fa-graduation-cap"></i> Education Details</li>
                            <li><i className="fa-solid fa-location-dot"></i> Location</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col w-7/12 '>
                    {/* Tabs Section */}
                    <div className="flex space-x-4 p-4 border-b border-gray-700">
                        <button className="pb-2 font-semibold text-white border-b-2 border-white">Problems</button>
                    </div>


                    {/* Posts Section */}
                    <div className="flex flex-col flex-grow gap-3 max-w-full w-full overflow-y-scroll hide-scrollbar">
                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />

                        <JobCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
