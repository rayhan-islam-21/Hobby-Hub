import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const {
    groupName,
    description,
    category,
    imageUrl,
    maxMembers,
    meetingLocation,
    startDate,
    userName,
  } = useLoaderData();

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full md:h-full lg:h-[90vh]  object-cover object-center"
        />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl opacity-60 font-extrabold text-white drop-shadow-lg text-center px-4">
            {groupName}
          </h1>
        </div>
      </div>

      {/* Group Info */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-600 italic mb-2">
          Category:{" "}
          <span className="text-indigo-600 font-semibold">{category}</span>
        </p>

        <p className="text-gray-800 text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700 mb-10">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="font-medium">Location: {meetingLocation}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-blue-500" />
            <span className="font-medium">Start Date: {startDate}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaUserAlt className="text-green-600" />
            <span className="font-medium">Host: {userName}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaUserAlt className="text-yellow-500" />
            <span className="font-medium">Max Members: {maxMembers}</span>
          </div>
        </div>

        {/* Join Button */}
        <div className="text-center mt-24">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-white text-lg px-10 py-3 font-bold rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            Join Now 🚀
          </button>
        </div>
      </section>
    </div>
  );
};

export default GroupDetails;
