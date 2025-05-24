import React from "react";
import { FaUsers, FaPaintBrush, FaCalendarAlt, FaCameraRetro, FaRocket } from "react-icons/fa";

const WhyHobbyHub = () => {
  const reasons = [
    {
      icon: <FaUsers className="text-purple-400 hover:text-white  text-2xl mr-3" />,
      text: "Connect with like-minded individuals",
    },
    {
      icon: <FaPaintBrush className="text-purple-400 hover:text-white  text-2xl mr-3" />,
      text: "Explore and grow new hobbies",
    },
    {
      icon: <FaCalendarAlt className="text-purple-400 hover:text-white text-2xl mr-3" />,
      text: "Attend fun events and meetups",
    },
    {
      icon: <FaCameraRetro className="text-purple-400 hover:text-white  text-2xl mr-3" />,
      text: "Share your work and passion",
    },
    {
      icon: <FaRocket className="text-purple-400 hover:text-white  text-2xl mr-3" />,
      text: "Build a creative community",
    },
  ];

  return (
    <section className=" py-16 px-4 mb-4">
      <h2 className="text-2xl lg:text-4xl md:text-3xl font-bold text-center mb-10">
        💡 Why Join HobbyHub?
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className=" hover:ring-2  hover:bg-gradient-to-r from-violet-500 to-purple-900  hover:text-white shadow-md transition-transform hover:scale-103 hover:shadow-xl p-6 rounded-xl text-gray-700 font-medium flex items-center"
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHobbyHub;
