import React, { useRef, useState } from "react";
import parse from "html-react-parser";

import Image from "../image";
import TitleSection from "../title-section";
import Button from "../button";
import { useScrollAnimationForOne } from "../../helpers/reactHooks";

interface IInfoCard {
  card?: {
    image: string;
    title?: string;
    description?: string;
    btnText?: string;
    btnLink?: string;
  };
  className?: string;
  index?: number;
  animated?: boolean;
}

const InfoCard: React.FC<IInfoCard> = ({
  card,
  className,
  index,
  animated = false,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const elementsRef = useRef<HTMLDivElement | null>(null);
  useScrollAnimationForOne(elementsRef, isAnimated, setIsAnimated);
  const animationDelayClass = index
    ? `animate-slide-up-delay-${index + 3}`
    : "";

  return (
    <div
      ref={elementsRef}
      className={`${className} ${
        !animated ? "" : isAnimated && animated ? " divAnimation" : "opacity-0"
      } ${animationDelayClass}`}
    >
      {card?.image && (
        <Image src={card.image} className="rounded-3xl object-contain mb-10" />
      )}
      {card?.title && (
        <TitleSection tag="h4" fontSize="text-2xl" className="mb-4">
          {card.title}
        </TitleSection>
      )}
      {card?.description && (
        <div className="text-xl text-gray mt-2">{parse(card.description)}</div>
      )}
      {card?.btnText && (
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
