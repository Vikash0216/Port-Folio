import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const About = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Image with Animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="h-96 w-96 rounded-full overflow-hidden border-4 border-blue-500">
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
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-justify ">
          Hi, I'm Vikash Mahato, a passionate Frontend Developer eager to contribute to the software world. With a background in Computer Science education, I have been teaching students the fundamentals of technology while deepening my own understanding of web development. 
          </p>
          <p className="text-lg leading-relaxed text-justify ">
          Currently, I am working as a Computer Science teacher, but my true ambition lies in becoming a skilled Full Stack Developer. I’m driven by the desire to create seamless, efficient, and impactful digital solutions. As a fresher in full-stack development, I am continuously honing my skills in both front-end and back-end technologies, striving to build applications that solve real-world problems.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-justify ">
          I believe that technology can drive positive change, and I aim to make a small yet meaningful difference through the work I create. Whether it's through crafting responsive user interfaces or building robust back-end systems, I am committed to contributing to projects that matter.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-justify ">
          I’m actively seeking opportunities to grow and collaborate with like-minded professionals in the industry. Let’s connect and create something amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
