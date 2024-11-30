import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="shadow rounded-lg">
          {/* Header */}
          <div className="px-6 py-8 border-b">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-2">Have questions? We'd love to hear from you.</p>
          </div>

          {/* Contact Form */}
          <div className="px-6 py-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="dark:bg-gray-800 mt-1 block w-full rounded-md border shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="dark:bg-gray-800 mt-1 block w-full rounded-md border shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  className="dark:bg-gray-800 mt-1 block w-full rounded-md border shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="px-6 py-8 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <FaEnvelope className="text-purple-600 text-xl" />
                <div className="ml-4">
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm">contact@myblog.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-purple-600 text-xl" />
                <div className="ml-4">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
                <div className="ml-4">
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;