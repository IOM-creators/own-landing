import React from "react";
import Section from "../section";
import TitleSection from "../title-section";
import InfoCard from "../info-card";

import Person1 from "../../assets/images/person1.png";
import Person2 from "../../assets/images/person2.png";
import Person3 from "../../assets/images/person3.png";
import { useTranslation } from "react-i18next";

const images = [
  {
    image: Person1,
  },
  {
    image: Person2,
  },
  {
    image: Person3,
  },
];

interface ISection1 {
  className?: string;
}
const Section1: React.FC<ISection1> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("section1.cards", { returnObjects: true }) as string[];
  const cards = cardsContent.map((card: any, index: number) => {
    return { ...card, image: images[index].image };
  });
  return (
    <Section id="section1" className={className}>
      <TitleSection
        tag="h2"
        position="text-center"
        className="mb-20"
        supText={t("section1.supTitle")}
        fontSize="lg:text-5xl md:text-4xl sm:text-3xl"
      >
        {t("section1.title")}
      </TitleSection>
      <div className="grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-10 mb-10">
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

export default Section1;
