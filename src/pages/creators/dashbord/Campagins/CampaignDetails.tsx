import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  FiBarChart2,
  FiEye,
  FiThumbsUp,
  FiShoppingCart,
  FiArrowLeft,
} from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";

// Register Chart.js components, including the Filler plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
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

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#4B5563",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#4B5563",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          color: "#4B5563",
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          color: "#4B5563",
          callback: function (value: any) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {campaign.title}
            </h1>
            <p className="text-gray-600">{campaign.description}</p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
          >
            <FiArrowLeft className="mr-2" />
            Back
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Stats Section */}
          <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quick Stats
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex items-center">
                <FiBarChart2 className="text-blue-600 text-3xl mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total Impressions</p>
                  <p className="text-lg font-semibold text-blue-600">1.2M</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow-sm flex items-center">
                <FiBarChart2 className="text-yellow-600 text-3xl mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total Engagements</p>
                  <p className="text-lg font-semibold text-yellow-600">350K</p>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm flex items-center">
                <FiBarChart2 className="text-purple-600 text-3xl mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Total Conversions</p>
                  <p className="text-lg font-semibold text-purple-600">45K</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats by Platform Section */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Stats by Platform
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {campaign.platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center transition"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {platform.name}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <FiEye className="text-blue-500 text-2xl" />
                        <div>
                          <p className="text-sm text-gray-600">Impressions</p>
                          <p className="text-lg font-medium">
                            {platform.metrics.impressions.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiThumbsUp className="text-yellow-500 text-2xl" />
                        <div>
                          <p className="text-sm text-gray-600">Engagements</p>
                          <p className="text-lg font-medium">
                            {platform.metrics.engagements.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiShoppingCart className="text-purple-500 text-2xl" />
                        <div>
                          <p className="text-sm text-gray-600">Conversions</p>
                          <p className="text-lg font-medium">
                            {platform.metrics.conversions.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics Graph */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Performance Metrics Over Time
            </h2>
            <span className="text-gray-600">
              <MdOutlineDateRange className="inline-block mr-1" />
              {campaign.startDate} - {campaign.endDate}
            </span>
          </div>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
