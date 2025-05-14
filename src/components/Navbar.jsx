import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "./ContactUs/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-50 text-white">
      {/* Top Nav */}
      <div className="flex justify-between items-center p-5 md:px-32 px-5 bg-[#36ae9a] shadow-lg">
        <Link to="home" spy smooth duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold font-serif text-white">Fun & Fitness</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-lg font-medium gap-8">
          {["home", "about", "services", "blog"].map((item) => (
            <Link
              key={item}
              to={item}
              spy
              smooth
              duration={500}
              className="hover:text-hoverColor transition-colors cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <button
            className="bg-[#dd8036] text-white px-5 py-2 rounded-full hover:bg-orange transition duration-300 shadow-md"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Contact Form */}
      {showForm && <Contact closeForm={closeForm} />}

      {/* Mobile Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-[#36ae9a] text-white z-50 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg p-6 flex flex-col gap-6`}
      >
        {["home", "about", "services", "doctors", "blog"].map((item) => (
          <Link
            key={item}
            to={item}
            spy
            smooth
            duration={500}
            className="text-xl hover:text-orange transition-colors cursor-pointer"
            onClick={closeMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        <button
          className="bg-[#dd8036] text-white px-4 py-2 rounded-full hover:bg-orange transition duration-300"
          onClick={openForm}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
