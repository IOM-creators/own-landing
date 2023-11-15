import React, { useRef, useState } from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import InfoCard from "../../info-card";

import { useTranslation } from "react-i18next";
import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useScrollAnimation } from "../../../helpers/reactHooks";

const images = [
  {
    icon: "why-choose-us-1",
  },
  {
    icon: "why-choose-us-2",
  },
  {
    icon: "why-choose-us-3",
  },
];

const WhyChooseUs: React.FC<ISectionCommon> = ({ className }) => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLLIElement | null>>([]);

  const cardsContent = t("why_choose_us.cards", {
    returnObjects: true,
  }) as string[];
  const cards = cardsContent.map((card: any, index: number) => {
    return { ...card, icon: images[index].icon };
  });
  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);
  return (
    <Section id="WhyChooseUs" className={className}>
      <TitleSection
        tag="h2"
        position="text-center"
        className="mb:10 md:mb-20"
        fontSize="md:text-5xl text-4xl"
      >
        {t("why_choose_us.title")}
      </TitleSection>
      <div className="grid ms:grid-cols-1 items-start  lg:grid-cols-3 gap-16 md:gap-20 mt-10 mb-10">
        {cards.map((card: any, index: number) => (
          <InfoCard
            animated
            icon={`why-choose-us-${index + 1}`}
            index={index}
            card={card}
            key={index}
            className="flex flex-col justify-center text-gray"
          />
        ))}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
