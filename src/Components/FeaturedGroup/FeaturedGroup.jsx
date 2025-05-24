import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { Link } from 'react-router'; // If using React Router

const FeaturedGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hobbyhub-server-ten.vercel.app/allgroups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setGroups(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 bg-gradient-to-r">
      <h2 className="text-4xl font-extrabold text-center  mb-10 ">🌟 Featured Groups</h2>

      <div className="max-w-6xl mx-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        { loading? <div className='flex  col-span-3 justify-center items-center'>

            <span className="loading loading-dots loading-xl"></span>
        </div>: groups

          .map(group => (
            <div
              key={group._id}
              className="bg-white ring-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-purple-700 mb-2">{group.groupName}</h3>
                

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                  <FaMapMarkerAlt className="text-purple-500" />
                  <span>{group.meetingLocation}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <HiOutlineCalendarDays className="text-purple-500" />
                  <span>{new Date(group.startDate).toDateString()}</span>
                </div>

                {/* See More Button */}
                <div className="mt-4">
                  <Link
                    to={`/groupdetails/${group._id}`} // or use a modal or external link
                    className="inline-block text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedGroup;
