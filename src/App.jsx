import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
<<<<<<< HEAD
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/" element={<Home />} />
      </Routes>
    </Router>
=======
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
>>>>>>> fea134ea1547f0dbd8ffd5c87b2e338f1d7969b1
  )
}

export default App