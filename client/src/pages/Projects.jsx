import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const allProjects = [
  {
    title: "AI Resume Analyzer",
    description: "An AI-powered resume parser and job matcher.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    tags: ["AI", "Resume", "Job Matching"],
  },
  {
    title: "Blood Donation Forecast",
    description: "Predictive analytics tool for blood donation needs.",
    techStack: ["Python", "Flask", "ML", "Pandas"],
    tags: ["Forecasting", "Health", "ML"],
  },
  {
    title: "Gaming Hub",
    description: "One-stop destination to discover and play games.",
    techStack: ["React", "Tailwind", "Node.js"],
    tags: ["Games", "Frontend", "Platform"],
  },
  {
    title: "Black Friday Sales Prediction",
    description: "Forecast future sales using historical datasets.",
    techStack: ["XGBoost", "Python", "Jupyter"],
    tags: ["Sales", "ML", "Prediction"],
  },
  {
    title: "Chess.com Clone",
    description: "Frontend clone of the famous Chess.com site.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    tags: ["Chess", "Frontend", "Clone"],
  },
  {
    title: "Task Manager App",
    description: "Manage daily tasks with a simple task board.",
    techStack: ["React", "LocalStorage"],
    tags: ["Productivity", "Tasks", "React"],
  },
  {
    title: "EduConnect",
    description: "Connect mentors and learners in one platform.",
    techStack: ["React", "Express", "MongoDB"],
    tags: ["EdTech", "Mentorship", "Platform"],
  },
  {
    title: "Smart Parking System",
    description: "Automated system using OCR for parking slots.",
    techStack: ["Python", "OpenCV", "IoT"],
    tags: ["IoT", "Smart City", "OCR"],
  },
  {
    title: "Virtual Study Room",
    description: "Collaborative video + whiteboard study platform.",
    techStack: ["React", "WebRTC", "Socket.IO"],
    tags: ["Collaboration", "Study", "EdTech"],
  },
  {
    title: "Hackathon Hub",
    description: "Discover & join hackathons with a team.",
    techStack: ["MERN", "Tailwind"],
    tags: ["Hackathon", "Team", "Platform"],
  },
  {
    title: "DevMatch",
    description: "Connect developers based on skills and goals.",
    techStack: ["React", "Firebase"],
    tags: ["Networking", "Matchmaking", "Dev"],
  },
  {
    title: "Daily Quote Generator",
    description: "Shows a new motivational quote each day.",
    techStack: ["React", "API"],
    tags: ["Quotes", "API", "Motivation"],
  },
  {
    title: "Budget Tracker",
    description: "Track income and expenses easily.",
    techStack: ["React", "Chart.js"],
    tags: ["Finance", "Tracking", "Charts"],
  },
  {
    title: "AI Chatbot",
    description: "Smart chatbot for customer queries.",
    techStack: ["Dialogflow", "React"],
    tags: ["Chatbot", "AI", "Support"],
  },
  {
    title: "Fitness Tracker",
    description: "Monitor workouts and calories.",
    techStack: ["React Native", "Firebase"],
    tags: ["Fitness", "Health", "Mobile"],
  },
  {
    title: "News Aggregator",
    description: "Aggregates top news from various sources.",
    techStack: ["React", "NewsAPI"],
    tags: ["News", "Aggregator"],
  },
  {
    title: "Portfolio Generator",
    description: "Generate your personal developer portfolio.",
    techStack: ["React", "Tailwind"],
    tags: ["Portfolio", "Resume"],
  },
  {
    title: "Voice Notes App",
    description: "Record and save voice notes quickly.",
    techStack: ["React", "Web Audio API"],
    tags: ["Notes", "Audio"],
  }
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowMore = () => setVisibleCount((prev) => prev + 9);
  const handleShowLess = () => {
    setVisibleCount(9);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setVisibleCount(9); // reset view on new search
  };

  const filteredProjects = allProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm)
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const isAllVisible = visibleProjects.length >= filteredProjects.length;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <input
          type="text"
          placeholder="Search Projects..."
          className="border border-gray-300 rounded px-4 py-2 w-60 focus:outline-none focus:ring focus:ring-blue-200"
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </div>

      {visibleProjects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="transform transition duration-300 hover:scale-105"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {!isAllVisible && (
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Show More
              </button>
            )}
            {isAllVisible && filteredProjects.length > 9 && (
              <button
                onClick={handleShowLess}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
              >
                Show Less
              </button>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">No projects found.</p>
      )}
    </div>
  );
}