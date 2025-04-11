import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 border-t border-gray-300 mt-auto w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm font-semibold">

<<<<<<< Updated upstream
          {/* Copyright - Left */}
          <div className="text-sm text-gray-400 ml-20 mb-4 md:mb-0">
=======
          {/* Navigation */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-8">
            <Link to="/" className="hover:text-white transition">About Us</Link>
            <Link to="/discover" className="hover:text-white transition">Contact</Link>
            <Link to="/projects" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/mentors" className="hover:text-white transition">Back</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 md:text-right">
>>>>>>> Stashed changes
            &copy; {new Date().getFullYear()} CollabEdTech. All rights reserved.
          </div>

          {/* Navigation + Socials - Right */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-700">
              <Link
                to="/"
                className="transition-all duration-300 hover:text-blue-900"
              >
                Home
              </Link>
              <Link
                to="/FAQs"
                className="transition-all duration-300 hover:text-purple-900"
              >
                FAQs
              </Link>
              <Link
                to="/AboutUS"
                className="transition-all duration-300 hover:text-purple-900"
              >
                About Us
              </Link>
              <Link
                to="/Contact"
                className="transition-all duration-300 hover:text-purple-900"
              >
                Contacts
              </Link>
              <Link
                to="/Privacy"
                className="transition-all duration-300 hover:text-purple-900"
              >
                Privacy
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-gray-500 text-lg">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
