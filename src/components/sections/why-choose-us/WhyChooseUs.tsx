import React, { useRef, useState } from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import InfoCard from "../../info-card";

import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useScrollAnimation } from "../../../helpers/reactHooks";
import { useGetWhyChooseUs } from "../../../graphql";

const WhyChooseUs: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetWhyChooseUs(id);
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLLIElement | null>>([]);

  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);
  return (
    <div id="WhyChooseUs" className={className}>
      <TitleSection
        tag="h2"
        position="text-center"
        className="mb:10 md:mb-20"
        fontSize="md:text-5xl text-4xl"
      >
        {section.title}
      </TitleSection>
      <div className="grid ms:grid-cols-1 items-start  lg:grid-cols-3 gap-16 md:gap-20 mt-10 mb-10">
        {section.cards.map((card: any, index: number) => (
          <InfoCard
            animated
            index={index}
            card={card}
            key={index}
            className="flex flex-col justify-center text-gray"
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
