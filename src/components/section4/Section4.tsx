import React from "react";
import Section from "../section";

import Person4 from "../../assets/images/person4.png";
import { useTranslation } from "react-i18next";
import Slider from "../slider";

interface ISection4 {
  className?: string;
}
const ISection4: React.FC<ISection4> = ({ className }) => {
  const { t } = useTranslation();
  // const cardsContent = t("section2.cards", { returnObjects: true }) as string[];
  // const cards = cardsContent.map((card: any, index: number) => {
  //   return { ...card};
  // });
  return (
    <Section id="section4" className={className}>
      <Slider />
    </Section>
  );
};

export default ISection4;
