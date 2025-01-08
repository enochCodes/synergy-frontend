import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiUsers, FiTag, FiBriefcase } from "react-icons/fi";

const MatchDetails: React.FC = () => {
  const { id } = useParams();

  // Mock data for demonstration
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
      { id: 101, title: "Tech Gadgets Launch" },
      { id: 102, title: "Smart Devices Review" },
    ],
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow p-6 mb-8">
        <div className="max-w-20xl mx-auto">
          <h1 className="text-3xl sm:text-2xl font-extrabold">{match.name}</h1>
          <p className="mt-2 text-lg font-light">{match.description}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-20xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-12">
          {/* Match Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {match.campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    {campaign.title}
                  </h3>
                  <Link
                    to={`/campaigns/${campaign.id}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {/* Buttons section */}
      <div className="max-w-10xl flex gap-6 mx-auto px-10 py-16 my:4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Connect Now
        </button>
        <Link
          to="/creators/dashboard/matches"
          className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white shadow-md transition duration-200"
        >
          <span>Back to Matches</span>
        </Link>
      </div>
    </div>
  );
};

export default MatchDetails;
