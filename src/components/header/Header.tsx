import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Button from "../button";
import { useEffect } from "react";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { isHeaderVisible, activeLink, transparent } = useScrollEvent();
  const { header } = useGetHeader();
  const hash = window.location.hash;
  const sectionElem = document.querySelector(`${hash}`);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (hash && sectionElem) {
      sectionElem.scrollIntoView({
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const windowWidth = useWindowWidth();
  return (
    <header
      className={cn(
        {
          "lg:bg-opacity-0": transparent,
          "translate-y-0": isHeaderVisible,
          "-translate-y-full": !isHeaderVisible,
        },
        `fixed border-none bg-dark-blue top-0 z-20  w-full py-2 lg:py-5  transition-transform transform`
      )}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <Button onClick={scrollToTop}>
          <Icon className="w-12 lg:w-auto animation-logo" icon="logo" />
        </Button>

        {windowWidth < 1024 ? (
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
