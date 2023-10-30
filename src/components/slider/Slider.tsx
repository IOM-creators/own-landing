import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Person3 from "../../assets/images/person3.png";
import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import Person2 from "../../assets/images/person2.png";

interface ISlider {
  className?: string;
}
const Slider: React.FC<ISlider> = ({ className }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Person2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Person4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Person3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Person5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
