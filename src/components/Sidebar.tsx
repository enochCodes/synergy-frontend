import React from "react";
import { NavLink } from "react-router-dom";
import { FiUser, FiStar, FiBarChart, FiLogOut } from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 h-screen z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Branding */}
      <div className="bg-blue-600 text-white py-5 flex items-center justify-center">
        <h2 className="text-2xl font-bold tracking-wide">Synergy</h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-6 space-y-2">
        <NavLink
          to="/creators/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition duration-200 ${
              isActive
                ? "bg-blue-100 text-blue-600 shadow-sm"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
            }`
          }
          onClick={toggleSidebar}
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
          onClick={toggleSidebar}
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
          onClick={toggleSidebar}
        >
          <FiBarChart className="text-xl" />
          <span>Campaign Tracker</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto p-6 border-t border-gray-200">
        <button
          className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-red-50 hover:text-red-500 transition duration-200 focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiLogOut className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
