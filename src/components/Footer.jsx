import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold text-white">SignLang</h3>
          <p className="text-sm mt-2 leading-relaxed">
            Empowering communication through gestures using AI-powered
            sign language detection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/detect" className="hover:text-white transition">Detect</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
          <div className="flex gap-5 text-xl">
            <a href="https://github.com/Arunmaity2003" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arun-maity-814916282/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com/arunmaity7211" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SignLang. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
