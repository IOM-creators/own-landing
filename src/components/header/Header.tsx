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
    textId: "OurTeam",
  },
  {
    scrollTo: "Feedback",
    textId: "Feedbacks",
  },
  {
    scrollTo: "ContactUs",
    textId: "ContactUs",
  },
];

interface IHeader { }

const Header: React.FC<IHeader> = () => {
  const { scrollingDown } = useScrollEvent();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const windowWidth = useWindowWidth();
  return (
    <header
      className={`fixed border-none  top-0 z-50 bg-dark-blue w-full py-2 lg:py-5  transition-transform transform ${scrollingDown ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <button onClick={scrollToTop}>
          <Icon className="w-12 lg:w-auto" icon="logo" />
        </button>

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
