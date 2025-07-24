import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className={`flex justify-center items-center min-h-screen px-4 -mt-[240px] text-[#F1EFEC]`}>
      <div className="flex flex-col items-start max-w-2xl w-full space-y-4">
        
        {/* picture + greeting */}
        <div className="flex items-center space-x-5">
          <img src="/imgs/face.jpg" alt="ProfilePicture" className="w-[140px] h-[140px] rounded-full border-2 border-[#123458] object-cover"/>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold pb-2"> Hello, my name is Owen. </h1>
            <p className="text-xl font-light flex items-center gap-2 leading-none"> <IoIosCheckmarkCircle className="text-green-500 size-5 translate-y-[1px]" /> Available for work </p>
          </div>
        </div>

        {/* who i am */}
        <div>
            <p> I am currently pursuing a B.S. in Computer Science with a Mathematics minor at the University of Pittsburgh, 
                with an expected graduation date of December 2025. I am based in Pittsburgh but am open to relocation. I have 
                experience as a full-stack developer and am deeply passionate about AI - particularly 
                in breaking down barriers to its adoption. Outside of computers and technology, I enjoy weight lifting, music,
                sports, and space. </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
