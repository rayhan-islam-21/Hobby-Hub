import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const AllGroups = () => {
  const groups = useLoaderData();
  const navigate = useNavigate();
  const handleSeeMore = (id) => {
    navigate(`/group/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <h1 className="text-xl font-bold text-green-500">TOTAL GROUPS {groups.length}</h1>
      {groups.map((group) => (
        <div
          key={group._id}
          group={group}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={group.imageUrl.trim()}
            alt={group.groupName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {group.groupName}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Category: {group.category}
            </p>
            <p className="text-gray-700 text-sm line-clamp-2">
              {group.description}
            </p>
            <button
              onClick={() => handleSeeMore(group._id)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllGroups;
