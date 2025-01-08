import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiUsers,
  FiTag,
  FiBriefcase,
  FiCalendar,
  FiArrowLeft,
  FiMail,
} from "react-icons/fi";

const MatchDetails: React.FC = () => {
  const { id } = useParams();

  const match = {
    id: 1,
    name: "Brand A",
    description: "Looking for tech influencers to promote their products.",
    requiredSkills: ["Tech", "Gadgets", "Social Media"],
    collaborationType: "Paid Partnership",
    budget: "$5,000 - $10,000",
    contactEmail: "brandA@example.com",
    status: "Open",
    campaigns: [
      { id: 101, title: "Tech Gadgets Launch", startDate: "2023-11-21" },
      { id: 102, title: "Smart Devices Review" },
    ],
    thumbnail: "https://source.unsplash.com/800x400/?technology,brand",
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Open":
        return "text-green-500 bg-green-100";
      case "Closed":
        return "text-gray-500 bg-gray-200";
      default:
        return "text-gray-500 bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-gray-200">
      {/* Brand Thumbnail */}
      <div className="relative w-full h-60 bg-gray-200 rounded-b-lg overflow-hidden mb-8 shadow-lg">
        {/* Thumbnail Image */}
        <img
          src={match.thumbnail}
          alt={`${match.name} thumbnail`}
          className="w-full h-full object-cover"
        />

        {/* Overlay and Title */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white">{match.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-12">
          {/* Match Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
                <FiUsers className="text-blue-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-600">Collaboration Type</p>
                  <p className="text-lg font-medium">
                    {match.collaborationType}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
                <FiTag className="text-blue-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-600">Budget</p>
                  <p className="text-lg font-medium">{match.budget}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
                <FiBriefcase className="text-blue-500 text-3xl" />
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span
                    className={`text-lg font-medium px-3 py-1 rounded-md inline-block ${getStatusStyle(
                      match.status,
                    )}`}
                  >
                    {match.status}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Required Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Required Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {match.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Associated Campaigns */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Associated Campaigns
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {match.campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {campaign.title}
                  </h3>
                  {campaign.startDate && (
                    <p className="text-sm text-gray-600 mt-1">
                      <FiCalendar className="inline-block mr-1" />
                      Starts:{" "}
                      {new Date(campaign.startDate).toLocaleDateString()}
                    </p>
                  )}
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="text-blue-500 font-medium hover:underline mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <aside className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 flex items-center">
              <FiMail className="text-blue-500 mr-2" />
              <a
                href={`mailto:${match.contactEmail}`}
                className="text-blue-500 hover:underline"
              >
                {match.contactEmail}
              </a>
            </p>
          </div>
          {/* Buttons */}
          <div className="max-w-4xl mx-auto flex gap-4 justify-start mt-8 px-6">
            {/* Connect Now Button */}
            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-md"
            >
              Connect Now
            </button>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="bg-gray-100 border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white shadow-md transition duration-200 flex items-center"
            >
              <FiArrowLeft className="mr-2" />
              Back
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default MatchDetails;
