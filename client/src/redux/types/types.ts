export type CatalogType = {
    subMenu: Array<CatalogSubMenuType>
}
export type CatalogSubMenuType = {
    id: number,
    name: string,
    // parent_id?: number,
    isSuperSubMenu: boolean,
    superSubMenu: Array<CatalogSuperSubMenuType>
}
export type CatalogSuperSubMenuType = {
    id: number,
    name: string,
    img: string
}