import { AppStateType } from "../store";

export const getCatalogMenuState = (state: AppStateType) => {
  return state.catalogMenu.catalogMenu;
};
export const getBrandsState = (state: AppStateType) => {
  return state.brands.brands;
};
