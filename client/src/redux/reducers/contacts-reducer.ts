import { ContactsType } from "../types/contacts.types";
import { contactsPageAPI } from "../actions/actions";

export const SET_CONTACTS = "GET-CONTACTS";

let initialState: ContactsType = {
  contacts: [],
};

const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    default:
      return state;
  }
};

export const setContacts = (contacts: any) => {
  return { type: SET_CONTACTS, contacts };
};

export const getContacts = () => {
  return (dispatch: any) => {
    contactsPageAPI.getContacts().then((data: any) => {
      dispatch(setContacts(data.items));
    });
  };
};

export default contactsReducer;
