import { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import { IHamburgerMenu } from "../../helpers/commonInterfaces";
import Icon from "../icon";

const HamburgerMenu: React.FC<IHamburgerMenu> = ({
  classname = "",
  activeLink,
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    !isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    !isOpen && document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="overflow-hidden lg:hidden ml-auto mr-0">
      <button onClick={toggleMenu} className="text-white py-2">
        {isOpen ? (
          <Icon icon="hamburger-close" />
        ) : (
          <Icon icon="hamburger-open" />
        )}
      </button>

      <div
        className={`w-full  bg-dark-blue absolute top-full right-0 py-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`w-full h-full container flex items-end  align-center flex-col `}
        >
          <HeaderNavigation
            classname="flex flex-col space-y-4 text-white"
            navigation={navigation}
            activeLink={activeLink}
            setOpenNavChange={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
