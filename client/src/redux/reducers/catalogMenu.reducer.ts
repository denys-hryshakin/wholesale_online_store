import { CatalogType } from "../types/catalogMenu.types";
import { catalogMenuAPI } from "../actions/actions";

export const SET_CATALOG_MENU = "SET-CATALOG-MENU";

let initialState: CatalogType = {
  catalogMenu: [],
};

const catalogMenuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CATALOG_MENU:
      return { ...state, catalogMenu: action.catalogMenu };
    default:
      return state;
  }
};

export const setCatalogMenu = (catalogMenu: any) => {
  return { type: SET_CATALOG_MENU, catalogMenu };
};

export const getCatalogMenu = () => {
  return (dispatch: any) => {
    catalogMenuAPI.getCatalogMenu().then((data: any) => {
      dispatch(setCatalogMenu(data.items));
    });
  };
};

export default catalogMenuReducer;
