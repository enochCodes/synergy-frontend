import React, { useState } from "react";

const Portfolio: React.FC = () => {
  const [portfolioLinks, setPortfolioLinks] = useState<string[]>([]);
  const [link, setLink] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (link.trim() && isValidURL(link)) {
      setPortfolioLinks([...portfolioLinks, link.trim()]);
      setLink("");
    } else {
      alert("Please enter a valid URL.");
    }
  };

  const removeLink = (index: number) => {
    setPortfolioLinks(portfolioLinks.filter((_, i) => i !== index));
  };

  const isValidURL = (url: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|localhost)(:[0-9]{1,5})?(\\/.*)?$",
    );
    return pattern.test(url);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900">Portfolio</h1>
        <p className="text-gray-600">
          Showcase your best work by adding links to your portfolio. Add links
          to websites, GitHub repositories, or any other platforms to display
          your achievements.
        </p>
      </header>

      {/* Add Portfolio Form */}
      <form onSubmit={handleAddLink} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Add a Portfolio Link
          </label>
          <input
            type="url"
            value={link}
            onChange={handleInputChange}
            placeholder="https://example.com"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Add Portfolio
        </button>
      </form>

      {/* Display Portfolio Links */}
      {portfolioLinks.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Your Portfolio Links
          </h2>
          <ul className="space-y-4">
            {portfolioLinks.map((portfolioLink, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <a
                  href={portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline break-all"
                >
                  {portfolioLink}
                </a>
                <button
                  onClick={() => removeLink(index)}
                  className="text-red-500 hover:underline font-medium mt-2 md:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
