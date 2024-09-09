import React from "react";
import Icon from "../icon";
import Link from "next/link";
import Button from "../button";

const Footer = (props: any) => {
  const { content: footer } = props;

  if (!footer) {
    return null;
  }

  const customStyles: React.CSSProperties = {
    ...(footer.background && { "--bg-footer": `${footer.background}` }),
  } as React.CSSProperties;

  return (
    <footer className="footer py-12 font-serif" style={customStyles}>
      <div className="footer__wrapper container">
        <div className="lg:flex text-center lg:text-left items-center justify-between">
          <div className="footer-item  mb-5 lg:mb-0 lg:max-w-[300px]s">
            <Link href="/">
              <Icon icon="new-logo" className="inline-block w-16 lg:w-20" />
            </Link>
          </div>

          <div className="footer-item">
            <ul className="text-dark-blue text-base flex flex-wrap flex-col justify-center md:flex-row">
              {footer?.menuCollection?.items.map(
                (navItem: { url: string; title: string }, index: number) => {
                  return (
                    <li
                      className={`px-3 py-2 md:py-0 md:px-5 ${
                        index === footer.menuCollection.length - 1
                          ? "md:pr-0"
                          : "md:pr-5"
                      }`}
                      key={index}
                    >
                      <Link
                        href={navItem.url || ""}
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
          {footer.socialCollection && (
            <div className="footer-item footer__social">
              <ul className="flex items-center gap-4 justify-center mt-8 lg:mt-0 lg:justify-normal">
                {footer?.socialCollection?.items.map(
                  (item: any, index: number) => (
                    <li key={index}>
                      <Button
                        styleButton={item.styleButton}
                        typeButton={item.buttonType}
                        link={item.url}
                        icon={item.icon.url}
                      ></Button>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
