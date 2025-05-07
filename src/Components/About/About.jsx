import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center w-full space-y-10 md:space-y-0 md:space-x-12">
        {/* Left Side - Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="./AboutProfile.png"
              alt="About me"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Animated Text */}
        <motion.div
          className="w-full md:w-1/2 text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">About Me</h1>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Hi, I'm Vikash Mahato, a passionate Frontend Developer eager to contribute to the software world. With a background in Computer Science education, I have been teaching students the fundamentals of technology while deepening my own understanding of web development.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify mt-4">
            Currently, I am working as a Computer Science teacher, but my true ambition lies in becoming a skilled Full Stack Developer. I’m driven by the desire to create seamless, efficient, and impactful digital solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify mt-4">
            I believe that technology can drive positive change, and I aim to make a small yet meaningful difference through the work I create.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify mt-4">
            I’m actively seeking opportunities to grow and collaborate with like-minded professionals in the industry. Let’s connect and create something amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
