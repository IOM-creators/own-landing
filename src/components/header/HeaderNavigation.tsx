import React, { useRef } from "react";
import { IHeaderNavigation } from "../../helpers/commonInterfaces";

const HeaderNavigation: React.FC<IHeaderNavigation> = ({
  classname = "",
  navigation,
  setOpenNavChange = () => false,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = () => {
    console.log("sectionRef", sectionRef);
    sectionRef.current &&
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className={classname}>
      <ul className="flex h-full flex-col flex-wrap items-end lg:items-center lg:flex-row  lg:justify-center">
        {navigation &&
          navigation.map((navItem: any, index: number) => {
            return (
              <li
                key={index}
                className={`text-white my-3 md:my-5 ${
                  index === navigation.length - 1 ? "pr-0" : "pr-0 lg:pr-5 "
                } lg:my-0 lg:mb-0`}
              >
                <a
                  href="/"
                  className="rounded-3xl px-3 py-2 text-lg lg:text-base"
                  onClick={scrollTo}
                >
                  {navItem}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
