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
  const { slug } = router.query;
  const pathSlug = `/${slug}`;
  const { headerState } = useActions();

  const handleHidemenu = () => {
    setOpenNavChange(false);
    headerState({ filled: false });
  };
  return (
    <nav className="mr-auto">
      <ul className={classname}>
        {navigationAnchor &&
          navigationAnchor.map((navItem: string, index: number) => {
            const navLink = navItem.split(" ").join("");
            return (
              <li key={index} className="my-3">
                <a
                  href={`#${navLink}`}
                  className={cn(
                    {
                      "border-b": activeLink === navLink,
                    },
                    "text-lg "
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
                  "lg:pr-0": index === links.length - 1,
                },
                `my-3 lg:px-5  lg:my-2  text-lg`
              )}
              key={index}
            >
              <Link
                href={navItem.url}
                onClick={handleHidemenu}
                className={cn({
                  "border-b":
                    pathname === navItem.url || pathSlug === navItem.url,
                })}
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
