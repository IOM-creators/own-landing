import React, { useState } from "react";
import RichText from "../rich-text";
import { Document } from "@contentful/rich-text-types";
import Icon from "../icon";
import Image from "../image";
import cn from "classnames";

interface AccordionItemProps {
  title: string;
  description: {
    json: Document;
  };
  opened: boolean;
}

interface AccordionProps {
  id: string;
  className?: string;
  section: any;
}

const Accordion: React.FC<AccordionProps> = ({
  id = "",
  className,
  section,
}) => {
  const { accordion } = section;
  const accordionItems = accordion?.accordionItemsCollection?.items || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(
    accordionItems.findIndex((item: AccordionItemProps) => item.opened)
  );

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      className={cn(
        className,
        {
          "flex flex-wrap lg:flex-nowrap justify-between gap-8":
            accordion.image,
        },
        "accordion"
      )}
    >
      <div className="accordion__content lg:max-w-[800px] w-full">
        <h2 className="mb-10" data-animate="moveRight">
          {accordion.title}
        </h2>
        <div className="accordion__items">
          {accordionItems.map((item: AccordionItemProps, index: number) => (
            <div
              key={index}
              className={cn(
                {
                  "border-b-[1px] border-border-color":
                    index === accordionItems.length - 1,
                },
                "accordion__item border-t-[1px] border-border-color"
              )}
              data-animate="moveRight"
            >
              <div
                className={cn(
                  {},
                  "accordion-title w-full flex justify-between gap-6 text-2xl lg:text-3xl py-9 cursor-pointer"
                )}
                onClick={() => handleToggle(index)}
              >
                {item.title}
                <Icon
                  icon="arrow-bottom"
                  className={cn(
                    {
                      "scale-[-1]": activeIndex === index,
                    },
                    "text-primary-orange mt-2"
                  )}
                />
              </div>
              {activeIndex === index && (
                <div className="accordion-content leading-normal pb-9">
                  {item.description && (
                    <RichText richText={item.description.json} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {accordion.image && (
        <div
          className="accordion__image mx-auto lg:mx-0 max-w-[250px] md:max-w-[420px] w-full order-[-1] lg:order-none"
          data-animate="moveUp"
        >
          <Image
            src={accordion.image.url}
            className="object-contain"
            classWrapper="before:pt-[50%] lg:before:pt-[100%]"
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
