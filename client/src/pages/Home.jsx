import React, { useState } from "react";
import Profile from "../assets/Profile.jpg";
import Discover from "../assets/discover.jpg";
import Mentors from "../assets/mentors.jpg";
import Projects from "../assets/projects.jpg";

const slides = [
  {
    image: Profile,
    link: "/profile",
    alt: "Go to Profile",
  },
  {
    image: Discover,
    link: "/discover",
    alt: "Discover Projects",
  },
  {
    image: Mentors,
    link: "/mentors",
    alt: "Meet Mentors",
  },
  {
    image: Projects,
    link: "/projects",
    alt: "Explore Projects",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-6 text-center">
        Welcome to CollabEdTech
      </h1>
      <p className="text-gray-700 text-lg sm:text-xl max-w-2xl text-center mb-8">
        Connect with mentors, discover innovative projects, and collaborate with passionate learners to build the future of education.
      </p>

      {/* Slider Section */}
      <div className="relative w-full max-w-3xl h-80 overflow-hidden rounded-2xl shadow-lg">
        <a href={slides[currentIndex].link}>
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </a>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition"
        >
          ▶
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mb-10 my-8">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition duration-300 text-center"
        >
          Get Started
        </a>
        <a
          href="#"
          className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition duration-300 text-center"
        >
          Learn More
        </a>
      </div>

      {/* Optional Illustration */}
    </div>
  );
};

export default Home;