import React from "react";
import { useNavigate } from "react-router-dom";
import SynergyLogo from "../assets/Synergy.svg";
import { useEffect } from "react";

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: "CREATOR" | "BUSINESS") => {
    sessionStorage.setItem("selectedRole", role);
    navigate("/auth/signup"); // Redirect to signup page
  };
  useEffect(() => {
    const role = sessionStorage.getItem("selectedRole");
    if (role) {
      navigate("/auth/signup");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-gray-50">
      {/* Left Side: Role Selection */}
      <div className="w-full md:w-1/2 p-8 sm:p-12 bg-white flex flex-col justify-center">
        <div className="text-center md:text-left mb-8">
          <img
            src={SynergyLogo}
            alt="Synergy Logo"
            className="h-12 mx-auto md:flex"
          />
          <h1 className="text-2xl sm:text-3xl text-center font-extrabold mt-6">
            Sign up to Synergy
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg mt-4 text-center">
            Join over 50,000 satisfied creators and businesses already
            connecting through our platform.
          </p>
        </div>
        <div className="space-y-6">
          <button
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-medium text-left hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition duration-200"
            onClick={() => handleRoleSelect("CREATOR")}
          >
            <div className="flex items-center justify-between">
              <span>
                <strong className="text-sm sm:text-lg">
                  I'm a creator looking for opportunities
                </strong>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Get matched with businesses for free to showcase your
                  influence.
                </span>
              </span>
              <span className="text-gray-500 text-lg sm:text-xl hover:text-blue-500">
                →
              </span>
            </div>
          </button>
          <button
            className="w-full border border-gray-300 text-gray-700 py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-medium text-left hover:bg-blue-50 hover:text-blue-500 hover:border-blue-500 transition duration-200"
            onClick={() => handleRoleSelect("BUSINESS")}
          >
            <div className="flex items-center justify-between">
              <span>
                <strong className="text-sm sm:text-lg">
                  I'm a business looking for creators
                </strong>
                <br />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Connect with top creators to amplify your brand.
                </span>
              </span>
              <span className="text-gray-500 text-lg sm:text-xl hover:text-blue-500">
                →
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Right Side: Testimonial */}
      <div className="w-full md:w-1/2 bg-blue-500 text-white p-8 sm:p-12 flex items-center justify-center flex-col md:order-last">
        <p className="text-lg sm:text-2xl italic font-light text-center leading-relaxed">
          "Synergy is the best platform for connecting creators and businesses.
          Exceptional opportunities and great support!"
        </p>
        <p className="mt-8 text-right font-semibold text-sm sm:text-lg">
          – Henok Samson
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
