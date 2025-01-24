import React from "react";

const Support: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 md:p-8">
      {/* Header */}
      <header className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Support</h2>
        <p className="text-gray-600">
          Need help? Contact our support team for assistance.
        </p>
      </header>

      {/* Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            placeholder="Describe your issue here..."
            rows={4}
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Send Message Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Support;
