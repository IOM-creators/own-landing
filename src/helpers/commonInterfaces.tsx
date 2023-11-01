import React from "react";

export interface INavigation {
  scrollTo: string;
  textId: string;
}

export interface IHeaderNavigation {
  navigation: INavigation[];
  setOpenNavChange?: React.Dispatch<React.SetStateAction<boolean>>;
  classname?: string;
}


export interface ISectionCommon {
  className?: string;
}