import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center justify-between w-full">
        {/* Left Side - Animated Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Vikash Mahato
          </motion.h1>
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-blue-500 mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Frontend Web Developer
          </motion.h3>
          <motion.p
            className="mt-4 text-base sm:text-xl text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I’m a Web Developer specialized in handling APIs, creating
            production-grade components, and building responsive, user-friendly
            websites.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

        {/* Profile Image - On Top for Mobile */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500">
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
