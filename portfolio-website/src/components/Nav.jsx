import React from 'react';
import { useState } from 'react'

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleFormSubmit = async(e) => {
    // prevent default behavior
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mjkovlel", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    // if the post goes okay, display alert, else show error msg
    if (response.ok) {
      setShowContactMe(false);     
      setShowSuccessAlert(true);  
      setTimeout(() => setShowSuccessAlert(false), 5000);
      form.reset();               
    } else {
      alert("Oops! There was an issue with the message. Please try again.");
    }
  }

  return (
    <div className="w-full bg-[#123458] text-[#F1EFEC] shadow-md z-10 mb-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

        {/* Left - Name */}
        <a href="/" className="text-lg sm:text-xl font-extrabold tracking-wide hover:text-[#D4C9BE] transition-colors"> Owen Finucan </a>

        {/* Right - Navigation Links */}
        <div className="flex space-x-4 sm:space-x-8 text-sm font-medium">
          <button className="hover:text-[#D4C9BE] transition-colors px-2 py-1" onClick={() => setShowResume(true)}> Resume </button>
          <button className="hover:text-[#D4C9BE] transition-colors px-2 py-1" onClick={() => setShowContactMe(true)}> Contact Me </button>
        </div>

      {showResume && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowResume(false)}>
          <div className="bg-[#D4C9BE] border-4 sm:border-[8px] border-[#123458] max-w-md w-full rounded-lg sm:rounded-xl p-6 relative text-[#111] text-center" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button onClick={() => setShowResume(false)} className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"> &times; </button>

            <h1 className="text-lg text-[#030303] mb-6"> How would you like so see my resume? </h1>

            <div className="space-y-4">
              {/* opens to new tab */}
              <a href="/Finucan%2C%20Owen%20-%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#123458] text-[#F1EFEC] px-6 py-3 rounded-full font-medium hover:bg-[#0f2e4a] transition text-sm sm:text-base"> In Browser (opens in new tab) </a>

              {/* Download */}
              <a href="/Finucan%2C%20Owen%20-%20Resume.pdf" download="Finucan, Owen - Resume.pdf" className="block w-full bg-[#123458] text-[#F1EFEC] px-6 py-3 rounded-full font-medium hover:bg-[#0f2e4a] transition text-sm sm:text-base"> Download Resume (PDF) </a>
            </div>

          </div>
        </div>
      )}

      {showSuccessAlert && (
        <div className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#318631] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base font-medium transition-all mx-2">
          <span> Thank you for the message! I will be in contact with you shortly. </span>
        </div>
      )}

      {showContactMe && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[100] p-2 sm:p-4" onClick={() => setShowContactMe(false)}>
          <div className="bg-[#D4C9BE] border-4 sm:border-[8px] border-[#123458] max-w-6xl w-full max-h-[95vh] sm:max-h-[70vh] rounded-lg sm:rounded-xl p-3 sm:p-6 relative text-[#111] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button onClick={() => setShowContactMe(false)} className="absolute top-1 right-2 sm:top-2 sm:right-4 text-gray-500 hover:text-black text-xl sm:text-2xl"> &times; </button>

            <h1 className="text-xl sm:text-2xl font-bold"> Contact Me </h1>
            <p className='text-xs sm:text-sm mb-2 sm:mb-[8px]'> Please just leave one of your phone number or your email so I can get back to you. </p>

            {/* form submission */}
            <form action="https://formspree.io/f/mjkovlel" method="POST" className='flex flex-col gap-2 sm:gap-4 overflow-y-auto pr-1 sm:pr-2 flex-1' onSubmit={ handleFormSubmit }>
              <input type="text" name="Name" required placeholder='Your Name' className="p-2 sm:p-3 rounded border border-[#123458] focus:outline-none text-sm sm:text-base"/>
              <input type="text" name="Company" placeholder='Company or Organization (optional)' className="p-2 sm:p-3 rounded border border-[#123458] focus:outline-none text-sm sm:text-base"/>
              <input type="tel" name="Phone" placeholder='Phone Number (optional)' className="p-2 sm:p-3 rounded border border-[#123458] focus:outline-none text-sm sm:text-base"/>
              <input type="email" name="Email" placeholder='Your Email (optional)' className="p-2 sm:p-3 rounded border border-[#123458] focus:outline-none text-sm sm:text-base"/>
              <textarea name="message" required placeholder='Your Message' className="p-2 sm:p-3 rounded border border-[#123458] h-24 sm:h-32 resize-none focus:outline-none text-sm sm:text-base" />
              <button type="submit" className="bg-[#123458] text-[#F1EFEC] px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-[#0f2e4a] transition w-fit self-center text-sm sm:text-base mt-2"> Send Message </button>
            </form>

          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Navbar;