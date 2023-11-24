import React from "react";
import Image from "../image";
import Icon from "../icon";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_FOOTER_ENTRY = gql`
  query iomLandingEntryQuery {
    footer(id: "57NT2Joj6gGKDBMYWbVf1C") {
      navigation
      socialCollection {
        items {
          ... on SocialItem {
            icon {
              url
            }
            link
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const { data } = useQuery(GET_FOOTER_ENTRY);
  const footerNavigation = data?.footer?.navigation || [];
  const socials = data?.footer?.socialCollection?.items || [];

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
            {footerNavigation.map((navItem: string, index: number) => {
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
          {socials.map((item: any, index: number) => (
            <li className="m-2" key={index}>
              <a href={item.link} target="blank">
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
