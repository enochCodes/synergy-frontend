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
        return "bg-green-500 text-white px-2 py-1 rounded-full";
      case "Completed":
        return "bg-gray-200 text-gray-600 px-2 py-1 rounded-full";
      case "Pending":
        return "bg-yellow-500 text-white px-2 py-1 rounded-full";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow p-6 mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">Campaign Tracker</h1>
        <Link
          to="/create-campaign"
          className="text-white hover:underline font-semibold"
        >
          Create Campaign
        </Link>
      </header>

      {/* Campaign List */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
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
              <div className="mt-4 flex flex-1 items-center justify-between">
                <span
                  className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${getStatusStyle(campaign.status)}`}
                >
                  {campaign.status === "Active" && (
                    <FiCircle className="mr-2 text-white" />
                  )}
                  {campaign.status === "Completed" && (
                    <FiCheckCircle className="mr-2 text-gray-600" />
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
