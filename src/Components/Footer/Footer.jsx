import React from "react";
import { Link } from "react-router-dom";  // Use for internal navigation
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left Side - Footer Text */}
          <div className="text-sm">
            <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="flex space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/Vikash0216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vikash-mahato-7a6364315"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/vikashj0216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        {/* Internal Navigation Links (Example) */}
        <div className="mt-2 flex justify-center space-x-6 text-sm">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
