import { BrandsType } from "../types/brands.types";
import { brandsAPI } from "../actions/actions";

export const SET_BRANDS = "SET-BRANDS-";

let initialState: BrandsType = {
  brands: [],
};

const brandsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BRANDS:
      return { ...state, brands: action.brands };
    default:
      return state;
  }
};

export const setBrands = (brands: any) => {
  return { type: SET_BRANDS, brands };
};

export const getBrands = () => {
  return (dispatch: any) => {
    brandsAPI.getBrands().then((data: any) => {
      dispatch(setBrands(data.items));
    });
  };
};

export default brandsReducer;
