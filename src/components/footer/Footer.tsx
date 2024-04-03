import React from "react";
import Image from "../image";
import Icon from "../icon";
import { useGetFooter } from "../../graphql/";
import Link from "next/link";

const Footer = () => {
  const { footer } = useGetFooter();
  return (
    <footer className="footer container py-12 font-serif">
      <div className="lg:flex lg:justify-between text-center lg:text-left items-center">
        <div className="footer-item  mb-5 lg:mb-0 lg:max-w-[300px] lg:mr-5">
          <Link href="/">
            <Icon icon="light-logo" className="inline-block" />
          </Link>
        </div>

        <div className="footer-item">
          <ul className="text-dark-blue text-base flex flex-wrap flex-col md:flex-row">
            {footer.navigation.map((navItem: string, index: number) => {
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
          {footer.socials.map((item: any, index: number) => (
            <li className="m-2" key={index}>
              <a href={item.link} target="blank" aria-label={item.title}>
                <Image src={item.icon.url} classWrapper="w-8 h-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
