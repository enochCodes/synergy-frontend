import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SynergyLogo from "../../assets/Synergy.svg"; // Adjust the path as necessary
import GoogleIcon from "../../assets/google.svg"; // Adjust the path as necessary
import { login } from "../../services/auth.service"; // Adjust the path as necessary
import { getUserFromToken } from "../../hooks/auth.hooks"; // Adjust the path as necessary

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Error state
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = getUserFromToken();
      if (user?.role == "CREATOR") {
        navigate("/creators/dashboard");
      }
      if (user?.role == "BUSINESS") {
        navigate("/business/dashboard");
      }
    }
  }, [navigate]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(email, password);
      localStorage.setItem("authToken", response.token);

      const user = getUserFromToken();
      if (user?.role === "CREATOR") {
        navigate("/creators/dashboard");
      } else if (user?.role === "BUSINESS") {
        navigate("/business/dashboard");
      } else {
        throw new Error("Invalid user role.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Form Container */}
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        {/* Logo and Title */}
        <div className="text-center">
          <img src={SynergyLogo} alt="Synergy Logo" className="h-16 mx-auto" />
          <h1 className="text-2xl font-bold mt-4">Log in to Synergy</h1>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Google Sign-in */}
        <button
          disabled={loading}
          className="flex items-center justify-center w-full border border-gray-300 py-3 mt-6 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-200"
        >
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
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Error Message */}
          {error && (
            <div className="mb-4 text-sm text-red-600 text-center">{error}</div>
          )}

          {/* Email Input */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-medium transition duration-200 ${
              loading
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-4 text-center">
          <Link
            to="/auth/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgotten password?
          </Link>
        </div>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
