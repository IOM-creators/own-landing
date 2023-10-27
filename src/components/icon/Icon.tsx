import React from "react";
// import LeftArrow from "../../assets/icons/left-arrow.svg";
// import Check from "../../assets/icons/check.svg";
// import Leaf from "../../assets/icons/leaf.svg";
// import Sun from "../../assets/icons/sun.svg";
// import Eye from "../../assets/icons/eye.svg";
import SVGGenerate from "../svg-generate";

// const icons: any = {
//   "left-arrow": LeftArrow,
//   check: Check,
//   leaf: Leaf,
//   sun: Sun,
//   eye: Eye,
// };

interface IIcon {
  icon: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ icon, className }) => {
  return <SVGGenerate name={icon} className={className} />;
};

export default Icon;
