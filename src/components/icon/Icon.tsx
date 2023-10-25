import React from "react";
import Upload from "../../assets/icons/upload.svg";

const icons: any = {
  upload: Upload,
};

interface IIcon {
  icon: string;
  className?: string;
}

const Icon: React.FC<IIcon> = ({ icon, ...props }) => {
  return <img src={icons[icon]} alt={icon} {...props} />;
};

export default Icon;
