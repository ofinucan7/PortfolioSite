import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className={`flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8 -mt-36 text-[#F1EFEC]`}>
      <div className="flex flex-col items-start max-w-2xl w-full space-y-4 sm:space-y-6">
        
        {/* picture + greeting */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full">
          <img 
            src="/imgs/face.jpg" 
            alt="ProfilePicture" 
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[140px] lg:h-[140px] rounded-full border-2 border-[#123458] object-cover flex-shrink-0"
          />

          <div className="flex flex-col justify-center text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-2"> Hello, my name is Owen. </h1>
            <p className="text-lg sm:text-xl font-light flex items-center justify-center sm:justify-start gap-2 leading-none"> 
              <IoIosCheckmarkCircle className="text-green-500 text-lg sm:text-xl lg:size-5 translate-y-[1px]" /> 
              Available for work 
            </p>
          </div>
        </div>

        {/* who i am */}
        <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed"> 
              I am currently pursuing a B.S. in Computer Science with a Mathematics minor at the University of Pittsburgh, 
              with an expected graduation date of December 2025. I am based in Pittsburgh but am open to relocation. I have 
              experience as a full-stack developer and am deeply passionate about AI - particularly 
              in breaking down barriers to its adoption. Outside of computers and technology, I enjoy weight lifting, music,
              sports, and space. 
            </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;