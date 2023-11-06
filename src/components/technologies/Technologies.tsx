import React, { useRef, useState } from "react";
import cn from "classnames";

import Section from "../section";
import TitleSection from "../title-section";
import { useTranslation } from "react-i18next";
import Icon from "../icon";
import { useScrollAnimation } from "../../helpers/reactHooks";

interface ITechnologies {
  className?: string;
}

const Technologies: React.FC<ITechnologies> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);
  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);

  const content = t("technologies.list", {
    returnObjects: true,
  }) as string[];
  const list = content.map((list: any) => ({ ...list }));

  return (
    <Section id="CoreTechnologies" className={className}>
      <TitleSection
        tag="h2"
        fontSize="text-4xl md:text-5xl"
        className="text-center mb-10 md:mb-20"
      >
        {t("technologies.title")}
      </TitleSection>
      <div className="flex flex-wrap justify-center">
        {list.map((item, index: number) => {
          const animationDelayClass = `animate-delay-${index + 1}`;

          return (
            <div
              ref={(el) => (elementsRef.current[index] = el)}
              className={cn(
                isAnimated[index] && "popIn",
                animationDelayClass,
                "text-center m-5 scale-0"
              )}
              key={index}
            >
              <div className="shadow-primary p-5 mb-3 rounded-md">
                <Icon icon={item.icon} />
              </div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Technologies;
