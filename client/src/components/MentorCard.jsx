import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-200">
      <div className="flex items-center gap-4">
        <img
          src={mentor.avatar || "/default-avatar.png"}
          alt="mentor-avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
          <p className="text-sm text-gray-500">{mentor.expertise?.join(", ")}</p>
          <p className="text-sm text-gray-400">{mentor.bio}</p>
        </div>
      </div>
      <div className="mt-3">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
          Request Mentorship
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
