import React, { useState } from "react";

const NicheExpertise: React.FC = () => {
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const predefinedNiches = [
    "Technology",
    "Fitness",
    "Fashion",
    "Gaming",
    "Food",
    "Travel",
    "Art",
    "Photography",
    "Music",
    "Health",
  ];

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter((item) => item !== niche));
    } else if (selectedNiches.length < 3) {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  const isNicheSelected = (niche: string) => selectedNiches.includes(niche);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Selected Niches:", selectedNiches);
    // Add API call here to save the selected niches
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900">
          Niche Expertise
        </h1>
        <p className="text-gray-600">
          Select up to 3 niches to tailor your recommendations and
          opportunities.
        </p>
      </header>

      {/* Niche Selection */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Niches
          </label>
          <div className="flex flex-wrap gap-2">
            {predefinedNiches.map((niche, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleNiche(niche)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  isNicheSelected(niche)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
                disabled={!isNicheSelected(niche) && selectedNiches.length >= 3}
              >
                {niche}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You can select up to 3 niches.
          </p>
        </div>

        {/* Selected Niches */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Selected Niches
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedNiches.map((niche, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium text-sm"
              >
                {niche}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200"
          disabled={selectedNiches.length === 0}
        >
          Save Niche Expertise
        </button>
      </form>
    </div>
  );
};

export default NicheExpertise;
