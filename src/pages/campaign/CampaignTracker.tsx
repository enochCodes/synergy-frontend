import React from "react";

const CampaignTracker: React.FC = () => {
  const campaigns = [
    { id: 1, title: "Summer Fashion Campaign", status: "Active" },
    { id: 2, title: "Tech Gadgets Review", status: "Completed" },
  ];

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Campaign Tracker</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Your Campaigns</h2>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="p-4 border border-gray-300 rounded-lg flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg">{campaign.title}</h3>
                <p className="text-gray-500 text-sm">
                  Status: {campaign.status}
                </p>
              </div>
              <button className="text-blue-500 hover:underline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignTracker;
