import React from "react";
import { FiBell } from "react-icons/fi";

interface HeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-20xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo or Title */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Welcome, {userName}!
          </h1>
          <p className="text-sm text-gray-500">
            Here's your dashboard overview.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FiBell className="text-gray-600 text-xl" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
              {userName.charAt(0).toUpperCase()}
            </div>
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
