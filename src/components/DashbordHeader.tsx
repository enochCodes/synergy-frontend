import React from "react";
import { FiMenu } from "react-icons/fi";

interface DashboardHeaderProps {
  userName: string;
  toggleSidebar: () => void;
  userProfileImage?: string; // Optional user profile image URL
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  toggleSidebar,
  userProfileImage,
}) => {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-700 hover:text-blue-500 transition duration-200 focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          <FiMenu className="text-2xl" />
        </button>

        {/* Title */}
        <div>
          <h1 className="text-1xl font-extrabold text-gray-900">
            Welcome, {userName}!
          </h1>
          <p className="text-sm text-gray-500">
            Here's your dashboard overview.
          </p>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          {/* Mobile: Only profile circle */}
          <div className="md:hidden">
            <img
              src={userProfileImage || "https://via.placeholder.com/40"} // Default placeholder
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Desktop: Profile image and user name */}
          <div className="hidden md:flex items-center space-x-2">
            <img
              src={userProfileImage || "https://via.placeholder.com/40"} // Default placeholder
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-800 text-sm font-medium">
              {userName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
