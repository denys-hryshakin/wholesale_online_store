import { AppStateType } from "../store";

export const getAboutInfoState = (state: AppStateType) => {
    return state.aboutPage.about;
}