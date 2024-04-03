import { useRouter } from "next/router";

import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Link from "next/link";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  const { pathname } = router;
  const { activeLink } = useScrollEvent();
  const { header } = useGetHeader();
  const windowWidth = useWindowWidth();
  return (
    <header
      className={cn(
        { "fixed top-0": pathname === "/" },
        `border-none bg-dark-blue z-20  w-full py-2 lg:py-5  transition-transform transform`
      )}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <Link href="/">
          <Icon className="w-12 lg:w-auto animation-logo" icon="logo" />
        </Link>

        {windowWidth && windowWidth < 1024 ? (
          <HamburgerMenu
            navigation={header.navigation}
            activeLink={activeLink}
          />
        ) : (
          <>
            <HeaderNavigation
              classname="ml-auto"
              activeLink={activeLink}
              navigation={header.navigation}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
