import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiDollarSign, FiFlag } from "react-icons/fi";

const CampaignDetails: React.FC = () => {
  const campaign = {
    title: "Summer Fashion Campaign",
    description:
      "A campaign focused on promoting our summer collection by collaborating with top influencers on platforms like Instagram, TikTok, and Facebook. Boost your brand's visibility and engagement this season.",
    status: "Active",
    budget: "$10,000",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    platforms: [
      {
        name: "Instagram",
        metrics: {
          impressions: "700K",
          engagements: "250K",
          conversions: "25K",
        },
      },
      {
        name: "TikTok",
        metrics: {
          impressions: "400K",
          engagements: "80K",
          conversions: "15K",
        },
      },
      {
        name: "Facebook",
        metrics: {
          impressions: "100K",
          engagements: "20K",
          conversions: "5K",
        },
      },
    ],
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-500 bg-green-100";
      case "Completed":
        return "text-gray-500 bg-gray-200";
      case "Pending":
        return "text-yellow-500 bg-yellow-100";
      default:
        return "text-gray-500 bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow p-6 mb-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Title and Description */}
          <div>
            <h1 className="text-2xl font-extrabold">{campaign.title}</h1>
            <p className="mt-2 text-lg font-light">
              Explore all the details and performance metrics of this campaign
              by platform.
            </p>
          </div>
        </div>
      </header>

      {/* Call-to-Action */}
      <section className="flex gap-4 mt-8 p-8 ">
        <Link
          to="/campaigns/edit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Edit Campaign
        </Link>
        <Link
          to="/creators/dashboard/campaigns"
          className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 hover:text-white shadow-md transition duration-200"
        >
          Back to Campaigns
        </Link>
      </section>
      {/* Main Content */}
      <main>
        <div className="max-w-19xl mx-auto bg-white shadow-md rounded-lg p-2 space-y-8">
          {/* Campaign Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Campaign Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {campaign.description}
            </p>
          </section>

          {/* Campaign Details */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FiFlag className="text-blue-500 text-3xl" />
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <span
                  className={`text-lg font-medium px-3 py-1 rounded-md inline-block ${getStatusStyle(
                    campaign.status,
                  )}`}
                >
                  {campaign.status}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FiDollarSign className="text-blue-500 text-3xl" />
              <div>
                <p className="text-sm text-gray-600">Budget</p>
                <p className="text-lg font-medium">{campaign.budget}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FiCalendar className="text-blue-500 text-3xl" />
              <div>
                <p className="text-sm text-gray-600">Start Date</p>
                <p className="text-lg font-medium">{campaign.startDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-blue-50 p-4 rounded-lg shadow-sm">
              <FiCalendar className="text-blue-500 text-3xl" />
              <div>
                <p className="text-sm text-gray-600">End Date</p>
                <p className="text-lg font-medium">{campaign.endDate}</p>
              </div>
            </div>
          </section>

          {/* Campaign Metrics by Platform */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Performance Metrics by Platform
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {campaign.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="p-6 rounded-lg bg-gray-50 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">
                    {platform.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center shadow-sm">
                      <h4 className="text-2xl font-bold text-green-600">
                        {platform.metrics.impressions}
                      </h4>
                      <p className="text-sm text-gray-600">Impressions</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center shadow-sm">
                      <h4 className="text-2xl font-bold text-yellow-600">
                        {platform.metrics.engagements}
                      </h4>
                      <p className="text-sm text-gray-600">Engagements</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center shadow-sm">
                      <h4 className="text-2xl font-bold text-purple-600">
                        {platform.metrics.conversions}
                      </h4>
                      <p className="text-sm text-gray-600">Conversions</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CampaignDetails;
