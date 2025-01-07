import React from "react";
import { FiCalendar, FiDollarSign, FiFlag } from "react-icons/fi";

const CampaignDetails: React.FC = () => {
  const campaign = {
    title: "Summer Fashion Campaign",
    description:
      "A campaign focused on promoting our summer collection through top influencers in the fashion industry. Engage with a wider audience and boost brand visibility this season.",
    status: "Active",
    budget: "$10,000",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    metrics: {
      impressions: "1.2M",
      engagements: "350K",
      conversions: "45K",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold">{campaign.title}</h1>
          <p className="text-lg mt-2">
            Explore all the details and performance metrics of this campaign.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
          {/* Campaign Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Campaign Overview
            </h2>
            <p className="text-gray-700">{campaign.description}</p>
          </section>

          {/* Campaign Details */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
              <FiFlag className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-lg font-semibold">{campaign.status}</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
              <FiDollarSign className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-600">Budget</p>
                <p className="text-lg font-semibold">{campaign.budget}</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
              <FiCalendar className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-600">Start Date</p>
                <p className="text-lg font-semibold">{campaign.startDate}</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
              <FiCalendar className="text-blue-500 text-2xl" />
              <div>
                <p className="text-sm text-gray-600">End Date</p>
                <p className="text-lg font-semibold">{campaign.endDate}</p>
              </div>
            </div>
          </section>

          {/* Campaign Metrics */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-extrabold text-green-600">
                  {campaign.metrics.impressions}
                </h3>
                <p className="text-sm text-gray-600">Impressions</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-extrabold text-yellow-600">
                  {campaign.metrics.engagements}
                </h3>
                <p className="text-sm text-gray-600">Engagements</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-extrabold text-purple-600">
                  {campaign.metrics.conversions}
                </h3>
                <p className="text-sm text-gray-600">Conversions</p>
              </div>
            </div>
          </section>

          {/* Call-to-Action */}
          <section className="text-center mt-8">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
              Edit Campaign
            </button>
            <button className="ml-4 bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition duration-200">
              Back to Campaigns
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CampaignDetails;
