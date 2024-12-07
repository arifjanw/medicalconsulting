import React, { useState } from "react";
import Header from "../Components/PharmacyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import img from '../assets/img.png'
import { faQuestionCircle, faDatabase, faCogs } from "@fortawesome/free-solid-svg-icons";

const MedessistAI = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

 

  return (
    <div className="bg-gray-50">

      <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />

     <main>
     <section className=""style={{ backgroundColor: "#e8fcf8"}}>
  <div className="py-16 px-4 md:px-16 lg:px-16 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
    {/* Left Section */}
    <div className=" lg:pr-64">
      <h2 className="text-3xl md:text-5xl font-medium text-dark-turquoise mb-4">
      MedEssist AI: Empowering Pharmacists with a Trusted Clinical Companion
      </h2>
      <p className="text-lg text-gray-600 mb-6">
      Developed in partnership with<br/>
An innovative clinical support tool designed by seasoned doctors and pharmacists who comprehend the complexities of your day to day.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
        <button
          className="text-gray-700 px-8 py-4 font-medium rounded-full bg-yellow-400 hover:bg-turquoise transition w-auto"
          
        >
         Get started today
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-shrink-0 "style={{ width: '300px', height: '300px' }}>
  <img src={img} alt="Logo"style={{ width: '100%', height: '100%', objectFit: 'contain' }}  />
</div>

  </div>
</section>



<section className="py-20 px-6" style={{ backgroundColor: "#f5fafd" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-[#004d4d]">Here’s What Makes MedEssist AI Different</h1>
    <p className="text-lg text-gray-600 mt-4 mb-8">
      MedEssist AI is a tool you can trust! Built by healthcare professionals who believe AI is only valuable if it's accurate.
    </p>
    
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">

      {/* Feature 1: Ask a Question */}
      <div className="text-center">
        <FontAwesomeIcon icon={faQuestionCircle} className="text-6xl text-[#00b5b5] mb-4" />
        <h3 className="text-xl font-semibold text-[#004d4d]">Ask a Question</h3>
        <p className="text-lg text-gray-700 mt-2">
          MedEssist AI provides clear, reliable answers tailored to your specific questions.
        </p>
      </div>

      {/* Feature 2: Evidence-Based Answers */}
      <div className="text-center">
        <FontAwesomeIcon icon={faDatabase} className="text-6xl text-[#00b5b5] mb-4" />
        <h3 className="text-xl font-semibold text-[#004d4d]">Evidence-Based Answers</h3>
        <p className="text-lg text-gray-700 mt-2">
          Our AI draws from an ever-growing database of 18,000 curated clinical and pharmacy-specific resources.
        </p>
      </div>

      {/* Feature 3: Integrated Into Pharmacy */}
      <div className="text-center">
        <FontAwesomeIcon icon={faCogs} className="text-6xl text-[#00b5b5] mb-4" />
        <h3 className="text-xl font-semibold text-[#004d4d]">Integrated Into Pharmacy</h3>
        <p className="text-lg text-gray-700 mt-2">
          MedEssist AI will be fully integrated into the platform that you use every day, addressing both business and clinical sides of pharmacy.
        </p>
      </div>

    </div>
  </div>
</section>


<section className="py-20 px-6" style={{ backgroundColor: "#f5fafd" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-[#004d4d]">Try MedEssist AI Today!</h1>
    <p className="text-lg text-gray-600 mt-4 mb-8">
      Join our invite-only beta program. Fill out the form below to get started.
    </p>
    
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form action="#" method="POST">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:border-[#00b5b5]"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:border-[#00b5b5]"
          />
        </div>

        {/* Profession */}
        <div className="mb-4">
          <label htmlFor="profession" className="block text-lg font-medium text-gray-700">Profession</label>
          <input
            type="text"
            id="profession"
            name="profession"
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:border-[#00b5b5]"
          />
        </div>

        {/* Pharmacy Subscription Question */}
        <div className="mb-4">
          <label htmlFor="isSubscribed" className="block text-lg font-medium text-gray-700">Is your work site currently subscribed to MedEssist?</label>
          <select
            id="isSubscribed"
            name="isSubscribed"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:border-[#00b5b5]"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Pharmacy Name (only visible if 'Yes' is selected) */}
        <div className="mb-4">
          <label htmlFor="pharmacyName" className="block text-lg font-medium text-gray-700">If yes, please provide pharmacy name</label>
          <input
            type="text"
            id="pharmacyName"
            name="pharmacyName"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:border-[#00b5b5]"
          />
        </div>

        {/* Consent Message */}
        <div className="mb-6 text-left">
          <p className="text-sm text-gray-600">
            MedEssist needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="/privacy-policy" className="text-[#00b5b5]">Privacy Policy</a>.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#00b5b5] text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-[#009e9e] focus:outline-none focus:ring-2 focus:ring-[#00b5b5] focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

    <section class="bg-yellow-400 py-12 px-6 pb-16 text-center">
  <h2 class="text-3xl font-bold text-gray-800 mb-4">
    Ready to simplify your practice and meet new patients?
  </h2>
  <p class="text-lg  text-gray-800 mb-6">
    Go live with a customized digital storefront and pharmacy dashboard in less than 24 hours.
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="#"
      class="text-turquoise bg-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition"
    >
      Talk To A Pharmacy Advisor
    </a>
    <a
      href="#"
      class="bg-turquoise text-white font-bold py-3 px-6 rounded hover:bg-turquoise transition"
    >
      Get Started →
    </a>
  </div>
</section>

<section class="bg-yellow-50 py-12 px-6">
  <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
    <div class="flex-1 text-center lg:text-left">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Still unsure?</h2>
      <a
        href="#"
        class="text-teal-500 font-medium underline hover:text-teal-700"
      >
        Send us a message!
      </a>
      <p class="text-gray-600 mt-2">
        Our team is here to answer any questions you have. Support is just a
        click away!
      </p>
    </div>

    <div class="flex-1 flex flex-col items-center lg:items-end">
      <h3 class="text-lg font-medium text-gray-800 mb-4">
        Start a conversation
      </h3>
      <div class="flex items-center gap-2 mb-2">
    
      <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Avatar 1"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Avatar 2"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Avatar 3"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
      </div>
      <p class="text-gray-600 text-sm flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m2.25 5.25a9 9 0 11-12.375-12.375"
          />
        </svg>
        Under 2 minutes
      </p>
      <a
        href="#"
        class="mt-6 bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
      >
        Send us a message
      </a>
    </div>
  </div>
</section>
</main>
<footer className="bg-teal-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">MedEssist</h2>
          </div>
          <p className="mt-4">Make every dose count.</p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-8 flex-1">
          <div>
            <h3 className="font-bold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book a Phone Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pharmacy Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog / Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Find a Pharmacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-teal-400 pt-4 text-sm text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            108 College St 7th Floor, Suite W780, Toronto, ON M5G 1L6 <br />
            Brookfield Place, Suite 2700, 225 6 Ave SW, Calgary, AB T2P 1N2{" "}
            <br />
            MedEssist is not a pharmacy, online pharmacy, or telemedicine
            provider. MedEssist supplies software to pharmacies, educational
            providers, and digital health companies.
          </p>
          <p className="mt-4">Copyright © 2022 MedEssist - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
     
   
    </div>
  );
};

export default MedessistAI;
