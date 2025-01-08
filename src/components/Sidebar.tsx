import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiStar,
  FiBarChart,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-lg p-4 flex items-center justify-between z-50">
        <h2 className="text-xl font-extrabold text-blue-500 tracking-wide uppercase">
          Synergy
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-blue-500 transition duration-200 focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 h-screen md:translate-x-0 transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Branding */}
        <div className="bg-blue-600 text-white py-5 flex items-center justify-center">
          <h2 className="text-2xl font-bold tracking-wide">Synergy</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6 space-y-4">
          <NavLink
            to="/creators/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 shadow-sm"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
              }`
            }
          >
            <FiUser className="text-xl" />
            <span>Your Profile</span>
          </NavLink>
          <NavLink
            to="/creators/dashboard/matches"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 shadow-sm"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
              }`
            }
          >
            <FiStar className="text-xl" />
            <span>Matches</span>
          </NavLink>
          <NavLink
            to="/creators/dashboard/campaigns"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 shadow-sm"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
              }`
            }
          >
            <FiBarChart className="text-xl" />
            <span>Campaign Tracker</span>
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="mt-auto p-6 ml-10 border-t border-gray-200">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-red-50 hover:text-red-500 transition duration-200 focus:outline-none">
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
        />
      )}
    </div>
  );
};

export default Sidebar;
