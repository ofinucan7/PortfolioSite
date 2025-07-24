import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const lastUpdated = 'July 23rd, 2025'

  return (
    <div className="bg-[#123458] text-[#F1EFEC] text-sm py-6 px-4 -mt-[24px] z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* github + contact me */}
        <div className="flex gap-6 items-center">
          <a href="https://github.com/ofinucan7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline hover:text-[#D4C9BE]"> <FaGithub /> GitHub </a>
        </div>

        {/* back to top */}
        <button onClick={ scrollToTop } className="hover:underline cursor-pointer"> ↑ Back to top </button>

        {/* last updated */}
        <div className="text-[#D4C9BE]">
          Last updated: { lastUpdated }
        </div>
      </div>
    </div>
  );
};