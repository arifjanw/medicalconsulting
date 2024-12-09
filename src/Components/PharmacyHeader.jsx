import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const PharmacyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownVisible, setIsAboutDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="text-gray-500 bg-gray-200"
      style={{ backgroundColor: "#e8fcf8", zIndex: 1000 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center relative z-50">
        {/* Logo and Mobile Menu Icon */}
        <div className="flex items-center gap-7">
          <div className="text-2xl font-semibold">
            <Link to="/" className="text-gray-500 font-medium">
              Pharmacies
            </Link>
          </div>
          <div className="lg:hidden">
            <button className="text-gray-500 pt-1" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <ul
          className={`lg:flex lg:space-x-6 items-center ${
            isMenuOpen ? "flex flex-col absolute top-16 left-0 w-full bg-white py-4" : "hidden"
          } lg:static lg:bg-transparent lg:w-auto`}
          style={{ zIndex: 999 }}
        >
          <li className="py-2 lg:py-0">
            <Link to="/ForPharmacies" className="text-sm text-gray-500 font-medium hover:text-turquoise">
              FOR PHARMACIES <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link to="/MedessistAI" className="text-sm text-gray-500 font-medium hover:text-turquoise">
              MEDESSIST AI
            </Link>
          </li>
          <li className="py-2 lg:py-0">
            <Link to="/Pricing" className="text-sm text-gray-500 font-medium hover:text-turquoise">
              PRICING
            </Link>
          </li>

          {/* ABOUT Menu with Dropdown */}
          <li
            className="relative py-2 lg:py-0"
            onMouseEnter={() => setIsAboutDropdownVisible(true)}
            onMouseLeave={() => setIsAboutDropdownVisible(false)}
          >
            <div className="text-sm text-gray-500 font-medium hover:text-turquoise flex items-center cursor-pointer">
              ABOUT <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </div>
            {isAboutDropdownVisible && (
              <ul
                className="absolute left-0 mt-0 w-48 bg-white shadow-md rounded-md"
                style={{ zIndex: 1000 }}
              >
                <li>
                  <Link
                    to="/AboutUs"
                    className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-turquoise"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Testimonials"
                    className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-turquoise"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="py-2 lg:py-0">
            <Link to="/BlogPage" className="text-sm text-gray-500 font-medium hover:text-turquoise">
              BLOG
            </Link>
          </li>

          {/* Buttons for Mobile View */}
          <div className="flex flex-col items-center gap-3 mt-4 lg:hidden">
            <Link
              to="/SignupPage"
              className="text-sm text-gray-500 font-medium hover:text-turquoise uppercase"
            >
              Log in
            </Link>
            <Link
              to="/SignupPage"
              className="text-sm text-gray-500 font-medium px-4 py-2 border border-turquoise hover:text-turquoise rounded-md transition-all uppercase"
            >
              Sign Up
            </Link>
          </div>
        </ul>

        {/* Right-aligned Buttons for Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/SignupPage" className="text-sm text-gray-500 font-medium hover:text-turquoise uppercase">
            Log in
          </Link>
          <Link
            to="/SignupPage"
            className="text-sm text-gray-500 font-medium px-4 py-2 border border-turquoise hover:text-turquoise rounded-md transition-all uppercase"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default PharmacyHeader;
