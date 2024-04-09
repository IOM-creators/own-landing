import React, { useRef, useState } from "react";
import cn from "classnames";

import Image from "../image";
import { useScrollAnimation } from "../../helpers/reactHooks";
import { Document } from "@contentful/rich-text-types";

import RichText from "../rich-text";

interface IList {
  list?: [
    {
      text?: string;
      description?: Document;
      icon?: string;
      shadow?: boolean;
    }
  ];
  revert?: boolean;
  classesItem?: string;
  rightIcon?: boolean;
  className?: string;
}

const List: React.FC<IList> = ({
  list,
  rightIcon,
  revert,
  classesItem,
  className,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLLIElement | null>>([]);
  useScrollAnimation(elementsRef, isAnimated, setIsAnimated);
  return (
    <ul className={className}>
      {list &&
        list.map((item, index: number) => {
          const animationDelayClass = `animate-slide-up-delay-${index + 2}`;
          return (
            <li
              ref={(el: any) => (elementsRef.current[index] = el)}
              className={cn(
                {
                  "group shadow-simle px-5 py-4 ": item.shadow,
                },
                classesItem,
                `${
                  isAnimated[index] && revert && "listAnimationLeft"
                } ${animationDelayClass}`,
                `${
                  isAnimated[index] && !revert && "listAnimation"
                } ${animationDelayClass}`,
                "flex items-center mt-6 mb-6 opacity-0"
              )}
              key={index}
            >
              {item.icon && !rightIcon && (
                <Image
                  src={item.icon}
                  classWrapper="mr-6 md:block hidden w-8 h-8 flex-shrink-0"
                />
              )}

              {item.text && <span className="text-xl ">{item.text}</span>}
              {item.description && (
                <div className="text-xl ">
                  {<RichText richText={item.description} />}
                </div>
              )}
              {item.icon && rightIcon && (
                <Image
                  src={item.icon}
                  classWrapper="ml-6 md:block hidden w-8 h-8 flex-shrink-0"
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default List;
