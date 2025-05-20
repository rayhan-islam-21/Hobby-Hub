import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-7xl sm:text-9xl font-extrabold text-blue-600">404</h1>
      <p className="text-xl sm:text-2xl font-semibold mt-4 text-gray-700 text-center">Page Not Found</p>
      <p className="mt-2 text-gray-500 text-center max-w-xs sm:max-w-md px-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
      >
        <FaArrowLeft />
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
