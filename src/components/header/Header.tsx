import { useRouter } from "next/router";

import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Link from "next/link";
import { useState } from "react";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  const { pathname } = router;
  const { activeLink, transparent, isHeaderVisible } = useScrollEvent();
  const [bgHeader, setBgHeader] = useState(false);
  const { header } = useGetHeader();
  const windowWidth = useWindowWidth();

  return (
    <header
      className={cn(
        {
          "bg-dark-blue text-white sticky top-0":
            pathname !== "/" || (isHeaderVisible && !transparent),
          "fixed top-0": pathname === "/",
          "bg-white text-dark-blue":
            pathname === "/" && bgHeader && transparent,
          "bg-transparent text-dark-blue":
            pathname === "/" && !isHeaderVisible && !bgHeader,
          "translate-y-[-100%]": !isHeaderVisible && !transparent,
          "translate-y-0": isHeaderVisible,
        },
        "border-none z-20 w-full py-2 lg:py-5"
      )}
    >
      <div className="container flex items-center font-serif text-base font-semibold">
        <Link href="/">
          <Icon className="w-12 lg:w-auto" icon="light-logo" />
        </Link>

        {windowWidth && windowWidth < 1024 ? (
          <HamburgerMenu
            navigation={header.navigation}
            activeLink={activeLink}
            setBgHeader={setBgHeader}
            classname={`${
              isHeaderVisible && !transparent
                ? pathname === "/"
                  ? "bg-dark-blue text-white"
                  : ""
                : pathname === "/"
                ? "bg-white text-dark-blue"
                : ""
            } ${pathname !== "/" && "bg-dark-blue text-white"}`}
          />
        ) : (
          <HeaderNavigation
            classname="ml-auto"
            activeLink={activeLink}
            navigation={header.navigation}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
