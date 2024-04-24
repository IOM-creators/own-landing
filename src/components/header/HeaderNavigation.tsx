import React from "react";
import { IHeaderNavigation } from "../../helpers/commonInterfaces";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useActions } from "@/store/hooks/useActions";

const HeaderNavigation: React.FC<IHeaderNavigation> = ({
  classname = "",
  activeLink,
  navigationAnchor,
  links,
  setOpenNavChange = () => false,
}) => {
  const router = useRouter();
  const { pathname } = router;
  const { headerState } = useActions();

  const handleHidemenu = () => {
    setOpenNavChange(false);
    headerState({ filled: false });
  };
  return (
    <nav className="ml-auto">
      <ul className={classname}>
        {navigationAnchor &&
          navigationAnchor.map((navItem: string, index: number) => {
            const navLink = navItem.split(" ").join("");
            return (
              <li
                key={index}
                className={cn(
                  {
                    active: activeLink === navLink,
                  },
                  `text-white my-3`
                )}
              >
                <a
                  href={`#${navLink}`}
                  className={cn(
                    {
                      "bg-white text-dark-blue px-3": activeLink === navLink,
                    },
                    "rounded-3xl py-2 text-lg lg:text-base"
                  )}
                  onClick={handleHidemenu}
                >
                  {navItem}
                </a>
              </li>
            );
          })}
        {links &&
          links.map((navItem: any, index: number) => (
            <li
              className={cn(
                {
                  active: pathname === navItem.url,
                  "lg:pr-0": index === links.length - 1,
                },
                `my-3 lg:px-5  lg:my-2`
              )}
              key={index}
            >
              <Link
                href={navItem.url}
                className={cn(
                  {
                    "bg-white text-dark-blue px-3": pathname === navItem.url,
                    "lg:pr-0": index === links.length - 1,
                  },
                  "rounded-3xl lg:px-3 py-2 text-lg lg:text-base"
                )}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
