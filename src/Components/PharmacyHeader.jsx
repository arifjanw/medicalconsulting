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
    <header className="text-white bg-gray-200 " style={{ backgroundColor: "#237fb7", zIndex: 1000 }}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        <div className="flex gap-6">
        <div className="text-2xl font-semibold">
          <Link to="/" className="text-white">
           Pharmacies
          </Link>
          </div>
            {/* Mobile Hamburger Icon */}
        <div className="lg:hidden ">
          <button
            className="text-white pt-1"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      
        </div>

      

        {/* Main Navigation */}
        <ul
          className={`lg:flex space-x-6 ${isMenuOpen ? "flex flex-col  absolute top-16 left-0 w-48 bg-[#237fb7] py-4" : "hidden"}`}
          style={{ zIndex: 999 }}
        >
          <li className="py-2 pl-6">
            <Link to="/" className="text-white font-bold hover:text-gray-300">
              FOR PHARMACIES
            </Link>
          </li>

          <li className="py-2">
            <Link
              to="/about-us"
              className="text-white font-bold hover:text-gray-300"
            >
              AI
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/contact-us"
              className="text-white font-bold hover:text-gray-300"
            >
              PRICING
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/contact-us"
              className="text-white font-bold hover:text-gray-300"
            >
              ABOUT
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/contact-us"
              className="text-white font-bold hover:text-gray-300"
            >
              BLOG
            </Link>
          </li>
        </ul>

        <div className="ml-6">
        
          <Link
            to="/SignupPage"
            className="ml-2 text-white text-sm font-bold px-4 py-3 border border-white transition-all uppercase"
          
          >
           Login
          </Link>
          <Link
            to="/SignupPage"
            className="ml-2 text-white text-sm font-bold px-4 py-3 border border-white transition-all uppercase"
          
          >
           SignUp
          </Link>
        </div>

      

      </nav>
    </header>
  );
};

export default PharmacyHeader;
