import React from "react";
import { Link } from "react-router-dom";

const Matches: React.FC = () => {
  const matches = [
    {
      id: 1,
      name: "Brand A",
      description: "Looking for tech influencers to promote their products.",
      requiredSkills: ["Tech", "Gadgets", "Social Media"],
      status: "High Demand",
    },
    {
      id: 2,
      name: "Brand B",
      description: "Collaborating on lifestyle campaigns for a wider reach.",
      requiredSkills: ["Lifestyle", "Photography", "Travel"],
      status: "Open",
    },
    {
      id: 3,
      name: "Brand C",
      description: "Promoting sustainable fashion with top influencers.",
      requiredSkills: ["Fashion", "Sustainability", "Blogging"],
      status: "New",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "High Demand":
        return "bg-red-100 text-red-600";
      case "Open":
        return "bg-green-100 text-green-600";
      case "New":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 px-6 py-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="max-w-10xl mx-auto">
          <h1 className="text-2xl font-extrabold mb-2">Recommended Matches</h1>
          <p className="text-lg font-light">
            Explore campaigns and brands curated for your expertise and
            interests. Connect with opportunities that align with your niche.
          </p>
        </div>
      </header>

      {/* Matches List */}
      <div className="max-w-20xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Matches</h2>
        {matches.map((match) => (
          <div
            key={match.id}
            className="border-b last:border-none border-gray-200 py-6 flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            {/* Match Details */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                {match.name}
                {match.status && (
                  <span
                    className={`ml-3 text-sm font-medium px-2 py-1 rounded-full ${getStatusStyle(
                      match.status,
                    )}`}
                  >
                    {match.status}
                  </span>
                )}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{match.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {match.requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Actions */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link
                to={`/creators/dashboard/matches/${match.id}`}
                className="text-blue-500 font-medium hover:underline"
              >
                View Details
              </Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200">
                Connect Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
