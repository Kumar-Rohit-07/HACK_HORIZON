import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.skills?.join(", ")}</p>
          <p className="text-sm text-gray-400">{user.bio || "No bio provided"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
