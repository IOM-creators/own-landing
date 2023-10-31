import React from "react";
import Image from "../image";
import TitleSection from "../title-section";
import DynamicTag from "../dynamic-tag";
import Button from "../button";

interface IInfoCard {
  card: {
    image: string;
    title?: string;
    description?: string;
    btnText?: string;
    btnLink?: string;
  };
  className?: string;
}

const InfoCard: React.FC<IInfoCard> = ({ card, className }) => {
  return (
    <div className={className}>
      {card.image && <Image src={card.image} borderRadius="rounded-3xl" />}
      {card.title && (
        <TitleSection tag="h4" fontSize="text-2xl" className="mt-6">
          {card.title}
        </TitleSection>
      )}
      {card.description && (
        <DynamicTag tag="p" className="text-xl text-gray mt-2">
          {card.description}
        </DynamicTag>
      )}
      {card.btnText && (
        <Button
          icon="left-arrow"
          className="mt-5 pb-2 w-max group relative before:block  before:absolute before:content-'' before:w-full before:top-full before:h-0.5 before:bg-dark-blue"
        >
          <a href={card.btnLink} className="text-xl mr-2">
            {card.btnText}
          </a>
        </Button>
      )}
    </div>
  );
};

export default InfoCard;
