import React from "react";
import img from "../../assets/img/about.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-32 pt-24 lg:pt-20 bg-white"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-4xl font-bold text-center lg:text-left text-[#36ae9a]">
          About Us
        </h1>
        <p className="text-justify leading-relaxed  text-2xl">
          Welcome to Fun & Fitness — your trusted companion on the journey to
          better health and well-being. We blend technology and care to offer
          personalized fitness and healthcare experiences.
        </p>
        <p className="text-justify leading-relaxed">
          Our team of experts is dedicated to helping you meet your wellness
          goals through customized plans, virtual support, and real-time
          progress tracking.
        </p>
        <p className="text-justify leading-relaxed">
          Whether you're starting fresh or scaling new heights in your fitness
          journey, we're here to guide, support, and empower you every step of
          the way.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={img}
          alt="About"
          className="rounded-2xl shadow-xl hover:scale-105  hover:shadow-lg hover:shadow-hoverColor transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default About;
