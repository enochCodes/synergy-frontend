import React from "react";
import { Link } from "react-router-dom";
import SynergyLogo from "../../assets/Synergy.svg"; // Adjust the path as necessary
import GoogleIcon from "../../assets/google.svg"; // Adjust the path as necessary

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Form Container */}
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <img src={SynergyLogo} alt="Synergy Logo" className="h-16 mx-auto" />
          <h1 className="text-2xl font-bold mt-4">Log in to Synergy</h1>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back. Please enter your details.
          </p>
        </div>
        {/* Google Sign-in */}
        <button className="flex items-center justify-center w-full border border-gray-300 py-3 mt-6 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-200">
          <img src={GoogleIcon} alt="Google Icon" className="h-5 w-5 mr-2" />
          Sign in with Google
        </button>
        {/* Divider */}
        <div className="flex items-center justify-center mt-6">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        {/* Login Form */}
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Sign in
          </button>
        </form>
        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <Link to="/auth/forgot-password" className="text-sm text-blue-500">
            Forgotten password?
          </Link>
        </div>
        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-blue-500 font-medium">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
