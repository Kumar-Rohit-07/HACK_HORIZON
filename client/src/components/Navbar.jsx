import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // ✅ redirect to home
  };

  return (
    <nav
  className="fixed top-0 left-0 w-full z-50 shadow-md px-6 py-4"
  style={{
    background: "linear-gradient(to right, #f8b500, #fceabb)" // warm sunrise vibe
, // bright sky to royal blue
    color: "white",
  }}
>

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
        >
          <PiUsersThree className="text-blue-500 w-9 h-9" />
          <span>CollabEdTech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/discover" className="text-gray-700 hover:text-blue-500">
            Discover
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </Link>
          <Link to="/mentors" className="text-gray-700 hover:text-blue-500">
            Mentors
          </Link>
          
        </div>

        {/* Auth / Profile - Desktop */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="focus:outline-none"
              >
                <FaUserCircle className="text-gray-700 w-8 h-8" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <div className="px-4 py-2 text-gray-800 border-b">
                    {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 px-4 pb-4">
          <Link
            to="/discover"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500"
          >
            Discover
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="/mentors"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500"
          >
            Mentors
          </Link>

          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <div className="text-gray-800 font-medium">{user.name}</div>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
