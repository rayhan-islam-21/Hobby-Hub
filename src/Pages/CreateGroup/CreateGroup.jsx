import React, { useContext } from "react";
import { useFormik } from "formik";
import AuthContext from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const notify = () => toast.success("Group Created Successfully");
  const hobbyCategories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  const formik = useFormik({
    initialValues: {
      groupName: "",
      category: "",
      description: "",
      meetingLocation: "",
      maxMembers: "",
      startDate: "",
      imageUrl: "",
    },
    onSubmit: (values, { resetForm }) => {
      const groupData = {
        ...values,
        userName: user?.displayName,
        userEmail: user?.email,
      };
      //Post the group data to the server
      fetch("http://localhost:3000/allgroups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(groupData),
      })
        .then((response) => {
          if (response) {
            notify();
            resetForm();
        }})
        .catch(() => {
          toast.error("Failed to create group");
        });
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-start py-10 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Create a Hobby Group
        </h2>

        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Group Name
            </label>
            <input
              type="text"
              name="groupName"
              onChange={formik.handleChange}
              value={formik.values.groupName}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-` focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Hobby Category
            </label>
            <select
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              required
              className="w-full px-4 py-2 border rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-blue-400 outline-none"
            >
              <option value="">Select a category</option>
              {hobbyCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              rows={4}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Meeting Location
            </label>
            <input
              type="text"
              name="meetingLocation"
              onChange={formik.handleChange}
              value={formik.values.meetingLocation}
              required
              className="w-full px-4 py-2 border rounded-xl focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Max Members
              </label>
              <input
                type="number"
                name="maxMembers"
                onChange={formik.handleChange}
                value={formik.values.maxMembers}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-1 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                onChange={formik.handleChange}
                value={formik.values.startDate}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-1 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                User Name
              </label>
              <input
                type="text"
                value={user?.displayName || "Not Logged In"}
                readOnly
                className="w-full px-4 py-2 border rounded-xl bg-gray-100 text-gray-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                User Email
              </label>
              <input
                type="email"
                value={user?.email || "Not Logged In"}
                readOnly
                className="w-full px-4 py-2 border rounded-xl bg-gray-100 text-gray-700"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
