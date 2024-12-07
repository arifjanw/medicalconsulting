import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const PharmacyHeader = ({ handleMouseEnter, handleMouseLeave, isDropdownVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-500 bg-gray-200 " style={{ backgroundColor: "#e8fcf8", zIndex: 1000 }}>
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center relative z-50">
        <div className="flex gap-7">
        <div className="text-2xl font-semibold">
          <Link to="/" className="text-gray-500 font-medium">
           Pharmacies
          </Link>
          </div>
            {/* Mobile Hamburger Icon */}
        <div className="lg:hidden ">
          <button
            className="text-gray-500 pt-1"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      
        </div>

      

        {/* Main Navigation */}
        <ul
          className={`lg:flex space-x-6 ${isMenuOpen ? "flex flex-col  absolute top-16 left-0 w-48 bg-white py-4" : "hidden"}`}
          style={{ zIndex: 999 }}
        >
          <li className="py-2 pl-6">
            <Link to="/ForPharmacies" className="text-sm text-gray-500 font-medium  hover:text-turquoise">
              FOR PHARMACIES  <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </Link>
          </li>

          <li className="py-2">
            <Link
              to="/MedessistAI"
              className="text-sm text-gray-500 font-medium hover:text-turquoise"
            >
              MEDESSIST AI
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/Pricing"
              className="text-sm text-gray-500 font-medium hover:text-turquoise"
            >
              PRICING
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/AboutUs"
              className="text-sm text-gray-500 font-medium hover:text-turquoise"
            >
              ABOUT <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs"/>
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/BlogPage"
              className="text-sm text-gray-500 font-medium hover:text-turquoise"
            >
              BLOG
            </Link>
          </li>
        </ul>

        <div className="ml-6">
        
          <Link
            to="/SignupPage"
            className="ml-2 text-sm text-gray-500 font-medium hover:text-turquoise uppercase"
          >
           Log in
          </Link>
          <Link
            to="/SignupPage"
            className="ml-3 text-sm text-gray-500 font-medium px-4 py-2 border border-turquoise hover:text-turquoise rounded-md  transition-all uppercase"
          >
           Sign Up
          </Link>
        </div>
      
      

      </nav>
    </header>
  );
};

export default PharmacyHeader;
