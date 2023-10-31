import React from "react";
import Section from "../section";
import Person from "../../assets/placeholders/person.png";
import TitleSection from "../title-section";
import Slider from "../slider";
import { SwiperSlide } from "swiper/react";
import Icon from "../icon";

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
    stars: 5,
    response:
      "Enjoyed working with Mykola. The task was urgent, and he was able to meet the deadline and provide a quick solution.",
  },
];
interface IFeedback {
  className?: string;
}

const Feedback: React.FC<IFeedback> = ({ className }) => {
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
    <Section className={className}>
      <TitleSection
        tag="h2"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        Customer reviews
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
                    <Icon icon="star" />
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
