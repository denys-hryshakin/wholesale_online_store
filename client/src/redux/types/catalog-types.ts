export type CatalogType = {
  subMenu: Array<CatalogSubMenuType>;
};
export type CatalogSubMenuType = {
  id: number;
  name: string;
  isSuperSubMenu: boolean;
  superSubMenu: Array<CatalogSuperSubMenuType>;
};
export type CatalogSuperSubMenuType = {
  id: number;
  name: string;
  img: string;
};
