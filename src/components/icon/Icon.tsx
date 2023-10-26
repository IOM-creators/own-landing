import React from "react";
import LeftArrow from "../../assets/icons/left-arrow.svg";

const icons: any = {
  "left-arrow": LeftArrow,
};

interface IIcon {
  icon: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ icon, ...props }) => {
  return <img src={icons[icon]} alt={icon} {...props} />;
};

export default Icon;
