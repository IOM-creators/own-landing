import React from "react";

export interface IHeaderNavigation {
  navigationAnchor?: string[];
  links?: [
    {
      title: string;
      url: string;
    }
  ];
  activeLink?: string | null;
  setOpenNavChange?: React.Dispatch<React.SetStateAction<boolean>>;
  classname?: string;
}

export interface IHamburgerMenu {
  activeLink?: string | null;
  navigationAnchor?: string[];
  links?: [
    {
      title: string;
      url: string;
    }
  ];
}

export interface ISectionCommon {
  className?: string;
  id?: string;
}
