import axios from "axios";

export const deliveryPageAPI = {
  getDelivery() {
    return axios.get("/delivery").then((response: any) => {
      return response.data;
    });
  },
};
export const aboutPageAPI = {
  getAboutInfo() {
    return axios.get("/about").then((response: any) => {
      return response.data;
    });
  },
};
export const contactsPageAPI = {
  getContacts() {
    return axios.get("/contacts").then((response: any) => {
      return response.data;
    });
  },
};
export const brandsMenuAPI = {
  getBrandsMenu() {
    return axios.get("/brands_menu").then((response: any) => {
      return response.data;
    });
  },
};
