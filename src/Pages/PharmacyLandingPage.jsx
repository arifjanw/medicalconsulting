import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/PharmacyHeader";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faPills,
//   faHeartbeat,
//   faCapsules,
//   faSyringe,
//   faUserCheck,
//   faFileAlt,
//   faSmokingBan,
//   faHeart,
//   faPhoneAlt,
// } from "@fortawesome/free-solid-svg-icons";

const PharmacyLandingPage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle mouse enter and leave for the "Services" link
  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <div>
       <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />
     

      <main className="relative">
       


      </main>
      <section  className=" bg-gray-200 ">
  <div className=" py-16 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-8">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Transforming Pharmacy with Technology and AI
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        World class clinical solutions, business tools, and a support team to help
        you craft your dream pharmacy practice.
      </p>
      <div className="flex gap-4">
         {/* Button 2 */}
         <button className="border-2 border-yellow-500 text-yellow-500 bg-white px-6 py-2 rounded-full hover:bg-yellow-50 transition">
         Talk to Pharmacy Advisor 
        </button>
        {/* Button 1 */}
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition">
           Signup for Free
        </button>
       
      </div>
    </div>
    <div className="flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 md:w-32 md:h-32 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 9.9L14.1 3 12 5.1 8.9 2 2 8.9 14.1 21 21 14.1 18.9 12 21 9.9zM3 9.4L9.4 3l2.1 2.1-1.7 1.7 1.4 1.4 1.7-1.7L15 9.4l-1.7 1.7L12 9.8l-1.4 1.4 1.7 1.7L9.4 15l-1.7-1.7L6.3 15 3 11.7 9.4 5.3 6.3 8.4 3 9.4z" />
      </svg>
    </div>
  </div>
</section>
{/* <section className=" text-yellow-500 bg-yellow-100 py-8">
  <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
  
    <div className="md:w-64% text-center md:text-left mb-4 md:mb-0">
      <h2 className="text-2xl md:text-2xl font-bold">
      Access To Care </h2>
      <h2 className="text-2xl md:text-2xl ">
      A complete solution to transform into a pharmacist-led clinic
      </h2>
      <h2  className="text-l md:text-l ">
      We've partnered with NPs and MDs to support you in assessing and prescribing for more conditions.
      </h2>
    </div>
    <div className="md:w-1/4 text-center md:text-right ">
    <Link
            to="/services"
           
          ><button className="bg-transparent border border-white text-white py-4 px-8 rounded-md transition duration-300 hover:bg-blue-500 hover:border-blue-500">
        Online Appointment
      </button>
      </Link>
    </div>
  </div>
</section> */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
  <div className="container mx-auto px-4">
    {/* Footer Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1: Logo and Description */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-700" >
          Pharmacies
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Dedicated to delivering personalized medical solutions and exceptional healthcare services. Your health, our priority.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h3 className="text-xl text-center md:text-left font-semibold mb-4 text-gray-700" >
          Quick Links
        </h3>
        <ul className="space-y-2 text-center md:text-left">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact Details */}
      <div className="text-center md:text-right">
        <h3 className="text-xl font-semibold mb-4 text-gray-700" >
          Contact Us
        </h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Phone: 1-877-431-3456</li>
          <li className="text-gray-600">Email: umcg.group@gmail.com</li>
          <li className="text-gray-600">Address: 42 Tuxedo Ct, Scarborough
</li>
        </ul>
      </div>
    </div>

    {/* Footer Divider */}
    <hr className="my-8 border-gray-300" />

    {/* Footer Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
        © 2024 United Medical Consulting. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12.07a10 10 0 10-10 10 10 10 0 0010-10zm-9-5.93a1.07 1.07 0 111.07 1.07 1.07 1.07 0 01-1.07-1.07zm2 11.7a1.1 1.1 0 01-.83.4h-2.4a1.08 1.08 0 01-1-1V11h1.1v5.07h1.07v-5.57h1.1v5.57h1.1z" />
          </svg>
          Facebook
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.7 8.7a8.3 8.3 0 00-1.8-1.5A7.5 7.5 0 0012 6a7.5 7.5 0 00-8 1.2 8.3 8.3 0 00-1.8 1.5v1.5a7.3 7.3 0 00.8 4A6.6 6.6 0 003.4 16v.3a2.3 2.3 0 00-.7 1.6 2.4 2.4 0 002.4 2.4h16.2a2.4 2.4 0 002.4-2.4 2.3 2.3 0 00-.7-1.6v-.3a6.6 6.6 0 00-.7-1.8 7.3 7.3 0 00.8-4v-1.5z" />
          </svg>
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm8 8h-2v5h-2v-5H9v-2h2V9a3 3 0 013-3h2v2h-2a1 1 0 00-1 1v2h3v2z" />
          </svg>
          Instagram
        </a>
      </div>
    </div>
  </div>
</footer>





    </div>
  );
};

export default PharmacyLandingPage;
