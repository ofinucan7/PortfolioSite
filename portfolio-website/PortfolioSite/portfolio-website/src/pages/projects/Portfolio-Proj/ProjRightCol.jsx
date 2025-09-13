import React from 'react';
import { portfolio_site } from '../../../scripts/detailed_projects';

const ProjRightCol = () => {
  const img = portfolio_site.imgs?.[0];  
  const dialogue = portfolio_site.dialogue;

  return (
    <div className="relative z-10 w-full max-w-xl mx-auto px-4 py-6 text-left text-[#F1EFEC]">
      {img && (
        <div className="rounded-lg shadow-lg mb-6">
          <img src={img} alt="Project visual" className="w-full h-[250px] sm:h-[300px] object-contain rounded-lg" />
        </div>
      )}

      <div className="bg-[#123458] p-4 mb-[16px] rounded-lg shadow text-[#F1EFEC]">
        <h1 className="text-xl font-semibold mb-2"> About the Project </h1>
        <p className="text-sm leading-relaxed">{dialogue}</p>
      </div>
    </div>
  );
};

export default ProjRightCol;