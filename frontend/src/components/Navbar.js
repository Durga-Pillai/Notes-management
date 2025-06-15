import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from './Sidebar.jsx';

const navLinks = [
  { label: 'HOME', href: '/homegit remote add origin ' },
  { label: 'PROFILE', href: '/home/profile' },
  { label: 'LOGOUT', href: '/home/logout' },
];


export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navLinks={navLinks} />
    
    <div className='px-4 md:px-20'>
      <div className="relative flex items-center justify-center mt-1  pt-3">
        <button
          className="absolute top-5 left-3 sm:top-5 sm:left-5 md:top-7 md:left-1 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <img
            src="/hamburger.svg"
            alt="Hamburger Menu"
            width={30}
            height={30}
            className="w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
          />
        </button>

    <nav className="custom-serif text-4xl font-bold mb-6 text-center text-blue-700">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-start">
          <h1 className="text-blue text-4xl font-extrabold tracking-wide">
            Lock<span className="text-teal-400">&</span>Write
          </h1>
        </div>
      </div>
    </nav>
    </div>
    </div>
    </>
  )
}
