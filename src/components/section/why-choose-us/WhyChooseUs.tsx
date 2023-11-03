import React from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import InfoCard from "../../info-card";

import Person1 from "../../../assets/images/why_choose_us_1.png";
import Person2 from "../../../assets/images/why_choose_us_2.png";
import Person3 from "../../../assets/images/person3.png";
import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

const images = [
  {
    image: Person1,
  },
  {
    image: Person2,
  },
];

const WhyChooseUs: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("why_choose_us.cards", {
    returnObjects: true,
  }) as string[];
  const cards = cardsContent.map((card: any, index: number) => {
    return { ...card, image: images[index].image };
  });
  return (
    <Section id="section1" className={className}>
      <TitleSection
        tag="h2"
        position="text-center"
        className="mb:10 md:mb-20"
        fontSize="lg:text-5xl md:text-4xl sm:text-3xl"
      >
        {t("why_choose_us.title")}
      </TitleSection>
      <div className="grid items-baseline ms:grid-cols-1  md:grid-cols-2 gap-16 md:gap-40 mt-10 mb-10">
        {cards.map((card: any, index: number) => (
          <InfoCard
            card={card}
            key={index}
            className="flex flex-col justify-center"
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
