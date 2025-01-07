import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
