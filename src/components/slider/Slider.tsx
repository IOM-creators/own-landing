import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import InfoCard from "../info-card";
interface ISlider {
  slides: any[];
  className?: string;
}
SwiperCore.use([Navigation, Pagination]);

const Slider: React.FC<ISlider> = ({ slides, className }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          pagination: false,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper !py-10"
    >
      {slides.map((slide: any, index: number) => (
        <SwiperSlide key={index}>
          <InfoCard card={slide} className="bg-white px-5 py-5" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
