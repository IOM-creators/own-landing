import React from "react";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import Section from "../../section";
import Slider from "../../slider";
import Icon from "../../icon";

import InfoCard from "../../info-card";
import { SwiperSlide } from "swiper/react";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import TitleSection from "../../title-section";

import { useGetPortfolio } from "../../../graphql/";

const Portfolio: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetPortfolio(id);

  const sliderParams = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-gallery",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [EffectCoverflow, Autoplay],
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="bg-dark-blue bg-ellipse bg-contain bg-right-top bg-no-repeat">
      <Section id="Portfolio" className={className}>
        <div className="slider-wrapper relative">
          <div className="slider-header flex justify-between mb-5 lg:mb-14 lg:mx-10">
            <TitleSection
              tag="h2"
              fontSize="text-4xl md:text-5xl"
              className="text-white text-center md:text-left mb-5"
            >
              {section.title}
            </TitleSection>
            <div className="slider-buttom-wrapper relative flex justify-between w-48 self-end hidden lg:flex">
              <div className="swiper-button-prev flex items-center justify-center rounded-full w-16 h-16 bg-white cursor-pointer mr-2">
                <Icon icon="arrow" />
              </div>
              <div className="swiper-button-next flex items-center justify-center rounded-full w-16 h-16 bg-white rotate-180 cursor-pointer  ml-2">
                <Icon icon="arrow" />
              </div>
            </div>
          </div>
          <Slider params={sliderParams} className="gallery-slider !py-10">
            {section.slides.map((slide: any, index: number) => (
              <SwiperSlide key={index}>
                <InfoCard
                  card={slide}
                  className="bg-white px-5 py-5 rounded-lg h-full"
                />
              </SwiperSlide>
            ))}
          </Slider>
          <div className="swiper-pagination-gallery text-center !top-100-20 "></div>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
