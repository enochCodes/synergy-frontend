import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for password reset
    console.log("Password reset email sent to:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address, and we’ll send you a link to reset your
          password.
        </p>
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-green-500 font-medium">
              A password reset link has been sent to your email.
            </p>
            <p className="mt-4">
              Please check your inbox, and follow the instructions to reset your
              password.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <FiMail className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            >
              Send Reset Link
            </button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <a
            href="/auth/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
