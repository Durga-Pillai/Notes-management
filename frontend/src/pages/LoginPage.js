import React, { useState } from 'react';
import Navbar from '../components/HomeNavbar.jsx'
import { Link,useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/home');
  };

  return (
    <>
    
     <Navbar/>
     
    <div className="flex flex-col sm:flex-row h-screen w-full">
      {/* Image Section */}

      {/* Login Form Section */}
      <div className="sm: w-full flex items-center justify-center bg-gray-800">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl text-white font-bold text-center mb-6">
            Sign In
          </h2>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <span className="hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200"
          >
            Sign In
          </button>
          <p className="mt-4 text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-teal-400 hover:underline font-semibold cursor-pointer"
              >
                Register here
              </Link>
              </p>
        </form>
      </div>
    </div>
    </>
  );
}
