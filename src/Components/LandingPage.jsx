import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 absolute bottom-10">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-6 space-y-4">
            <Link
              to="/signup"
              className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="block w-full text-center bg-purple-200 text-purple-700 py-3 rounded-lg font-medium hover:bg-purple-300 transition"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
