import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl font-light">
            We'd love to hear from you! Reach out for inquiries, support, or
            feedback.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Method 1 */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <FiPhone className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-center">Phone</h3>
              <p className="text-gray-600 text-center">
                Call us at <br />
                <strong>+1 234 567 890</strong>
              </p>
            </div>
            {/* Contact Method 2 */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <FiMail className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-center">Email</h3>
              <p className="text-gray-600 text-center">
                Drop us a line at <br />
                <strong>support@synergy.com</strong>
              </p>
            </div>
            {/* Contact Method 3 */}
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <FiMapPin className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3 text-center">Location</h3>
              <p className="text-gray-600 text-center">
                Visit us at <br />
                <strong>123 Synergy Blvd, NY</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject of your message"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg font-medium hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
