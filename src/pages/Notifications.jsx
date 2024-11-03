import React, { useState } from 'react';
import RightSection from '../components/Home/RightSection';

const notifications = [
    { id: 1, name: 'Jess Raddon', message: 'started following you', time: '2 hours ago', type: 'following' },
    { id: 2, name: '', message: 'You have got 150 upvotes for a solution', time: '2 hours ago', type: 'activity' },
    { id: 3, name: 'Rana', message: 'started following you', time: '2 hours ago', followBack: true, type: 'following' },
    { id: 4, name: 'Jess Raddon', message: 'started following you', time: '2 hours ago', type: 'following' },
    { id: 5, name: '', message: 'You have received a badge for your activity', time: '3 hours ago', type: 'activity' },
];

const Notifications = () => {
    const [filter, setFilter] = useState('all');

    const filteredNotifications = notifications.filter((notif) => {
        if (filter === 'all') return true;
        return notif.type === filter;
    });

    return (
        <>
            <div className="w-full md:w-7/12 mx-auto p-4 bg-primary-bg text-white rounded-lg">
                <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                    <h2 className="text-xl font-semibold">Notification</h2>
                </div>
                <div className="flex space-x-4 mt-4 text-gray-400">
                    <button
                        onClick={() => setFilter('all')}
                        className={`pb-1 ${filter === 'all' ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('following')}
                        className={`pb-1 ${filter === 'following' ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
                    >
                        Following
                    </button>
                    <button
                        onClick={() => setFilter('activity')}
                        className={`pb-1 ${filter === 'activity' ? 'text-white font-semibold border-b-2 border-white' : 'hover:text-white'}`}
                    >
                        Activity
                    </button>
                </div>
                <ul className="mt-4 space-y-4">
                    {filteredNotifications.map((notif) => (
                        <li key={notif.id} className="flex items-center justify-between p-4 h-20 bg-primary-gray rounded-lg">
                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="profile"
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <div>
                                    <p className="text-sm font-medium">
                                        <span className="text-white">{notif.name}</span> {notif.message}
                                    </p>
                                    <p className="text-xs text-gray-500">{notif.time}</p>
                                </div>
                            </div>
                            {notif.followBack && (
                                <button className="text-xs font-medium text-white bg-primary-blue px-3 py-1 rounded-full">
                                    Follow Back
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <RightSection />
        </>
    );
};

export default Notifications;
