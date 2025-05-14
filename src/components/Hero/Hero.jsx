import React from "react";
import Button from "../../layouts/Button";
import heroImage from '../../assets/img/home.png'

const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-start bg-cover bg-center relative px-5 lg:px-32"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-3/5 text-white space-y-6 py-12">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          Empowering Health Choices <br /> for a Vibrant Life
        </h1>
        <p className="text-lg text-gray-200">
          Discover personalized health and fitness solutions tailored to your
          lifestyle. Join us in building a healthier and happier you.
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Hero;
