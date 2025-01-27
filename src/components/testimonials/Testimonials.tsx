import React from "react";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";
import ReviewItem from "../review-item";
import Icon from "../icon";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
      className="testimonials"
    >
      <div className="testimonials__header flex items-center justify-between mb-10">
        <h2>{testimonials.title}</h2>
        <div className="slider-buttom-wrapper relative flex justify-between self-end hidden md:flex">
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
          <SwiperSlide key={index} className="h-auto">
            <ReviewItem
              section={{ reviewItem: testimonial }}
              className="border border-border-color !p-8"
            />
          </SwiperSlide>
        ))}
      </Slider>
      <div className="swiper-pagination-testimonials mt-10 text-center"></div>
    </motion.div>
  );
};

export default Testimonials;
