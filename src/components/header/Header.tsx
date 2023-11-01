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
    textId: "Service",
  },
  {
    scrollTo: "section2",
    textId: "Experience",
  },
  {
    scrollTo: "section4",
    textId: "Projects",
  },
  {
    scrollTo: "section5",
    textId: "Our Team",
  },
  {
    scrollTo: "Feedback",
    textId: "Feedbacks",
  },
  {
    scrollTo: "ContactUs",
    textId: "Contact Us",
  },
];

const Header = () => {
  const { scrollingDown } = useScrollEvent();

  const windowWidth = useWindowWidth();
  return (
    <header
      className={`sticky top-0 z-50 bg-dark-blue w-full lg:py-5  transition-transform transform ${scrollingDown ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <Icon className="w-12 lg:w-auto" icon="logo" />
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
