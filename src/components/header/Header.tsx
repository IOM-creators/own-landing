import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import { useTranslation } from "react-i18next";
import HeaderNavigation from "./HeaderNavigation";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { scrollingDown } = useScrollEvent();
  const { t } = useTranslation();
  const cardsContent = t("header.navigation", {
    returnObjects: true,
  }) as string[];
  const headerNavigation = cardsContent.map((navigation: any) => navigation);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const windowWidth = useWindowWidth();
  return (
    <header
      className={`fixed border-none  top-0 z-50 bg-dark-blue w-full py-2 lg:py-5  transition-transform transform ${
        scrollingDown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center font-serif text-base font-semibold ">
        <button onClick={scrollToTop}>
          <Icon className="w-12 lg:w-auto" icon="logo" />
        </button>

        {windowWidth < 1024 ? (
          <HamburgerMenu navigation={headerNavigation} />
        ) : (
          <>
            <HeaderNavigation
              classname="ml-auto mr-10"
              navigation={headerNavigation}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
