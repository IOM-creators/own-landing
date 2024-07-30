import React from "react";
import Icon from "../icon";
import { useGetFooter } from "../../graphql/";
import Link from "next/link";

const Footer = () => {
  const { footer } = useGetFooter();
  return (
    <footer className="footer container py-12 font-serif">
      <div className="lg:flex text-center lg:text-left items-center">
        <div className="footer-item  mb-5 lg:mb-0 lg:max-w-[300px] lg:mr-5">
          <Link href="/">
            <Icon icon="light-logo" className="inline-block w-16 lg:w-20" />
          </Link>
        </div>

        <div className="footer-item">
          <ul className="text-dark-blue text-base flex flex-wrap flex-col justify-center md:flex-row">
            {footer.menu.map(
              (navItem: { url: string; title: string }, index: number) => {
                return (
                  <li
                    className={`px-3 py-2 md:py-0 md:px-5 ${
                      index === footer.menu.length - 1 ? "md:pr-0" : "md:pr-5"
                    }`}
                    key={index}
                  >
                    <Link
                      href={navItem.url}
                      className=" hover:underline font-semibold text-lg "
                    >
                      {navItem.title}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
