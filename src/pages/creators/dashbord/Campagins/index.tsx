import React from "react";
import { Link } from "react-router-dom";
import { FiCircle, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const CampaignTracker: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      title: "Summer Fashion Campaign",
      description: "Promoting trendy summer wear with top influencers.",
      status: "Active",
    },
    {
      id: 2,
      title: "Tech Gadgets Review",
      description: "Collaborating on the latest tech gadget reviews.",
      status: "Completed",
    },
    {
      id: 3,
      title: "Holiday Travel Influencers",
      description: "Highlighting the best holiday travel destinations.",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-500 bg-green-50";
      case "Completed":
        return "text-gray-500 bg-gray-100";
      case "Pending":
        return "text-yellow-500 bg-yellow-50";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-1 py-2">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow p-6 mb-8 text-center sm:text-left">
        <h1 className="text-2xl font-extrabold mb-2">Campaign Tracker</h1>
        <p className="text-lg">
          Stay informed about your campaigns' progress and manage them
          efficiently.
        </p>
      </header>

      {/* Campaign List */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow bg-gray-50 flex flex-col justify-between"
            >
              {/* Campaign Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {campaign.description}
                </p>
              </div>
              {/* Status and Actions */}
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getStatusStyle(
                    campaign.status,
                  )}`}
                >
                  {campaign.status === "Active" && (
                    <FiCircle className="mr-2 text-green-500" />
                  )}
                  {campaign.status === "Completed" && (
                    <FiCheckCircle className="mr-2 text-gray-500" />
                  )}
                  {campaign.status}
                </span>
                <Link
                  to={`/creators/dashboard/campaigns/${campaign.id}`}
                  className="text-blue-500 flex items-center font-medium hover:underline"
                >
                  View Details <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignTracker;
