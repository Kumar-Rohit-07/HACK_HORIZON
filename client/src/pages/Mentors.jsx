import React, { useState } from "react";
import MentorCard from "../components/MentorCard";

const mentorsList = [
    {
        name: "Dr. Anjali Sharma",
        avatar: "/avatars/anjali.png",
        expertise: ["AI", "Machine Learning", "Python"],
        bio: "10+ years in academia and industry, passionate about mentoring students in AI."
      },
      {
        name: "Rajeev Mehta",
        avatar: "/avatars/rajeev.png",
        expertise: ["Web Development", "React", "Node.js"],
        bio: "Full-stack developer and startup mentor with a knack for building MVPs quickly."
      },
      {
        name: "Sana Khan",
        avatar: "/avatars/sana.png",
        expertise: ["Cybersecurity", "DevSecOps"],
        bio: "Security enthusiast working with cloud-native security practices."
      },
      {
        name: "Mehul Desai",
        avatar: "/avatars/mehul.png",
        expertise: ["Cloud", "AWS", "Azure"],
        bio: "Cloud architect with deep experience in scalable infrastructure."
      },
      {
        name: "Aisha Ali",
        avatar: "/avatars/aisha.png",
        expertise: ["UI/UX", "Figma", "Design Thinking"],
        bio: "Design mentor helping teams craft user-centered products."
      },
      {
        name: "John Smith",
        avatar: "/avatars/john.png",
        expertise: ["Blockchain", "Solidity"],
        bio: "Web3 enthusiast mentoring startups in decentralized tech."
      },
      {
        name: "Priya Reddy",
        avatar: "/avatars/priya.png",
        expertise: ["Data Science", "Pandas", "R"],
        bio: "Loves turning data into insights and teaching data literacy."
      },
      {
        name: "Carlos Diaz",
        avatar: "/avatars/carlos.png",
        expertise: ["Java", "Spring Boot"],
        bio: "Backend systems expert and long-time mentor."
      },
      {
        name: "Haruki Tanaka",
        avatar: "/avatars/haruki.png",
        expertise: ["Robotics", "AI"],
        bio: "Robotics engineer mentoring students in autonomous systems."
      },
      {
        name: "Leila Benali",
        avatar: "/avatars/leila.png",
        expertise: ["Big Data", "Hadoop", "Spark"],
        bio: "Helps scale data processing for high-volume pipelines."
      },
      {
        name: "Mark Jensen",
        avatar: "/avatars/mark.png",
        expertise: ["Game Dev", "Unity", "C#"],
        bio: "Game developer mentoring indie devs in interactive storytelling."
      },
      {
        name: "Fatima Zahra",
        avatar: "/avatars/fatima.png",
        expertise: ["AI Ethics", "Policy"],
        bio: "Focused on responsible AI and ethical tech education."
      },
      {
        name: "Yusuf Khan",
        avatar: "/avatars/yusuf.png",
        expertise: ["Linux", "DevOps", "Bash"],
        bio: "Mentors young engineers in DevOps tools and systems."
      },
      {
        name: "Emily Zhao",
        avatar: "/avatars/emily.png",
        expertise: ["EdTech", "Startups"],
        bio: "EdTech founder supporting early-stage teams with strategy."
      },
      {
        name: "Omar Said",
        avatar: "/avatars/omar.png",
        expertise: ["AR/VR", "Unity"],
        bio: "Helps build immersive experiences in education."
      },
      {
        name: "Anita George",
        avatar: "/avatars/anita.png",
        expertise: ["Marketing", "Growth Hacking"],
        bio: "Growth advisor helping educational platforms scale."
      },
      {
        name: "Kunal Verma",
        avatar: "/avatars/kunal.png",
        expertise: ["Python", "Flask", "APIs"],
        bio: "Backend mentor simplifying API design and architecture."
      },
      {
        name: "Zara Nasser",
        avatar: "/avatars/zara.png",
        expertise: ["AI", "NLP"],
        bio: "Works on natural language models and AI assistants."
      },
      {
        name: "Ethan Blake",
        avatar: "/avatars/ethan.png",
        expertise: ["C++", "Embedded Systems"],
        bio: "Mentors in low-level programming and hardware-software integration."
      },
      {
        name: "Neha Roy",
        avatar: "/avatars/neha.png",
        expertise: ["React", "TypeScript"],
        bio: "Front-end mentor focused on clean and scalable code."
      },
    ];
const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredMentors = mentorsList.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const visibleMentors = filteredMentors.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredMentors.length;

  const handleToggle = () => {
    if (canShowMore) {
      setVisibleCount(visibleCount + 9);
    } else {
      setVisibleCount(9);
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="px-4 py-8">
        <div className="flex justify-between items-center flex-wrap mb-6">
          <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
            Find Your Mentor
          </h1>
          <input
            type="text"
            placeholder="Find mentors..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(9); // reset when searching
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleMentors.map((mentor, index) => (
            <div
              key={index}
              className="transform transition duration-300 hover:scale-105"
            >
              <MentorCard mentor={mentor} />
            </div>
          ))}
          {visibleMentors.length === 0 && (
            <p className="text-gray-300 col-span-full text-center">No mentors found.</p>
          )}
        </div>

        {filteredMentors.length > 9 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleToggle}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
            >
              {canShowMore ? "Show more" : "Show less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;