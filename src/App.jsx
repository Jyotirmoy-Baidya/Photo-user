import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import LeftSection from './components/Home/LeftSection';
import RightSection from './components/Home/RightSection';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import MessageSection from './components/Home/MessageSection';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';

const login = true; // Assuming login is handled globally

const App = () => {
  return (
    <Router>
      {
        login ? (
          <div className='h-screen bg-primary-bg flex flex-col'>
            <div className="h-full flex flex-grow">
              <LeftSection />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notifications" element={<Notifications />} />
                {/* <MessageSection/> */}
                <Route path="/messages" element={<Messages />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/leaderboard' element={<Leaderboard />} />


              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        )
      }
    </Router>
  )
}

export default App
