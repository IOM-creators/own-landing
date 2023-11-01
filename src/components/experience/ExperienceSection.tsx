import React from "react";
import Section from "../section";

import Person4 from "../../assets/images/person4.png";
import Person5 from "../../assets/images/person5.png";
import InfoWithList from "../info-with-list";
import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../helpers/commonInterfaces";

const images = [
  {
    image: Person4,
  },
  {
    image: Person5,
  },
];


const ExperienceSection: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("section2.cards", { returnObjects: true }) as string[];
  const cards = cardsContent.map((card: any, index: number) => {
    return { ...card, image: images[index].image };
  });
  return (
    <>
      {cards.map((card: any, index: number) => (
        <Section id={"section" + (2 + index)} className={className} key={index}>
          <InfoWithList
            card={card}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36"
          />
        </Section>
      ))}
    </>
  );
};

export default ExperienceSection;
