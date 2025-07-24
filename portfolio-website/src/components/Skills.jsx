import React from 'react';
import { useState } from 'react'

const Skills = ({ focus_skills, all_skills, change_text_color } ) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-[#F1EFEC] -mt-[40px]">

      {/* focus skills section */}
      <div className='mb-[24px]'>
        <h1 className={`text-4xl font-bold mb-1 text-left text-[#F1EFEC]`} >Focus Skills</h1>
        <p className={`text-s font-light  mb-[12px]`} > Focus skills are what I am good at and what I like working on. </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {focus_skills.map((skill, i) => (
            <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
              <skill.icon className="text-4xl text-[#123458] mb-2" />
              <p className="text-[#123458] font-semibold">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* all skills section */}
      <div>
        <h1 className={`text-3xl font-bold text-[#F1EFEC] mt-[5px] mb-[4px] text-left`}> All Skills </h1>
        {/* Frontend */}
        <div className="mb-[12px]">
          <h2 className={`text-xl font-semibold mb-[16px] text-[#F1EFEC] mt-[5px] text-left`}> Frontend </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {all_skills.frontend.map((skill, i) => (
              <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
                <skill.icon className="text-4xl text-[#123458] mb-2" />
                <p className="text-[#123458] font-semibold">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-[12px]">
          <h2 className={`text-xl font-semibold mb-[16px] text-[#F1EFEC] mt-[5px] text-left`}>Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {all_skills.backend.map((skill, i) => (
              <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
                <skill.icon className="text-4xl text-[#123458] mb-2" />
                <p className="text-[#123458] font-semibold">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div>
          <h2 className={`text-xl font-semibold mb-[16px] text-[#F1EFEC] mt-[5px] text-left`}> Other </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {all_skills.other.map((skill, i) => (
              <div key={i} onClick={() => setSelectedSkill(skill)} className="bg-[#D4C9BE] p-4 rounded-xl flex flex-col items-center hover:scale-105 transition cursor-pointer">
                <skill.icon className="text-4xl text-[#123458] mb-2" />
                <p className="text-[#123458] font-semibold">{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>

      </div>


            {selectedSkill && (
              <div className="fixed inset-0 bg-[#030303] bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedSkill(null)}>
                <div className="bg-[#D4C9BE] p-8 rounded-xl border-[8px] border-[#123458] max-w-md w-full text-[#030303] relative" onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setSelectedSkill(null)} className="absolute top-2 right-4 text-[#030303] hover:text-white text-2xl"> &times; </button>

                  <div className="flex items-center gap-3 mb-4">
                    <selectedSkill.icon className="text-4xl text-[#123458]" />
                    <h1 className="text-2xl font-bold">{selectedSkill.skill}</h1>
                  </div>

                  {selectedSkill.projectsUsed?.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-[#030303] mb-2"> Used in: </p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#030303] list-disc list-inside">
                        {selectedSkill.projectsUsed.map((project, idx) => (
                          <li key={idx} className="list-item"> {project.name}{" "} <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#123458] hover:underline font-medium ml-1"> | Go to Project </a> </li>
                        ))}
                      </ul>
                    </div>
                  )}

          </div>
        </div>
      )}


    </div>
  );
};

export default Skills;
