import { AppStateType } from "./store";

export const getCatalogSubMenu = (state: AppStateType) => {
    return state.catalogPage.submenus; 
}