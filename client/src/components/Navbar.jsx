import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-blue-600">
        CollabEdTech
      </a>
      <div className="space-x-4 ">
        <a href="/discover" className="text-gray-700 hover:text-blue-500">Discover</a>
        <a href="/projects" className="text-gray-700 hover:text-blue-500">Projects</a>
        <a href="/mentors" className="text-gray-700 hover:text-blue-500">Mentors</a>
        <a href="/profile" className="text-gray-700 hover:text-blue-500">Profile</a>
      </div>
      <div className="px-6 flex space-x-4">
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600">
        Sign Up
    </button>
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
        Log In
    </button>
    </div>
    </nav>
  );
};

export default Navbar;
