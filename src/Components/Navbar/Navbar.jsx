import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold flex items-center">
            {/* <h1 className="text-2xl font-bold">MyPortfolio</h1> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              MyPortfolio
            </NavLink>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "hover:text-gray-300"
              }
            >
              Github
            </NavLink>
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? "bg-gray-700 block px-4 py-2 text-sm" : "block px-4 py-2 text-sm hover:bg-gray-700"
            }
            onClick={() => setIsOpen(false)}
          >
            Github
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
