import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CollabEdTech
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/discover" className="text-gray-700 hover:text-blue-500">Discover</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link to="/mentors" className="text-gray-700 hover:text-blue-500">Mentors</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/register">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
              Log In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 px-4 pb-4">
          <Link to="/discover" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500">Discover</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link to="/mentors" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500">Mentors</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-500">Profile</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
              Register
            </button>
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-gray-200 text-gray-700 w-full py-2 rounded hover:bg-gray-300">
              Log In
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
