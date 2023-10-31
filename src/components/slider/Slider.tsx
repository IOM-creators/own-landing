import React from "react";
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
  return (
    <Swiper {...params} className={className}>
      {children}
    </Swiper>
  );
};

export default Slider;
