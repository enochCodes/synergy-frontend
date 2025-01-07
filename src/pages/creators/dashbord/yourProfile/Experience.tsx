import React, { useState } from "react";

const Experience: React.FC = () => {
  const [experienceList, setExperienceList] = useState<
    { jobTitle: string; company: string }[]
  >([]);
  const [formData, setFormData] = useState({ jobTitle: "", company: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.jobTitle && formData.company) {
      setExperienceList((prev) => [...prev, formData]);
      setFormData({ jobTitle: "", company: "" });
    }
  };

  const removeExperience = (index: number) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-gray-900">Experience</h1>
        <p className="text-gray-600">
          Add your professional experience to showcase your expertise and
          enhance your profile.
        </p>
      </header>

      {/* Experience Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            placeholder="e.g., Social Media Manager"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="e.g., Synergy"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
        >
          Add Experience
        </button>
      </form>

      {/* Experience List */}
      {experienceList.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Your Experiences
          </h2>
          <ul className="space-y-4">
            {experienceList.map((exp, index) => (
              <li
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 font-medium hover:underline"
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

export default Experience;
