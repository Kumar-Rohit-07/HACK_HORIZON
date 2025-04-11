import React from "react";
import Navbar from "./components/Navbar";
import MentorCard from "./components/MentorCard";
import ProjectCard from "./components/ProjectCard";
import UserCard from './components/UserCard';

export default function App() {
  const sampleMentor = {
    name: "Dr. Aisha Khan",
    avatar: "https://i.pravatar.cc/150?img=47",
    expertise: ["AI", "Machine Learning", "EdTech"],
    bio: "10+ years guiding students in tech innovation."
  };

  const sampleProject = {
    title: "Smart Attendance System",
    description: "Using face recognition to automate attendance.",
    techStack: ["React", "Node.js", "TensorFlow"],
    tags: ["AI", "EdTech", "Innovation"]
  };

  const sampleUser = {
    name: "Aditya Singh",
    avatar: "https://i.pravatar.cc/150?img=32",
    skills: ["JavaScript", "React", "Node.js"],
    bio: "Passionate about building impactful EdTech solutions."
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4 space-y-6">
      <Navbar />
      <h1 className="text-xl font-bold text-gray-700">Component Showcase</h1>
      <MentorCard mentor={sampleMentor} />
      <ProjectCard project={sampleProject} />
      <UserCard user={sampleUser} />
    </div>
  );
}
