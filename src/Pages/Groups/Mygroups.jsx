import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";

import Groups from "../../Components/Groups/Groups";
import { Link, useNavigate } from "react-router";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const navigate = useNavigate();
  const [groupLoading, setGroupLoading] = useState(true);
  const [group, setGroup] = useState([]);
  const handleUpdate = (id) => {
    navigate(`/updategroup/${id}`);
  }










  useEffect(() => {
    fetch(`https://hobbyhub-server-ten.vercel.app/mygroups/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setGroup(data);
        setGroupLoading(false);
        console.log(data);
      });
  }, [user, email]);

const deleteGroup = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
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
          const updatedGroups = group.filter((g) => g._id !== id);
          setGroup(updatedGroups);
          Swal.fire({
            title: "Deleted!",
            text: "Your group has been deleted.",
            icon: "success"
          });
        })
        .catch((err) => {
          console.error("Error deleting group:", err);
          Swal.fire("Error", "Something went wrong while deleting.", "error");
        });
    }
  });
};


  return (
    <div className="text-start mt-12 mb-12 px-4">
      <h1 className="text-2xl font-bold  text-green-500 mb-6">
        TOTAL GROUPS:{" "}
        {groupLoading ? (
          <span className="loading loading-spinner text-error ml-2"></span>
        ) : (
          group.length
        )}
      </h1>

      {groupLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : group.length === 0 ? (
        <p className="text-center text-gray-500">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:overflow-x-auto md:block">
          {/* Desktop Table */}
          <table className="hidden md:table w-full text-sm text-gray-700 border border-black/20 shadow rounded-xl">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  Group Name
                </th>
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Start Date
                </th>
                <th className="px-4 py-3 text-left font-semibold">Location</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Max Members
                </th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {group.map((g) => (
                <tr key={g._id} className="hover:bg-green-50 transition">
                  <td className="px-4 py-3 font-medium">{g.groupName}</td>
                  <td className="px-4 py-3">{g.category}</td>
                  <td className="px-4 py-3">{g.startDate}</td>
                  <td className="px-4 py-3">{g.meetingLocation}</td>
                  <td className="px-4 py-3">{g.maxMembers}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link to={`/groupdetails/${g._id}`}>
                      <button className="bg-green-500 btn hover:bg-green-600 text-white px-3 py-1 rounded text-xs shadow">
                        Details
                      </button>
                    </Link>
                    <button onClick={()=>handleUpdate(g._id)} className="bg-blue-500 btn hover:bg-blue-600 text-white px-3 py-1 rounded text-xs shadow">
                      Update
                    </button>
                    <button
                      onClick={() => deleteGroup(g._id)}
                      className="bg-red-500 btn hover:bg-red-600 text-white px-3 py-1 rounded text-xs shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="md:hidden w-full max-w-md grid gap-4">
            {group.map((group) => (
              <Groups group={group} key={group._id}></Groups>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
