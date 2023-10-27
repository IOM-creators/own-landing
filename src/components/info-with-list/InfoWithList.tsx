import React from "react";
import Image from "../image";
import TitleSection from "../title-section";
import DynamicTag from "../dynamic-tag";
import Button from "../button";
import List from "../list";

interface IInfoWithList {
  card: {
    revert: boolean;
    image: string;
    list: [
      {
        text: string;
        icon: string;
      }
    ];
    title?: string;
    description?: string;
    btnText?: string;
    btnLink?: string;
  };
  className?: string;
}

const InfoWithList: React.FC<IInfoWithList> = ({ card, className }) => {
  return (
    <div className={className}>
      <div>
        {card.image && <Image src={card.image} borderRadius="rounded-3xl" />}
      </div>
      <div className={card.revert ? "md:order-first" : ""}>
        {card.title && (
          <TitleSection tag="h4" fontSize="text-4xl">
            {card.title}
          </TitleSection>
        )}
        {card.description && (
          <DynamicTag tag="p" className="text-xl text-gray mt-2">
            {card.description}
          </DynamicTag>
        )}
        {card.list.length && <List list={card.list} />}
        {card.btnText && (
          <Button primary className="pb-2 w-max group relative mt-12 md:mt-16">
            <a href={card.btnLink} className="text-xl">
              {card.btnText}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoWithList;
