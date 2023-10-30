import React from "react";
import Section from "../section";

import { useTranslation } from "react-i18next";
import Slider from "../slider";
import Icon from "../icon";

import Person3 from "../../assets/images/person3.png";
import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import Person2 from "../../assets/images/person2.png";

const images = [
  {
    image: Person2,
  },
  {
    image: Person4,
  },
  {
    image: Person3,
  },
  {
    image: Person5,
  },
];
interface ISection4 {
  className?: string;
}
const Section4: React.FC<ISection4> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("section4.cards", { returnObjects: true }) as string[];
  const slides = cardsContent.map((card: any, index: number) => {
    return { ...card, image: images[index].image };
  });
  return (
    <div className=" bg-dark-blue">
      <Section id="section4" className={className}>
        <div className="slider-wrapper relative">
          <div className="slider-header flex justify-between mb-5 lg:mb-14 lg:mx-10">
            <h2 className="text-white text-4xl lg:text-6xl mb-5">
              {t("section4.title")}
            </h2>
            <div className="slider-buttom-wrapper relative flex justify-between w-48 self-end hidden lg:flex">
              <div className="swiper-button-prev flex items-center justify-center rounded-full w-16 h-16 bg-white cursor-pointer mr-2">
                <Icon icon="arrow" />
              </div>
              <div className="swiper-button-next flex items-center justify-center rounded-full w-16 h-16 bg-white rotate-180 cursor-pointer  ml-2">
                <Icon icon="arrow" />
              </div>
            </div>
          </div>
          <Slider slides={slides} />
          <div className="swiper-pagination !top-100-20 md:hidden"></div>
        </div>
      </Section>
    </div>
  );
};

export default Section4;
