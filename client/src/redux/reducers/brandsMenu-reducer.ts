import { BrandsMenuType } from "../types/brandsMenu.types";
import { brandsMenuAPI } from "../actions/actions";

export const SET_BRANDS_MENU = "SET-BRANDS-MENU";

let initialState: BrandsMenuType = {
  brandsMenu: [],
};

const brandsMenuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BRANDS_MENU:
      return { ...state, brandsMenu: action.brandsMenu };
    default:
      return state;
  }
};

export const setBrandsMenu = (brandsMenu: any) => {
  return { type: SET_BRANDS_MENU, brandsMenu };
};

export const getBrandsMenu = () => {
  return (dispatch: any) => {
    brandsMenuAPI.getBrandsMenu().then((data: any) => {
      dispatch(setBrandsMenu(data.items));
    });
  };
};

export default brandsMenuReducer;
