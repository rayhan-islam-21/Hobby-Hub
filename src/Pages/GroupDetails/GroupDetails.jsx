import React from "react";

const GroupDetails = () => {
    const groupName = "PES GROUP";
const category = "Video Gaming";
const description = "THIS IS THE GROUP FOR PES PLAYER";
const meetingLocation = "ONLINE";
const startDate = "2025-02-28";
const maxMembers = 100;
const imageUrl = "https://i.ibb.co/9Fg8MP6/IMG20241118120726.jpg";
const userName = "Rayhan";
const userEmail = "merayhanislam21@gmail.com";
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={imageUrl.trim()}
          alt={groupName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{groupName}</h2>
          <p className="text-sm text-gray-500 mb-4">
            Category: <span className="font-medium">{category}</span>
          </p>
          <p className="text-gray-700 mb-4">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Meeting Location
              </h3>
              <p className="text-gray-800">{meetingLocation}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Start Date
              </h3>
              <p className="text-gray-800">{startDate}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Max Members
              </h3>
              <p className="text-gray-800">{maxMembers}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">
                Created By
              </h3>
              <p className="text-gray-800">
                {userName} ({userEmail})
              </p>
            </div>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
