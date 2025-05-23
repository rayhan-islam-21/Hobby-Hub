import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Groups from "../../Components/Groups/Groups";

const AllGroups = () => {
  const data = useLoaderData();
  const [groups, setGroups] = useState(data);
  const deleteGroup = (id) => {
    console.log("Delete group with id:", id);
    const updatedGroups = groups.filter((group) => group._id !== id);
    setGroups(updatedGroups);
  };

  return (
    <>
      <div className="text-start mt-12 mb-12">
        <h1 className="text-xl text-start p-4 font-bold text-green-500">
          TOTAL GROUPS {groups.length}
        </h1>
        <div className="grid  mb-12 grid-cols-1 place-content-center sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-6">
          {groups &&
            groups.length > 0 &&
            groups.map((group) => (
              <Groups

                group={group}
                deleteGroup={deleteGroup}
                key={group._id}
              ></Groups>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllGroups;
