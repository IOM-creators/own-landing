import React from "react";

export interface IHeaderNavigation {
  navigation: string[];
  activeLink?: string;
  setOpenNavChange?: React.Dispatch<React.SetStateAction<boolean>>;
  classname?: string;
}

export interface IHamburgerMenu {
  classname?: string;
  activeLink?: string;
  navigation: string[];
}

export interface ISectionCommon {
  className?: string;
  id?: string;
}
