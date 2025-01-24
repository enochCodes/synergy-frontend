import React from "react";

const Preferences: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Preferences</h1>
        <p className="text-gray-600">
          Customize your account preferences to personalize your experience.
        </p>
      </header>

      {/* Form */}
      <form className="space-y-6">
        {/* Notification Settings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification Settings
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Email Notifications</option>
            <option>Push Notifications</option>
            <option>None</option>
          </select>
        </div>

        {/* Theme Settings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme Preference
          </label>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="theme"
                value="light"
                defaultChecked
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>Light</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="theme"
                value="dark"
                className="text-blue-500 focus:ring-blue-500"
              />
              <span>Dark</span>
            </label>
          </div>
        </div>

        {/* Language Settings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Language Preference
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default Preferences;
