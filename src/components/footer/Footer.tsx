import React from "react";
import Icon from "../icon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const cardsContent = t("footer.navigation", {
    returnObjects: true,
  }) as string[];
  const footerNavigation = cardsContent.map((navigation: any) => navigation);

  return (
    <footer className="footer py-12 font-serif">
      <div className="container lg:flex lg:justify-between text-center lg:text-left">
        <div className="footer-item  mb-5 lg:max-w-[300px] lg:mr-[11%]">
          <a href="/" className="footer-logo">
            <Icon icon="light-logo" className="inline-block" />
          </a>
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
    </footer>
  );
};

export default Footer;
