import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import LeftSection from './components/Home/LeftSection';
import RightSection from './components/Home/RightSection';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';

const login = true;

const App = () => {
  return (
    <BrowserRouter>
      {
        login ?
          <div className='h-screen bg-primary-bg flex flex-col'>
            <div className="h-full flex flex-grow">
              <LeftSection />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/notifications' element={<Notifications />} />
                <Route path='/messages' element={<Messages />} />
              </Routes>
              <RightSection />
            </div>
          </div> :
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
      }
    </BrowserRouter>
  )
}

export default App