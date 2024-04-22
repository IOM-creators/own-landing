import React from "react";

export interface IHeaderNavigation {
  navigation: string[];
  activeLink?: string | null;
  setOpenNavChange?: React.Dispatch<React.SetStateAction<boolean>>;
  classname?: string;
}

export interface IHamburgerMenu {
  setBgHeader?: any;
  activeLink?: string | null;
  navigation: string[];
}

export interface ISectionCommon {
  className?: string;
  id?: string;
}
