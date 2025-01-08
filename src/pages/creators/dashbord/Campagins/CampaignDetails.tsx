import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiBarChart2, FiArrowLeft } from "react-icons/fi";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

const CampaignDetails: React.FC = () => {
  const campaign = {
    title: "Summer Fashion Campaign",
    description:
      "Promote our summer collection by collaborating with influencers on Instagram, TikTok, and Facebook. Boost visibility and engagement this season.",
    status: "Active",
    budget: "$10,000",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    platforms: [
      {
        name: "Instagram",
        metrics: {
          impressions: 700000,
          engagements: 250000,
          conversions: 25000,
        },
      },
      {
        name: "TikTok",
        metrics: {
          impressions: 400000,
          engagements: 80000,
          conversions: 15000,
        },
      },
      {
        name: "Facebook",
        metrics: {
          impressions: 100000,
          engagements: 20000,
          conversions: 5000,
        },
      },
    ],
  };

  const chartData = {
    labels: campaign.platforms.map((platform) => platform.name),
    datasets: [
      {
        label: "Impressions",
        data: campaign.platforms.map(
          (platform) => platform.metrics.impressions,
        ),
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Engagements",
        data: campaign.platforms.map(
          (platform) => platform.metrics.engagements,
        ),
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Conversions",
        data: campaign.platforms.map(
          (platform) => platform.metrics.conversions,
        ),
        borderColor: "#9c27b0",
        backgroundColor: "rgba(156, 39, 176, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow p-6 mb-8">
        <div className="max-w-20xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">{campaign.title}</h1>
            <p className="mt-2 text-lg font-light">{campaign.description}</p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            <FiArrowLeft className="text-lg" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row max-w-20xl mx-auto gap-6">
        {/* Side Section */}
        <aside className="lg:w-1/4 bg-white shadow-lg p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-800">Quick Stats</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow flex items-center">
              <FiBarChart2 className="text-blue-600 text-3xl mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Impressions</p>
                <p className="text-lg font-semibold text-blue-600">1.2M</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow flex items-center">
              <FiBarChart2 className="text-yellow-600 text-3xl mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Engagements</p>
                <p className="text-lg font-semibold text-yellow-600">350K</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg shadow flex items-center">
              <FiBarChart2 className="text-purple-600 text-3xl mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Conversions</p>
                <p className="text-lg font-semibold text-purple-600">45K</p>
              </div>
            </div>
          </div>

          {/* Quick Stats by Platform */}
          <h2 className="text-xl font-bold text-gray-800 mt-8">
            Stats by Platform
          </h2>
          <div className="space-y-6">
            {campaign.platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-50 p-4 rounded-lg shadow space-y-2"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {platform.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Impressions:</span>
                  <span className="text-sm text-gray-800 font-medium">
                    {platform.metrics.impressions.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Engagements:</span>
                  <span className="text-sm text-gray-800 font-medium">
                    {platform.metrics.engagements.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Conversions:</span>
                  <span className="text-sm text-gray-800 font-medium">
                    {platform.metrics.conversions.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 space-y-12">
          {/* Performance Metrics Graph */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Performance Metrics Over Time
            </h2>
            <Line data={chartData} options={{ responsive: true }} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default CampaignDetails;
