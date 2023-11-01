import React from "react";
import cn from "classnames";

import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import Section from "../section";
import TitleSection from "../title-section";
import Slider from "../slider";

import Icon from "../icon";

interface IFeedback {
  className?: string;
}

const Feedback: React.FC<IFeedback> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("feedback.reviews", {
    returnObjects: true,
  }) as string[];
  const feedbacks = cardsContent.map((feedback: any) => {
    return { ...feedback };
  });

  const sliderParams = {
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination-feedback",
      clickable: true,
    },
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
    <Section id="Feedback" className={className}>
      <TitleSection
        tag="h2"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {t("feedback.title")}
      </TitleSection>
      <div className="slider-wrapper relative">
        <Slider params={sliderParams} className="feedback-slider">
          {feedbacks.map((feedback: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto">
                  <Icon icon="person" />
                </div>
                <h5 className="text-xl">{feedback.name}</h5>
                <div className="flex justify-center my-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon
                      key={i}
                      icon="star"
                      className={cn({ "fill-green": i <= feedback.stars })}
                    />
                  ))}
                </div>
                <i>"{feedback.response}"</i>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
        <div className="swiper-pagination-feedback mt-10 text-center"></div>
      </div>
    </Section>
  );
};

export default Feedback;
