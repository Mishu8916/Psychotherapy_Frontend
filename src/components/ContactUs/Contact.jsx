import React, { useEffect, useState } from "react";
import Button from "../../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";

const Contact = ({ closeForm }) => {
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission to show the message

    setShowMessage(true); // Show the message when the button is clicked
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 shadow-xl shadow-hoverColor">
      <div className="relative w-[500px] md:w-[600px] bg-white p-8 rounded-xl shadow-lg text-black">
        
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-500 transition"
        >
          <AiOutlineClose />
        </button>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <h1 className="text-4xl font-semibold text-center text-[#36ae9a]">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36ae9a] hover:shadow-hoverColor"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36ae9a] hover:shadow-hoverColor"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36ae9a] hover:shadow-hoverColor"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36ae9a] hover:shadow-hoverColor"
              type="date"
              name="appointmentDate"
              id="appointmentDate"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36ae9a] hover:shadow-hoverColor"
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

        {/* Confirmation Message */}
        {showMessage && (
          <div className="mt-4 text-center text-green-500">
            <p>Your appointment has been successfully booked!<span>Thank You</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
