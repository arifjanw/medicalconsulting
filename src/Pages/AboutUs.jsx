import React, { useState } from "react";
import Header from "../Components/PharmacyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 


const AboutUs = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  const teamMembers = [
    {
      name: "Michael Do",
      role: "CTO & Co-founder",
      image: "https://randomuser.me/api/portraits/men/10.jpg", // Replace with actual image URL
      linkedin: "#",
    },
    {
      name: "Joella Almeida",
      role: "CEO & Co-founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image URL
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-gray-50">

      <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />

     <main>
      <section className=" text-gray-600 py-20 px-6"style={{ backgroundColor: "#e8fcf8",}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">AboutUs</h1>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-2">
          MedEssist’s mission is to enable community pharmacies to provide personalized care to diverse or unique communities, and empower them to grow and build out a sustainable future-proof practice.
          </h2>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base leading-relaxed">
          MedEssist was started at an independent community pharmacy in Toronto, Canada by Michael Do, a community pharmacist/programmer and Joella Almeida, an experienced business consultant. For over 10 years, just like so many pharmacies across the country, Michael proudly provided uniquely personal healthcare to an underserved community.
          </p> <br />
          <p className="text-gray-700 text-base leading-relaxed">
          Over the years, Michael like many other pharmacists felt more and more pressure to do more with less resources. Together with Joella’s experience in multiple roles helping businesses expand online, MedEssist is creating better ways for pharmacies to provide a personal experience for loyal patients, as well as a modern pharmacy experience to enable them to reach more patients. </p>
        </div>

      
      </div>
    </section>

    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Leadership Team</h2>
        <p className="text-gray-600 mt-2">
          Pharmacy + Technical + Marketing Expertise
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-64 p-6 bg-white shadow-lg rounded-lg text-center border border-gray-200"
          >
            <div className="relative mx-auto w-28 h-28 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-teal-600">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
            <div className="mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-6 h-6 mx-auto"
                />
              </a>
            </div>
            <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      {/* Our Team Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-teal-600">Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
          Our team’s everyday mission is to help our pharmacies feel prepared
          and supported in providing the best experience for their staff and
          their patients. Our team consists of experienced pharmacists, technicians,
          assistants, engineers, designers, and business professionals. Did you
          know half of our engineering team has a background in pharmacy? We’re
          so passionate about what we do because we use MedEssist too.
        </p>
      </div>

      {/* Our Innovation Partners Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-teal-600">Our Innovation Partners</h3>
        <div className="flex justify-center gap-12 mt-8">
          <div className="text-xl font-semibold text-teal-600">Arise Health</div>
          <div className="text-xl font-semibold text-teal-600">The Paak</div>
          <div className="text-xl font-semibold text-teal-600">OE</div>
          <div className="text-xl font-semibold text-teal-600">2020INC</div>
          <div className="text-xl font-semibold text-teal-600">Ephicient</div>
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
     
    </main>
    </div>
  );
};

export default AboutUs;
