import React, { useState } from "react";
import { useGetAccordion } from "@/graphql/queries/accordion";
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
}

const Accordion: React.FC<AccordionProps> = ({ id = "", className }) => {
  const { section } = useGetAccordion(id);

  const [activeIndex, setActiveIndex] = useState<number | null>(
    section.items.findIndex((item: AccordionItemProps) => item.opened)
  );

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  console.log("section", section);
  return (
    <div
      className={cn(
        className,
        {
          "flex flex-wrap lg:flex-nowrap justify-between gap-8": section.image,
        },
        "accordion"
      )}
    >
      <div className="accordion__content lg:max-w-[800px] w-full">
        <h2 className="mb-10">{section.title}</h2>
        <div className="accordion__items">
          {section.items.map((item: AccordionItemProps, index: number) => (
            <div key={index} className="accordion__item">
              <div
                className={cn(
                  {
                    "border-b-[1px] border-border-color":
                      index === section.items.length - 1,
                  },
                  "accordion-title w-full flex justify-between gap-6 text-2xl lg:text-3xl py-9 border-t-[1px] border-border-color cursor-pointer"
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
                <div className="accordion-content leading-normal">
                  {item.description && (
                    <RichText richText={item.description.json} />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {section.image && (
        <div className="accordion__image mx-auto lg:mx-0 max-w-[480px] w-full order-[-1] lg:order-none">
          <Image
            src={section.image}
            className="object-contain"
            classWrapper="before:pt-[50%] lg:before:pt-[100%]"
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
