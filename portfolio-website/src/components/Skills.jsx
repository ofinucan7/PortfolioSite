import React from 'react';
import { useState } from 'react'

const Skills = ({ focus_skills, all_skills, details_by_skill } ) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-20 text-[#F1EFEC] mt-12">

      {/* focus skills section */}
      <div className='mb-8 sm:mb-12 lg:mb-[24px]'>
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-left text-[#F1EFEC]`} >Focus Skills</h1>
        <p className={`text-sm sm:text-base font-light mb-3 sm:mb-4 lg:mb-[12px]`} > Focus skills are what I am good at and what I like working on. </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {focus_skills.map((skill, i) => (
            <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-3 sm:p-4 rounded-lg sm:rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
              <skill.icon className="text-2xl sm:text-3xl lg:text-4xl text-[#123458] mb-1 sm:mb-2" />
              <p className="text-[#123458] font-semibold text-xs sm:text-sm lg:text-base text-center">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* all skills section */}
      <div>
        <h1 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#F1EFEC] mt-2 sm:mt-3 lg:mt-[5px] mb-2 sm:mb-3 lg:mb-[4px] text-left`}> All Skills </h1>
        
        {/* Frontend */}
        <div className="mb-6 sm:mb-8 lg:mb-[12px]">
          <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 lg:mb-[16px] text-[#F1EFEC] mt-2 sm:mt-3 lg:mt-[5px] text-left`}> Frontend </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {all_skills.frontend.map((skill, i) => (
              <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-3 sm:p-4 rounded-lg sm:rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
                <skill.icon className="text-2xl sm:text-3xl lg:text-4xl text-[#123458] mb-1 sm:mb-2" />
                <p className="text-[#123458] font-semibold text-xs sm:text-sm lg:text-base text-center">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-6 sm:mb-8 lg:mb-[12px]">
          <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 lg:mb-[16px] text-[#F1EFEC] mt-2 sm:mt-3 lg:mt-[5px] text-left`}>Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {all_skills.backend.map((skill, i) => (
              <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-3 sm:p-4 rounded-lg sm:rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
                <skill.icon className="text-2xl sm:text-3xl lg:text-4xl text-[#123458] mb-1 sm:mb-2" />
                <p className="text-[#123458] font-semibold text-xs sm:text-sm lg:text-base text-center">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div>
          <h2 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 lg:mb-[16px] text-[#F1EFEC] mt-2 sm:mt-3 lg:mt-[5px] text-left`}> Other </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {all_skills.other.map((skill, i) => (
              <div key={i} className="bg-[#D4C9BE] p-3 sm:p-4 rounded-lg sm:rounded-xl flex flex-col items-center hover:scale-105 transition">
                <skill.icon className="text-2xl sm:text-3xl lg:text-4xl text-[#123458] mb-1 sm:mb-2" />
                <p className="text-[#123458] font-semibold text-xs sm:text-sm lg:text-base text-center">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {selectedSkill && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSkill(null)}>
          <div className="bg-[#D4C9BE] p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-4 sm:border-[8px] border-[#123458] max-w-sm sm:max-w-md lg:max-w-lg w-full text-[#030303] relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedSkill(null)} className="absolute top-2 right-3 sm:right-4 text-[#030303] hover:text-gray-600 text-xl sm:text-2xl"> &times; </button>

            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pr-8">
              <selectedSkill.icon className="text-2xl sm:text-3xl lg:text-4xl text-[#123458]" />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">{selectedSkill.skill}</h1>
            </div>

            {details_by_skill[selectedSkill.skill] && (
              Object.entries(details_by_skill[selectedSkill.skill])
                .filter(([, items]) => items.length > 0)
                .map(([category, items], idx) => (
                  <div key={idx} className="mb-4 sm:mb-6">
                    <p className="text-lg font-medium text-[#030303] mb-2">
                      {category === "Projects" ? "Personal Projects" : category}:
                    </p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-[#030303] space-y-1">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))
            )}
          </div>
        </div>
      )}


    </div>
  );
};

export default Skills;