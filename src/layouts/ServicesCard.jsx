import React from "react";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-6 w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-hoverColor">
      {/* Icon container */}
      <div className="bg-[#d5f2ec] p-4 rounded-full transition-colors duration-300 group-hover:bg-[#ade9dc]">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        Get reliable, accessible, and professional {title.toLowerCase()} services tailored to your needs.
      </p>

      {/* Learn More */}
      <button className="mt-2 text-backgroundColor font-medium hover:text-[#ade9dc] transition-colors duration-300">
        Learn more →
      </button>
    </div>
  );
};

export default ServicesCard;
