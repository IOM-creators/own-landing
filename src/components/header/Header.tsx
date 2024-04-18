import { useRouter } from "next/router";

import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Link from "next/link";
import { useState } from "react";

interface IHeader {
  headerRef: React.ForwardedRef<HTMLDivElement>;
}

const Header: React.FC<IHeader> = ({ headerRef }) => {
  const router = useRouter();
  const { pathname } = router;
  const { activeLink, transparent, isHeaderVisible } = useScrollEvent();
  const [bgHeader, setBgHeader] = useState(false);
  const { header } = useGetHeader();
  const windowWidth = useWindowWidth();

  return (
    <header
      ref={headerRef}
      className={cn(
        {
          "translate-y-0": isHeaderVisible,
          "translate-y-[-100%]": !isHeaderVisible && !transparent,
          "bg-dark-blue text-white":
            (!transparent && isHeaderVisible) || pathname !== "/" || bgHeader,
        },
        "border-none z-20 w-full py-2 lg:py-5 fixed top-0 transition-colors"
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
