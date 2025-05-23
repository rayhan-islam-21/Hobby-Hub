import React from "react";
import { useNavigate } from "react-router";

const Groups = ({ group, deleteGroup }) => {
  const { _id, category, description, groupName, imageUrl } = group;
  const navigate = useNavigate()

  const handleDelete = (id) => {
    fetch(`https://hobbyhub-server-ten.vercel.app/allgroups/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Delete response:", data);
        deleteGroup(id);
      })
      .catch((err) => {
        console.error("Error deleting group:", err);
      });
  };

  const handleDetails = (id) => {
    console.log("Details for group with id:", id);
    navigate(`/groupdetails/${id}`);
  }

  return (
    <div className="bg-white dark:bg-white/10 dark:backdrop-blur-md border border-gray-300 dark:border-white/20 shadow-xl rounded-xl overflow-hidden max-w-md w-full mx-auto transition-transform duration-300 hover:scale-103 hover:shadow-2xl">
      <div className="relative">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-64 object-cover object-center transition duration-300 hover:brightness-90"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {category}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between h-64">
        <h2 className="text-2xl font-extrabold text-gray-500  mb-2">
          {groupName}
        </h2>
        <p className="text-gray-700 dark:text-gray-500 text-sm line-clamp-3 flex-1">
          {
            description.length > 100
              ? `${description.slice(0, 100)}...`
              : description
          }
        </p>
        <div className="flex justify-between mt-5">
          <button onClick={()=>handleDetails(_id)}  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg cursor-pointer transition">
            See More
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md cursor-pointer hover:shadow-lg transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Groups;
