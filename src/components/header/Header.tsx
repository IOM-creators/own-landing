import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import HeaderNavigation from "./HeaderNavigation";
import LanguageSelector from "./LanguageSelector";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
interface INavigation {
  scrollTo: string;
  textId: string;
}

const headernavigation: INavigation[] = [
  {
    scrollTo: "section1",
    textId: "Section1",
  },
  {
    scrollTo: "section2",
    textId: "Section2",
  },
  {
    scrollTo: "section3",
    textId: "Section3",
  },
  {
    scrollTo: "section4",
    textId: "Section4",
  },
  {
    scrollTo: "section5",
    textId: "Section5",
  },
];

const Header = () => {
  const { scrollingDown } = useScrollEvent();

  const windowWidth = useWindowWidth();
  return (
    <header
      className={`py-5 sticky top-0 z-50 bg-dark-blue w-full  transition-transform transform ${
        scrollingDown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <Icon icon="logo" />
        {windowWidth < 1024 ? (
          <HamburgerMenu navigation={headernavigation} />
        ) : (
          <>
            <HeaderNavigation
              classname="ml-auto mr-10"
              navigation={headernavigation}
            />
            <LanguageSelector classname="mr-0" />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
