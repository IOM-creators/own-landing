import { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import { IHamburgerMenu } from "../../helpers/commonInterfaces";
import Icon from "../icon";
import Button from "../button";
import { useRouter } from "next/router";
import cn from "classnames";

const HamburgerMenu: React.FC<IHamburgerMenu> = ({
  activeLink,
  navigation,
  setBgHeader,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleMenu = () => {
    !isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    setIsOpen(!isOpen);
    setBgHeader(!isOpen);
  };

  useEffect(() => {
    !isOpen && document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setBgHeader(false);
  }, [pathname]);
  return (
    <div className={`overflow-hidden lg:hidden ml-auto mr-0 `}>
      <Button onClick={toggleMenu} className="py-2">
        {isOpen ? (
          <Icon icon="hamburger-close" />
        ) : (
          <Icon icon="hamburger-open" />
        )}
      </Button>

      <div
        className={cn(
          { invisible: !isOpen },
          "overflow-hidden absolute left-0 top-full w-full"
        )}
      >
        <div
          className={`bg-dark-blue text-white left-0 py-8 transform transition-transform ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-[200%]"
          }`}
        >
          <div className="w-full h-full container flex items-end  align-center flex-col">
            <HeaderNavigation
              classname="flex flex-col space-y-4"
              navigation={navigation}
              activeLink={activeLink}
              setOpenNavChange={setIsOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
