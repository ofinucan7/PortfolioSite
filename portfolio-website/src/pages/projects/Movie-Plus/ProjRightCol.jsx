import React from 'react'
import Slider from 'react-slick'
import { movie_plus } from '../../../scripts/detailed_projects'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjRightCol = () => {
  const imgs = movie_plus.imgs;
  const dialogue = movie_plus.dialogue;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true
  };

  return (
    <div className="relative z-10 p-6 mt-[16px] w-full text-left text-[#F1EFEC]">

      {/* img slider */}
      <div className="rounded-lg shadow-lg mb-6">
        <Slider {...settings}>
          {imgs.map((src, i) => (
            <div key={i} className="px-2">
              <img src={src} alt={`Slide ${i}`} className="w-full h-[300px] object-contain rounded-lg"/>
            </div>
          ))}
        </Slider>
      </div>

      {/* project description / dialogue */}
      <div className="bg-[#123458] p-4 mb-[16px] rounded-lg shadow text-[#F1EFEC]">
        <h1 className="text-xl font-semibold mb-2"> About the Project </h1>
        <p className="text-sm leading-relaxed"> { dialogue } </p>
      </div>
    </div>
  );
};

export default ProjRightCol