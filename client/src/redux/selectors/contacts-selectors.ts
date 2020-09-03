import { AppStateType } from "../store";

export const getContactsState = (state: AppStateType) => {
    return state.contactsPage.contacts;
}