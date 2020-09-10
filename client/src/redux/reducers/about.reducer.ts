import { AboutType } from "../types/about.types";
import { aboutPageAPI } from "../actions/actions";

export const SET_ABOUT = "SET-ABOUT";

let initialState: AboutType = {
  about: [],
};

const aboutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ABOUT:
      return { ...state, about: action.about };
    default:
      return state;
  }
};

export const setAboutInfo = (about: any) => {
  return { type: SET_ABOUT, about };
};

export const getAboutInfo = () => {
  return (dispatch: any) => {
    aboutPageAPI.getAboutInfo().then((data: any) => {
      dispatch(setAboutInfo(data.items));
    });
  };
};

export default aboutReducer;
