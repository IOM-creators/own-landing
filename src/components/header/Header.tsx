import { useRouter } from "next/router";

import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderState } from "../../store/types/header";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
interface IHeader {
  headerRef: React.ForwardedRef<HTMLDivElement>;
}

const Header: React.FC<IHeader> = ({ headerRef }) => {
  const router = useRouter();
  const { pathname } = router;
  const { activeLink, transparent, isHeaderVisible } = useScrollEvent();
  const [firstLoad, setFirstLoad] = useState(false);
  const { header } = useGetHeader();
  const { filled }: HeaderState = useTypedSelector((state) => state.header);
  const windowWidth = useWindowWidth();

  useEffect(() => setFirstLoad(true));

  return (
    <header
      ref={headerRef}
      className={cn(
        {
          "translate-y-[-100%]": !isHeaderVisible && !transparent && firstLoad,
          "translate-y-0": isHeaderVisible,
          "shadow-md bg-white":
            (!transparent && isHeaderVisible) || pathname !== "/" || filled,
        },
        "border-none z-20 w-full py-2 lg:py-5 fixed top-0"
      )}
    >
      <div className="container flex items-center font-serif text-base font-semibold">
        <Link href="/">
          <Icon className="w-12 lg:w-20 mr-10" icon="light-logo" />
        </Link>
        {windowWidth && windowWidth >= 1024 && pathname === "/" && (
          <HeaderNavigation
            classname="flex h-full flex-wrap items-center justify-center"
            activeLink={activeLink}
            links={header.menu}
          />
        )}
        {pathname !== "/" && windowWidth && windowWidth >= 1024 && (
          <HeaderNavigation
            classname="flex h-full flex-wrap items-center justify-center"
            activeLink={activeLink}
            links={header.menu}
          />
        )}
        {windowWidth && windowWidth < 1024 && (
          <HamburgerMenu links={header.menu} activeLink={activeLink} />
        )}
      </div>
    </header>
  );
};

export default Header;
