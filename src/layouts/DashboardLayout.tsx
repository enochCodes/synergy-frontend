import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashbordHeader";

const DashboardLayout: React.FC = () => {
  const userName = "Enoch Ndika"; // Replace this with dynamic user data as needed

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col" style={{ marginLeft: "16rem" }}>
        {/* Header */}
        <DashboardHeader userName={userName} />

        {/* Page Content */}
        <main className="p-2 mt-2">
          {/* The `mt-20` ensures content starts below the header */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
