import React from "react";
import cn from "classnames";

import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import Section from "..";
import TitleSection from "../../title-section";
import Slider from "../../slider";

import Icon from "../../icon";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

const feedbacks = [
  {
    name: "Ivan Biriuk",
    stars: 5,
    response:
      "Very Genuine person, Strictly professional, and very easy to work with, looking forward to working with him on a regular basis.",
  },
  {
    name: "Oleg Statkevych",
    stars: 5,
    response:
      "Mykola is great to work with, writes clean code and makes changes extremely quickly. Was great to work with him, would highly recommend!",
  },
  {
    name: "Mykola Shpakivskiy",
    stars: 5,
    response:
      "Enjoyed working with Mykola. The task was urgent, and he was able to meet the deadline and provide a quick solution.",
  },
  {
    name: "Ivan Biriuk",
    stars: 4,
    response:
      "Enjoyed working with Mykola. The task was urgent, and he was able to meet the deadline and provide a quick solution.",
  },
];

const Feedback: React.FC<ISectionCommon> = ({ className }) => {
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
              <div className="text-center py-2 ">
                <div className="flex items-center justify-center w-10 h-10 mb-5 mx-auto rounded-full bg-gray">
                  <span className="text-700 text-2xl text-white">
                    {feedback.name[0]}
                  </span>
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
                <i className="truncate-2">"{feedback.response}"</i>
                <br />
                <a
                  href={feedback.link.url}
                  className="mt-3 pb-1 relative before:block before:left-0  before:absolute before:content-'' before:w-full before:top-full before:h-px before:bg-dark-blue"
                >
                  {feedback.link.text}
                </a>
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
