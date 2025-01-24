import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import SynergyLogo from "../assets/Synergy.svg";
import { getUserFromToken } from "../hooks/auth.hooks";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user info from the token
  const user = getUserFromToken();

  // Function to get the dashboard route based on user role
  const getDashboardRoute = () => {
    if (user?.role === "CREATOR") {
      return "/creators/dashboard";
    } else if (user?.role === "BUSINESS") {
      return "/business/dashboard";
    }
    return null;
  };

  const dashboardRoute = getDashboardRoute();

  // Handle log out
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/auth/login"); // Redirect to login
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img src={SynergyLogo} alt="Synergy Logo" className="h-10" />
            </NavLink>
          </div>

          {/* Center: Navigation Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Campaigns
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold border-b-2 border-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {dashboardRoute ? (
              <>
                <button
                  onClick={() => navigate(dashboardRoute)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `px-6 py-2 rounded-lg font-semibold shadow-md transition duration-200 ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    }`
                  }
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/getstarted"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`
                  }
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {menuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Campaigns
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition duration-200 ${
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            {dashboardRoute ? (
              <>
                <button
                  onClick={() => {
                    navigate(dashboardRoute);
                    setMenuOpen(false);
                  }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 text-center"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition duration-200 text-center"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `font-medium transition duration-200 ${
                      isActive
                        ? "text-blue-500 font-bold"
                        : "text-gray-700 hover:text-blue-500"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/getstarted"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
