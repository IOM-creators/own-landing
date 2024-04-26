import React, { useRef, useState } from "react";
import cn from "classnames";

import Section from "../../section";
import TitleSection from "../../title-section";
import Image from "../../image";
import { useScrollAnimation } from "../../../helpers/reactHooks";
import { useGetTechnologies } from "../../../graphql/";
import { ISectionCommon } from "../../../helpers/commonInterfaces";

const Technologies: React.FC<ISectionCommon> = ({ className, id }) => {
  const { section } = useGetTechnologies(id);
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);

  return (
    <div id="CoreTechnologies" className={className}>
      <TitleSection
        tag="h2"
        fontSize="text-4xl md:text-5xl"
        className="text-center mb-10 md:mb-20"
      >
        {section.title}
      </TitleSection>
      <div className="flex flex-wrap justify-center">
        {section.list.map((item: any, index: number) => {
          const animationDelayClass = `animate-slide-up-delay-${index + 2}`;

          return (
            <div
              ref={(el: any) => (elementsRef.current[index] = el)}
              className={cn(
                isAnimated[index] && "popIn",
                animationDelayClass,
                "text-center m-5 scale-0"
              )}
              key={index}
            >
              {item.icon && (
                <div className="shadow-primary p-5 mb-3 rounded-md">
                  <Image src={item.icon} classWrapper="w-10 h-10" />
                </div>
              )}
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
