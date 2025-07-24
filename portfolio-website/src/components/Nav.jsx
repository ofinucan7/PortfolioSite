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
    <div className="w-full bg-[#123458] text-[#F1EFEC] shadow-md z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left - Name/Logo */}
        <a href="/" className="text-xl font-extrabold tracking-wide hover:text-[#D4C9BE] transition-colors"> Owen Finucan </a>

        {/* Right - Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium">
          <button className="hover:text-[#D4C9BE] transition-colors" onClick={() => setShowResume(true)}> Resume </button>
          <button className="hover:text-[#D4C9BE] transition-colors" onClick={() => setShowContactMe(true)}> Contact Me </button>
        </div>

      {showResume && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowResume(false)}>
          <div className="bg-[#D4C9BE] border-[8px] border-[#123458] max-w-6xl w-[90%] h-[90vh] rounded-xl p-6 relative text-[#111] flex flex-col z-[101]" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button onClick={() => setShowResume(false)} className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"> &times; </button>

            <h1 className="text-2xl font-bold mb-4"> My Resume </h1>

            {/* preview */}
            <div className="flex-1 overflow-hidden rounded-md border border-[#123458]">
              <iframe   src="/Finucan%2C%20Owen%20-%20Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit" className="w-full h-full" title="Resume PDF" />
            </div>

            {/* download resume */}
            <div className="mt-4 flex justify-center">
              <a href="/Finucan%2C%20Owen%20-%20Resume.pdf" download="Finucan, Owen - Resume.pdf" className="bg-[#123458] text-[#F1EFEC] px-6 py-2 rounded-full font-medium hover:bg-[#0f2e4a] transition"> Download Resume </a>
            </div>
          </div>
        </div>
      )}

      {showSuccessAlert && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#318631] text-white px-6 py-3 rounded-xl shadow-lg text-sm sm:text-base font-medium transition-all">
          <span> Thank you for the message! I will be in contact with you shortly. </span>
        </div>
      )}

      {showContactMe && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[100]" onClick={() => setShowContactMe(false)}>
          <div className="bg-[#D4C9BE] border-[8px] border-[#123458] max-w-6xl w-[90%] h-[60vh] rounded-xl p-6 relative text-[#111] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* close button */}
            <button onClick={() => setShowContactMe(false)} className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"> &times; </button>

            <h1 className="text-2xl font-bold"> Contact Me </h1>
            <p className='text-s mb-[8px]'> Please just leave one of your phone number or your email so I can get back to you. </p>

            {/* form submission */}
            <form action="https://formspree.io/f/mjkovlel" method="POST" className='flex flex-col gap-4 overflow-y-auto pr-2' onSubmit={ handleFormSubmit }>
              <input type="text" name="Name" required placeholder='Your Name' className="p-3 rounded border border-[#123458] focus:outline-none"/>
              <input type="text" name="Company" placeholder='Company or Organization (optional)' className="p-3 rounded border border-[#123458] focus:outline-none"/>
              <input type="tel" name="Phone" placeholder='Phone Number (optional)' className="p-3 rounded border border-[#123458] focus:outline-none"/>
              <input type="email" name="Email" placeholder='Your Email (optional)' className="p-3 rounded border border-[#123458] focus:outline-none"/>
              <textarea name="message" required placeholder='Your Message' className="p-3 rounded border border-[#123458] h-32 resize-none focus:outline-none" />
              <button type="submit" className="bg-[#123458] text-[#F1EFEC] px-6 py-2 rounded-full font-semibold hover:bg-[#0f2e4a] transition w-fit self-center"> Send Message </button>
            </form>


          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Navbar;