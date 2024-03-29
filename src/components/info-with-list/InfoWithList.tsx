import React from "react";
import Image from "../image";
import TitleSection from "../title-section";
import Button from "../button";
import List from "../list";
import Icon from "../icon";
import RichText from "../rich-text";
import { Document } from "@contentful/rich-text-types";

interface IInfoWithList {
  card: {
    revert?: boolean;
    list?: [
      {
        text?: string;
        icon?: string;
      }
    ];
    title?: string;
    description?: Document;
    btnText?: string;
    btnLink?: string;
  };
  image?: string;
  icon?: string;
  className?: string;
}

const InfoWithList: React.FC<IInfoWithList> = ({
  card,
  image,
  icon,
  className,
}) => {
  return (
    <div className={className}>
      <div>
        {image && (
          <Image
            src={image}
            className="rounded-3xl w-full object-contain"
            classWrapper="md:before:pt-[80%]"
          />
        )}
        {icon && !image && (
          <div className="img-wrapper md:before:pt-[80%]">
            <Icon icon={icon} />
          </div>
        )}
      </div>
      <div className={card.revert ? "lg:order-first" : ""}>
        {card.title && (
          <TitleSection
            tag="h2"
            fontSize="text-4xl md:text-5xl"
            className="mb-10 text-center md:text-left"
          >
            {card.title}
          </TitleSection>
        )}
        {card.description && (
          <div className="text-xl mt-2">
            {card.description && <RichText richText={card.description} />}
          </div>
        )}
        {card.list?.length && <List list={card.list} revert={card.revert} />}
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
