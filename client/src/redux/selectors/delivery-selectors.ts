import { AppStateType } from "../store";

export const getDeliveryMethodState = (state: AppStateType) => {
    return state.deliveryPage.deliveryMethod;
}
export const getDeliveryPaymentMethodState = (state: AppStateType) => {
    return state.deliveryPage.deliveryPaymentMethod;
}
export const getDeliveryRegionsState = (state: AppStateType) => {
    return state.deliveryPage.deliveryRegions;
}