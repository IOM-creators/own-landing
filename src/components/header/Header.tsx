import { useRouter } from "next/router";

import { useScrollEvent, useWindowWidth } from "../../helpers/reactHooks";
import cn from "classnames";
import HamburgerMenu from "./Hamburger";
import Icon from "../icon";
import HeaderNavigation from "./HeaderNavigation";
import { useGetHeader } from "../../graphql/";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderState } from "../../store/types/header";
import { useTypedSelector } from "@/store/hooks/useTypedSelector";
import Button from "../button/Button";
import ContactButton from "../contact-button";
interface IHeader {
  headerRef: React.ForwardedRef<HTMLDivElement>;
}

const Header: React.FC<IHeader> = ({ headerRef }) => {
  const router = useRouter();
  const { pathname } = router;
  const { activeLink, transparent, isHeaderVisible } = useScrollEvent();
  const [firstLoad, setFirstLoad] = useState(false);
  const { header } = useGetHeader();
  const { filled }: HeaderState = useTypedSelector((state) => state.header);
  const windowWidth = useWindowWidth();

  useEffect(() => setFirstLoad(true));

  const customStyles: React.CSSProperties = {
    ...(header.background && { "--bg-header": `${header.background}` }),
  } as React.CSSProperties;

  return (
    <header
      ref={headerRef}
      style={customStyles}
      className={cn(
        {
          "translate-y-[-100%]": !isHeaderVisible && !transparent && firstLoad,
          "translate-y-0": isHeaderVisible,
          "bg-white": filled,
          "shadow-md bg-white": !transparent && isHeaderVisible,
        },
        "header border-none z-20 w-full py-2 lg:py-5 fixed top-0"
      )}
    >
      <div className="container flex items-center font-serif text-base font-semibold">
        <Link href="/">
          <Icon className="w-12 lg:w-20 mr-10" icon="light-logo" />
        </Link>
        {windowWidth && windowWidth >= 1024 && pathname === "/" && (
          <HeaderNavigation
            classNameWrapper="mr-auto"
            classname="flex h-full flex-wrap items-center justify-center"
            activeLink={activeLink}
            links={header.menu}
          />
        )}
        {pathname !== "/" && windowWidth && windowWidth >= 1024 && (
          <>
            <HeaderNavigation
              classNameWrapper="mx-auto"
              classname="flex h-full flex-wrap items-center justify-center"
              activeLink={activeLink}
              links={header.menu}
            />
            {header.contactButton && (
              <ContactButton>
                <Button
                  secondary
                  link={header.contactButton.url}
                  typeButton="button"
                  className="max-w-[180px] group"
                  classNameIcon="transform transition-transform group-hover:-translate-x-[-5px]"
                  icon={header.contactButton.icon.url}
                >
                  {header.contactButton.title}
                </Button>
              </ContactButton>
            )}
          </>
        )}

        {windowWidth && windowWidth < 1024 && (
          <HamburgerMenu links={header.menu} activeLink={activeLink} />
        )}
      </div>
    </header>
  );
};

export default Header;
