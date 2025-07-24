import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-[#F1EFEC] -mt-[300px]">
      <h2 className={`text-4xl font-bold mb-6 text-[#F1EFEC]`} > Projects </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)} className="group bg-[#D4C9BE] border-[8px] border-[#123458] p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition transform cursor-pointer">
            <p className="text-xl font-semibold mb-2 text-[#030303] group-hover:text-[#123458] transition-colors duration-200"> { project.title } | { project.short_desc } </p>
            <img src={project.img} alt={`${project.title} screenshot`} className="rounded-md w-full h-auto object-cover"/>
          </div>
        ))}
      </div>

      {/* basic info about projects */}
      {selectedProject && (
        <div className="fixed inset-0 bg-[#030303] bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)} >
          <div className="bg-[#D4C9BE] p-8 rounded-xl border-[8px] border-[#123458] max-w-md w-full text-[#030303] relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-4 text-gray-400 hover:text-white text-2xl"> &times; </button>

            {/* project specific info */}
            <h2 className="text-2xl font-bold">{ selectedProject.title }</h2>
            <p className="mb-2">{selectedProject.desc}</p>
            <img src={selectedProject.img} alt={`${selectedProject.title} screenshot`} className="rounded-md w-full h-auto object-cover mb-2"/>
            <p className="text-sm text-[#030303] mb-1"> Tech Stack: {selectedProject.stack?.join(", ") || "N/A"} </p>
            <div className="flex justify-center">
              <button onClick={() => navigate(selectedProject.redirect)} className="mt-2 bg-[#123458] text-[#F1EFEC] px-5 py-2 rounded-full font-medium transition hover:bg-[#0f2e4a] hover:shadow-md"> Explore Details </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default Projects;