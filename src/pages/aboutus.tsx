import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiTarget, FiHeart } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            About Synergy
          </h1>
          <p className="text-xl font-light mb-8">
            Connecting creators and businesses to achieve greater success
            through collaboration and innovation.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <FiTarget className="h-16 w-16 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the leading platform that fosters meaningful partnerships
                between creators and businesses worldwide.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <FiHeart className="h-16 w-16 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                Empower creators and businesses with tools and opportunities to
                innovate, grow, and make an impact together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
              <FiUsers className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together to achieve shared
                goals and success.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
              <FiTarget className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We strive to continuously innovate and provide cutting-edge
                solutions.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition">
              <FiHeart className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Join the Synergy Community
          </h2>
          <p className="text-lg mb-8">
            Be part of a growing community of creators and businesses. Together,
            let's achieve more.
          </p>
          <Link
            to="/getstarted"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
