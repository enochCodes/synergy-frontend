import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import SynergyLogo from "../assets/Synergy.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={SynergyLogo} alt="Synergy Logo" className="h-10" />
            </Link>
          </div>

          {/* Center: Navigation Links (hidden on small screens) */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/campaigns"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
            >
              Campaigns
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/auth/login"
              className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white shadow-md transition duration-200"
            >
              Log in
            </Link>
            <Link
              to="/getstarted"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </Link>
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
            <Link
              to="/campaigns"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Campaigns
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/auth/login"
              className="text-gray-700 hover:text-blue-500 font-medium transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/getstarted"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
