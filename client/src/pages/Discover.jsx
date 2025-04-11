import React, { useState } from 'react';

const projects = [
  { title: "AI Tutor", desc: "An intelligent tutor that adapts to student's learning pace." },
  { title: "Smart Attendance", desc: "Face recognition-based attendance system for classrooms." },
  { title: "Virtual Lab", desc: "Interactive science lab simulations for remote learning." },
  { title: "CollabBoard", desc: "Real-time collaboration board for students & mentors." },
  { title: "QuizMaster", desc: "Dynamic quiz generator powered by AI." },
  { title: "EduAR", desc: "Augmented reality app for visualizing concepts." },
  { title: "MentorMatch", desc: "Smart matching system for students and mentors." },
  { title: "CodeMate", desc: "Live collaborative code editor for classrooms." },
  { title: "LangBot", desc: "Conversational AI for language learning." },
  { title: "MindMapX", desc: "Tool for creating collaborative mind maps." },
  { title: "LearnTrack", desc: "Progress tracker with gamified rewards." },
  { title: "PeerEval", desc: "Peer-to-peer evaluation platform." },
  { title: "SkillHub", desc: "Skill showcase and badge system." },
  { title: "CourseForge", desc: "Drag-and-drop course builder." },
  { title: "StudyPal", desc: "Smart study group organizer." },
];

const mentors = [
  { name: "Sarah Lee", desc: "Expert in Machine Learning with 8+ years experience in EdTech." },
  { name: "Rahul Mehta", desc: "Full-stack developer and open-source contributor." },
  { name: "Emily Clark", desc: "Specialist in AR/VR for immersive learning." },
  { name: "Dr. Ravi Kumar", desc: "AI researcher with focus on EdTech solutions." },
  { name: "Amira Hassan", desc: "UX designer passionate about inclusive education." },
  { name: "Jason Tan", desc: "JavaScript ninja and mentor to 200+ devs." },
  { name: "Meera Shah", desc: "LMS system architect and educational consultant." },
  { name: "Tomoko Sato", desc: "Gamification expert in learning platforms." },
  { name: "Nikhil Arora", desc: "Data scientist turning insights into action." },
  { name: "Laura Gómez", desc: "Bilingual mentor for global learners." },
  { name: "Anand Patel", desc: "React specialist and EdTech startup founder." },
  { name: "Grace Yi", desc: "Worked on accessibility in digital education." },
  { name: "Carlos Ramos", desc: "Tech mentor focused on Latin American students." },
  { name: "Fatima Noor", desc: "Cloud computing expert in education." },
  { name: "Kevin Luo", desc: "Built adaptive learning systems for K-12." },
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("project");

  const toggleSearchType = () => {
    setSearchType(prev => (prev === "project" ? "mentor" : "project"));
    setSearchQuery("");
  };

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMentors = mentors.filter(m =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen px-4 sm:px-6 md:px-12 py-10"
      style={{
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-white text-center md:text-left">
          Discover Projects & People
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder={searchType === "project" ? "Find project..." : "Find mentor..."}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={toggleSearchType}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition w-full sm:w-auto"
          >
            {searchType === "project" ? "Find Mentor" : "Find Project"}
          </button>
        </div>
      </div>

      <p className="text-gray-300 mb-6 text-center md:text-left">
        Explore trending projects, new developers, and innovative ideas in the EdTech space.
      </p>

      {searchType === "project" && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-white">🔥 Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((proj, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-xl shadow-md transition transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-blue-700">{proj.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{proj.desc}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full">No projects found.</p>
            )}
          </div>
        </>
      )}

      {searchType === "mentor" && (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-white">👩‍🏫 Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-xl shadow-md transition transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-blue-700">{mentor.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{mentor.desc}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full">No mentors found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Discover;