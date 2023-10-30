import React from "react";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className="p-10 border-full relative before:absolute before:content-'' before:w-full before:left-0 before:bottom-full before:h-0.5 before:bg-dark-blue">
      <Icon icon="light-logo" />
    </footer>
  );
};

export default Footer;
