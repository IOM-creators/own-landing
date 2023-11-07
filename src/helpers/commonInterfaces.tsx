import React from "react";

export interface IHeaderNavigation {
  navigation: string[];
  setOpenNavChange?: React.Dispatch<React.SetStateAction<boolean>>;
  classname?: string;
}

export interface IHamburgerMenu {
  classname?: string;
  navigation: string[];
}

export interface ISectionCommon {
  className?: string;
}
