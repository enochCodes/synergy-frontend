import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Overview
        </h1>
      </header>

      {/* Profile Picture Upload Section */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">
          Profile Picture
        </h3>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Profile Picture Placeholder */}
          <div className="relative w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center shadow-md overflow-hidden">
            <span className="text-gray-400 text-sm">No Image</span>
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-white text-sm font-medium">Change</span>
            </div>
          </div>
          {/* Upload Info */}
          <div className="text-center md:text-left">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
              Upload Photo
            </button>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Drag & drop or click to upload. Use a square image for best
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Username Section */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Username*</h3>
        <div className="relative">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value="enochCodes"
            readOnly
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 text-sm md:text-base">
            synergy.app/@enochCodes
          </span>
        </div>
      </section>

      {/* Social Links Section */}
      <section>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Social Links*
        </h3>
        <div className="space-y-6">
          {/* TikTok */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <label className="w-28 text-gray-600 font-medium">TikTok:</label>
            <input
              type="url"
              placeholder="e.g. tiktok.com/@enochCodes"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Instagram */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <label className="w-28 text-gray-600 font-medium">Instagram:</label>
            <input
              type="url"
              placeholder="e.g. instagram.com/@enochCodes"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="mt-8">
        <button className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Overview;
