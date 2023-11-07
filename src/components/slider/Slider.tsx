import React, { useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
interface ISlider {
  params?: any;
  children: React.ReactNode;
  className?: string;
}
SwiperCore.use([Navigation, Pagination]);

const Slider: React.FC<ISlider> = ({ params, children, className }) => {
  useEffect(() => {
    const slides = document.querySelectorAll(".gallery-slider .swiper-slide");
    let maxHeight = 0;

    slides.forEach((slide) => {
      const slideHeight = slide.clientHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });

    slides.forEach((slide: any) => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []);
  return (
    <Swiper {...params} className={className}>
      {children}
    </Swiper>
  );
};

export default Slider;
