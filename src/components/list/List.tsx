import React from "react";
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
  className?: string;
}

const List: React.FC<IList> = ({ list, className }) => {
  return (
    <ul className={className}>
      {list.map((item, index: number) => {
        return (
          <li
            className={cn(
              {
                "group shadow-simle px-5 py-4 hover:bg-dark-blue cursor-pointer hover:text-white":
                  item.shadow,
              },
              "flex items-center mt-6 mb-6"
            )}
            key={index}
          >
            {item.icon && (
              <Icon
                icon={item.icon}
                className={cn({
                  "group-hover:stroke-white": item.shadow,
                })}
              />
            )}{" "}
            <span className="text-xl ml-6">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
