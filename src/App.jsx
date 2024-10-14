import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
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
  )
}

export default App