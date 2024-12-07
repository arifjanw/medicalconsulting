import React, { useState } from "react";
import Header from "../Components/PharmacyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 


const BlogPage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />

     <main>
      <section className=" text-gray-600 py-20 px-6"style={{ backgroundColor: "#e8fcf8",}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
          <p className="mt-4 text-xl">
            Discover the latest updates, health tips, and insightful articles
            to stay informed and inspired.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-2">
            Businesses Everywhere Are Choosing Uber for Deliveries, Should Your Pharmacy Too?
          </h2>
          <p className="text-gray-400 text-sm">October 4, 2024</p>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base leading-relaxed">
            With the rise of on-demand services, many businesses, from fast food
            restaurants to retail shops, are choosing delivery solutions like
            Uber rather than managing it on their own. With the launch of Uber
            pharmacy deliveries through MedEssist: Convenient, traceable, and
            compliant delivery is now available on demand for any pharmacy.
          </p>
        </div>

        {/* Read More */}
        <div className="px-6 py-4">
          <a
            href="#"
            className="text-teal-500 font-semibold hover:underline flex items-center gap-1"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>

    <section className="relative bg-gray-50 py-10">
      {/* Image Container */}
      <div className="max-w-6xl mx-auto">
        <img
          src="https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image URL
          alt="MedEssist"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>

    <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-2">
            The Pros and Cons of IVR Phone Systems in Pharmacies
          </h2>
          <p className="text-gray-400 text-sm">August 21, 2024</p>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base leading-relaxed">
          The pharmacy is a busy place. On average, the pharmacist’s workflow is interrupted at least once every 19 minutes1, and most of the time by patient enquiries2. Interactive voice responses (IVRs) are automated phone systems that allow callers to provide and receive information using voice or menu inputs without having to wait for a live representative. For many pharmacies, IVRs are a great way of managing patient requests while saving valuable time. So why isn’t it used in all pharmacies, especially independents? Let’s weigh in on some pros and cons.

          </p>
        </div>

        {/* Read More */}
        <div className="px-6 py-4">
          <a
            href="#"
            className="text-teal-500 font-semibold hover:underline flex items-center gap-1"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>

    <section className="relative bg-gray-50 py-10">
      {/* Image Container */}
      <div className="max-w-6xl mx-auto">
        <img
          src="https://plus.unsplash.com/premium_photo-1681995498495-5258d436e705?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image URL
          alt="MedEssist"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>

    <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-2">
          An Introduction to HIPAA and PIPEDA for Community Pharmacies
          </h2>
          <p className="text-gray-400 text-sm">August 7, 2024</p>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base leading-relaxed">
          As pharmacists, we handle sensitive information about our patients on a daily basis in order to provide them with the best care possible. But, with great power comes great responsibility! It’s crucial that we understand the laws and regulations that govern how much we can use and share personal health information.
          </p>
        </div>

        {/* Read More */}
        <div className="px-6 py-4">
          <a
            href="#"
            className="text-teal-500 font-semibold hover:underline flex items-center gap-1"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>

    <section className="relative bg-gray-50 py-10">
      {/* Image Container */}
      <div className="max-w-6xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1515350540008-a3f566782a3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image URL
          alt="MedEssist"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>

    <section className="bg-gray-50 py-10 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-2">
          Google - Your Pharmacy’s Digital Prescription for Virtual Success
          </h2>
          <p className="text-gray-400 text-sm">August 7, 2024</p>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base leading-relaxed">
          While traditional methods, such as signage and word of mouth, remain relevant, they are often not enough to promote your pharmacy. In today’s digital age, the Internet plays a crucial role in shaping businesses. Learn how to leverage Google to optimize engagement with your pharmacy! </p>
        </div>

        {/* Read More */}
        <div className="px-6 py-4">
          <a
            href="#"
            className="text-teal-500 font-semibold hover:underline flex items-center gap-1"
          >
            Read more →
          </a>
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

export default BlogPage;
