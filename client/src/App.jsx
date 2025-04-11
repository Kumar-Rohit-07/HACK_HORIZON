import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Projects from "./pages/Projects";
import Mentors from "./pages/Mentors";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { Toaster } from "react-hot-toast";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact"; // ✅ Import Contact page
import AboutUs from "./pages/AboutUs"; // ✅ Import About Us page
import Privacy from "./pages/Privacy"; // ✅ Import Privacy page

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname); // ✅ renamed

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Toaster position="top-center" reverseOrder={false} />

      {!hideHeaderFooter && <Navbar />}

      <div className="flex-grow pt-20 px-3 py-3"> {/* flex-grow ensures footer sticks to bottom if page is short */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/FAQs" element={<FAQs />} /> {/* ✅ Added FAQs route */}
          <Route path="/contact" element={<Contact />} /> {/* ✅ Added Contact route */}
          <Route path="/aboutus" element={<AboutUs />} /> {/* ✅ Added About Us route */}
          <Route path="/privacy" element={<Privacy />} /> {/* ✅ Added Privacy route */}
        </Routes>
      </div>

      {!hideHeaderFooter && <Footer />} {/* ✅ Add Footer here */}
    </div>
  );
};

export default App;
