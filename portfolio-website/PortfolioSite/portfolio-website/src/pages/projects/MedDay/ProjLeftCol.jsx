import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { medday } from '../../../scripts/detailed_projects';
import { HiOutlineCog } from "react-icons/hi";

const ProjLeftCol = () => {
  const github_url = medday.github;
  const relevant_site = medday.project;
  const tech_stack = medday.stack;

  return (
    <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xl mx-auto px-4 z-10">
      <h1 className="text-3xl font-bold text-[#F1EFEC]">{medday.proj_name}</h1>

      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 z-60">
          <a href={github_url} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#F1EFEC] hover:bg-[#D4C9BE] text-[#123458] px-10 py-2 rounded transition font-medium"> 
            <FaGithub className="mr-2" /> GitHub 
          </a>
          <a href={relevant_site} target="_blank" rel="noopener noreferrer" className="bg-[#F1EFEC] hover:bg-[#D4C9BE] text-[#123458] px-10 py-2 rounded transition font-medium">  DevPost </a>
        </div>
      </div>

      <div className="bg-[#D4C9BE] p-4 rounded-xl shadow-md w-full">
        <div className="flex justify-center mb-4 text-[#123458]">
          <div className="flex items-center gap-1">
            <HiOutlineCog className="text-2xl" />
            <h1 className="text-2xl font-bold tracking-wide">Tech Stack</h1>
            <HiOutlineCog className="text-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tech_stack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="bg-[#123458] text-white px-3 py-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition">
                <Icon className="text-[32px] mb-2" />
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjLeftCol;
