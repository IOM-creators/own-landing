import React from "react";
import { useGetTestimonials } from "@/graphql/queries/testimonials";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";
import ReviewItem from "../review-item";
import Icon from "../icon";

interface ITestimonials {
  id?: string;
}

const Testimonials: React.FC<ITestimonials> = ({ id = "" }) => {
  const { section }: any = useGetTestimonials(id);

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
  if (!section) return null;
  return (
    <div className="testimonials">
      <div className="testimonials__header flex items-center justify-between mb-10">
        <h2>{section.title}</h2>
        <div className="slider-buttom-wrapper relative flex justify-between self-end hidden md:flex">
          <div className="swiper-button-prev p-4 cursor-pointer">
            <Icon icon="arrow-prev" />
          </div>
          <div className="swiper-button-next p-4 cursor-pointer">
            <Icon icon="arrow-next" />
          </div>
        </div>
      </div>
      <Slider params={sliderParams}>
        {section.testimonials.map((testimonial: any, index: number) => (
          <SwiperSlide key={index}>
            <ReviewItem
              data={{ review: { ...testimonial } }}
              className="border border-border-color !p-8"
            />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="swiper-pagination-testimonials mt-10 text-center"></div>
    </div>
  );
};

export default Testimonials;
