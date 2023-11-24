import React, { useRef, useState } from "react";
import Section from "../../section";
import TitleSection from "../../title-section";
import InfoCard from "../../info-card";

import { ISectionCommon } from "../../../helpers/commonInterfaces";
import { useScrollAnimation } from "../../../helpers/reactHooks";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_WHY_CHOOSE_US_ENTRY = gql`
  query iomLandingEntryQuery {
    whyChooseUs(id: "usGv4E1tnQn78QIYvfapQ") {
      title
      infoCardsCollection {
        items {
          ... on InfoCard {
            title
            description {
              json
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`;

const images = [
  {
    image: "why-choose-us-1",
  },
  {
    image: "why-choose-us-2",
  },
  {
    image: "why-choose-us-3",
  },
];

const WhyChooseUs: React.FC<ISectionCommon> = ({ className }) => {
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLLIElement | null>>([]);

  const { data } = useQuery(GET_WHY_CHOOSE_US_ENTRY);
  const section = data?.whyChooseUs || {};
  const content = {
    title: section.title,
    cards: section?.infoCardsCollection?.items?.map(
      (item: any, index: number) => ({
        title: item.title,
        icon: images[index].image,
        description: item?.description?.json,
      })
    ),
  };

  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);
  return (
    <Section id="WhyChooseUs" className={className}>
      {content?.title && (
        <TitleSection
          tag="h2"
          position="text-center"
          className="mb:10 md:mb-20"
          fontSize="md:text-5xl text-4xl"
        >
          {content.title}
        </TitleSection>
      )}
      <div className="grid ms:grid-cols-1 items-start  lg:grid-cols-3 gap-16 md:gap-20 mt-10 mb-10">
        {content.cards &&
          content.cards.map((card: any, index: number) => (
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
