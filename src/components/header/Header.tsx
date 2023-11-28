import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Button from "../button";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { isHeaderVisible, activeLink } = useScrollEvent();
  const { header } = useGetHeader();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const windowWidth = useWindowWidth();
  return (
    <header
      className={`fixed border-none  top-0 z-20 bg-dark-blue w-full py-2 lg:py-5  transition-transform transform ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
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
