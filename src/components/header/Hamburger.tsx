import { useEffect, useState } from "react";
import HeaderNavigation from "./HeaderNavigation";
import { IHamburgerMenu } from "../../helpers/commonInterfaces";
import Icon from "../icon";
import Button from "../button";
import { useRouter } from "next/router";
import cn from "classnames";
import { useActions } from "@/store/hooks/useActions";

const HamburgerMenu: React.FC<IHamburgerMenu> = ({
  activeLink,
  navigationAnchor,
  links,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const { headerState } = useActions();

  const toggleMenu = () => {
    !isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    setIsOpen(!isOpen);
    headerState({ filled: !isOpen });
  };

  useEffect(() => {
    !isOpen && document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    headerState({ filled: false });
  }, [pathname]);
  return (
    <div className={`overflow-hidden  ml-auto mr-0 `}>
      <Button eventClick={toggleMenu} styleButton="Only Icon" className="py-2">
        {isOpen ? (
          <Icon icon="hamburger-close" />
        ) : (
          <Icon icon="hamburger-open" />
        )}
      </Button>

      <div
        className={cn(
          { invisible: !isOpen },
          "overflow-hidden absolute left-0 top-full w-full pb-12"
        )}
      >
        <div
          className={` bg-white text-dark-blue left-0 py-8 transform transition-transform ease-in-out ${
            isOpen ? "translate-y-0  shadow-xl" : "-translate-y-[100%]"
          }`}
        >
          <div className="w-full h-full container">
            <HeaderNavigation
              classname="flex flex-col items-end"
              navigationAnchor={navigationAnchor}
              links={links}
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
