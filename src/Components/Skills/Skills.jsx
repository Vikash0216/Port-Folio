import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className="flex justify-center items-center py-12 px-4 bg-black">
      <motion.div 
        className="bg-black rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl text-white font-bold text-center mb-6">My Skills</h1>
        <h2 className="text-2xl text-white font-bold text-center mb-6">Web Development</h2>

        {/* Web Development Section */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {/* Frontend */}
          <motion.div 
            className="w-full sm:w-[45%] md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Frontend</h3>
            <div className="w-full my-4 border-t border-gray-400" />
            <ul className="text-gray-700 text-lg space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Version Control (Git)</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            className="w-full sm:w-[45%] md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Backend</h3>
            <div className="w-full my-4 border-t border-gray-400" />
            <ul className="text-gray-700 text-lg space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL & MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </motion.div>

          {/* Other Key Skills */}
          <motion.div 
            className="w-full sm:w-[45%] md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Other Key Skills</h3>
            <div className="w-full my-4 border-t border-gray-400" />
            <ul className="text-gray-700 text-lg space-y-1">
              <li>Authentication & Authorization</li>
              <li>Deployment & Hosting</li>
              <li>Problem-Solving & Debugging</li>
              <li>Testing (Jest)</li>
            </ul>
          </motion.div>
        </div>

        {/* Other Skills Section */}
        <h2 className="text-2xl text-white font-bold text-center mt-12 mb-6">Other Skills</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {/* Python */}
          <motion.div 
            className="w-full sm:w-[45%] md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Python</h3>
            <div className="w-full my-4 border-t border-gray-400" />
            <ul className="text-gray-700 text-lg space-y-1">
              <li>Object-Oriented Programming</li>
              <li>Data manipulation with Pandas and NumPy</li>
            </ul>
          </motion.div>

          {/* C++ */}
          <motion.div 
            className="w-full sm:w-[45%] md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">C++</h3>
            <div className="w-full my-4 border-t border-gray-400" />
            <ul className="text-gray-700 text-lg space-y-1">
              <li>Object-Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>File Handling</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
