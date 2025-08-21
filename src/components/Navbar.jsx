import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        <Link to="/" className="text-2xl font-bold font-mono tracking-wide">
          SignLang
        </Link>

        
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/detect"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Detect
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
        </ul>

        {/* mobile hamburgur */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/detect"
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Detect
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
