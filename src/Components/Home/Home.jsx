import React from "react";
import { motion } from "framer-motion"; // For animation
import { Link } from "react-router-dom"; // Use for internal links

const Home = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-32 items-center justify-between w-full">
        {/* Left Side - Animated Text */}
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Vikash Mahato
          </motion.h1>
          <motion.h3
            className="text-2xl font-bold text-blue-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Frontend Web Developer
          </motion.h3>
          <motion.p
            className="mt-4 text-xl text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I’m a Web Developer specialized in handling api's, creating
            production grade components and building responsive, user-friendly
            websites.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex space-x-4">
            <a
              href="mailto:vikashmahatoravi@gmail.com?subject=Hiring Inquiry&body=Hi Vikash, I'm interested in hiring you for..."
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
            >
              Hire Now
            </a>

            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-6 rounded-lg text-lg"
            >
              Message Now
            </Link>
          </div>
        </div>

        {/* Right Side - Placeholder for Profile Picture */}
        <div className="hidden md:block w-1/2">
          <div className="h-96 w-96 rounded-full flex justify-center overflow-hidden border-4 border-blue-500">
            {/* Placeholder for your picture */}
            <img
              src="./Profile.png"
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
