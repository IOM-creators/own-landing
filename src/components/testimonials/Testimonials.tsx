import React from "react";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";
import ReviewItem from "../review-item";
import Icon from "../icon";

interface ITestimonials {
  id?: string;
  section: any;
}

const Testimonials: React.FC<ITestimonials> = ({ id = "", section }) => {
  const { testimonials }: any = section;
  const testimonialsItems = testimonials?.testimonialCollection?.items || [];
  const sliderParams = {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination-testimonials",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };
  if (!testimonials) return null;

  return (
    <div className="testimonials">
      <div className="testimonials__header flex items-center justify-between mb-10">
        <h2 data-animate="moveRight">{testimonials.title}</h2>
        <div
          className="slider-buttom-wrapper relative flex justify-between self-end hidden md:flex"
          data-animate="moveLeft"
        >
          <div className="swiper-button-prev p-4 cursor-pointer hover:text-primary-orange">
            <Icon icon="arrow-prev" />
          </div>
          <div className="swiper-button-next p-4 cursor-pointer hover:text-primary-orange">
            <Icon icon="arrow-next" />
          </div>
        </div>
      </div>
      <Slider params={sliderParams}>
        {testimonialsItems.map((testimonial: any, index: number) => (
          <SwiperSlide key={index}>
            <ReviewItem
              section={{ reviewItem: testimonial }}
              className="border border-border-color !p-8"
              data-animate="fadeIn"
            />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="swiper-pagination-testimonials mt-10 text-center"></div>
    </div>
  );
};

export default Testimonials;
