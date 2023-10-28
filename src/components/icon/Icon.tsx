import React from "react";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import Logo from "../../assets/icons/logo.svg";

const icons: any = {
  "left-arrow": LeftArrow,
  "logo": Logo,
};

interface IIcon {
  icon: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ icon, ...props }) => {
  return <img src={icons[icon]} alt={icon} {...props} />;
};

export default Icon;
