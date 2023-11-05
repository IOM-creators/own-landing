import React, { useRef, useState } from "react";
import parse from "html-react-parser";
import cn from "classnames";

import Icon from "../icon";
import { useScrollAnimation } from "../../helpers/reactHooks";

interface IList {
  list: [
    {
      text: string;
      icon?: string;
      shadow?: boolean;
    }
  ];
  classesItem?: string;
  rightIcon?: boolean;
  className?: string;
}

const List: React.FC<IList> = ({ list, rightIcon, classesItem, className }) => {
  const [isAnimated, setIsAnimated] = useState<boolean[]>([]);
  const elementsRef = useRef<Array<HTMLLIElement | null>>([]);
  useScrollAnimation(elementsRef, isAnimated, setIsAnimated)
  return (
    <ul className={className}>
      {list.map((item, index: number) => {
        const animationDelayClass = `animate-slide-up-delay-${index + 2}`;
        return (
          <li
            ref={(el) => (elementsRef.current[index] = el)}
            className={cn(
              {
                "group shadow-simle px-5 py-4 ": item.shadow,
              },
              classesItem,
              `${isAnimated[index] ? 'listAnimation' : 'opacity-0'} ${animationDelayClass}`,
              "flex items-center mt-6 mb-6 "
            )}
            key={index}
          >
            {item.icon && !rightIcon && (
              <Icon
                icon={item.icon}
                className="mr-6 md:block hidden"
                strokeClass={cn({
                  "group-hover:stroke-white": item.shadow,
                })}
              />
            )}

            <span className="text-xl ">{parse(item.text)}</span>

            {item.icon && rightIcon && (
              <Icon
                icon={item.icon}
                className="ml-6 md:block hidden"
                strokeClass={cn({
                  "group-hover:stroke-white": item.shadow,
                })}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
