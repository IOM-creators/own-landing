import React from "react";
import Icon from "../icon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const cardsContent = t("footer.navigation", {
    returnObjects: true,
  }) as string[];
  const footerNavigation = cardsContent.map((navigation: any) => navigation);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer container py-12 font-serif">
      <div className="lg:flex lg:justify-between text-center lg:text-left">
        <div className="footer-item  mb-5 lg:mb-0 lg:max-w-[300px] lg:mr-5">
          <button onClick={scrollToTop}>
            <Icon icon="light-logo" className="inline-block" />
          </button>
        </div>

        <div className="footer-item">
          <ul className="text-dark-blue text-xl flex flex-wrap flex-col md:flex-row">
            {footerNavigation.map((navItem, index: number) => {
              const navLink = navItem.split(" ").join("");
              return (
                <li className="p-3 md:p-5" key={index}>
                  <a
                    href={"#" + navLink}
                    className=" hover:underline font-semibold"
                  >
                    {navItem}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex justify-center items-center">
          <li className="m-2">
            <a
              href="https://www.upwork.com/freelancers/~01a9efbe9a36e060f6"
              target="blank"
            >
              <Icon icon="upwork" />
            </a>
          </li>
          <li className="m-2">
            <a href="https://github.com/IOM-creators" target="blank">
              <Icon icon="github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
