import React, { useRef, useState } from "react";
import parse from "html-react-parser";

import Image from "../image";
import TitleSection from "../title-section";
import Button from "../button";
import { useScrollAnimationForOne } from "../../helpers/reactHooks";
import Icon from "../icon";
import { Document } from "@contentful/rich-text-types";
import RichText from "../rich-text";
import Link from "next/link";

interface IInfoCard {
  card?: {
    image?: string;
    icon?: string;
    title?: string;
    technologies?: string;
    description?: Document;
    revert?: boolean;
    btnText?: string;
    btnLink?: string;
  };
  imgClasses?: string;
  descriptionClasses?: string;
  className?: string;
  index?: number;
  animated?: boolean;
}

const InfoCard: React.FC<IInfoCard> = ({
  card,
  className = "",
  index,
  animated = false,
  imgClasses = "",
  descriptionClasses = "",
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const elementsRef = useRef<HTMLDivElement | null>(null);
  useScrollAnimationForOne(elementsRef, isAnimated, setIsAnimated);
  const animationDelay = index ? index / 3 : 0;

  return (
    <div className={`${className} relative my-4`}>
      {card?.image && (
        <Image
          src={card.image}
          className="object-contain"
          classWrapper={`${imgClasses} mb-10`}
        />
      )}
      {card?.icon && !card?.image && (
        <div className="img-wrapper mb-10 md:before:pt-[80%]">
          <Icon icon={card.icon} />
        </div>
      )}
      <div
        ref={elementsRef}
        style={{ animationDelay: `${animationDelay}s` }}
        className={`${
          !animated ? "" : isAnimated && animated ? " slideUp" : "opacity-0"
        }`}
      >
        {card?.title && (
          <TitleSection
            tag="h3"
            fontSize="text-2xl"
            className="mb-4 text-black"
          >
            {card.title}
          </TitleSection>
        )}
        {card?.technologies && (
          <div className="text-xl mt-2">
            <strong>Tech Stack:</strong> {parse(card.technologies)}
          </div>
        )}
        {card?.description && (
          <div className={`text-xl mt-2 ${descriptionClasses}`}>
            <RichText richText={card.description} />
          </div>
        )}
        {card?.btnText && card.btnLink && (
          <Button
            icon="left-arrow"
            className="mt-5 pb-2 w-max group before:block  before:absolute before:content-'' before:w-full before:top-full before:h-0.5 before:bg-dark-blue"
          >
            <Link
              href={card.btnLink}
              className="text-xl mr-2 before:top-0 before:left-0 before:absolute before:content-'' before:w-full before:h-full"
            >
              {card.btnText}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
