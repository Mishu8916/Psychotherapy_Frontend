import React from "react";
import heroImage from '../../assets/img/home.png';

const Hero = () => {
  return (
    <div
      id="home"
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
        
Take control of your health and fitness journey with customized solutions designed specifically for your needs. Whether you're aiming for improved fitness, better nutrition, or mental well-being, we are here to guide you every step of the way.
Our holistic approach blends expert advice, cutting-edge technology, and personalized plans to help you reach your goals. From workout routines that match your fitness level to nutrition tips that fit your lifestyle, our solutions are built to empower you to live a vibrant, healthy life.
        </p>
       
      </div>
    </div>
  );
};

export default Hero;
