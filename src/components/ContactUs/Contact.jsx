import React from "react";
import Button from "../../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-80 md:w-96 bg-white p-5 rounded-xl shadow-lg text-black">
        
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500 transition"
        >
          <AiOutlineClose />
        </button>

        {/* Form */}
        <form className="space-y-5">
          <h1 className="text-4xl font-semibold text-center text-[#36ae9a]">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
            />
          </div>
          <div className="flex gap-5 justify-center">
            <Button title="Book Appointment" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
