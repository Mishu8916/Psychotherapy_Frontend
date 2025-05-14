import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h1 className="font-semibold text-2xl pb-4">Fun & Fitness</h1>
          <p className="text-sm text-gray-300">
            Our team of dedicated doctors, each specializing in unique fields such as orthopedics, cardiology, pediatrics, neurology and more.
          </p>
        </div>
        
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-3">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-all cursor-pointer text-lg"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-all cursor-pointer text-lg"
            >
              Services
            </Link>
           
          </nav>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-3">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-all cursor-pointer text-lg"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-all cursor-pointer text-lg"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition-all cursor-pointer text-lg"
            >
              Heart Health
            </Link>
          </nav>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-3">
            <Link to="/" spy={true} smooth={true} duration={500} className="text-lg">
             Bengaluru
            </Link>
            
            <Link to="/" spy={true} smooth={true} duration={500} className="text-lg">
              +91 9036151201
            </Link>
          </nav>
        </div>
      </div>

      <div className="bg-[#1a202c]">
        <p className="text-center py-4 overflow-hidden">
          <span className="animate-marquee text-sm text-gray-400">
            @copyright developed by
            <span className="text-teal-400"> Mishu 2025</span> | All
            rights reserved
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
