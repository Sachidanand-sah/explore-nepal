import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Explore Nepal</Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <div
              className={`h-1 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </button>

        <ul
          className={`absolute md:static bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:flex md:space-x-6 space-y-4 md:space-y-0 top-16 left-0 w-full md:w-auto md:items-center px-6 md:px-0 transition-transform duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-lg font-medium rounded hover:bg-white hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 text-lg font-medium rounded hover:bg-white hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Nepal
            </Link>
          </li>
          <li>
            <Link
              to="/destinations"
              className="block py-2 px-4 text-lg font-medium rounded hover:bg-white hover:text-pink-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 text-lg font-medium rounded hover:bg-white hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
