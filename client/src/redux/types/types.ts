export type CatalogType = {
    submenus: Array<CatalogSubMenuType>
}
export type CatalogSubMenuType = {
    id: number,
    group_name: string,
    parent_id?: number,
    html_title: string,
    html_decstiption: string,
    html_keywords: string,
    // isSuperSubMenu: boolean,
    // superSubMenu: Array<CatalogSuperSubMenuType>
}
// export type CatalogSuperSubMenuType = {
//     id: number,
//     name: string,
//     img: string
// }