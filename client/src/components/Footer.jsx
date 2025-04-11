import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 border-t border-gray-700 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">CollabEdTech</h2>
            <p className="mt-1 text-sm text-gray-400">
              Empowering skill-based learning & collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/discover" className="hover:text-white transition">Discover</Link>
            <Link to="/projects" className="hover:text-white transition">Projects</Link>
            <Link to="/mentors" className="hover:text-white transition">Mentors</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 md:text-right">
            &copy; {new Date().getFullYear()} CollabEdTech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
