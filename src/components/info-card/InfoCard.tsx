import React from "react";
import Image from "../image";
import TitleSection from "../title-section";
import DynamicTag from "../dynamic-tag";
import Button from "../button";

interface IInfoCard {
  card: {
    image: string;
    title: string;
    description: string;
    btnText?: string;
    btnLink?: string;
  };
  className?: string;
}

const InfoCard: React.FC<IInfoCard> = ({ card, className }) => {
  return (
    <div className={className}>
      <Image src={card.image} borderRadius="rounded-3xl" />
      <TitleSection tag="h4" fontSize="24" className="mt-6">
        {card.title}
      </TitleSection>
      <DynamicTag tag="p" className="text-xl text-gray mt-2">
        {card.description}
      </DynamicTag>
      <Button icon="left-arrow" className="mt-5">
        <a href={card.btnLink} className="text-xl">
          {card.btnText}
        </a>
      </Button>
    </div>
  );
};

export default InfoCard;
