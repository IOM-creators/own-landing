import React from "react";
import parse from "html-react-parser";

import Image from "../image";
import TitleSection from "../title-section";
import Button from "../button";
import List from "../list";

interface IInfoWithList {
  card: {
    revert: boolean;
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
  image?: string;
  className?: string;
}

const InfoWithList: React.FC<IInfoWithList> = ({ card, image, className }) => {
  return (
    <div className={className}>
      <div>
        {image && (
          <Image src={image} className="rounded-3xl w-full object-contain" />
        )}
      </div>
      <div className={card.revert ? "lg:order-first" : ""}>
        {card.title && (
          <TitleSection
            tag="h4"
            fontSize="text-4xl md:text-5xl"
            className="mb-10 text-center md:text-left"
          >
            {card.title}
          </TitleSection>
        )}
        {card.description && (
          <div className="text-xl text-gray mt-2">
            {parse(card.description)}
          </div>
        )}
        {card.list.length && <List list={card.list} revert={card.revert} />}
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
