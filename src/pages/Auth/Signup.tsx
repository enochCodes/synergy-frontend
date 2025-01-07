import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SynergyLogo from "../../assets/Synergy.svg";
import GoogleIcon from "../../assets/google.svg";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [isCreator, setIsCreator] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const role = sessionStorage.getItem("selectedRole");
    if (!role) {
      navigate("/getstarted");
    }
    if (role === "CREATOR") {
      setIsCreator(true);
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const role = isCreator ? "CREATOR" : "BUSINESS";
      // Simulate an API call
      const signup = async (data: any) => {
        data;
      };
      const responseData = await signup({ ...formData, role });

      // Save token to session or local storage
      sessionStorage.setItem("token", responseData.token);

      // Navigate to appropriate page based on role
      if (role === "CREATOR") {
        navigate("/creators/dashboard/onboarding");
      } else {
        navigate("/bussiness/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 bg-white flex flex-col justify-center">
        <div className="text-center md:text-left mb-8">
          <img
            src={SynergyLogo}
            alt="Synergy Logo"
            className="h-16 mx-auto md:flex"
          />
          <h1 className="text-3xl font-extrabold mt-6 text-center">
            Create a new account
          </h1>
          {isCreator ? (
            <p className="text-gray-600 text-lg mt-4 text-center">
              Connect with businesses looking for creators like you. Showcase
              your skills, passions, and experience – all for free.
            </p>
          ) : (
            <p className="text-gray-600 text-lg mt-4 text-center">
              Find the best creators to grow your business. Collaborate and
              unlock new opportunities with Synergy.
            </p>
          )}
        </div>
        <button className="flex items-center justify-center w-full border border-gray-300 py-4 rounded-lg text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition duration-200">
          <img src={GoogleIcon} alt="Google Icon" className="h-6 w-6 mr-2" />
          Sign up with Google
        </button>
        <div className="mt-4 flex items-center justify-between">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-500 mx-4">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 font-medium">
            Log in
          </Link>
        </p>
      </div>

      {/* Right Side: Testimonial */}
      <div className="w-full md:w-1/2 bg-blue-500 text-white p-8 sm:p-12 flex items-center justify-center flex-col ">
        <p className="text-xl sm:text-2xl italic font-light text-center leading-relaxed">
          "Synergy is the best platform for connecting creators and businesses.
          Exceptional opportunities and great support!"
        </p>
        <p className="mt-8 text-right font-semibold text-lg sm:text-xl">
          – Henok Samson
        </p>
      </div>
    </div>
  );
};

export default Signup;
