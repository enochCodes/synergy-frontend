import React, { useState } from "react";
import Overview from "./overview";
import Preferences from "./preferences";
import NicheExpertise from "./NicheExpertise";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Support from "./Support";

const TABS = [
  { name: "Overview", component: <Overview /> },
  { name: "Preferences", component: <Preferences /> },
  { name: "Niche Expertise", component: <NicheExpertise /> },
  { name: "Experience", component: <Experience /> },
  { name: "Portfolio", component: <Portfolio /> },
  { name: "Support", component: <Support /> },
];

const ProfileOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    const activeTabContent = TABS.find((tab) => tab.name === activeTab);
    return activeTabContent?.component || <Overview />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md top-0 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {activeTab}
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              Manage your {activeTab.toLowerCase()} details efficiently.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 shadow-md transition duration-200">
              Edit Profile
            </button>
            <button className="bg-transparent border border-blue-500 text-blue-500 px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white shadow-md transition duration-200">
              View Public Profile
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <nav className="border-t border-gray-200">
          <ul className="flex flex-wrap justify-center md:justify-start">
            {TABS.map((tab) => (
              <li key={tab.name} className="mx-2">
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`text-sm md:text-base px-4 py-2 font-semibold ${
                    activeTab === tab.name
                      ? "text-blue-500 border-b-4 border-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  } transition duration-200`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-4 mt-2 border-0">{renderContent()}</main>
    </div>
  );
};

export default ProfileOverview;
