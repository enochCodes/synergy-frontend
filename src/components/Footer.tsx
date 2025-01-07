import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-4">
              About Synergy
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Synergy is the ultimate platform for creators and businesses to
              collaborate. Empowering growth and fostering meaningful
              partnerships.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/campaigns"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-600 transition duration-200"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-4">
              Follow Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Stay connected with us on social media.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <FiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-extrabold text-gray-800 mb-4">
              Subscribe
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest updates and news from Synergy.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Synergy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
