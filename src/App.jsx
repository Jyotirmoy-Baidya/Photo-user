import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
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
import LandingPage from './pages/LandingPage';
import Auth from './auth/AuthProvider';

const login = true; // Assuming login is handled globally

const App = () => {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = () => {
      const userId = localStorage.getItem("photo-user");
      if (userId) {
        setLogin(true);
      }
    }

    isLoggedIn();
  }, [])

  return (
    <BrowserRouter>
      <div className='h-screen bg-primary-bg flex flex-col'>
        <Auth>
          {/* <div className="h-full flex flex-grow"> */}
          {/* <LeftSection /> */}
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            {/* <MessageSection/> */}
            <Route path="/messages" element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
          </Routes>
          {/* </div>
    </div> */}
        </Auth>
      </div>
    </BrowserRouter>
  )

  // return (
  //   <BrowserRouter>
  //     {
  //       login ? (
  //         
  //       ) : (
  //         <Routes>
  //           <Route path='' element={<LandingPage />} />
  //           <Route path='/signin' element={<SignIn />} />
  //           <Route path='/signup' element={<Signup />} />
  //         </Routes>
  //       )
  //     }
  //   </BrowserRouter>
  // )
}

export default App
