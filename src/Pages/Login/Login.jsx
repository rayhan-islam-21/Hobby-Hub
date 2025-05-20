import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import AuthContext from "../../AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
  const { signInWithEmail,signUpwithGoogle } = useContext(AuthContext);
  const notify = () =>
    toast.success("Logged in Successfully!", {
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
    initialValues: {},
    onSubmit: (values,{resetForm}) => {
      const { email, password } = values;
      signInWithEmail(email, password)
        .then(() => {
          console.log("user logged in");
          notify();
          resetForm();
         navigate(location.state? location.state :"/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const handleGoogleLogin = () => {
    signUpwithGoogle()
      .then((result) => {
        console.log(result);
        notify();
        navigate(location.state? location.state :"/")
      })
        .catch((err) => {
        console.log(err);
        })
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-start my-20 justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className=" md:text-2xl text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <ToastContainer></ToastContainer>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
              className="w-full px-4 text-black py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-4 py-2  text-black mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-green-600 duration-200 transition"
        >
          <FaGoogle />
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
