import React from "react";
import { IHeaderNavigation } from "../../helpers/commonInterfaces";
import cn from "classnames";

const HeaderNavigation: React.FC<IHeaderNavigation> = ({
  classname = "",
  activeLink,
  navigation,
  setOpenNavChange = () => false,
}) => {
  return (
    <nav className={classname}>
      <ul className="flex h-full flex-col flex-wrap items-end lg:items-center lg:flex-row  lg:justify-center">
        {navigation &&
          navigation.map((navItem: string, index: number) => {
            const navLink = navItem.split(" ").join("");
            return (
              <li
                key={index}
                className={cn(
                  {
                    active: activeLink === navLink,
                  },
                  `text-white my-3 ${
                    index === navigation.length - 1 ? "pr-0" : "pr-0 lg:pr-5 "
                  } lg:my-2`
                )}
              >
                <a
                  href={`#${navLink}`}
                  className={cn(
                    {
                      "bg-white text-dark-blue sm:px-3": activeLink === navLink,
                    },
                    "rounded-3xl px-3 py-2 text-lg lg:text-base"
                  )}
                  onClick={() => setOpenNavChange(false)}
                >
                  {navItem}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
