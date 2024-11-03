import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faApple, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Sign Up</h1> {/* Updated header */}
          <p className="text-xl md:text-2xl mb-6">Join us today!</p>
          <p className="text-md md:text-lg">
            If you already have an account, you can <Link to="/signin" className="text-blue-500 underline">login with the login page</Link>.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-8 rounded-lg bg-gray-700">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Create Account</h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="username"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
              <span
                onClick={togglePassword}
                className="absolute inset-y-0 right-4 top-5 cursor-pointer text-gray-400"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                className="w-full p-3 md:p-4 bg-white text-gray-900 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                required
              />
              <span
                onClick={toggleConfirmPassword}
                className="absolute inset-y-0 right-4 top-5 cursor-pointer text-gray-400"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            <button className="w-full py-3 md:py-4 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-md md:text-lg mb-4">or continue with</p>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="#" className="bg-blue-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-blue-700 transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* Apple */}
              <a href="#" className="bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-800 transition duration-300">
                <FontAwesomeIcon icon={faApple} />
              </a>
              {/* Google */}
              <a href="#" className="bg-red-500 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-red-600 transition duration-300">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              {/* Twitter */}
              <a href="#" className="bg-blue-400 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-lg hover:bg-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
