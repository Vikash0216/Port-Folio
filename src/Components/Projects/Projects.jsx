import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Outlet for nested routing

const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black min-h-screen py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* JavaScript Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Link to="/projects/projectjavascript">
              <h2 className="text-2xl font-bold mb-4">JavaScript</h2>
              <p className="text-gray-400">Projects using core JavaScript concepts, APIs, and more.</p>
            </Link>
          </motion.div>

          {/* React Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <Link to="/projects/projectreact">
              <h2 className="text-2xl font-bold mb-4">React</h2>
              <p className="text-gray-400">Interactive web applications built with React.</p>
            </Link>
          </motion.div>

          {/* MongoDB Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Link to="/projects/projectmongodb">
              <h2 className="text-2xl font-bold mb-4">MongoDB</h2>
              <p className="text-gray-400">NoSQL databases for efficient data management with MongoDB.</p>
            </Link>
          </motion.div>

          {/* Express.js Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <Link to="/projects/projectexpress">
              <h2 className="text-2xl font-bold mb-4">Express.js</h2>
              <p className="text-gray-400">Backend development with Express.js for building APIs.</p>
            </Link>
          </motion.div>

          {/* Next.js Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <Link to="/projects/projectnextjs">
              <h2 className="text-2xl font-bold mb-4">Next.js</h2>
              <p className="text-gray-400">Server-side rendering and static site generation with Next.js.</p>
            </Link>
          </motion.div>

          {/* Tailwind CSS Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={fadeIn}
          >
            <Link to="/projects/projecttailwindcss">
              <h2 className="text-2xl font-bold mb-4">Tailwind CSS</h2>
              <p className="text-gray-400">Building modern, responsive designs with Tailwind CSS.</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
