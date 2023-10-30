export interface INavigation {
  scrollTo: string;
  textId: string;
}


export interface IHeaderNavigation {
  navigation: INavigation[];
  classname?: string
}
