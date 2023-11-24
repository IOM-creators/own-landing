import React from "react";

import { SwiperSlide } from "swiper/react";

import Section from "../../section";
import TitleSection from "../../title-section";
import Slider from "../../slider";

import { ISectionCommon } from "../../../helpers/commonInterfaces";
import ReviewItem from "../../review-item";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_FEEDBACKS_ENTRY = gql`
  query iomLandingEntryQuery {
    feedbacks(id: "4g4wJhj33othVTCs289oIs") {
      title
      reviewsCollection {
        items {
          ... on ReviewItem {
            name
            stars
            response
            linkText
            linkUrl
          }
        }
      }
    }
  }
`;
const Feedback: React.FC<ISectionCommon> = ({ className }) => {
  const { data } = useQuery(GET_FEEDBACKS_ENTRY);
  const section = data?.feedbacks || {};

  const content = {
    title: section.title,
    feedbacks: section.reviewsCollection?.items,
  };

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
    <Section id="Feedbacks" className={className}>
      <TitleSection
        tag="h2"
        className="mb-10 md:mb-20 text-center"
        fontSize="md:text-5xl text-4xl"
      >
        {content.title}
      </TitleSection>
      <div className="slider-wrapper relative">
        <Slider params={sliderParams} className="feedback-slider">
          {content.feedbacks &&
            content.feedbacks.map((feedback: any, index: number) => (
              <SwiperSlide key={index}>
                <ReviewItem feedback={feedback} />
              </SwiperSlide>
            ))}
        </Slider>
        <div className="swiper-pagination-feedback mt-10 text-center"></div>
      </div>
    </Section>
  );
};

export default Feedback;
