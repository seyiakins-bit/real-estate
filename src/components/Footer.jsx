import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding / About */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Akins Luxury Homes</h1>
          <p className="text-gray-400 mb-4">
            Find your dream property in Nigeria with our curated listings of residential and commercial properties.
          </p>
          <div className="flex gap-3 text-xl">
            <a
              href="https://wa.me/2347039443290"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/add-property" className="hover:text-white">Add Property</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">User Dashboard</Link></li>
            <li><Link to="/admin-dashboard" className="hover:text-white">Admin Dashboard</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:info@akinsluxuryhomes.com" className="hover:text-white">
              info@akinsluxuryhomes.com
            </a>
          </p>
          <p className="mb-2">
            Phone:{" "}
            <a href="tel:+2347039443290" className="hover:text-white">
              +234 7039443290
            </a>
          </p>
          <p className="mb-2">Address: 123 Victoria Island, Lagos, Nigeria</p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Subscribe</h2>
          <p className="text-gray-400 mb-4">
            Get latest property updates directly to your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded border border-gray-600 bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Akins Luxury Homes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
