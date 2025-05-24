import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import Groups from "../../Components/Groups/Groups";
import AuthContext from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const AllGroups = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [groups, setGroups] = useState(data);
  const handleDelete = (dataOfUser) => {
    if (user?.email !== dataOfUser.userEmail) {
      toast.error("You are not authorized to delete this group");
    }
    else{
      fetch(`https://hobbyhub-server-ten.vercel.app/allgroups/${dataOfUser._id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to delete");
          }
          return res.json();
        })
        .then(() => {
          const updatedGroups = groups.filter((group) => group._id !== dataOfUser._id);
          toast.success("Group Deleted Successfully");
          setTimeout(()=>{
            setGroups(updatedGroups);
          },[1500])
        })
        .catch((err) => {
          console.error("Error deleting group:", err);
        });
    }
  };

  return (
    <>
      <div className="text-start mt-12 mb-12">
        <h1 className="text-xl text-start px-2 mb-3 font-bold text-green-500">
          TOTAL GROUPS : {groups.length}
        </h1>
        <div className="grid  mb-12 grid-cols-1 place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-6">
          {groups &&
            groups.length > 0 &&
            groups.map((group) => (
              <Groups
                handleDelete={handleDelete}
                group={group}
                key={group._id}
              ></Groups>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllGroups;
