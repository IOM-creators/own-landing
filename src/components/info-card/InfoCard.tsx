import React, { useRef, useState } from "react";
import parse from "html-react-parser";

import Image from "../image";
import TitleSection from "../title-section";
import Button from "../button";
import { useScrollAnimationForOne } from "../../helpers/reactHooks";
import Icon from "../icon";
import ContactForm from "../contact-from";
import { useActions } from "../../store/hooks/useActions";
import { useTranslation } from "react-i18next";
interface IInfoCard {
  card?: {
    image?: string;
    icon?: string;
    title?: string;
    technologies?: string;
    description?: string;
    btnText?: string;
    btnLink?: string;
  };
  icon?: string;
  className?: string;
  index?: number;
  animated?: boolean;
}

const InfoCard: React.FC<IInfoCard> = ({
  card,
  className,
  icon,
  index,
  animated = false,
}) => {
  const { popupState } = useActions();
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const elementsRef = useRef<HTMLDivElement | null>(null);
  useScrollAnimationForOne(elementsRef, isAnimated, setIsAnimated);
  const animationDelayClass = index
    ? `animate-slide-up-delay-${index + 3}`
    : "";

  const handleClickOpen = () => {
    popupState({
      isOpen: true,
      children: <ContactForm />,
      fullScreen: true,
      title: `${t("contact_us.title")}`,
    });
  };
  return (
    <div
      ref={elementsRef}
      className={`${className} ${
        !animated ? "" : isAnimated && animated ? " divAnimation" : "opacity-0"
      } ${animationDelayClass}`}
    >
      {card?.image && (
        <Image
          src={card.image}
          className="rounded-3xl object-contain"
          classWrapper="mb-10 md:before:pt-[80%]"
        />
      )}
      {card?.icon && (
        <div className="img-wrapper mb-10 md:before:pt-[80%]">
          <Icon icon={card.icon} />
        </div>
      )}
      {card?.title && (
        <TitleSection tag="h4" fontSize="text-2xl" className="mb-4 text-black">
          {card.title}
        </TitleSection>
      )}
      {card?.technologies && (
        <div className="text-xl mt-2">
          <strong>Tech Stack:</strong> {parse(card.technologies)}
        </div>
      )}
      {card?.description && (
        <div className="text-xl mt-2">{parse(card.description)}</div>
      )}
      {card?.btnText && (
        <Button
          onClick={handleClickOpen}
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
