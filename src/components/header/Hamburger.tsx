import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import HeaderNavigation from "./HeaderNavigation";
import { IHeaderNavigation } from "../../helpers/commonInterfaces";

const HamburgerMenu: React.FC<IHeaderNavigation> = ({
  classname = "",
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
    <div className="lg:hidden ml-auto mr-0">
      <button onClick={toggleMenu} className="text-white p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      <div
        className={`w-full  bg-dark-blue fixed top-full right-0 py-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`w-full h-full container flex items-end  align-center flex-col `}
        >
          <HeaderNavigation
            classname="flex flex-col space-y-4 text-white"
            navigation={navigation}
            setOpenNavChange={setIsOpen}
          />
          <LanguageSelector
            classname="mr-0 w-24 mt-8 lg:mt-0"
            setOpenChangeNav={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
