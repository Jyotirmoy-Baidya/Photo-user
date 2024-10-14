import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faApple, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Sign in to</h1> {/* Responsive font size */}
          <p className="text-xl md:text-2xl mb-6">Lorem Ipsum is simply</p> {/* Responsive font size */}
          <p className="text-md md:text-lg">
            If you don't have an account, register <br />
            You can <Link to="/signup" className="text-blue-500 semi-bold">Register!here</Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="p-8 rounded-lg bg-gray-700">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Sign in</h2> {/* Responsive font size */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="email"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email or user name"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <span
                onClick={togglePassword}
                className="absolute inset-y-0 right-4 top-5 cursor-pointer text-gray-400"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <a href="#" className="text-blue-500 text-sm float-right mt-1">Forgot password?</a>
            </div>

            <button className="w-full py-3 md:py-4 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"> {/* Responsive button size */}
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-md md:text-lg mb-4">or continue with</p> {/* Responsive text size */}
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="#" className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-blue-700 transition duration-300"> {/* Responsive icon size */}
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* Apple */}
              <a href="#" className="bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-800 transition duration-300"> {/* Responsive icon size */}
                <FontAwesomeIcon icon={faApple} />
              </a>
              {/* Google */}
              <a href="#" className="bg-red-500 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-red-600 transition duration-300"> {/* Responsive icon size */}
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              {/* Twitter */}
              <a href="#" className="bg-blue-400 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-blue-500 transition duration-300"> {/* Responsive icon size */}
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
