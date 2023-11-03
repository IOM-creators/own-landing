import React from "react";
import Section from "..";

import image from "../../../assets/images/about_us.png";
import InfoWithList from "../../info-with-list";
import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

//About Us
const ServicesOffered: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const cardsContent = t("about_us.cards", {
    returnObjects: true,
  }) as string[];
  const cards = cardsContent.map((card: any, index: number) => {
    return { ...card };
  });
  return (
    <>
      {cards.map((card: any, index: number) => (
        <Section id={"AboutUs" + index} className={className} key={index}>
          <InfoWithList
            image={image}
            card={card}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36"
          />
        </Section>
      ))}
    </>
  );
};

export default ServicesOffered;
