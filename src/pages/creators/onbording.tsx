import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getUserFromToken } from "../../hooks/auth.hooks";
import { CreatorProfile } from "../../types/types";
import { setCreatorProfile } from "../../services/creators.service";

const niches = [
  "Fashion",
  "Tech",
  "Food",
  "Fitness",
  "Travel",
  "Gaming",
  "Beauty",
  "Music",
  "Education",
  "Health",
  "Photography",
  "Sports",
];

const CreatorsOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const [socialLinks, setSocialLinks] = useState({
    tiktok: "",
    instagram: "",
    facebook: "",
  });
  const [bio, setBio] = useState("");
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  // Handle social link input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle niche selection
  const toggleNiche = (niche: string) => {
    setSelectedNiches((prev) => {
      if (prev.includes(niche)) return prev.filter((item) => item !== niche);
      if (prev.length < 3) return [...prev, niche];
      return prev; // No update if max niches selected
    });
  };

  // Redirect users based on token and role
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && !sessionStorage.getItem("selectedRole")) {
      const user = getUserFromToken();
      if (user?.role === "CREATOR") navigate("/creators/dashboard");
      if (user?.role === "BUSINESS") navigate("/business/dashboard");
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData: CreatorProfile = {
      niches: selectedNiches,
      socialLinks,
      bio,
    };
    try {
      const response = await setCreatorProfile(formData);
      if (response.success) {
        const sessionRole = sessionStorage.getItem("selectedRole");
        if (sessionRole === "CREATOR") {
          navigate("/creators/dashboard");
          sessionStorage.clear();
        } else if (sessionRole === "BUSINESS") {
          navigate("/business/dashboard");
          sessionStorage.clear();
        }
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center py-12 px-4">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-10"
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Welcome to Synergy
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Start by selecting your favorite niches and completing your profile.
        </p>

        {/* Niche Selector */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Choose Your Niches (Up to 3)
          </h2>
          <p className="text-gray-500 mb-6">
            Select the areas that best describe your expertise or interests.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {niches.map((niche) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={niche}
                className={`cursor-pointer px-4 py-3 rounded-lg text-center font-medium border transition-all duration-200 ${
                  selectedNiches.includes(niche)
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                    : selectedNiches.length >= 3
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => toggleNiche(niche)}
                aria-disabled={
                  selectedNiches.length >= 3 && !selectedNiches.includes(niche)
                }
              >
                {niche}
              </motion.div>
            ))}
          </div>
          {selectedNiches.length === 3 && (
            <p className="text-blue-500 mt-4 text-center font-medium">
              You can only select up to 3 niches.
            </p>
          )}
        </section>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Social Media Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Add Social Media Links
            </h2>
            <p className="text-gray-500 mb-6">
              Share links to your social media profiles to showcase your reach
              and influence.
            </p>
            <div className="space-y-4">
              <input
                type="url"
                name="tiktok"
                value={socialLinks.tiktok}
                onChange={handleInputChange}
                placeholder="TikTok Profile Link"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                name="instagram"
                value={socialLinks.instagram}
                onChange={handleInputChange}
                placeholder="Instagram Profile Link"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                name="youtube"
                value={socialLinks.facebook}
                onChange={handleInputChange}
                placeholder="YouTube facebook Link"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Bio Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Bio
            </h2>
            <p className="text-gray-500 mb-4">
              Write a brief introduction to help businesses and creators get to
              know you.
            </p>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Share a brief description about yourself..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4 rounded-lg font-medium hover:bg-blue-600 shadow-lg transition-all duration-200"
          >
            Save and Continue
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatorsOnboarding;
