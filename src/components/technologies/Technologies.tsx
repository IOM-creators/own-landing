import React, { useRef, useState } from "react";
import cn from "classnames";

import Section from "../section";
import TitleSection from "../title-section";
import Image from "../image";
import { useScrollAnimation } from "../../helpers/reactHooks";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_CORE_TECHNOLOGIES_ENTRY = gql`
  query iomLandingEntryQuery {
    coreTechnologies(id: "61WPlPZ2tFmI3XDetCeTjY") {
      title
      listCollection {
        items {
          ... on ListItem {
            text
            icon {
              url
            }
          }
        }
      }
    }
  }
`;
interface ITechnologies {
  className?: string;
}

const Technologies: React.FC<ITechnologies> = ({ className = "" }) => {
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);

  const { data } = useQuery(GET_CORE_TECHNOLOGIES_ENTRY);
  const section = data?.coreTechnologies || {};
  const content = {
    revert: section.revert,
    title: section.title,
    list: section?.listCollection?.items?.map((item: any) => ({
      text: item.text,
      icon: item.icon.url,
    })),
  };

  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);

  return (
    <Section id="CoreTechnologies" className={className}>
      <TitleSection
        tag="h2"
        fontSize="text-4xl md:text-5xl"
        className="text-center mb-10 md:mb-20"
      >
        {content.title}
      </TitleSection>
      <div className="flex flex-wrap justify-center">
        {content.list &&
          content.list.map((item: any, index: number) => {
            const animationDelayClass = `animate-slide-up-delay-${index + 2}`;

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
    </Section>
  );
};

export default Technologies;
