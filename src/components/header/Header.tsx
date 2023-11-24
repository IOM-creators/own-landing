import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_HEADER_ENTRY = gql`
  query iomLandingEntryQuery {
    header(id: "4vncV02RkQ46gGN6i2W0mw") {
      navigation
    }
  }
`;
interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { scrollingDown } = useScrollEvent();
  const { data } = useQuery(GET_HEADER_ENTRY);
  const headerNavigation = data?.header?.navigation || [];

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
        scrollingDown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <button onClick={scrollToTop}>
          <Icon className="w-12 lg:w-auto animation-logo" icon="logo" />
        </button>

        {windowWidth < 1024 ? (
          <HamburgerMenu navigation={headerNavigation} />
        ) : (
          <>
            <HeaderNavigation
              classname="ml-auto"
              navigation={headerNavigation}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
