export type CatalogType = {
  catalogMenu: Array<CatalogMenuType>;
};
export type CatalogMenuType = {
  _id: number;
  name: string;
  isSubMenu: boolean;
  subMenu: Array<CatalogSubMenuType>;
};
export type CatalogSubMenuType = {
  _id: number;
  subName: string;
  image: string;
};
