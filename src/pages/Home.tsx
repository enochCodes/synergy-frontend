import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiUsers, FiTrendingUp, FiHeadphones } from "react-icons/fi";
import { getUserFromToken } from "../hooks/auth.hooks"; // Import the user hook

const Home: React.FC = () => {
  const user = getUserFromToken(); // Fetch user info
  const navigate = useNavigate();

  // Get the dashboard route based on user role
  const getDashboardRoute = () => {
    if (user?.role === "creator") return "/creators/dashboard";
    if (user?.role === "business") return "/business/dashboard";
    return null;
  };

  const dashboardRoute = getDashboardRoute();

  // Handle navigation for "Get Started" and "Join Now" buttons
  const handleGetStarted = () => {
    if (dashboardRoute) {
      navigate(dashboardRoute); // Redirect to dashboard if logged in
    } else {
      navigate("/getstarted"); // Redirect to sign-up if not logged in
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Connecting Creators and Businesses Seamlessly
          </h1>
          <p className="text-lg sm:text-xl font-light mb-8">
            Empowering creators and businesses to collaborate, grow, and unlock
            their potential with Synergy's innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </button>
            <Link
              to="/about"
              className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800">
            Why Choose Synergy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <FiUsers className="h-14 w-14 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Seamless Connections</h3>
              <p className="text-gray-600">
                Discover top creators or businesses that align with your goals,
                effortlessly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <FiTrendingUp className="h-14 w-14 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Accelerate Growth</h3>
              <p className="text-gray-600">
                Leverage cutting-edge tools and insights to achieve your full
                potential.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
              <FiHeadphones className="h-14 w-14 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Exceptional Support</h3>
              <p className="text-gray-600">
                We’re here for you with 24/7 support, ensuring your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-800">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Campaign Card 1 */}
            <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">Campaign Title 1</h3>
                <p className="text-gray-600 mb-6">
                  Discover exciting campaigns designed to elevate your brand.
                </p>
                <Link
                  to="/campaigns/1"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            {/* Other campaign cards */}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/campaigns"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md font-medium hover:bg-blue-600 transition duration-300"
            >
              View All Campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg mb-8">
            Take the next step and experience the power of Synergy.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
