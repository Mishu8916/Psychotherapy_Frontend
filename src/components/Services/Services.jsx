import React from "react";
import Button from "../../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-[#36ae9a]" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-[#36ae9a]" />;
  const icon3 = <FaHeartbeat size={35} className="text-[#36ae9a]" />;

  return (
    <section
      id="services"
      className="min-h-screen bg-white px-5 lg:px-32 pt-24 lg:pt-20 pb-9"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <div className="text-center lg:text-left space-y-2">
          <h2 className="text-4xl font-bold text-[#36ae9a]">Our Services</h2>
          <p className="text-gray-600 max-w-md">
            Discover tailored healthcare and fitness services designed to meet
            your personal wellness needs.
          </p>
        </div>
        <Button title="See Services" />
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </section>
  );
};

export default Services;
