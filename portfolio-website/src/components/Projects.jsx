import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 lg:py-16 px-4 sm:px-6 md:px-8 text-[#F1EFEC] -mt-48 sm:-mt-48 md:-mt-48 lg:-mt-48 xl:-mt-60 2xl:-mt-72">
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#F1EFEC]`} > Projects </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} className="group bg-[#D4C9BE] border-4 sm:border-[8px] border-[#123458] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition transform cursor-pointer">
            <p className="text-lg sm:text-xl font-semibold mb-2 text-[#030303] group-hover:text-[#123458] transition-colors duration-200"> { project.title } | { project.short_desc } </p>
            <img src={project.img} alt={`${project.title} screenshot`} className="rounded-md w-full h-auto object-cover"/>
          </div>
        ))}
      </div>

      {/* basic info about projects */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)} >
          <div className="bg-[#D4C9BE] p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border-4 sm:border-[8px] border-[#123458] max-w-sm sm:max-w-md lg:max-w-lg w-full text-[#030303] relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-3 sm:right-4 text-gray-600 hover:text-black text-xl sm:text-2xl"> &times; </button>

            {/* project specific info */}
            <h2 className="text-xl sm:text-2xl font-bold pr-8">{selectedProject.title}</h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">{selectedProject.desc}</p>
            <img src={selectedProject.img} alt={`${selectedProject.title} screenshot`} className="rounded-md w-full h-auto object-cover mb-3 sm:mb-4"/>
            <p className="text-xs sm:text-sm text-[#030303] mb-3 sm:mb-4"> Tech Stack: {selectedProject.stack?.join(", ") || "N/A"} </p>
            <div className="flex justify-center">
              <button onClick={() => navigate(selectedProject.redirect)} className="bg-[#123458] text-[#F1EFEC] px-4 sm:px-5 py-2 rounded-full font-medium transition hover:bg-[#0f2e4a] hover:shadow-md text-sm sm:text-base"> Explore Details </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default Projects;