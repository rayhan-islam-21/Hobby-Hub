import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../../AuthContext/AuthContext";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { signUpwithEmail, signUpwithGoogle } = useContext(AuthContext);
  const notify = ()=>   toast.success("Account Created Successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        fontSize: "1rem",
        padding: "12px 24px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
      },
    });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      photoURL: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const { name, email, password, photoURL } = values;
      signUpwithEmail(email, password)
        .then(() => {
          console.log("user created");
          notify()
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
    },
  });

  const handleGoogleSignUp = () => {
     signUpwithGoogle()
     .then((result)=>{
        console.log(result)
        console.log("Google")
        console.log("Google sign-up clicked");
        notify()
     })
     .catch((err)=>{
        console.log(err)
     })
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
        <ToastContainer></ToastContainer>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
              className="w-full  text-black  px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photoURL"
              value={formik.values.photoURL}
              onChange={formik.handleChange}
              required
              className="w-full px-4  text-black  py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              className="w-full px-4  text-black  py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
              className="w-full px-4  text-black  py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaGoogle />
          Sign up with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
