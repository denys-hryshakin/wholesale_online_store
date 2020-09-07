import { AppStateType } from "../store";

export const getBrandsMenuState = (state: AppStateType) => {
  return state.brandsMenu.brandsMenu;
};
