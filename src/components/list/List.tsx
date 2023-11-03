import React from "react";
import parse from "html-react-parser";
import cn from "classnames";

import Icon from "../icon";

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
  return (
    <ul className={className}>
      {list.map((item, index: number) => {
        return (
          <li
            className={cn(
              {
                "group shadow-simle px-5 py-4 ": item.shadow,
              },
              classesItem,
              "flex items-center mt-6 mb-6"
            )}
            key={index}
          >
            {item.icon && !rightIcon && (
              <Icon
                icon={item.icon}
                className="mr-6"
                strokeClass={cn({
                  "group-hover:stroke-white": item.shadow,
                })}
              />
            )}

            <span className="text-xl ">{parse(item.text)}</span>

            {item.icon && rightIcon && (
              <Icon
                icon={item.icon}
                className="ml-6"
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
