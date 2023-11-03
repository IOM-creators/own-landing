import React from "react";
import Icon from "../icon";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const cardsContent = t("header.navigation", {
    returnObjects: true,
  }) as string[];
  const footerNavigation = cardsContent.map((navigation: any) => navigation);

  return (
    <footer className="footer py-12 font-serif relative before:block  before:absolute before:content-'' before:w-full before:top-0 before:h-px before:bg-dark-blue">
      <div className="container lg:flex lg:justify-between text-center lg:text-left">
        <div className="footer-item lg:max-w-[300px] lg:mr-[11%]">
          <a href="/" className="footer-logo">
            <Icon icon="light-logo" className="inline-block" />
          </a>
        </div>

        <div className="footer-item">
          <ul className="text-dark-blue text-xl flex">
            {footerNavigation.map((navItem, index: number) => (
              <li className="p-5" key={index}>
                <a href="/" className=" hover:underline font-bold">
                  {navItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
