import React, { useState } from "react";
import Header from "../Components/PharmacyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faCheckCircle, faCalendarAlt, faNetworkWired, faChartLine, faGraduationCap } from "@fortawesome/free-solid-svg-icons";


const Pricing = () => {
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
     <section className="text-gray-600 py-20 px-6" style={{ backgroundColor: "#e8fcf8" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-bold">Pricing</h1>
    <p className="mt-6 text-lg">
      All plans include unlimited usage
      <br />
      (i.e. bookings, texts, emails, faxes, newsletters, and MedEssist AI)
    </p>
  </div>
</section>

<section className="text-gray-600 py-20 px-6" style={{ backgroundColor: "#f5fafd" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold text-[#004d4d]">
      Everything You Need to Be Successful is Included
    </h1>
    <ul className="mt-8 space-y-6 text-lg md:text-xl text-left mx-auto max-w-3xl list-inside">
      <li className="pl-6 sm:pl-8 relative flex items-center">
        <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#00b5b5] mt-2"></span>
        <p className="ml-8 sm:ml-10">1 on 1 onboarding to develop a customized implementation plan</p>
      </li>
      <li className="pl-6 sm:pl-8 relative flex items-center">
        <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#00b5b5] mt-2"></span>
        <p className="ml-8 sm:ml-10">Custom designed digital storefront to match your pharmacy</p>
      </li>
      <li className="pl-6 sm:pl-8 relative flex items-center">
        <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#00b5b5] mt-2"></span>
        <p className="ml-8 sm:ml-10">Custom branded posters & handouts delivered to you ($75 value)</p>
      </li>
      <li className="pl-6 sm:pl-8 relative flex items-center">
        <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[#00b5b5] mt-2"></span>
        <p className="ml-8 sm:ml-10">Custom .com or .ca domain (i.e. youruniquepharmacy.com)</p>
      </li>
    </ul>
    <p className="mt-8 text-lg md:text-xl font-semibold text-[#004d4d]">
      Included for both Essential and Professional Plans!
    </p>
  </div>
</section>

<section className="py-20 px-6" style={{ backgroundColor: "#f5fafd" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-[#004d4d]">Choose Your Plan</h1>
    <p className="text-lg text-gray-600 mt-4 mb-12">
      Select the right plan for your pharmacy and start benefiting from all the features we offer. Our tailored solutions are designed to help you grow and optimize your workflow.
    </p>
    
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">

      {/* Free Plan Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-[#00b5b5]">Free</h2>
        <p className="text-gray-600 mt-3 text-lg font-medium">Free delivery platform, resources, and tools</p>
        <button className="mt-8 bg-[#00b5b5] text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors hover:bg-[#009a9a]">
          Get Started
        </button>
        <ul className="mt-6 text-left space-y-3 text-gray-700 text-base">

          <li>Order affordable on-demand Uber prescription deliveries</li>
          <li>Track deliveries and view patient signatures</li>
          <li>Access patient-facing and HCP resources and guidelines</li>
          <li>Manage staff training with unique educational workshops</li>
        </ul>
       
      </div>

      {/* Essential Plan Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-[#00b5b5]">Essential</h2>
        <p className="text-gray-600 mt-3 text-lg font-medium">$99/mo (Billed Annually)</p>
        <p className="text-gray-600 text-lg mt-2 font-medium">A complete website, workflow, and clinical support solution</p>
        <button className="mt-8 bg-[#00b5b5] text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors hover:bg-[#009a9a]">
          Get Started
        </button> <ul className="mt-6 text-left space-y-3 text-gray-700 text-base">
       
          <li>Custom domain & SEO optimized pharmacy website</li>
          <li>Scheduling system integrated with Google/Outlook Calendar</li>
          <li>Send email or text messages to any patient</li>
          <li>Access clinical workflows and generate documentation in seconds</li>
          <li>Marketing Hub to generate handouts, posters, QR codes, and links</li>
          <li>Newsletter system to build community and maximize loyalty</li>
          <li>MedEssist AI to streamline your workflow. Developed with Pendium Health</li>
        </ul>
      
      </div>

      {/* Professional Plan Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-[#00b5b5]">Professional</h2>
        <p className="text-gray-600 mt-3 text-lg font-medium">$149/mo (Billed Annually)</p>
        <p className="text-gray-600 text-lg mt-2 font-medium">For pharmacies looking to maximize efficiency & growth</p>
        <button className="mt-8 bg-[#00b5b5] text-white py-3 px-8 rounded-full text-lg font-semibold transition-colors hover:bg-[#009a9a]">
          Get Started
        </button>
         <ul className="mt-6 text-left space-y-3 text-gray-700 text-base">
          <li>Custom domain & SEO optimized pharmacy website</li>
          <li>Scheduling system integrated with Google/Outlook Calendar</li>
          <li>Send email or text messages to any patient</li>
          <li>Access clinical workflows and generate documentation in seconds</li>
          <li>Marketing Hub to generate handouts, posters, QR codes, and links</li>
          <li>Newsletter system to build community and maximize loyalty</li>
          <li>MedEssist AI to streamline your workflow. Developed with Pendium Health</li>
        </ul>
      </div>

    </div>
  </div>
</section>



<section className="py-20 px-6" style={{ backgroundColor: "#f5fafd" }}>
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl font-extrabold text-[#004d4d]">Enterprise Pricing</h1>
    <p className="text-lg text-gray-600 mt-4 mb-8">
      Contact us to find out more about our enterprise solutions tailored to meet your specific needs.
    </p>
    
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">

      {/* Left Section with Features */}
      <div className="text-left space-y-6">
        <p className="flex items-center text-lg font-medium text-gray-700">
          <FontAwesomeIcon icon={faCheckCircle} className="text-[#00b5b5] mr-3" />
          Custom Branding, Documentation, and Workflows
        </p>
        <p className="flex items-center text-lg font-medium text-gray-700">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-[#00b5b5] mr-3" />
          Custom Scheduling Functionality and Search Directories
        </p>
        <p className="flex items-center text-lg font-medium text-gray-700">
          <FontAwesomeIcon icon={faNetworkWired} className="text-[#00b5b5] mr-3" />
          Multi-site Management & Communication System
        </p>
        <p className="flex items-center text-lg font-medium text-gray-700">
          <FontAwesomeIcon icon={faChartLine} className="text-[#00b5b5] mr-3" />
          Customized Metrics & Reporting Dashboard
        </p>
        <p className="flex items-center text-lg font-medium text-gray-700">
          <FontAwesomeIcon icon={faGraduationCap} className="text-[#00b5b5] mr-3" />
          Custom Training, Support, and Future Planning
        </p>
      </div>

    </div>

    <div className="mt-8 text-lg font-semibold text-[#004d4d]">
      <p>Contact us to learn more about how our enterprise solutions can benefit your organization!</p>
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

export default Pricing;
